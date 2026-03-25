import nodemailer from 'nodemailer';

/**
 * Send an email using Nodemailer
 * @param {Object} options - Email options
 * @param {string} options.email - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.html - HTML content of the email
 */
const sendEmail = async (options) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  // Define email options
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    html: options.html,
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    // Don't throw error to avoid breaking the registration flow
    // but log it for debugging
    return null;
  }
};

/**
 * Generate a professional registration success email template
 * @param {string} userName - Name of the user
 * @param {string} programName - Name of the program they registered for
 */
export const getRegistrationEmailTemplate = (userName, programName) => {
  return `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #ffffff;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #6366f1; margin: 0;">Skill Shiksha</h1>
        <p style="color: #6b7280; font-size: 14px; margin-top: 5px; text-transform: uppercase; letter-spacing: 2px;">Academy of Excellence</p>
      </div>
      
      <div style="background-color: #f9fafb; padding: 30px; border-radius: 8px; margin-bottom: 30px;">
        <h2 style="color: #111827; margin-top: 0;">Welcome to the Journey, ${userName}!</h2>
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Congratulations! Your registration for the <strong>${programName}</strong> program has been successfully received.
        </p>
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          You've taken the first step towards transforming your career. Our admissions team is currently reviewing your profile and will reach out to you within the next 24 hours to discuss the next steps.
        </p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <h3 style="color: #111827; font-size: 18px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">What's Next?</h3>
        <ul style="color: #374151; font-size: 15px; line-height: 1.8; padding-left: 20px;">
          <li>Profile Review by our expert mentors.</li>
          <li>Admission Consultation Call.</li>
          <li>Onboarding and Program Access.</li>
        </ul>
      </div>
      
      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #f3f4f6;">
        <p style="color: #9ca3af; font-size: 12px;">
          This is an automated message from Skill Shiksha. Please do not reply to this email.
        </p>
        <div style="margin-top: 20px;">
          <a href="#" style="color: #6366f1; text-decoration: none; margin: 0 10px; font-size: 13px;">Website</a>
          <a href="#" style="color: #6366f1; text-decoration: none; margin: 0 10px; font-size: 13px;">LinkedIn</a>
          <a href="#" style="color: #6366f1; text-decoration: none; margin: 0 10px; font-size: 13px;">Instagram</a>
        </div>
      </div>
    </div>
  `;
};

export default sendEmail;
