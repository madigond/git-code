import { NextRequest, NextResponse } from 'next/server'
import sharp from 'sharp'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}))

    const {
      imageUrl,
      imageBase64,
      width,
      height,
      maxSizeKB = 50,
      format = 'jpeg',
    } = body

    // 1. Validate inputs
    if (!imageUrl && !imageBase64) {
      return NextResponse.json(
        {
          error: 'Missing required field: Please provide either "imageUrl" or "imageBase64".',
        },
        { status: 400 }
      )
    }

    const targetWidth = parseInt(width, 10)
    const targetHeight = parseInt(height, 10)
    const maxBytes = parseFloat(maxSizeKB) * 1024

    if (isNaN(targetWidth) || targetWidth <= 0 || isNaN(targetHeight) || targetHeight <= 0) {
      return NextResponse.json(
        { error: 'Invalid dimensions: "width" and "height" must be positive integers.' },
        { status: 400 }
      )
    }

    if (isNaN(maxBytes) || maxBytes <= 0) {
      return NextResponse.json(
        { error: 'Invalid maxSizeKB: Must be a positive number.' },
        { status: 400 }
      )
    }

    // 2. Obtain Input Buffer
    let inputBuffer: Buffer
    if (imageUrl) {
      try {
        const response = await fetch(imageUrl, { headers: { 'User-Agent': 'FormKaro-Resizer/1.0' } })
        if (!response.ok) {
          return NextResponse.json(
            { error: `Failed to fetch image from URL: HTTP ${response.status}` },
            { status: 400 }
          )
        }
        const arrayBuffer = await response.arrayBuffer()
        inputBuffer = Buffer.from(arrayBuffer)
      } catch (err: any) {
        return NextResponse.json(
          { error: `Network error fetching image URL: ${err.message}` },
          { status: 400 }
        )
      }
    } else {
      // Decode Base64 string (handles data URI prefix if present)
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '')
      inputBuffer = Buffer.from(base64Data, 'base64')
    }

    if (!inputBuffer || inputBuffer.length === 0) {
      return NextResponse.json({ error: 'Image buffer is empty or corrupted.' }, { status: 400 })
    }

    // 3. Resize and Iterative Compression
    let quality = 92
    let outputBuffer: Buffer
    let finalQuality = quality

    // Initial sharp pipeline with exact dimensions
    const sharpInstance = sharp(inputBuffer).resize(targetWidth, targetHeight, {
      fit: 'fill',
    })

    // Iterative quality reduction loop until under maxBytes constraint
    do {
      if (format === 'png') {
        outputBuffer = await sharpInstance
          .png({ quality, compressionLevel: 9 })
          .toBuffer()
      } else if (format === 'webp') {
        outputBuffer = await sharpInstance
          .webp({ quality })
          .toBuffer()
      } else {
        // Default JPEG
        outputBuffer = await sharpInstance
          .jpeg({ quality, progressive: true, mozjpeg: true })
          .toBuffer()
      }

      finalQuality = quality
      if (outputBuffer.length <= maxBytes || quality <= 10) {
        break
      }
      quality -= 5
    } while (quality >= 10)

    const base64Output = `data:image/${format};base64,${outputBuffer.toString('base64')}`
    const finalSizeKB = (outputBuffer.length / 1024).toFixed(2)

    return NextResponse.json({
      success: true,
      imageBase64: base64Output,
      contentType: `image/${format}`,
      dimensions: {
        width: targetWidth,
        height: targetHeight,
      },
      fileSize: {
        bytes: outputBuffer.length,
        sizeKB: `${finalSizeKB} KB`,
        targetMaxKB: `${maxSizeKB} KB`,
        withinConstraint: outputBuffer.length <= maxBytes,
      },
      compressionQuality: finalQuality,
    })
  } catch (error: any) {
    console.error('Error in /api/resize Route Handler:', error)
    return NextResponse.json(
      {
        error: 'Image processing failed.',
        details: error.message || 'Unknown error occurred while processing image.',
      },
      { status: 500 }
    )
  }
}
