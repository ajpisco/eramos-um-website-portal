# Email Service Documentation

The email service provides a robust way to send emails through the N8N webhook API with comprehensive error handling and retry logic.

## 🚀 Configuration

The service is pre-configured to use the N8N webhook:

```typescript
const N8N_CONFIG = {
  webhookUrl: 'http://n8n.enshort.me:5678/webhook/test',
  apiKey: 'XXXXX',
  timeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
};
```

### Dynamic Configuration Updates

You can update the configuration at runtime:

```typescript
import { updateEmailConfig } from '@/services/emailService';

updateEmailConfig({
  webhookUrl: 'https://new-webhook-url.com/webhook',
  apiKey: 'new-api-key',
  timeout: 60000, // 60 seconds
  retryAttempts: 5
});
```

## 📧 Usage

### Basic Email Sending

```typescript
import { sendEmail } from '@/services/emailService';

const emailParams = {
  to_email: 'recipient@example.com',
  from_name: 'Sender Name',
  from_email: 'sender@example.com',
  subject: 'Email Subject',
  message: 'Email content here'
};

const result = await sendEmail(emailParams);
if (result.success) {
  console.log('Email sent successfully!', result.messageId);
  console.log('Retry attempts:', result.retryCount);
} else {
  console.error('Email failed:', result.error);
  console.error('Error type:', result.errorType);
  console.error('Total retry attempts:', result.retryCount);
}
```

### Error Handling with Error Types

```typescript
import { sendEmail, EmailErrorType } from '@/services/emailService';

const result = await sendEmail(emailParams);

if (!result.success) {
  switch (result.errorType) {
    case EmailErrorType.NETWORK_ERROR:
      console.log('Check internet connection');
      break;
    case EmailErrorType.TIMEOUT_ERROR:
      console.log('Request timed out, try again later');
      break;
    case EmailErrorType.AUTHENTICATION_ERROR:
      console.log('Invalid API key or unauthorized');
      break;
    case EmailErrorType.SERVER_ERROR:
      console.log('N8N server is experiencing issues');
      break;
    case EmailErrorType.VALIDATION_ERROR:
      console.log('Invalid data sent to webhook');
      break;
    default:
      console.log('Unknown error occurred');
  }
}
```

### Pre-built Templates

#### Admission Notification
```typescript
import { sendAdmissionNotification } from '@/services/emailService';

const contactData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890'
};

const result = await sendAdmissionNotification(contactData);
```

#### Admission with PDF Attachment
```typescript
import { sendAdmissionNotificationWithPDF } from '@/services/emailService';

const result = await sendAdmissionNotificationWithPDF(
  contactData, 
  '/path/to/application-form.pdf'
);
```

## 🔧 API Reference

### Functions

#### `sendEmail(params: EmailParams): Promise<EmailResponse>`
Sends an email through the N8N webhook with automatic retry logic.

**Features:**
- Automatic retry with exponential backoff
- 30-second timeout per request
- Detailed error type classification
- Comprehensive logging

#### `sendAdmissionNotification(contactData): Promise<EmailResponse>`
Sends admission application notification to school.

#### `sendAdmissionNotificationWithPDF(contactData, pdfFile?): Promise<EmailResponse>`
Sends admission application notification with optional PDF attachment.

#### Error Types: `EmailErrorType`
- `NETWORK_ERROR`: Connection issues
- `TIMEOUT_ERROR`: Request timeout
- `AUTHENTICATION_ERROR`: Invalid API key
- `SERVER_ERROR`: N8N server issues
- `VALIDATION_ERROR`: Invalid data
- `UNKNOWN_ERROR`: Unclassified errors

### Interfaces

```typescript
interface EmailParams {
  to_email: string;
  from_name?: string;
  from_email?: string;
  from_phone?: string;
  subject?: string;
  message: string;
  attachments?: Array<{
    name: string;
    data: string; // base64 encoded
    type: string; // mime type
  }>;
  [key: string]: any;
}

interface EmailResponse {
  success: boolean;
  error?: string;
  errorType?: EmailErrorType;
  messageId?: string;
  retryCount?: number;
}
```

## 🛠️ Features

### ✅ **Robust Error Handling**
- Typed error classification
- Automatic retry with exponential backoff
- Smart retry logic (no retry for auth/validation errors)
- Comprehensive logging for debugging

### ✅ **Performance & Reliability**
- Request timeout protection (30s default)
- Automatic retry on transient failures
- Graceful degradation with fallback logging
- Network connection error detection

### ✅ **Security & Authentication**
- Secure API key authentication via `x-api-key` header
- Request payload validation
- No sensitive data exposure in logs

### ✅ **Developer Experience**
- Full TypeScript support with detailed types
- Pre-built email templates
- Runtime configuration updates
- Detailed error feedback

## 🔍 N8N Webhook Integration

