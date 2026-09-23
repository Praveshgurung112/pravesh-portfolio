import nodemailer from "nodemailer";

// Email wrapper using Nodemailer (SMTP)
// Configure SMTP credentials in .env

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactNotification({
  senderName,
  senderEmail,
  message,
}: {
  senderName: string;
  senderEmail: string;
  message: string;
}) {
  if (!process.env.SMTP_USER) {
    // Skip email in dev if not configured
    console.log("📧 Email not configured — skipping notification");
    return;
  }

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL || "Gurungp344@gmail.com",
    subject: `New message from ${senderName}`,
    html: `
      <h2>New Portfolio Contact</h2>
      <p><strong>Name:</strong> ${senderName}</p>
      <p><strong>Email:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });
}
