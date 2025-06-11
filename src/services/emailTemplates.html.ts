// HTML Email Templates
// This file handles fetching and processing HTML email templates

/**
 * Fetches HTML template content from the public/templates folder
 * @param templateName - Name of the template file (without .html extension)
 * @returns Promise with the HTML content
 */
export const fetchEmailTemplate = async (templateName: string): Promise<string> => {
  try {
    const response = await fetch(`/templates/${templateName}.html`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch template ${templateName}: ${response.status} ${response.statusText}`);
    }
    
    const htmlContent = await response.text();
    return htmlContent;
  } catch (error) {
    console.error(`Error fetching email template ${templateName}:`, error);
    throw new Error(`Template ${templateName} not found or could not be loaded`);
  }
};

/**
 * Fetches the comprehensive admission application form template
 */
export const fetchAdmissionApplicationTemplate = async (): Promise<string> => {
  return fetchEmailTemplate('application_email');
};

// Simple admission inquiry notification (for when no form data is available)
export const ADMISSION_INQUIRY_NOTIFICATION = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
    Nova Solicitação de Informações
  </h2>
  
  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #1e40af; margin-top: 0;">Informações de Contacto:</h3>
    <p><strong>Nome:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Telefone:</strong> {{phone}}</p>
  </div>

  <div style="background-color: #eff6ff; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
    <p style="margin: 0; color: #1e40af;">
      Por favor, contacte esta família para mais informações sobre o processo de admissão.
    </p>
  </div>

  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
  <p style="font-size: 12px; color: #6b7280; text-align: center;">
    Esta solicitação foi submetida através do website da escola.
  </p>
</div>
`;

// Contact form notification template
export const CONTACT_FORM_NOTIFICATION = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
  <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
    Novo Contacto do Website
  </h2>
  
  <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #1e40af; margin-top: 0;">Informações de Contacto:</h3>
    <p><strong>Nome:</strong> {{name}}</p>
    <p><strong>Email:</strong> {{email}}</p>
    <p><strong>Telefone:</strong> {{phone}}</p>
  </div>

  {{#if message}}
  <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #1e40af; margin-top: 0;">Mensagem:</h3>
    <div style="background-color: #f9fafb; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
      {{message}}
    </div>
  </div>
  {{/if}}

  <div style="background-color: #eff6ff; padding: 15px; border-radius: 5px; border-left: 4px solid #3b82f6;">
    <p style="margin: 0; color: #1e40af;">
      Por favor, responda a esta mensagem o mais breve possível.
    </p>
  </div>

  <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
  <p style="font-size: 12px; color: #6b7280; text-align: center;">
    Esta mensagem foi submetida através do website da escola.
  </p>
</div>
`;

// Email subjects as templates
export const EMAIL_SUBJECTS = {
  ADMISSION_APPLICATION: 'Nova Candidatura de Inscrição - {{contactName}}',
  ADMISSION_INQUIRY: 'Nova Solicitação de Informações - {{name}}',
  CONTACT_FORM: 'Novo Contacto do Website - {{name}}'
};

// Template registry for easy access
export const EMAIL_TEMPLATES = {
  // Dynamic template that will be fetched
  ADMISSION_APPLICATION_FORM: 'application_email', // Template name for fetching
  ADMISSION_INQUIRY_NOTIFICATION,
  CONTACT_FORM_NOTIFICATION
} as const;

export default {
  fetchEmailTemplate,
  fetchAdmissionApplicationTemplate,
  EMAIL_TEMPLATES,
  EMAIL_SUBJECTS
}; 