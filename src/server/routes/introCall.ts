
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

    // Submit to Google Forms
    try {
      // Create FormData for Google Forms submission
      const formData = new FormData();
      formData.append("entry.744211008", name);
      formData.append("entry.118668112", email);
      formData.append("entry.75387275", company);
      formData.append("entry.1650462245", role);
      formData.append("entry.1082936322", teamSize || '');
      formData.append("entry.2023709294", microsoft365 || '');
      formData.append("entry.39468664", preferredTime || '');
      formData.append("entry.", notes || ''); // Add notes field - replace with actual entry ID
      formData.append("entry.", consent ? 'Yes' : 'No'); // Add consent field - replace with actual entry ID
      formData.append("entry.", JSON.stringify(utm_params)); // Add UTM tracking - replace with actual entry ID

      // Submit to Google Forms with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSc0D-nlO13jnsg9cLP8WyknKpWwTfl09XpkKsO__VXqzjH9Xw/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log('Successfully submitted intro call request to Google Forms');
      
    } catch (error) {
      console.error('Failed to submit to Google Forms:', error);
      // Don't fail the request if Google Forms submission fails
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
