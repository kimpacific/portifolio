import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json()

  const emailContent = `
    New message from ${name} (${email}):
    
    ${message}
  `

  try {
    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    // Email should be sent to: pacifickimana@gmail.com
    console.log('Email to: pacifickimana@gmail.com')
    console.log('Email from:', email)
    console.log('Message:', message)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
