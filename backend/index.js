require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Test the transporter
transporter.verify((error, success) => {
    if (error) {
        console.log("Transporter error:", error);
    } else {
        console.log("Server is ready to send emails");
    }
});

// Endpoint to handle form submissions
app.post('/send-email', (error, req, res, next) => {
    // Basic error handling middleware
    if (error) {
        return res.status(400).json({ status: 'error', message: 'Invalid JSON' });
    }
    next();
}, (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ status: 'error', message: 'All fields are required' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Portfolio Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email:", error);
            return res.status(500).json({ status: 'error', message: 'Failed to send message' });
        }
        console.log("Email sent:", info.response);
        res.status(200).json({ status: 'success', message: 'Message sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
