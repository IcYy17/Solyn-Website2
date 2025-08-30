# Brevo Email Integration Guide

## Overview
Your Solyn website now has a complete Brevo email integration with two signup methods:
1. **Bottom Email Form**: Located in the blue "Be Among the First" section
2. **Beta Signup Modal**: Triggered by clicking any "Join Beta" button

## What's Implemented

### 1. API Route (`/pages/api/subscribe.js`)
- **Endpoint**: `POST /api/subscribe`
- **Purpose**: Handles email subscriptions to Brevo list #3
- **Security Features**:
  - Rate limiting (5 requests per minute per IP)
  - Email validation with regex
  - Duplicate email handling
  - Error handling for various Brevo API responses
  - Input sanitization (trim and lowercase emails)

### 2. Beta Signup Modal (`/components/BetaSignupModal.jsx`)
- Beautiful blue-themed modal popup
- Form validation and loading states
- Success/error message handling
- Auto-close on successful submission
- Responsive design

### 3. Updated Main Page (`/pages/index.js`)
- Integrated modal state management
- Updated both "Join Beta" buttons to trigger modal
- Enhanced bottom form with API integration
- Real-time status messages for both forms

## Environment Variables

Make sure your `.env` file contains:
```
BREVO_API_KEY=your_actual_brevo_api_key_here
```

**⚠️ IMPORTANT**: Never commit your actual API key to version control. Keep it only in your local `.env` file.

## Potential Pitfalls & Solutions

### 1. **API Key Issues**
**Problem**: Brevo API returns 401/403 errors
**Solutions**:
- Verify API key is correct in `.env`
- Ensure API key has proper permissions
- Check if API key is active in Brevo dashboard

### 2. **List ID Issues**
**Problem**: Contact not added to correct list
**Solutions**:
- Verify list #3 exists in your Brevo account
- Check list permissions
- Consider creating a test list first

### 3. **Rate Limiting**
**Problem**: Too many requests cause errors
**Solutions**:
- Current implementation: 5 requests/minute per IP
- For production: Consider using Redis for distributed rate limiting
- Monitor API usage in Brevo dashboard

### 4. **Email Validation Edge Cases**
**Problem**: Some valid emails rejected
**Solutions**:
- Current regex handles most cases
- Consider using a library like `validator` for more robust validation
- Test with international domains

### 5. **CORS Issues** (If using from different domain)
**Problem**: Browser blocks API calls
**Solutions**:
- Add CORS headers to API route
- Configure Next.js `next.config.js` for CORS

### 6. **Environment Variable Loading**
**Problem**: Environment variables not loading
**Solutions**:
- Use `.env.local` for Next.js (auto-loaded)
- Restart development server after adding variables
- Never commit `.env` files to version control

## Best Practices Implemented

### Security
- ✅ Input validation and sanitization
- ✅ Rate limiting per IP address
- ✅ Error message sanitization (no sensitive data exposed)
- ✅ API key security (server-side only)

### User Experience
- ✅ Loading states during form submission
- ✅ Clear success/error messages
- ✅ Graceful error handling
- ✅ Duplicate email detection
- ✅ Auto-closing modal on success

### Performance
- ✅ Client-side validation before API calls
- ✅ Optimized error responses
- ✅ Proper HTTP status codes

### Monitoring
- ✅ Console logging for debugging
- ✅ Detailed error tracking
- ✅ Email tracking with source attribution

## Testing Your Integration

### Manual Testing
1. **Valid Email**: Try `user@example.com`
2. **Duplicate Email**: Try the same email twice
3. **Invalid Email**: Try `invalid-email`
4. **Rate Limiting**: Submit 6+ requests quickly

### API Testing
```bash
# Test valid email
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Test invalid email
curl -X POST http://localhost:3000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"invalid-email"}'
```

## Production Deployment Checklist

### Environment Setup
- [ ] Move API key to secure environment variables
- [ ] Use `.env.local` or deployment platform env vars
- [ ] Never expose API key in client-side code

### Performance Optimization
- [ ] Consider implementing Redis for rate limiting
- [ ] Add request logging for monitoring
- [ ] Set up error alerting (e.g., Sentry)

### Brevo Account Setup
- [ ] Verify list #3 exists and is configured
- [ ] Set up email templates for welcome messages
- [ ] Configure double opt-in if required by your jurisdiction
- [ ] Set up automated email sequences

### Security Hardening
- [ ] Add CSRF protection if needed
- [ ] Implement additional rate limiting layers
- [ ] Add request validation middleware
- [ ] Monitor for suspicious activity

## Troubleshooting

### Common Issues

1. **"Server configuration error"**
   - Check that `BREVO_API_KEY` is set in environment
   - Restart the development server

2. **"Method not allowed"**
   - Ensure you're making POST requests to the API
   - Check that the API route file is properly named

3. **"Too many requests"**
   - Wait 1 minute and try again
   - Check rate limiting configuration

4. **Modal not opening**
   - Check browser console for JavaScript errors
   - Verify React state management

### Debug Mode
To enable debug logging, add this to your API route:
```javascript
console.log('Debug:', { email, listIds: [3], timestamp: new Date() });
```

## Support

If you encounter issues:
1. Check Brevo API documentation
2. Verify API key permissions in Brevo dashboard
3. Test with Brevo's API explorer
4. Check Next.js logs for detailed error messages

## Success! 🎉

Your Brevo integration is now complete with:
- ✅ Secure API integration
- ✅ Beautiful user interface
- ✅ Comprehensive error handling
- ✅ Rate limiting protection
- ✅ Production-ready code

Both signup methods (bottom form and modal) will now add emails to your Brevo list #3!
