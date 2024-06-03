import { Resend } from "resend";
import { NextResponse } from "next/server";
import EmailTemplate from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, comments } = await request.json();
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["yousseflife0@gmail.com"],
      subject: "Travello - Contact US",
      text: "",
      react: EmailTemplate({
        name,
        email,
        phone,
        comments,
      }),
    });

    return NextResponse.json({
      status: 200,
      message: "Your request has been successfully sent!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message:
        "An error occurred while processing your request. Please try again later.",
    });
  }
}
