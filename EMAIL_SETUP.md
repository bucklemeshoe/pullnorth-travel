# Email Setup Guide

## Option 1: Quick Setup with Netlify Forms (Recommended for now)

1. **Update your email in netlify.toml:**
   ```toml
   [[forms]]
     name = "enquiry-form"
     [forms.notifications]
       email = "your-actual-email@example.com"
   ```

2. **Deploy to Netlify** - You'll receive emails automatically!

## Option 2: Custom Email Setup (More Control)

### Step 1: Create Environment File
Create a `.env.local` file in your project root:
```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NOTIFICATION_EMAIL=your-email@example.com
```

### Step 2: Gmail Setup (if using Gmail)
1. Enable 2-factor authentication on your Gmail account
2. Generate an "App Password":
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Use this app password in your `.env.local` file

### Step 3: Alternative Email Services
For better deliverability, consider:
- **Resend**: `npm install @resend/node`
- **SendGrid**: `npm install @sendgrid/mail`
- **Mailgun**: `npm install mailgun.js`

### Step 4: Test the Setup
1. Start your development server: `npm run dev`
2. Submit a test form
3. Check your email for the notification

## Current Status
✅ Form submits to `/api/enquire` endpoint  
✅ Email functionality is integrated  
✅ Environment variables are configured  
⏳ You need to add your actual email credentials  

## Next Steps
1. Add your email credentials to `.env.local`
2. Test the form submission
3. Deploy to your hosting platform
4. Set environment variables in your hosting platform 