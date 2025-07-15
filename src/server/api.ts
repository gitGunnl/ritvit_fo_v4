import express from 'express';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message, honeypot, submissionTime, formStartTime } = req.body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
      return res.status(400).json({ error: 'Invalid name' });
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0 || message.length > 5000) {
      return res.status(400).json({ error: 'Invalid message' });
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
    const sanitizedName = name.trim().slice(0, 100);
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);
    const sanitizedMessage = message.trim().slice(0, 5000);

    const formData = new FormData();
    formData.append("entry.1179687836", sanitizedName);
    formData.append("entry.263197538", sanitizedEmail);
    formData.append("entry.240567695", sanitizedMessage);

    const response = await fetch(
      'https://docs.google.com/forms/d/e/1FAIpQLSf8FFci-J91suIjxY2xh4GD-DQ-UfZftUNxq3dUdXkgJAjB1Q/formResponse',
      {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }
    );

    res.json({ success: true });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ 
      error: 'Failed to submit form'
    });
  }
});

export default router;