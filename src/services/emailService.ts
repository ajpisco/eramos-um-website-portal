// Email Service - N8N Webhook Implementation
// This service sends emails through the n8n webhook API

import { 
  admissionNotificationWithFormData, 
  admissionInquiryNotification,
  contactFormNotification,
  admissionApplicationForm,
  type ContactData,
  type EmailTemplate,
  type AdmissionFormData
} from './emailTemplates';

// N8N Webhook Configuration
const N8N_CONFIG = {
  webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL,
  apiKey: import.meta.env.VITE_N8N_API_KEY ,
  timeout: 30000, // 30 seconds
  retryAttempts: 3,
  retryDelay: 1000, // 1 second
};

// Email addresses configuration
const EMAIL_ADDRESSES = {
  admissions: import.meta.env.VITE_ADMISSIONS_EMAIL || 'andre_pisco@hotmail.com',
  contact: import.meta.env.VITE_SCHOOL_EMAIL || 'contact@eramosum.pt', 
  noreply: 'noreply@eramosum.edu.pt'
};

// Function to update email addresses (for future backend integration)
export const updateEmailAddresses = (newAddresses: Partial<typeof EMAIL_ADDRESSES>) => {
  Object.assign(EMAIL_ADDRESSES, newAddresses);
};

// Function to get current email addresses
export const getEmailAddresses = () => ({ ...EMAIL_ADDRESSES });

// Function to update API configuration
export const updateEmailConfig = (newConfig: Partial<typeof N8N_CONFIG>) => {
  Object.assign(N8N_CONFIG, newConfig);
};

// PDF Attachment utilities
export const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove data:application/pdf;base64, prefix
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = error => reject(error);
  });
};

// Function to download and convert PDF to base64
export const getPDFAsBase64 = async (pdfUrl: string): Promise<string> => {
  try {
    const response = await fetch(pdfUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
    }
    
    const blob = await response.blob();
    
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onload = () => {
        const result = reader.result as string;
        const base64 = result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  } catch (error) {
    console.error('Error fetching PDF:', error);
    throw error;
  }
};

// Sleep utility for retry logic
const sleep = (ms: number): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms));

// Error types for better error handling
export enum EmailErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR'
}

export interface EmailParams {
  to_email: string;
  from_name?: string;
  from_email?: string;
  from_phone?: string;
  subject?: string;
  message: string;
  isHtml?: boolean; // Flag to indicate HTML content
  attachments?: Array<{
    name: string;
    data: string; // base64 encoded file
    type: string; // mime type
  }>;
  [key: string]: any; // Allow additional parameters
}

export interface EmailResponse {
  success: boolean;
  error?: string;
  errorType?: EmailErrorType;
  messageId?: string;
  retryCount?: number;
}

// N8N API response types
type N8NSuccessResponse = {
  success: true;
  messageId?: string;
  [key: string]: any;
};

type N8NErrorResponse = {
  success: false;
  error: string;
  code?: string;
  [key: string]: any;
};

type N8NResponse = N8NSuccessResponse | N8NErrorResponse;

// Fetch with timeout utility
const fetchWithTimeout = async (
  url: string, 
  options: RequestInit, 
  timeout: number
): Promise<Response> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === 'AbortError') {
      throw new Error('Request timeout');
    }
    throw error;
  }
};

// Determine error type from error details
const determineErrorType = (error: Error, response?: Response): EmailErrorType => {
  const errorMessage = error.message.toLowerCase();
  
  if (errorMessage.includes('timeout')) {
    return EmailErrorType.TIMEOUT_ERROR;
  }
  
  if (errorMessage.includes('network') || errorMessage.includes('fetch')) {
    return EmailErrorType.NETWORK_ERROR;
  }
  
  if (response) {
    if (response.status === 401 || response.status === 403) {
      return EmailErrorType.AUTHENTICATION_ERROR;
    }
    
    if (response.status >= 400 && response.status < 500) {
      return EmailErrorType.VALIDATION_ERROR;
    }
    
    if (response.status >= 500) {
      return EmailErrorType.SERVER_ERROR;
    }
  }
  
  return EmailErrorType.UNKNOWN_ERROR;
};

