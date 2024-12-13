import nodemailer from "nodemailer";

export const sendVerificationEmail = async (
  recipientEmail,
  verificationCode
) => {
  try {
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email Content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Account Verification Code",
      html: `
      <h1>Email Verification</h1>
      <p>Your verification code is:</p>
      <h2 style="color: #3498db;">${verificationCode}</h2>
      <p>This code will expire in 24 hours.</p>
    `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to ${recipientEmail}`);
  } catch (error) {
    console.log("Error sending verification email: ", error);
    throw new Error("Could not send verification email");
  }
};

export const sendWelcomeEmail = async (recipientEmail, recipientName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Welcome to our platform",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background: #4caf50;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
          }
          .button {
            display: inline-block;
            background: #4caf50;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 20px 0;
          }
          .footer {
            background: #f1f1f1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Welcome to My Advance Auth App ${recipientName}!</h1>
          </div>
          <div class="content">
            <p>Hi ${recipientName},</p>
            <p>Thank you for trying the app. We're excited to have you on board.</p>
            <p>This project is developed with Nodejs, express and mongodb. Nodemailer was used for email applications</p>
            <p>On the front-end side, i used react, tailwind and zustand!</p>
            <a href="emreucar.web.tr" class="button">Get Started</a>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Platform Name. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${recipientEmail}`);
  } catch (error) {
    console.log("Error sending welcome email: ", error);
    throw new Error("Could not send welcome email");
  }
};

export const sendPasswordResetEmail = async (recipientEmail, resetLink) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Password Reset Link",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background: #e74c3c;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
          }
          .button {
            display: inline-block;
            background: #e74c3c;
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 20px 0;
          }
          .footer {
            background: #f1f1f1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Reset Your Password</h1>
          </div>
          <div class="content">
            <p>Hi,</p>
            <p>We received a request to reset your password. Click the button below to reset your password:</p>
            <a href="${resetLink}" class="button">Reset Password</a>
            <p>If you did not request this, please ignore this email or contact support if you have questions.</p>
            <p>This link will expire in 1 hours.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Platform Name. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent to ${recipientEmail}`);
  } catch (error) {
    console.log("Error sending password reset email: ", error);
    throw new Error("Could not send password reset email");
  }
};

export const sendResetSuccessEmail = async (recipientEmail) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipientEmail,
      subject: "Password Reset Successful",
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            border: 1px solid #ddd;
            border-radius: 8px;
            overflow: hidden;
          }
          .header {
            background: #2ecc71;
            color: #fff;
            padding: 20px;
            text-align: center;
          }
          .content {
            padding: 20px;
          }
          .footer {
            background: #f1f1f1;
            text-align: center;
            padding: 10px;
            font-size: 12px;
            color: #666;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="header">
            <h1>Password Reset Successful</h1>
          </div>
          <div class="content">
            <p>Hi,</p>
            <p>Your password has been successfully reset.</p>
            <p>If you did not make this change, please contact support immediately.</p>
          </div>
          <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Your Platform Name. All rights reserved.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`Password reset success email sent to ${recipientEmail}`);
  } catch (error) {
    console.log("Error sending password reset success email: ", error);
    throw new Error("Could not send password reset success email");
  }
};
