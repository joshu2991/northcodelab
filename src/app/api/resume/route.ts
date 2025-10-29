import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Disable X-Frame-Options for this route
export const runtime = 'nodejs'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume', 'JHTP_RESUME_SIMPLE.pdf')
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse('Resume not found', { status: 404 })
    }
    
    const fileBuffer = fs.readFileSync(filePath)
    
    // Create response with headers that will override config
    const headers = new Headers()
    headers.set('Content-Type', 'application/pdf')
    headers.set('Content-Disposition', 'inline; filename="Jose_Humberto_Trueba_Resume.pdf"')
    headers.set('X-Frame-Options', 'SAMEORIGIN')
    headers.set('Cache-Control', 'public, max-age=31536000, immutable')
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: headers,
    })
  } catch (error) {
    console.error('Error serving resume PDF:', error)
    return new NextResponse('Resume not found', { status: 404 })
  }
}

