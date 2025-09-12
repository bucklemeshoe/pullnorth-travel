import nodemailer from 'nodemailer';

interface EnquiryData {
  tripDirection: string;
  departure: string;
  destination: string;
  tripType: string;
  startDate: string;
  endDate: string;
  guests: number;
  visaNeeded: string[];
  submittedAt?: string;
}

export async function sendEnquiryEmail(data: EnquiryData) {
  // Create transporter - you'll need to configure this with your email provider
  const transporter = nodemailer.createTransport({
    service: 'gmail', // or 'outlook', 'yahoo', etc.
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com', // where to receive notifications
    subject: `New Travel Enquiry - ${data.departure} to ${data.destination}`,
    html: `
      <h2>New Travel Enquiry Received</h2>
      <p><strong>Trip Direction:</strong> ${data.tripDirection === "return" ? "Return Trip" : "One-way"}</p>
      <p><strong>Departure:</strong> ${data.departure}</p>
      <p><strong>Destination:</strong> ${data.destination}</p>
      <p><strong>Trip Type:</strong> ${data.tripType}</p>
      <p><strong>Departure Date:</strong> ${data.startDate}</p>
      ${data.tripDirection === "return" ? `<p><strong>Return Date:</strong> ${data.endDate}</p>` : ''}
      <p><strong>Number of Guests:</strong> ${data.guests}</p>
      <p><strong>Visa Requirements:</strong> ${data.visaNeeded.length > 0 ? data.visaNeeded.join(', ') : 'None specified'}</p>
      <p><strong>Submitted:</strong> ${data.submittedAt || new Date().toISOString()}</p>
      
      <hr>
      <p><em>This enquiry was submitted through the Pull North Travel website.</em></p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}

// Alternative: Use a service like Resend, SendGrid, or Mailgun
export async function sendEnquiryEmailViaService(data: EnquiryData) {
  // Example using a service like Resend (you'd need to install @resend/node)
  // const resend = new Resend(process.env.RESEND_API_KEY);
  
  // const { data: emailData, error } = await resend.emails.send({
  //   from: 'noreply@yourdomain.com',
  //   to: [process.env.NOTIFICATION_EMAIL || 'your-email@example.com'],
  //   subject: `New Travel Enquiry - ${data.destination}`,
  //   html: `...`
  // });
  
  // For now, we'll use the nodemailer approach above
  return sendEnquiryEmail(data);
} 