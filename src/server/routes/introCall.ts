
import { Request, Response } from 'express';

export const handleIntroCallSubmission = async (req: Request, res: Response) => {
  try {
    const {
      name,
      email,
      company,
      role,
      teamSize,
      microsoft365,
      preferredTime,
      notes,
      consent,
      utm_params,
      timestamp
    } = req.body;

    // Basic validation
    if (!name || !email || !company || !role || !consent) {
      return res.status(400).json({ 
        error: 'Missing required fields', 
        required: ['name', 'email', 'company', 'role', 'consent'] 
      });
    }

    if (!consent) {
      return res.status(400).json({ error: 'Consent is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification email
    // 3. Add to CRM
    // 4. Send confirmation email

    // For now, we'll just log the submission
    console.log('Intro Call Submission:', {
      name,
      email,
      company,
      role,
      teamSize,
      microsoft365,
      preferredTime,
      notes,
      utm_params,
      timestamp: new Date().toISOString()
    });

    // Send actual email notification
    try {
      // For now, we'll use a webhook or external service
      // You can replace this with your preferred email service
      const emailData = {
        to: 'info@ritvit.fo',
        subject: `New Intro Call Request from ${name} at ${company}`,
        message: `
          New Intro Call Request:
          
          Name: ${name}
          Email: ${email}
          Company: ${company}
          Role: ${role}
          Team Size: ${teamSize}
          Microsoft 365/Copilot: ${microsoft365}
          Preferred Time: ${preferredTime}
          Notes: ${notes}
          
          UTM Parameters: ${JSON.stringify(utm_params, null, 2)}
          Submitted: ${timestamp}
        `
      };

      // Log for now - replace with actual email service
      console.log('Sending email to info@ritvit.fo:', emailData);
      
      // TODO: Implement actual email sending with service like:
      // - Nodemailer with SMTP
      // - SendGrid API
      // - Mailgun API
      // - Or webhook to external service
      
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
    }

    res.status(200).json({ 
      success: true, 
      message: 'Intro call request submitted successfully' 
    });

  } catch (error) {
    console.error('Error handling intro call submission:', error);
    res.status(500).json({ 
      error: 'Internal server error', 
      message: 'Please try again later' 
    });
  }
};
