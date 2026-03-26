import nodemailer from "nodemailer";
// import dotenv from "dotenv"
// dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail", // or use custom SMTP later
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendJobNotification = async (job, emails) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("❌ Email credentials missing in .env");
    }

    console.log("🚀 sendJobNotification CALLED");

    // Format date
    const formattedDate = new Date(job.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    // HTML Template (same as yours)
    const html = `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2 style="color: #2563eb;">🚀 New Job Posted</h2>

        <p><strong>Role:</strong> ${job.title}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Category:</strong> ${job.category}</p>
        <p><strong>Level:</strong> ${job.level}</p>
        <p><strong>Salary:</strong> ₹${job.salary}</p>
        <p><strong>Posted On:</strong> ${formattedDate}</p>

        <hr style="margin: 15px 0;" />

        <p>
          ${job.description.substring(0, 180)}...
        </p>

        <p style="margin-top:20px; font-size: 12px; color: gray;">
          You're receiving this because you're registered on our platform.
        </p>
      </div>
    `;

    const mailOptions = {
      from: `"Job Portal" <${process.env.EMAIL_USER}>`,
      to: emails, // array works here too ✅
      subject: `🚀 New Job: ${job.title}`,
      html,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Emails sent:", info.response);
  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};