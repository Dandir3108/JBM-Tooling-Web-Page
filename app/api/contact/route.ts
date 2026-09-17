import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const inquiryRecipient = process.env.INQUIRY_TO_EMAIL ?? "Marketing.N4@jbmgroup.com";

type InquiryPayload = {
  name?: string;
  company?: string;
  email?: string;
  division?: string;
  requirement?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const payload = (await request.json()) as InquiryPayload;

  const name = clean(payload.name);
  const company = clean(payload.company);
  const email = clean(payload.email);
  const division = clean(payload.division);
  const requirement = clean(payload.requirement);

  if (!name || !email || !requirement) {
    return NextResponse.json(
      { message: "Name, email, and project requirement are required." },
      { status: 400 },
    );
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM_EMAIL ?? user;

  if (!host || !user || !pass || !from) {
    return NextResponse.json(
      { message: "Email service is not configured on the server." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465 || port === 443,
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from,
    to: inquiryRecipient,
    replyTo: email,
    subject: `Website inquiry from ${name}`,
    text: [
      "New website inquiry",
      "",
      `Name: ${name}`,
      `Company: ${company || "Not provided"}`,
      `Email: ${email}`,
      `Division: ${division || "Not provided"}`,
      "",
      "Project Requirement:",
      requirement,
    ].join("\n"),
  });

  return NextResponse.json({ message: "Inquiry sent successfully." });
}
