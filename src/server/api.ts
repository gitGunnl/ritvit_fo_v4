import express from 'express';

const router = express.Router();

// Rate limiting map to track requests per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Helper function to check rate limiting
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 10; // Max 10 requests per minute per IP

  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
};

router.post('/contact', async (req, res) => {
  // Set security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  try {
    const clientIp = req.ip || req.connection.remoteAddress || 'unknown';
    
    // Rate limiting check
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({ 
        error: 'Too many requests',
        details: 'Rate limit exceeded. Please wait before trying again.'
      });
    }

    const { name, email, message, honeypot, submissionTime, formStartTime } = req.body;

    // Comprehensive server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
      return res.status(400).json({ 
        error: 'Invalid name',
        details: 'Name must be between 2 and 100 characters'
      });
    }

    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email) || email.length > 254) {
      return res.status(400).json({ 
        error: 'Invalid email',
        details: 'Please provide a valid email address'
      });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 5000) {
      return res.status(400).json({ 
        error: 'Invalid message',
        details: 'Message must be between 1 and 5000 characters'
      });
    }

    // Check for potential XSS or injection attempts
    const dangerousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /data:text\/html/gi,
      /<iframe/gi
    ];
    
    const combinedText = `${name} ${email} ${message}`;
    for (const pattern of dangerousPatterns) {
      if (pattern.test(combinedText)) {
        console.warn(`Potential XSS attempt from IP ${clientIp}: ${combinedText.substring(0, 100)}`);
        return res.status(400).json({ 
          error: 'Invalid content detected',
          details: 'Please remove any HTML or script content'
        });
      }
    }

    // Honeypot check - reject if honeypot field is filled
    if (honeypot && typeof honeypot === 'string' && honeypot.trim() !== "") {
      // Log potential spam attempt but don't reveal to client
      console.log('Spam attempt detected via honeypot');
      return res.json({ success: true }); // Pretend success to not alert bot
    }

    // Timestamp validation - reject if submitted too quickly
    if (submissionTime && formStartTime) {
      const timeTaken = (submissionTime - formStartTime) / 1000;
      if (timeTaken < 3) {
        console.log('Spam attempt detected via timestamp check');
        return res.status(400).json({ error: 'Form submitted too quickly' });
      }
    }

    // Sanitize inputs
    const sanitizedName = name.trim().replace(/[<>]/g, '').slice(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);
    const sanitizedMessage = message.trim().replace(/[<>]/g, '').slice(0, 5000);

    const formData = new FormData();
    formData.append("entry.1179687836", sanitizedName);
    formData.append("entry.263197538", sanitizedEmail);
    formData.append("entry.240567695", sanitizedMessage);

    // Add timeout and better error handling for external API call
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

    try {
      const response = await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSf8FFci-J91suIjxY2xh4GD-DQ-UfZftUNxq3dUdXkgJAjB1Q/formResponse',
        {
          method: 'POST',
          body: formData,
          signal: controller.signal,
          headers: {
            'User-Agent': 'RitVit-Server/1.0'
          }
        }
      );

      clearTimeout(timeoutId);
      
      // Even with no-cors, we can still detect some failures
      if (!response) {
        throw new Error('No response received from Google Forms');
      }

      res.json({ success: true });
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        console.error('Google Forms request timeout');
        return res.status(408).json({ 
          error: 'Request timeout',
          details: 'External service took too long to respond'
        });
      }
      
      console.error('Google Forms submission failed:', fetchError);
      // Still return success to user, but log the failure
      res.json({ success: true });
    }
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      error: 'Failed to submit form'
    });
  }
});

export default router;