// Main email sending function with retry logic
export const sendEmail = async (params: EmailParams): Promise<EmailResponse> => {
  let lastError: Error | null = null;
  let lastResponse: Response | undefined;
  
  for (let attempt = 0; attempt < N8N_CONFIG.retryAttempts; attempt++) {
    try {
      // Prepare email payload for N8N webhook
      const webhookPayload = {
        to: params.to_email,
        from: {
          name: params.from_name || 'Website',
          email: params.from_email || EMAIL_ADDRESSES.noreply
        },
        subject: params.subject || 'Website Notification',
        message: params.message,
        html: params.isHtml ? params.message : undefined, // Add HTML content field
        isHtml: params.isHtml || false, // Indicate if content is HTML
        phone: params.from_phone,
        attachments: params.attachments || [],
        metadata: {
          submission_date: new Date().toISOString(),
          source: 'website',
          attempt: attempt + 1,
          contentType: params.isHtml ? 'html' : 'text',
          ...params
        }
      };

      // Send to N8N webhook
      const response = await fetchWithTimeout(
        N8N_CONFIG.webhookUrl,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': N8N_CONFIG.apiKey
          },
          body: JSON.stringify(webhookPayload)
        },
        N8N_CONFIG.timeout
      );

      lastResponse = response;

      // Check if response is ok (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      // Parse response
      let result: N8NResponse;
      try {
        result = await response.json();
      } catch (jsonError) {
        // If JSON parsing fails but response was ok, assume success
        console.warn('Failed to parse JSON response, assuming success:', jsonError);
        return {
          success: true,
          messageId: `sent-${Date.now()}`,
          retryCount: attempt
        };
      }

      // Check if the parsed response indicates success
      if (result.success === false) {
        throw new Error(result.error || 'API returned failure');
      }

      // Success!
      return {
        success: true,
        messageId: result.messageId || `sent-${Date.now()}`,
        retryCount: attempt
      };

    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      const errorType = determineErrorType(lastError, lastResponse);
      
      // Don't retry on authentication or validation errors
      if (errorType === EmailErrorType.AUTHENTICATION_ERROR || 
          errorType === EmailErrorType.VALIDATION_ERROR) {
        console.error(`Email sending failed (no retry): ${lastError.message}`);
        break;
      }
      
      console.warn(`Email sending attempt ${attempt + 1} failed:`, lastError.message);
      
      // If this is not the last attempt, wait before retrying
      if (attempt < N8N_CONFIG.retryAttempts - 1) {
        const delay = N8N_CONFIG.retryDelay * Math.pow(2, attempt); // Exponential backoff
        console.log(`Retrying in ${delay}ms...`);
        await sleep(delay);
      }
    }
  }
  
  // All attempts failed
  const errorType = lastError ? determineErrorType(lastError, lastResponse) : EmailErrorType.UNKNOWN_ERROR;
  
  // Fallback: Log email details for manual processing
  console.error('Email sending failed after all retries. Logging for manual processing:', {
    to: params.to_email,
    from: params.from_name,
    subject: params.subject,
    errorType,
    error: lastError?.message,
    timestamp: new Date().toISOString()
  });

  return {
    success: false,
    error: lastError?.message || 'Unknown error after all retry attempts',
    errorType,
    retryCount: N8N_CONFIG.retryAttempts
  };
};

