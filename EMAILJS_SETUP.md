# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive contact form submissions at `saadrehman.cs@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Once logged in, go to the **Email Services** section
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Click **Connect Account** and authorize EmailJS to send emails on your behalf
5. You'll get a **Service ID** (e.g., `service_abc123`) - save this!

## Step 3: Create Email Template

1. Go to the **Email Templates** section
2. Click **Create New Template**
3. Set up your template with the following structure:

**Template Name:** Contact Form Submission

**Subject:** New Contact Form Message from {{from_name}}

**Content (HTML):**
```html
<p><strong>New contact form submission:</strong></p>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Company:</strong> {{company_name}}</p>
<p><strong>Service Interest:</strong> {{service_interest}}</p>

<p><strong>Message:</strong></p>
<p>{{message}}</p>

---
<p><small>This email was sent from the CRJR Ventures contact form</small></p>
```

4. In the **To Email** field, enter: `saadrehman.cs@gmail.com`
5. Click **Save** and note the **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key

1. Go to **Account** > **General**
2. Find your **Public Key** (e.g., `Abc123XyZ_-AbCdEf`)
3. Copy this key

## Step 5: Update Environment Variables

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=Abc123XyZ_-AbCdEf
```

3. Save the file

## Step 6: Restart Development Server

1. Stop your development server (Ctrl+C)
2. Restart it with:
```bash
npm run dev
```

## Step 7: Test the Form

1. Navigate to the Work With Me page
2. Fill out the contact form
3. Submit it
4. Check `saadrehman.cs@gmail.com` for the email!

## Troubleshooting

### Emails not sending?
- Check browser console for errors
- Verify all three environment variables are correctly set
- Make sure you authorized Gmail in EmailJS
- Check EmailJS dashboard for error logs

### Getting CORS errors?
- Make sure you're using the correct Public Key (not Private Key)
- Check that your domain is allowed in EmailJS settings

### Need to add .env to .gitignore?
Run this command to ensure your credentials aren't committed:
```bash
echo ".env" >> .gitignore
```

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Up to 2 email services
- Up to 2 email templates

This should be sufficient for most contact forms. If you need more, consider upgrading.

## Support

For more help, visit:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
