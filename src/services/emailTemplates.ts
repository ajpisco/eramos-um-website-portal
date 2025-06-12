// Email Template Service
// This file handles email template processing and variable substitution

import {
  EMAIL_TEMPLATES,
  EMAIL_SUBJECTS,
  fetchAdmissionApplicationTemplate
} from './emailTemplates.html';
import { renderEmailTemplate, type TemplateVariables } from './templateEngine';

export interface ContactData {
  name?: string;
  email?: string;
  phone?: string;
  formData?: string;
  message?: string;
}

// Import AdmissionFormData type for comprehensive form processing
export interface AdmissionFormData {
  // Student Data
  studentName: string;
  studentPhoto: File | null;
  studentPhotoUrl: string; // Cloudinary URL
  studentPhotoPublicId: string; // Cloudinary public ID
  studentBirthDate: string;
  studentSocialSecurity: string;
  studentAddress: string;
  studentPostalCode: string;
  studentCitizenCard: string;
  studentNIF: string;
  registrationDate: string;
  scheduleFrom: string;
  scheduleTo: string;
  
  // Authorized Adults
  authorizedAdult1Name: string;
  authorizedAdult1CC: string;
  authorizedAdult2Name: string;
  authorizedAdult2CC: string;
  authorizedAdult3Name: string;
  authorizedAdult3CC: string;
  
  // Emergency Data
  emergencyContactName: string;
  emergencyContactPhone1: string;
  emergencyContactPhone2: string;
  specialCareInstructions: string;
  
  // Mother's Data
  motherName: string;
  motherCC: string;
  motherAddress: string;
  motherPostalCode: string;
  motherNIF: string;
  motherHomePhone: string;
  motherMobilePhone: string;
  motherEmail: string;
  
  // Father's Data
  fatherName: string;
  fatherCC: string;
  fatherAddress: string;
  fatherPostalCode: string;
  fatherNIF: string;
  fatherHomePhone: string;
  fatherMobilePhone: string;
  fatherEmail: string;
  
  // Guardian Data
  guardianName: string;
  guardianCC: string;
  guardianAddress: string;
  guardianPostalCode: string;
  guardianNIF: string;
  guardianHomePhone: string;
  guardianMobilePhone: string;
  guardianEmail: string;
  
  // Consents
  consentActivitiesInside: boolean;
  consentParentsGroup: boolean;
  consentWebsite: boolean;
  consentFacebook: boolean;
  acceptInternalRegulation: boolean;
  
  submissionDate: string;
}

export interface EmailTemplate {
  subject: string;
  htmlContent: string;
}

/**
 * Helper function to format date strings for display
 */
const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT');
  } catch (error) {
    return dateString; // Return original if parsing fails
  }
};

/**
 * Helper function to format time strings for display
 */
const formatTime = (timeString: string): string => {
  if (!timeString) return '';
  try {
    // If it's already in HH:MM format, return as is
    if (/^\d{2}:\d{2}$/.test(timeString)) {
      return timeString;
    }
    // Otherwise try to parse and format
    const date = new Date(`1970-01-01T${timeString}`);
    return date.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
  } catch (error) {
    return timeString; // Return original if parsing fails
  }
};

/**
 * Maps form data to template variables for email rendering
 * This function extracts all relevant information from the admission form
 * and formats it for use in email templates
 */
