# Sinai Connect Backend - Email Only

## Simple Email-Only Backend

Sends job application submissions directly to `bavly.morgan2030@gmail.com` - **no data storage**.

---

## Quick Start

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Verify Email Configuration

The `.env` file should already have:
```env
EMAIL_USER=bavly.morgan2030@gmail.com
EMAIL_APP_PASSWORD=nzzc joah jjij brcr
```

### 3. Start Server
```bash
npm start
```

---

## Features

- ✅ **Email Notifications**: Sends professional HTML emails to bavly.morgan2030@gmail.com
- ✅ **Unique IDs**: Generates unique format `APP-YYYYMMDD-XXXX` for each applicant
- ✅ **No Storage**: Simple - just email, no database or files
- ✅ **CORS Enabled**: Frontend can connect from any origin

---

## API Endpoints

### Health Check
```
GET /api/health
```

### Submit Job Application
```
POST /api/job-application
Content-Type: application/json

{
  "applicationDate": "2026-01-26",
  "fullName": "John Doe",
  "birthday": "1995-03-15",
  "address": "123 Main St",
  "city": "Cairo",
  "state": "Cairo Governorate",
  "phone": "+20 123 456 7890",
  "email": "john@example.com",
  "message": "Cover letter text..."
}
```

**Response:**
```json
{
  "success": true,
  "applicantId": "APP-20260126-XXXX",
  "message": "Application submitted successfully"
}
```

---

## That's It!

No Google Sheets, no Excel files, no complicated setup - just email! 📧
