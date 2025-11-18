import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  // Generate a simple Google Meet link (you should use Google Calendar API for production)
  const meetLink = `https://meet.google.com/${Math.random().toString(36).substring(7)}`

  const emailContent = `
    Hi ${name},

    Thank you for reaching out! Here's your Google Meet link for our call:
    
    ${meetLink}

    Your Message: ${message}

    Best regards,
    KIMANA Pacifique
  `

  try {
    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    console.log('Email to:', email)
    console.log('Content:', emailContent)
    
    return NextResponse.json({ success: true, meetLink })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