// Updated admission notification template to handle form data
export const EmailTemplates = {
  // Comprehensive admission application form (uses the full HTML template)
  admissionApplicationForm: (formData: AdmissionFormData, contactData: ContactData) => {
    const template = admissionApplicationForm(formData, contactData);

    return {
      to_email: EMAIL_ADDRESSES.admissions,
      from_name: contactData.name || formData.motherName || formData.fatherName || 'Candidato',
      from_email: contactData.email || formData.motherEmail || formData.fatherEmail || EMAIL_ADDRESSES.noreply,
      from_phone: contactData.phone || formData.motherMobilePhone || formData.fatherMobilePhone || '',
      subject: template.subject,
      message: template.htmlContent,
      isHtml: true
    };
  },

  admissionNotification: (contactData: ContactData) => {
    // Determine which template to use based on whether form data is present
    const template = contactData.formData 
      ? admissionNotificationWithFormData(contactData)
      : admissionInquiryNotification(contactData);

    return {
      to_email: EMAIL_ADDRESSES.admissions,
      from_name: contactData.name || 'Website Visitor',
      from_email: contactData.email || EMAIL_ADDRESSES.noreply,
      from_phone: contactData.phone || '',
      subject: template.subject,
      message: template.htmlContent,
      isHtml: true // Add flag to indicate HTML content
    };
  },

  // Contact form template for general inquiries
  contactForm: (contactData: ContactData) => {
    const template = contactFormNotification(contactData);

    return {
      to_email: EMAIL_ADDRESSES.contact,
      from_name: contactData.name || 'Website Visitor',
      from_email: contactData.email || EMAIL_ADDRESSES.noreply,
      from_phone: contactData.phone || '',
      subject: template.subject,
      message: template.htmlContent,
      isHtml: true
    };
  }
};

// Helper function specifically for admission applications
export const sendAdmissionNotification = async (contactData: ContactData): Promise<EmailResponse> => {
  const emailParams = EmailTemplates.admissionNotification(contactData);
  return sendEmail(emailParams);
};

// Helper function for comprehensive admission application form
export const sendAdmissionApplicationForm = async (formData: AdmissionFormData, contactData: ContactData): Promise<EmailResponse> => {
  const emailParams = EmailTemplates.admissionApplicationForm(formData, contactData);
  return sendEmail(emailParams);
};

// Helper function for general contact form submissions
export const sendContactFormNotification = async (contactData: ContactData): Promise<EmailResponse> => {
  const emailParams = EmailTemplates.contactForm(contactData);
  return sendEmail(emailParams);
};

// Validate N8N configuration
const validateN8NConfig = () => {
  const missingVars = [];
  if (!import.meta.env.VITE_N8N_WEBHOOK_URL) missingVars.push('VITE_N8N_WEBHOOK_URL');
  if (!import.meta.env.VITE_N8N_API_KEY) missingVars.push('VITE_N8N_API_KEY');
  
  if (missingVars.length > 0) {
    console.warn('Missing N8N environment variables:', missingVars.join(', '));
    console.warn('Email functionality may not work properly. Please check your .env file.');
  }
  
  return missingVars.length === 0;
};

export const sendAdmissionNotificationWithPDF = async (contactData: ContactData): Promise<EmailResponse> => {
  // Validate N8N configuration first
  if (!validateN8NConfig()) {
    console.error('N8N webhook service not properly configured');
    return {
      success: false,
      error: 'Email service configuration missing - please check your N8N webhook settings',
      errorType: EmailErrorType.AUTHENTICATION_ERROR
    };
  }

  try {
    console.log('Sending admission notification via N8N webhook...');
    
    // Use the existing EmailTemplates.admissionNotification to format the email
    const emailParams = EmailTemplates.admissionNotification(contactData);
    
    // Send email using the existing N8N webhook implementation
    const result = await sendEmail(emailParams);
    
    if (result.success) {
      console.log('Admission notification sent successfully via N8N');
    } else {
      console.error('Failed to send admission notification:', result.error);
    }
    
    return result;
    
  } catch (error: any) {
    console.error('Unexpected error sending admission notification:', error);
    
    return {
      success: false,
      error: error.message || 'Unexpected error occurred',
      errorType: EmailErrorType.UNKNOWN_ERROR
    };
  }
};

export default {
  sendEmail,
  sendAdmissionNotification,
  sendAdmissionNotificationWithPDF,
  sendAdmissionApplicationForm,
  sendContactFormNotification,
  EmailTemplates,
  updateEmailAddresses,
  updateEmailConfig,
  getEmailAddresses,
  convertFileToBase64,
  getPDFAsBase64,
  EmailErrorType
}; 