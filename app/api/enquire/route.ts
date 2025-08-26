import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    // 4. Log the enquiry
    
    // For now, we'll just log the data and return success
    console.log('New enquiry received:', {
      destination,
      tripType,
      startDate,
      endDate,
      guests,
      submittedAt,
      timestamp: new Date().toISOString(),
    })

    // Example: You could send an email here
    // await sendEnquiryEmail({
    //   to: 'team@pullnorth.com',
    //   subject: 'New Travel Enquiry',
    //   data: body
    // })

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