export const mapFormDataToTemplateVariables = (
  formData: AdmissionFormData,
  contactData: ContactData
): TemplateVariables => {
  const now = new Date();
  const submissionDate = now.toLocaleDateString('pt-PT');
  const submissionTime = now.toLocaleTimeString('pt-PT');

  // Helper function to format boolean values for display
  const formatBoolean = (value: boolean): string => value ? 'Sim' : 'Não';

  return {
    // Submission info
    submissionDate,
    submissionTime,
    
    // Contact info for subject
    contactName: contactData.name || formData.motherName || formData.fatherName || 'Candidato',
    
    // Student data - matching template variable names exactly
    studentName: formData.studentName || '',
    studentBirthDate: formatDate(formData.studentBirthDate),
    studentSocialSecurity: formData.studentSocialSecurity || '',
    studentAddress: formData.studentAddress || '',
    studentPostalCode: formData.studentPostalCode || '',
    studentCitizenCard: formData.studentCitizenCard || '',
    studentNIF: formData.studentNIF || '',
    registrationDate: formatDate(formData.registrationDate),
    scheduleFrom: formatTime(formData.scheduleFrom),
    scheduleTo: formatTime(formData.scheduleTo),
    
    // Photo data for "Foto" section
    studentPhotoUrl: formData.studentPhotoUrl || '',
    studentPhotoStatus: formData.studentPhotoUrl ? 'Fornecida' : 'Não fornecida',
    studentPhotoDisplay: formData.studentPhotoUrl 
      ? `<a href="${formData.studentPhotoUrl}" target="_blank" style="color:#4d7ed2;">Ver foto do aluno</a>`
      : 'Não fornecida',
    
    // Legacy variable names (for backward compatibility)
    student_name: formData.studentName || '',
    student_photo_url: formData.studentPhotoUrl || '',
    student_birth_date: formatDate(formData.studentBirthDate),
    student_social_security: formData.studentSocialSecurity || '',
    student_address: formData.studentAddress || '',
    student_postal_code: formData.studentPostalCode || '',
    student_citizen_card: formData.studentCitizenCard || '',
    student_nif: formData.studentNIF || '',
    registration_date: formatDate(formData.registrationDate),
    schedule_from: formatTime(formData.scheduleFrom),
    schedule_to: formatTime(formData.scheduleTo),
    
    // Authorized adults
    authorizedAdult1Name: formData.authorizedAdult1Name,
    authorizedAdult1CC: formData.authorizedAdult1CC,
    authorizedAdult2Name: formData.authorizedAdult2Name,
    authorizedAdult2CC: formData.authorizedAdult2CC,
    authorizedAdult3Name: formData.authorizedAdult3Name,
    authorizedAdult3CC: formData.authorizedAdult3CC,
    
    // Emergency data
    emergencyContactName: formData.emergencyContactName,
    emergencyContactPhone1: formData.emergencyContactPhone1,
    emergencyContactPhone2: formData.emergencyContactPhone2,
    specialCareInstructions: formData.specialCareInstructions,
    
    // Mother's data
    motherName: formData.motherName,
    motherCC: formData.motherCC,
    motherAddress: formData.motherAddress,
    motherPostalCode: formData.motherPostalCode,
    motherNIF: formData.motherNIF,
    motherHomePhone: formData.motherHomePhone,
    motherMobilePhone: formData.motherMobilePhone,
    motherEmail: formData.motherEmail,
    
    // Father's data
    fatherName: formData.fatherName,
    fatherCC: formData.fatherCC,
    fatherAddress: formData.fatherAddress,
    fatherPostalCode: formData.fatherPostalCode,
    fatherNIF: formData.fatherNIF,
    fatherHomePhone: formData.fatherHomePhone,
    fatherMobilePhone: formData.fatherMobilePhone,
    fatherEmail: formData.fatherEmail,
    
    // Guardian data
    guardianName: formData.guardianName,
    guardianCC: formData.guardianCC,
    guardianAddress: formData.guardianAddress,
    guardianPostalCode: formData.guardianPostalCode,
    guardianNIF: formData.guardianNIF,
    guardianHomePhone: formData.guardianHomePhone,
    guardianMobilePhone: formData.guardianMobilePhone,
    guardianEmail: formData.guardianEmail,
    
    // Consents
    consentActivitiesInside: formatBoolean(formData.consentActivitiesInside),
    consentParentsGroup: formatBoolean(formData.consentParentsGroup),
    consentWebsite: formatBoolean(formData.consentWebsite),
    consentFacebook: formatBoolean(formData.consentFacebook),
    acceptInternalRegulation: formatBoolean(formData.acceptInternalRegulation)
  };
};

/**
 * Generates comprehensive admission application email with full form data
 */