### Expected Webhook Payload

The service sends this structure to the N8N webhook:

```json
{
  "to": "recipient@example.com",
  "from": {
    "name": "Sender Name",
    "email": "sender@example.com"
  },
  "subject": "Email Subject",
  "message": "Email content",
  "phone": "+1234567890",
  "attachments": [
    {
      "name": "document.pdf",
      "data": "base64-encoded-data",
      "type": "application/pdf"
    }
  ],
  "metadata": {
    "submission_date": "2024-01-01T00:00:00.000Z",
    "source": "website",
    "attempt": 1
  }
}
```

### Expected N8N Response

**Success Response:**
```json
{
  "success": true,
  "messageId": "unique-message-id"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Detailed error message",
  "code": "ERROR_CODE"
}
```

## 📎 PDF Attachment Support

### Automatic Base64 Conversion

```typescript
// From URL
const result = await sendAdmissionNotificationWithPDF(
  contactData, 
  '/path/to/form.pdf'
);

// From File object
const fileInput = document.getElementById('pdf-upload') as HTMLInputElement;
const file = fileInput.files?.[0];
if (file) {
  const result = await sendAdmissionNotificationWithPDF(contactData, file);
}
```

### Custom Attachments

```typescript
import { sendEmail } from '@/services/emailService';

const emailParams = {
  to_email: 'recipient@example.com',
  subject: 'Document Submission',
  message: 'Please find the attached document.',
  attachments: [{
    name: 'document.pdf',
    data: 'base64-encoded-pdf-data',
    type: 'application/pdf'
  }]
};

const result = await sendEmail(emailParams);
```

## 🔧 Advanced Configuration

### Email Address Management

```typescript
import { 
  updateEmailAddresses, 
  getEmailAddresses 
} from '@/services/emailService';

// Get current addresses
const addresses = getEmailAddresses();
console.log(addresses);
// { admissions: 'andre_pinto@hotmail.com', contact: 'contact@eramosum.edu.pt', noreply: 'noreply@eramosum.edu.pt' }

// Update addresses
updateEmailAddresses({
  admissions: 'new-admissions@school.com',
  contact: 'support@school.com'
});
```

### Retry Configuration

```typescript
import { updateEmailConfig } from '@/services/emailService';

// Customize retry behavior
updateEmailConfig({
  retryAttempts: 5,      // More retry attempts
  retryDelay: 2000,      // Longer initial delay
  timeout: 60000         // 60 second timeout
});
```

## 🚨 Error Handling Best Practices

### 1. **Handle Specific Error Types**
```typescript
const result = await sendEmail(params);
if (!result.success) {
  switch (result.errorType) {
    case EmailErrorType.NETWORK_ERROR:
      // Show network error message, suggest checking connection
      break;
    case EmailErrorType.AUTHENTICATION_ERROR:
      // Log security incident, contact admin
      break;
    case EmailErrorType.SERVER_ERROR:
      // Show temporary service unavailable message
      break;
  }
}
```

### 2. **Provide User-Friendly Messages**
```typescript
// Don't show technical errors to users
const getUserMessage = (errorType: EmailErrorType) => {
  switch (errorType) {
    case EmailErrorType.NETWORK_ERROR:
      return 'Please check your internet connection and try again.';
    case EmailErrorType.TIMEOUT_ERROR:
      return 'The request is taking longer than expected. Please try again.';
    default:
      return 'Something went wrong. Please contact support.';
  }
};
```

### 3. **Log for Debugging**
```typescript
if (!result.success) {
  console.error('Email failed:', {
    error: result.error,
    errorType: result.errorType,
    retryCount: result.retryCount,
    timestamp: new Date().toISOString()
  });
}
```

## 🔒 Security Considerations

- **API Key Security**: Never expose the API key in client-side code
- **Input Validation**: Always validate email addresses and content
- **Rate Limiting**: The service includes built-in retry limits
- **Attachment Size**: Monitor attachment sizes to prevent abuse
- **Logging**: Sensitive data is excluded from error logs

## 📈 Monitoring & Debugging

### Success Metrics
- `result.success`: Boolean indicating success/failure
- `result.messageId`: Unique identifier for tracking
- `result.retryCount`: Number of retry attempts made

### Error Tracking
- `result.errorType`: Categorized error type for analytics
- `result.error`: Detailed error message for debugging
- Console logs with timestamp and context

### Troubleshooting

**Network Issues:**
- Check N8N server availability
- Verify webhook URL accessibility
- Test API key authentication

**Timeout Issues:**
- Increase timeout configuration
- Check for large attachments
- Monitor N8N server performance

**Authentication Issues:**
- Verify API key is correct
- Check N8N webhook security settings
- Ensure header format is correct (`x-api-key`)

This email service provides enterprise-grade reliability with comprehensive error handling, making it suitable for production use while maintaining excellent developer experience. 