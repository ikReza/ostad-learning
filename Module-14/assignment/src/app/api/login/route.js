import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { TokenCookie } from "@/app/utility/TokenCookie";

// POST request for sending email
export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PW,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Sending Email using nodemailer",
      html: `
              <h2>Hi ${username}!</h2>
              <p>Have a nice day! 👍</p>
              <br />
              <i>“Believe you can and you're halfway there.” - Theodore Roosevelt</i>
          `,
    };

    // Send email
    transporter.sendMail(mailOptions);
    let cookie = await TokenCookie(email);

    return NextResponse.json(
      { status: true, message: "Email sent successfully" },
      { status: 200, headers: cookie }
    );
  } catch (error) {
    return NextResponse.json(
      { status: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
