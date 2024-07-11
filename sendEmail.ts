import nodemailer from "nodemailer";
import { Transporter } from "nodemailer";
import { MailOptions } from "nodemailer/lib/sendmail-transport";
import config from "./email.config"; // Adjust the path as needed

// Function for sending notifications, OTP, etc. via email
async function sendEmail(
  email: string,
  subject: string,
  text: string
): Promise<void> {
  const transporter: Transporter = nodemailer.createTransport({
    host: config.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: config.USER_EMAIL, // your email address
      pass: config.EMAIL_PASS, // your email password
    },
  });

  // Create an email message
  const mailOptions: MailOptions = {
    from: config.USER_EMAIL,
    to: email,
    subject: subject,
    text: text,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    if (info && typeof info.response === "string") {
      console.log("Email sent:", info.response);
    } else {
      console.log("Email sent (no response available)");
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendEmail;
