import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, subject, message } = body;
    
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending logic here
    // For now, we'll just return a success response
    // In production, you would:
    // 1. Send email using a service like SendGrid, AWS SES, or Nodemailer
    // 2. Store the contact form submission in a database
    // 3. Send notifications to the appropriate team members

    // Simulate a delay for demo purposes
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json(
      { 
        success: true, 
        message: "Contact form submitted successfully",
        data: {
          name,
          email,
          subject,
          phone: body.phone || null,
          message,
          submittedAt: new Date().toISOString(),
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Contact API endpoint" },
    { status: 200 }
  );
}
