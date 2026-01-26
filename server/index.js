import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateEmailHTML, generateEmailText } from './emailTemplate.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Email transporter configuration
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD
        }
    });
};

/**
 * Generate unique applicant ID
 * Format: APP-YYYYMMDD-XXXX (simple counter based on timestamp)
 */
function generateApplicantId() {
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
    const timeStr = today.getTime().toString().slice(-4); // Last 4 digits of timestamp

    return `APP-${dateStr}-${timeStr}`;
}

/**
 * Send email notification
 */
async function sendEmail(applicantData) {
    const transporter = createTransporter();

    const mailOptions = {
        from: {
            name: 'Sinai Connect Career Portal',
            address: process.env.EMAIL_USER
        },
        to: process.env.EMAIL_USER, // Send to bavly.morgan2030@gmail.com
        subject: `New Job Application - ${applicantData.fullName} - ${applicantData.applicantId}`,
        text: generateEmailText(applicantData),
        html: generateEmailHTML(applicantData)
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent: ${info.messageId}`);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Error sending email:', error);
        throw error;
    }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Sinai Connect Backend Server is running',
        timestamp: new Date().toISOString()
    });
});

// Job application submission endpoint
app.post('/api/job-application', async (req, res) => {
    try {
        const {
            applicationDate,
            fullName,
            birthday,
            address,
            city,
            state,
            phone,
            email,
            message
        } = req.body;

        // Validate required fields
        if (!fullName || !birthday || !address || !city || !state || !phone || !email) {
            return res.status(400).json({
                success: false,
                error: 'Missing required fields'
            });
        }

        // Generate unique ID
        const applicantId = generateApplicantId();

        const applicantData = {
            applicantId,
            applicationDate: applicationDate || new Date().toISOString().split('T')[0],
            fullName,
            birthday,
            address,
            city,
            state,
            phone,
            email,
            message: message || ''
        };

        console.log(`\n📋 Processing application: ${applicantId}`);
        console.log(`👤 Applicant: ${fullName}`);

        // Send Email
        try {
            await sendEmail(applicantData);
        } catch (error) {
            console.error('❌ Failed to send email:', error);
            return res.status(500).json({
                success: false,
                error: 'Failed to send email. Please check email configuration.',
                details: error.message
            });
        }

        // Success response
        res.status(200).json({
            success: true,
            applicantId,
            message: 'Application submitted successfully'
        });

        console.log(`✅ Application processed successfully: ${applicantId}\n`);

    } catch (error) {
        console.error('❌ Server error:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error',
            details: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log('\n========================================');
    console.log('🚀 Sinai Connect Backend Server Started');
    console.log('========================================');
    console.log(`📡 Server running on: http://localhost:${PORT}`);
    console.log(`📧 Email configured: ${process.env.EMAIL_USER}`);
    console.log('========================================\n');
    console.log('💡 Endpoints:');
    console.log(`   GET  /api/health           - Health check`);
    console.log(`   POST /api/job-application  - Submit job application`);
    console.log('\n⏳ Waiting for requests...\n');
});
