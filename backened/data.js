const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email provider, e.g., Gmail
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password', // Replace with your app-specific password
  },
});

// API Route for Booking
app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, service } = req.body;

    // Validate input
    if (!name || !email || !service) {
      return res.status(400).send({ message: 'All fields are required!' });
    }

    // Email notification to the website owner
    const mailOptions = {
      from: 'your-email@gmail.com', // Sender email
      to: 'owner-email@gmail.com', // Replace with the owner's email
      subject: 'New Booking Notification',
      text: `A new booking has been made with the following details:

      Full Name: ${name}
      Email Address: ${email}
      Service Type: ${service}

      Please check your dashboard for more details.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send({ message: 'Failed to send email', error });
      } else {
        console.log('Email sent:', info.response);
        return res.status(200).send({ message: 'Booking email sent successfully!' });
      }
    });
  } catch (error) {
    console.error('Error processing booking:', error);
    res.status(500).send({ message: 'Error processing booking', error });
  }
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
