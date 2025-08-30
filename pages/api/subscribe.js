import * as brevo from '@getbrevo/brevo';

// Simple rate limiting (in production, use Redis or proper rate limiting)
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // 5 requests per minute per IP

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const limit = rateLimitMap.get(ip);
  if (now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (limit.count >= maxRequests) {
    return true;
  }

  limit.count++;
  return false;
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Simple rate limiting
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown';
  if (isRateLimited(clientIP)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { email } = req.body;

  // Validate email
  if (!email || typeof email !== 'string') {
    return res.status(400).json({ error: 'Email is required' });
  }

  if (!validateEmail(email.trim())) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }

  // Check for API key
  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY is not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // Initialize Brevo client
    const apiInstance = new brevo.ContactsApi();
    apiInstance.setApiKey(brevo.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY);

    // Create contact data
    const createContact = new brevo.CreateContact();
    createContact.email = email.trim().toLowerCase();
    createContact.listIds = [3]; // List ID #3 as specified
    createContact.updateEnabled = true; // Update if contact already exists
    
    // Add optional attributes
    createContact.attributes = {
      FIRSTNAME: '', // You can add this later if you collect names
      LASTNAME: '',
      SIGNUP_DATE: new Date().toISOString(),
      SOURCE: 'website_beta_signup'
    };

    // Add contact to Brevo
    const result = await apiInstance.createContact(createContact);

    console.log('Contact created/updated successfully for:', email.trim().toLowerCase());

    return res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to the waitlist!' 
    });

  } catch (error) {
    console.error('Brevo API Error:', {
      status: error.status,
      message: error.message,
      body: error.body,
      email: email.trim().toLowerCase()
    });

    // Handle specific Brevo error cases
    if (error.status === 400) {
      if (error.body?.message?.includes('already exist') || 
          error.body?.message?.includes('duplicate')) {
        return res.status(200).json({ 
          success: true, 
          message: 'You are already on our waitlist!' 
        });
      }
      
      if (error.body?.message?.includes('invalid email')) {
        return res.status(400).json({ 
          error: 'Please enter a valid email address' 
        });
      }
    }

    // Handle rate limiting from Brevo
    if (error.status === 429) {
      return res.status(429).json({ 
        error: 'Service temporarily busy. Please try again in a few minutes.' 
      });
    }

    // Handle authorization errors
    if (error.status === 401 || error.status === 403) {
      console.error('Brevo API authorization error - check API key');
      return res.status(500).json({ 
        error: 'Service temporarily unavailable. Please try again later.' 
      });
    }

    // Generic error response
    return res.status(500).json({ 
      error: 'Failed to subscribe. Please try again later.' 
    });
  }
}
