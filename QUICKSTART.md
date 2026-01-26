# 🚀 Quick Start Guide - Job Application System

## ⚡ 3-Step Setup

### Step 1: Get Gmail App Password

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification**
3. Click **App passwords**
4. Generate password for **Mail**
5. Copy the 16-character code

### Step 2: Configure Backend

Open `server/.env` and paste your password:

```env
EMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### Step 3: Start Servers

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend (already running):**
```bash
npm run dev
```

---

## ✅ Test It

1. Go to Careers section on website
2. Fill the Job Application form
3. Click Submit
4. ✨ Check results:
   - Success message with unique ID appears
   - Email sent to `sinaiconnect7@gmail.com`
   - Data saved in `server/applicants.xlsx`

---

## 📂 What You Get

### 📧 Email to sinaiconnect7@gmail.com
Professional HTML email with:
- All applicant information
- Unique ID for tracking
- Beautiful formatting

### 📊 Excel File (`server/applicants.xlsx`)
Automatic record with:
- Unique Applicant ID (APP-20260126-0001)
- All form data
- Timestamp

### 🎯 Unique ID System
Format: `APP-YYYYMMDD-XXXX`
- APP-20260126-0001 (first application today)
- APP-20260126-0002 (second application today)
- APP-20260127-0001 (first application tomorrow)

---

## 🔧 Common Issues

### ❌ "Cannot connect to server"
**Fix:** Start backend server
```bash
cd server
npm start
```

### ❌ "Email not received"
**Fix:** Check Gmail App Password in `server/.env`

### ❌ "Excel file not created"
**Fix:** Check backend console for errors

---

## 📁 File Structure

```
sinai-connect-v2/
├── server/                    # Backend
│   ├── index.js              # Main server
│   ├── emailTemplate.js      # Email design
│   ├── .env                  # ⚡ ADD YOUR PASSWORD HERE
│   ├── package.json          # Dependencies
│   └── applicants.xlsx       # Auto-generated data
│
├── components/
│   └── Careers.tsx           # Updated form
│
└── package.json              # Frontend
```

---

## 🎉 You're Ready!

Everything is set up. Just add your Gmail App Password and start the backend server.

For detailed documentation, see:
- [Backend README](file:///c:/Users/Bavly%20Hamdy/Downloads/sinai-connect-v2/server/README.md)
- [Complete Walkthrough](file:///C:/Users/Bavly%20Hamdy/.gemini/antigravity/brain/e0d081ee-a259-42d8-bf0b-948762489ade/walkthrough.md)
