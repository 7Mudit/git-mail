import sendEmail from "./sendEmail"; // Adjust the path as needed

(async () => {
  try {
    await sendEmail(
      "manshulkharkwal2@gmail.com",
      "Test Subject",
      "This is a test email."
    );
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Failed to send email:", error);
  }
})();
