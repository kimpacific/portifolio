import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Calculate 10 AM next day
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(10, 0, 0, 0)

    // Create a simple Google Meet link
    const meetLink = `https://meet.google.com/${Math.random().toString(36).substring(7)}`

    // Generate Google Calendar event link
    const calendarLink = generateGoogleCalendarLink(
      'Project Discussion Call',
      'Let\'s discuss your project requirements',
      tomorrow,
      meetLink,
      email
    )

    return NextResponse.json({
      success: true,
      meetLink,
      calendarLink,
      scheduledTime: tomorrow.toISOString(),
    })
  } catch (error) {
    console.error('Failed to schedule meet:', error)
    return NextResponse.json({ error: 'Failed to schedule meeting' }, { status: 500 })
  }
}

function generateGoogleCalendarLink(
  title: string,
  description: string,
  startTime: Date,
  meetLink: string,
  attendeeEmail: string
): string {
  const endTime = new Date(startTime.getTime() + 60 * 60000) // 1 hour duration

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    details: `${description}\n\nMeet Link: ${meetLink}`,
    location: meetLink,
    dates: formatDateToICS(startTime) + '/' + formatDateToICS(endTime),
    add: attendeeEmail,
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

function formatDateToICS(date: Date): string {
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  const hours = String(date.getUTCHours()).padStart(2, '0')
  const minutes = String(date.getUTCMinutes()).padStart(2, '0')
  const seconds = String(date.getUTCSeconds()).padStart(2, '0')

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`
}
