// HTML Email Templates
// This file handles fetching and processing HTML email templates

/**
 * Fallback template content in case fetch fails
 */
const FALLBACK_APPLICATION_TEMPLATE = `
<!DOCTYPE html>
<html lang="pt">
<head>
  <meta charset="UTF-8" />
  <title>Ficha de Inscrição - Escola Éramos Um</title>
</head>
<body style="margin:0;padding:0;font-family:Arial,sans-serif;background:#f6f6f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;background:#f6f6f6;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;padding:30px;box-shadow:0 0 8px rgba(0,0,0,0.05);">
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h1 style="margin:0;font-size:24px;color:#4d7ed2;">Ficha de Inscrição</h1>
              <p style="color:#888;font-size:14px;">Escola "Éramos Um"</p>
            </td>
          </tr>

          <!-- Submissão -->
          <tr>
            <td style="padding-bottom:20px;color:#333;font-size:14px;">
              <strong>Data:</strong> {{submissionDate}}<br />
              <strong>Hora:</strong> {{submissionTime}}<br />
              <strong>Origem:</strong> Submetido através do site da escola
            </td>
          </tr>

          <!-- DADOS DO ALUNO -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">👦 Dados do Aluno</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>Nome:</strong> {{studentName}}</p>
            <p><strong>Data de Nascimento:</strong> {{studentBirthDate}}</p>
            <p><strong>Nº Segurança Social:</strong> {{studentSocialSecurity}}</p>
            <p><strong>Morada:</strong> {{studentAddress}}</p>
            <p><strong>Código Postal:</strong> {{studentPostalCode}}</p>
            <p><strong>CC:</strong> {{studentCitizenCard}}</p>
            <p><strong>NIF:</strong> {{studentNIF}}</p>
            <p><strong>Data de matrícula:</strong> {{registrationDate}}</p>
            <p><strong>Horário de permanência:</strong> {{scheduleFrom}} às {{scheduleTo}}</p>
            <p><strong>Foto:</strong> {{studentPhotoStatus}}</p>
          </td></tr>

          <!-- AUTORIZADOS -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">🚗 Adultos Autorizados a Levar o Aluno</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>1. Nome:</strong> {{authorizedAdult1Name}} | <strong>CC:</strong> {{authorizedAdult1CC}}</p>
            <p><strong>2. Nome:</strong> {{authorizedAdult2Name}} | <strong>CC:</strong> {{authorizedAdult2CC}}</p>
            <p><strong>3. Nome:</strong> {{authorizedAdult3Name}} | <strong>CC:</strong> {{authorizedAdult3CC}}</p>
          </td></tr>

          <!-- EMERGÊNCIA -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">🚨 Em Caso de Acidente</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>Nome do contacto:</strong> {{emergencyContactName}}</p>
            <p><strong>Contacto principal:</strong> {{emergencyContactPhone1}}</p>
            <p><strong>Contacto alternativo:</strong> {{emergencyContactPhone2}}</p>
            <p><strong>Cuidados especiais:</strong> {{specialCareInstructions}}</p>
          </td></tr>

          <!-- MÃE -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">👩 Dados da Mãe</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>Nome:</strong> {{motherName}}</p>
            <p><strong>CC:</strong> {{motherCC}}</p>
            <p><strong>Morada:</strong> {{motherAddress}}</p>
            <p><strong>Código Postal:</strong> {{motherPostalCode}}</p>
            <p><strong>NIF:</strong> {{motherNIF}}</p>
            <p><strong>Tel. Residência:</strong> {{motherHomePhone}}</p>
            <p><strong>Telemóvel:</strong> {{motherMobilePhone}}</p>
            <p><strong>E-mail:</strong> {{motherEmail}}</p>
          </td></tr>

          <!-- PAI -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">👨 Dados do Pai</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>Nome:</strong> {{fatherName}}</p>
            <p><strong>CC:</strong> {{fatherCC}}</p>
            <p><strong>Morada:</strong> {{fatherAddress}}</p>
            <p><strong>Código Postal:</strong> {{fatherPostalCode}}</p>
            <p><strong>NIF:</strong> {{fatherNIF}}</p>
            <p><strong>Tel. Residência:</strong> {{fatherHomePhone}}</p>
            <p><strong>Telemóvel:</strong> {{fatherMobilePhone}}</p>
            <p><strong>E-mail:</strong> {{fatherEmail}}</p>
          </td></tr>

          <!-- ENCARREGADO -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">👤 Encarregado de Educação</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>Nome:</strong> {{guardianName}}</p>
            <p><strong>CC:</strong> {{guardianCC}}</p>
            <p><strong>Morada:</strong> {{guardianAddress}}</p>
            <p><strong>Código Postal:</strong> {{guardianPostalCode}}</p>
            <p><strong>NIF:</strong> {{guardianNIF}}</p>
            <p><strong>Tel. Residência:</strong> {{guardianHomePhone}}</p>
            <p><strong>Telemóvel:</strong> {{guardianMobilePhone}}</p>
            <p><strong>E-mail:</strong> {{guardianEmail}}</p>
          </td></tr>

          <!-- CONSENTIMENTOS -->
          <tr><td style="border-top:1px solid #eee;padding-top:20px;"><h2 style="color:#4d7ed2;font-size:18px;">✅ Consentimentos</h2></td></tr>
          <tr><td style="font-size:14px;color:#333;">
            <p><strong>Tratamento de dados pessoais (RGPD):</strong> Confirmado</p>
            <p><strong>Partilha de atividades internas:</strong> {{consentActivitiesInside}}</p>
            <p><strong>Partilha entre EE da sala:</strong> {{consentParentsGroup}}</p>
            <p><strong>Publicação no site:</strong> {{consentWebsite}}</p>
            <p><strong>Facebook:</strong> {{consentFacebook}}</p>
            <p><strong>Aceita Regulamento Interno:</strong> {{acceptInternalRegulation}}</p>
          </td></tr>

          <!-- RODAPÉ -->
          <tr><td style="padding-top:30px;color:#888;font-size:12px;text-align:center;">
            Esta ficha foi preenchida e submetida online através do portal da Escola "Éramos Um".
          </td></tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

/**
 * Fetches HTML template content from the public/templates folder
 * @param templateName - Name of the template file (without .html extension)
 * @returns Promise with the HTML content
 */
export const fetchEmailTemplate = async (templateName: string): Promise<string> => {
  // Try multiple possible paths for the template
  const possiblePaths = [
    `/templates/${templateName}.html`,
    `./templates/${templateName}.html`,
    `../public/templates/${templateName}.html`,
    `./public/templates/${templateName}.html`,
    `/public/templates/${templateName}.html`
  ];
  
  for (const templatePath of possiblePaths) {
    try {
      console.log(`Attempting to fetch template from: ${templatePath}`);
      const response = await fetch(templatePath);
      
      console.log(`Fetch response status: ${response.status} ${response.statusText} for path: ${templatePath}`);
      
      if (response.ok) {
        const htmlContent = await response.text();
        console.log(`Template fetched successfully from ${templatePath}, length: ${htmlContent.length} characters`);
        return htmlContent;
      }
    } catch (error) {
      console.log(`Failed to fetch from path ${templatePath}:`, error);
    }
  }
  
  // If all paths failed, log the details and use fallback
  console.error(`All template fetch attempts failed for ${templateName}`);
  console.error(`Current origin: ${window.location.origin}`);
  console.error(`Tried paths:`, possiblePaths.map(path => `${window.location.origin}${path}`));
  
  // Fallback to hardcoded template if it's the application template
  if (templateName === 'application_email') {
    console.warn('Using fallback template for application_email');
    return FALLBACK_APPLICATION_TEMPLATE;
  }
  
  throw new Error(`Template ${templateName} not found or could not be loaded`);
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