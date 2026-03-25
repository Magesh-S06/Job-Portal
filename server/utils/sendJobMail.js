import { Resend } from "resend";




export const sendJobNotification = async (job, emails) => {
  try {
    if (!process.env.RESEND_API_KEY) {
    throw new Error("❌ RESEND_API_KEY is missing in .env");
        }

    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log("🚀 sendJobNotification CALLED");
    console.log("KEY:", process.env.RESEND_API_KEY);

    // Format date
    const formattedDate = new Date(job.date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });

    const response = await resend.emails.send({
      from: "Job Portal <onboarding@resend.dev>",
      to: emails,
      subject: `🚀 New Job: ${job.title}`,

      html: `
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
      `
    });

    console.log("✅ Emails sent successfully:", response);

  } catch (error) {
    console.error("❌ Email sending failed:", error);
  }
};

        //   <a href="http://localhost:5173/job/${job._id}"
        //      style="
        //        display: inline-block;
        //        margin-top: 15px;
        //        padding: 10px 18px;
        //        background-color: #2563eb;
        //        color: white;
        //        text-decoration: none;
        //        border-radius: 6px;
        //        font-weight: bold;
        //      ">
        //      View Job
        //   </a>