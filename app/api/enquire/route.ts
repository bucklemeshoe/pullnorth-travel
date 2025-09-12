import { NextRequest, NextResponse } from 'next/server'
import { sendEnquiryEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { tripDirection, departure, destination, tripType, startDate, endDate, guests, visaNeeded, submittedAt } = body
    
    if (!departure || !destination || !tripType || !startDate || !guests) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (tripDirection === "return" && !endDate) {
      return NextResponse.json(
        { error: 'Return date is required for return trips' },
        { status: 400 }
      )
    }

    // Log the enquiry data
    console.log('New enquiry received:', {
      tripDirection,
      departure,
      destination,
      tripType,
      startDate,
      endDate,
      guests,
      visaNeeded,
      submittedAt,
      timestamp: new Date().toISOString(),
    })

    // Send email notification
    try {
      await sendEnquiryEmail({
        tripDirection,
        departure,
        destination,
        tripType,
        startDate,
        endDate,
        guests,
        visaNeeded,
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