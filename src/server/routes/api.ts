
import express from 'express';

const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    console.log('Contact form submission:', { name, email, message: message.substring(0, 20) + '...' });
    
    // Here you would typically save to a database or send an email
    // For now, we'll just acknowledge receipt
    
    res.json({ 
      success: true, 
      message: 'Contact form received successfully' 
    });
  } catch (error) {
    console.error('Error in contact endpoint:', error);
    res.status(500).json({ error: error.message || 'An error occurred' });
  }
});

export default router;
