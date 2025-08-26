import { NextRequest, NextResponse } from 'next/server'
import { sendEnquiryEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { destination, tripType, startDate, endDate, guests, submittedAt } = body
    
    if (!destination || !tripType || !startDate || !endDate || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the enquiry data
    console.log('New enquiry received:', {
      destination,
      tripType,
      startDate,
      endDate,
      guests,
      submittedAt,
      timestamp: new Date().toISOString(),
    })

    // Send email notification
    try {
      await sendEnquiryEmail({
        destination,
        tripType,
        startDate,
        endDate,
        guests,
        submittedAt,
      })
      console.log('Email notification sent successfully')
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError)
      // Don't fail the entire request if email fails
    }

    // Example: You could save to a database here
    // await saveEnquiryToDatabase(body)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Enquiry submitted successfully',
        enquiryId: `ENQ-${Date.now()}`
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing enquiry:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 