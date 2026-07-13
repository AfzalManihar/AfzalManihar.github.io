import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Yahan humne direct details daal di hain
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "afzalmanihar429@gmail.com",
        pass: "slwrtmwwjbfutpog", 
      },
    });

    const mailOptions = {
      from: email,
      to: "afzalmanihar429@gmail.com",
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}