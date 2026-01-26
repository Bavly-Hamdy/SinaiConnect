/**
 * Professional HTML email template for job applications
 * Premium Executive Design
 */
export function generateEmailHTML(applicantData) {
  const {
    applicantId,
    fullName,
    email,
    phone,
    birthday,
    address,
    city,
    state,
    applicationDate,
    message
  } = applicantData;

  // Format dates nicely
  const formattedBirthday = new Date(birthday).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const formattedAppDate = new Date(applicationDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const submissionTime = new Date().toLocaleString('en-US', { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', hour12: true });

  return `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>New Job Application - ${fullName}</title>
    
    <style>
        /* Reset styles */ 
        html, body { margin: 0; padding: 0;height: 100% !important; width: 100% !important; font-family: 'Segoe UI', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
        
        /* Branding Colors */
        :root {
            --primary: #0891b2;
            --primary-dark: #0e7490;
            --secondary: #0f172a;
            --light-bg: #f8fafc;
            --card-bg: #ffffff;
            --border: #e2e8f0;
            --text-main: #334155;
            --text-light: #64748b;
        }

        /* Layout */
        .wrapper {
            background-color: #f1f5f9;
            width: 100%;
            table-layout: fixed;
            padding-bottom: 40px;
        }

        .main-container {
            background-color: #ffffff;
            margin: 0 auto;
            width: 100%;
            max-width: 600px;
            border-spacing: 0;
            font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
            color: #334155;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            border-radius: 8px;
            overflow: hidden;
        }

        /* Header */
        .header {
            background: linear-gradient(135deg, #0e7490 0%, #0891b2 100%);
            padding: 40px 30px;
            text-align: center;
        }
        
        .header h1 {
            color: #ffffff;
            margin: 0;
            font-size: 24px;
            font-weight: 600;
            letter-spacing: 0.5px;
            text-transform: uppercase;
        }

        .header .subtitle {
            color: rgba(255,255,255,0.9);
            margin: 10px 0 0 0;
            font-size: 14px;
        }

        .id-badge {
            background-color: rgba(255,255,255,0.15);
            color: #ffffff;
            padding: 6px 16px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 500;
            display: inline-block;
            margin-top: 20px;
            letter-spacing: 1px;
            border: 1px solid rgba(255,255,255,0.2);
        }

        /* Content */
        .content {
            padding: 40px 30px;
        }

        .section-header {
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 10px;
            margin-bottom: 20px;
            margin-top: 30px;
        }

        .section-header h2 {
            color: #0e7490;
            font-size: 16px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin: 0;
            display: flex;
            align-items: center;
        }

        /* Tables */
        .data-table {
            width: 100%;
            border-collapse: collapse;
        }

        .data-table td {
            padding: 10px 0;
            vertical-align: top;
            font-size: 14px;
            line-height: 1.5;
            border-bottom: 1px solid #f8fafc;
        }

        .data-table tr:last-child td {
            border-bottom: none;
        }

        .label-col {
            color: #64748b;
            font-weight: 500;
            width: 140px;
            padding-right: 20px;
        }

        .value-col {
            color: #0f172a;
            font-weight: 500;
        }

        /* Message Box */
        .message-box {
            background-color: #f8fafc;
            border-left: 4px solid #0891b2;
            padding: 20px;
            border-radius: 4px;
            font-size: 14px;
            color: #334155;
            line-height: 1.6;
            margin-top: 15px;
            white-space: pre-wrap;
        }

        /* Footer */
        .footer {
            background-color: #f8fafc;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e2e8f0;
        }

        .footer p {
            color: #94a3b8;
            font-size: 12px;
            margin: 5px 0;
            line-height: 1.4;
        }

        .link {
            color: #0891b2;
            text-decoration: none;
            font-weight: 500;
        }

        /* Mobile Responsive */
        @media screen and (max-width: 600px) {
            .main-container { width: 100% !important; }
            .header { padding: 30px 20px; }
            .content { padding: 30px 20px; }
            .label-col { display: block; width: 100%; margin-bottom: 4px; color: #94a3b8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
            .value-col { display: block; width: 100%; margin-bottom: 16px; padding-left: 0 !important; font-size: 16px; }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <table class="main-container" role="presentation">
            <!-- Header -->
            <tr>
                <td class="header">
                    <h1>New Applicant</h1>
                    <p class="subtitle">Sinai Connect Career Portal</p>
                    <div class="id-badge">ID: ${applicantId}</div>
                </td>
            </tr>

            <!-- Content -->
            <tr>
                <td class="content">
                    
                    <!-- Intro -->
                    <p style="margin-top: 0; font-size: 15px; color: #64748b; line-height: 1.6;">
                        A new job application has been submitted via the website. Please find the applicant's details below for your review.
                    </p>

                    <!-- Personal Info -->
                    <div class="section-header" style="margin-top: 20px;">
                        <h2>👤 &nbsp; Personal Details</h2>
                    </div>
                    <table class="data-table">
                        <tr>
                            <td class="label-col">Full Name</td>
                            <td class="value-col" style="font-size: 16px;"><strong>${fullName}</strong></td>
                        </tr>
                         <tr>
                            <td class="label-col">Contact Email</td>
                            <td class="value-col"><a href="mailto:${email}" class="link">${email}</a></td>
                        </tr>
                         <tr>
                            <td class="label-col">Phone Number</td>
                            <td class="value-col"><a href="tel:${phone}" class="link">${phone}</a></td>
                        </tr>
                        <tr>
                            <td class="label-col">Date of Birth</td>
                            <td class="value-col">${formattedBirthday}</td>
                        </tr>
                    </table>

                    <!-- Location -->
                    <div class="section-header">
                        <h2>📍 &nbsp; Location</h2>
                    </div>
                     <table class="data-table">
                        <tr>
                            <td class="label-col">Address</td>
                            <td class="value-col">${address}</td>
                        </tr>
                        <tr>
                            <td class="label-col">Location</td>
                            <td class="value-col">${city}, ${state}</td>
                        </tr>
                    </table>

                    <!-- Cover Letter -->
                    ${message ? `
                    <div class="section-header">
                        <h2>📝 &nbsp; Cover Letter</h2>
                    </div>
                    <div class="message-box">${message}</div>
                    ` : ''}

                    <!-- Meta Data -->
                    <div style="margin-top: 40px; padding-top: 20px; border-top: 1px dashed #e2e8f0; font-size: 12px; color: #94a3b8; display: flex; justify-content: space-between;">
                        <span>📅 Applied: <strong>${formattedAppDate}</strong></span>
                        <span>⏰ Time: <strong>${submissionTime}</strong> (EET)</span>
                    </div>

                </td>
            </tr>

            <!-- Footer -->
            <tr>
                <td class="footer">
                    <p><strong>Sinai Connect</strong><br>Bridging Talent with Opportunity</p>
                    <p style="margin-top: 15px;">
                        This email was securely generated by the Sinai Connect Job Portal.<br>
                        &copy; ${new Date().getFullYear()} Sinai Connect. All rights reserved.
                    </p>
                </td>
            </tr>
        </table>
    </center>
</body>
</html>
    `;
}

/**
 * Clean plain text version
 */
export function generateEmailText(applicantData) {
  const {
    applicantId,
    fullName,
    email,
    phone,
    birthday,
    address,
    city,
    state,
    applicationDate,
    message
  } = applicantData;

  return `
🆕 NEW JOB APPLICATION - SINAI CONNECT
===============================================
Applicant ID: ${applicantId}
-----------------------------------------------

👤 PERSONAL DETAILS
Name:    ${fullName}
Email:   ${email}
Phone:   ${phone}
DOB:     ${birthday}

📍 LOCATION
Address: ${address}
City:    ${city}, ${state}

📝 MESSAGE
${message || 'No message provided.'}

-----------------------------------------------
📅 Date: ${applicationDate}
🔗 Connect: www.sinaiconnect.com
===============================================
    `;
}