export const admissionApplicationForm = async (formData: AdmissionFormData, contactData: ContactData): Promise<EmailTemplate> => {
  const variables = mapFormDataToTemplateVariables(formData, contactData);

  const subject = renderEmailTemplate(EMAIL_SUBJECTS.ADMISSION_APPLICATION, variables);
  
  // Fetch the HTML template dynamically
  const templateHtml = await fetchAdmissionApplicationTemplate();
  const htmlContent = renderEmailTemplate(templateHtml, variables);

  return { subject, htmlContent };
};

/**
 * Generates admission notification email with form data (backward compatibility)
 */
export const admissionNotificationWithFormData = (contactData: ContactData): EmailTemplate => {
  // For backward compatibility, if formData is a string, use simple template
  if (typeof contactData.formData === 'string') {
    const variables: TemplateVariables = {
      contactName: contactData.name || 'Candidato Desconhecido',
      name: contactData.name || 'Candidato Desconhecido',
      email: contactData.email || 'Não fornecido',
      phone: contactData.phone || 'Não fornecido',
      formData: contactData.formData || 'Dados não disponíveis'
    };

    // Use simple inquiry template for backward compatibility
    const subject = renderEmailTemplate(EMAIL_SUBJECTS.ADMISSION_INQUIRY, variables);
    const htmlContent = renderEmailTemplate(EMAIL_TEMPLATES.ADMISSION_INQUIRY_NOTIFICATION, variables);

    return { subject, htmlContent };
  }

  // If no proper form data, fall back to inquiry template
  return admissionInquiryNotification(contactData);
};

/**
 * Generates admission inquiry notification (without form data)
 */
export const admissionInquiryNotification = (contactData: ContactData): EmailTemplate => {
  const variables: TemplateVariables = {
    name: contactData.name || 'Visitante Desconhecido',
    email: contactData.email || 'Não fornecido',
    phone: contactData.phone || 'Não fornecido'
  };

  const subject = renderEmailTemplate(EMAIL_SUBJECTS.ADMISSION_INQUIRY, variables);
  const htmlContent = renderEmailTemplate(EMAIL_TEMPLATES.ADMISSION_INQUIRY_NOTIFICATION, variables);

  return { subject, htmlContent };
};

/**
 * Generates contact form notification email
 */
export const contactFormNotification = (contactData: ContactData): EmailTemplate => {
  const variables: TemplateVariables = {
    name: contactData.name || 'Visitante',
    email: contactData.email || 'Não fornecido',
    phone: contactData.phone || 'Não fornecido',
    message: contactData.message || ''
  };

  const subject = renderEmailTemplate(EMAIL_SUBJECTS.CONTACT_FORM, variables);
  const htmlContent = renderEmailTemplate(EMAIL_TEMPLATES.CONTACT_FORM_NOTIFICATION, variables);

  return { subject, htmlContent };
};

/**
 * Template generator factory - gets the appropriate template based on type and data
 */
export const getEmailTemplate = async (
  type: 'admission_application' | 'admission_with_form' | 'admission_inquiry' | 'contact_form',
  data: ContactData | { formData: AdmissionFormData; contactData: ContactData }
): Promise<EmailTemplate> => {
  switch (type) {
    case 'admission_application':
      if ('formData' in data && 'contactData' in data) {
        return await admissionApplicationForm(data.formData, data.contactData);
      }
      throw new Error('admission_application requires formData and contactData');
    case 'admission_with_form':
      return admissionNotificationWithFormData(data as ContactData);
    case 'admission_inquiry':
      return admissionInquiryNotification(data as ContactData);
    case 'contact_form':
      return contactFormNotification(data as ContactData);
    default:
      throw new Error(`Unknown email template type: ${type}`);
  }
};

// Export all templates as a collection (for backward compatibility)
export const EmailTemplates = {
  admissionApplicationForm,
  admissionNotificationWithFormData,
  admissionInquiryNotification,
  contactFormNotification,
  getEmailTemplate
};

export default EmailTemplates; 