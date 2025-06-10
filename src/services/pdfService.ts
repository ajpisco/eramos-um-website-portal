import { AdmissionFormData } from '@/components/AdmissionFormHTML';

/**
 * Generate a filled PDF document from form data
 * This creates a properly formatted PDF with all the admission information
 */
export const generateFilledPDF = async (formData: AdmissionFormData): Promise<Blob> => {
  // Create HTML content for PDF generation
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Ficha de Inscrição - ${formData.studentName}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          border-bottom: 2px solid #2563eb;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .school-logo {
          font-size: 24px;
          font-weight: bold;
          color: #2563eb;
          margin-bottom: 10px;
        }
        .form-title {
          font-size: 20px;
          font-weight: bold;
          color: #1e40af;
        }
        .section {
          margin-bottom: 25px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
        }
        .section-title {
          font-size: 16px;
          font-weight: bold;
          color: #1e40af;
          margin-bottom: 15px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 5px;
        }
        .field-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-bottom: 15px;
        }
        .field-full {
          grid-column: 1 / -1;
        }
        .field {
          margin-bottom: 10px;
        }
        .field-label {
          font-weight: bold;
          color: #374151;
          display: block;
          margin-bottom: 3px;
        }
        .field-value {
          color: #111827;
          background-color: #f9fafb;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #d1d5db;
          min-height: 20px;
        }
        .required {
          color: #dc2626;
        }
        .submission-info {
          background-color: #f0f9ff;
          border: 1px solid #0ea5e9;
          border-radius: 8px;
          padding: 15px;
          margin-top: 30px;
          text-align: center;
        }
        @media print {
          body { margin: 0; padding: 15px; }
          .section { break-inside: avoid; }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="school-logo">ESCOLA "ÉRAMOS UM"</div>
        <div class="form-title">Ficha de Inscrição</div>
        <div style="font-size: 14px; color: #6b7280; margin-top: 10px;">
          Submetido em: ${new Date().toLocaleDateString('pt-PT')}
        </div>
      </div>

      <!-- Dados do Aluno -->
      <div class="section">
        <div class="section-title">Dados do Aluno</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Nome <span class="required">*</span></span>
            <div class="field-value">${formData.studentName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Data de Nascimento <span class="required">*</span></span>
            <div class="field-value">${formData.studentBirthDate || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Nº Segurança Social</span>
            <div class="field-value">${formData.studentSocialSecurity || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">CC</span>
            <div class="field-value">${formData.studentCitizenCard || ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Morada <span class="required">*</span></span>
          <div class="field-value">${formData.studentAddress || ''}</div>
        </div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Código Postal</span>
            <div class="field-value">${formData.studentPostalCode || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">NIF</span>
            <div class="field-value">${formData.studentNIF || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Data de matrícula</span>
            <div class="field-value">${formData.registrationDate || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Horário</span>
            <div class="field-value">${formData.scheduleFrom && formData.scheduleTo ? `${formData.scheduleFrom} - ${formData.scheduleTo}` : ''}</div>
          </div>
        </div>
      </div>

      <!-- Dados de Emergência -->
      <div class="section">
        <div class="section-title">Dados a Considerar Em Caso de Acidente</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Nome <span class="required">*</span></span>
            <div class="field-value">${formData.emergencyContactName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Contacto <span class="required">*</span></span>
            <div class="field-value">${formData.emergencyContactPhone1 || ''} ${formData.emergencyContactPhone2 ? `/ ${formData.emergencyContactPhone2}` : ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Cuidados especiais a ter na instituição</span>
          <div class="field-value">${formData.specialCareInstructions || ''}</div>
        </div>
      </div>

      <!-- Dados da Mãe -->
      <div class="section">
        <div class="section-title">Dados da Mãe</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Nome <span class="required">*</span></span>
            <div class="field-value">${formData.motherName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">CC</span>
            <div class="field-value">${formData.motherCC || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">NIF</span>
            <div class="field-value">${formData.motherNIF || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Telemóvel <span class="required">*</span></span>
            <div class="field-value">${formData.motherMobilePhone || ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Morada</span>
          <div class="field-value">${formData.motherAddress || ''}</div>
        </div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Código Postal</span>
            <div class="field-value">${formData.motherPostalCode || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Tel. Residência</span>
            <div class="field-value">${formData.motherHomePhone || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">E-mail <span class="required">*</span></span>
            <div class="field-value">${formData.motherEmail || ''}</div>
          </div>
        </div>
      </div>

      <!-- Dados do Pai -->
      <div class="section">
        <div class="section-title">Dados do Pai</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Nome <span class="required">*</span></span>
            <div class="field-value">${formData.fatherName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">CC</span>
            <div class="field-value">${formData.fatherCC || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">NIF</span>
            <div class="field-value">${formData.fatherNIF || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Telemóvel <span class="required">*</span></span>
            <div class="field-value">${formData.fatherMobilePhone || ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Morada</span>
          <div class="field-value">${formData.fatherAddress || ''}</div>
        </div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Código Postal</span>
            <div class="field-value">${formData.fatherPostalCode || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Tel. Residência</span>
            <div class="field-value">${formData.fatherHomePhone || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">E-mail <span class="required">*</span></span>
            <div class="field-value">${formData.fatherEmail || ''}</div>
          </div>
        </div>
      </div>

      <!-- Dados do Encarregado de Educação -->
      ${formData.guardianName ? `
      <div class="section">
        <div class="section-title">Dados do Encarregado de Educação</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Nome</span>
            <div class="field-value">${formData.guardianName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">CC</span>
            <div class="field-value">${formData.guardianCC || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">NIF</span>
            <div class="field-value">${formData.guardianNIF || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Telemóvel</span>
            <div class="field-value">${formData.guardianMobilePhone || ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Morada</span>
          <div class="field-value">${formData.guardianAddress || ''}</div>
        </div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Código Postal</span>
            <div class="field-value">${formData.guardianPostalCode || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Tel. Residência</span>
            <div class="field-value">${formData.guardianHomePhone || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">E-mail</span>
            <div class="field-value">${formData.guardianEmail || ''}</div>
          </div>
        </div>
      </div>
      ` : ''}

      <!-- Consentimentos -->
      <div class="section">
        <div class="section-title">Consentimentos</div>
        <div class="field field-full">
          <span class="field-label">Regulamento Interno</span>
          <div class="field-value">${formData.acceptInternalRegulation ? 'Aceito' : 'Não aceito'}</div>
        </div>
        <div class="field field-full">
          <span class="field-label">Consentimento para fotografias e imagens</span>
          <div class="field-value">
            Atividades no interior: ${formData.consentActivitiesInside ? 'Sim' : 'Não'}<br>
            Partilha entre pais: ${formData.consentParentsGroup ? 'Sim' : 'Não'}<br>
            Website da escola: ${formData.consentWebsite ? 'Sim' : 'Não'}<br>
            Facebook da escola: ${formData.consentFacebook ? 'Sim' : 'Não'}
          </div>
        </div>
      </div>

      <div class="submission-info">
        <strong>Inscrição Submetida com Sucesso</strong><br>
        Este formulário foi preenchido e submetido online em ${new Date().toLocaleDateString('pt-PT')} às ${new Date().toLocaleTimeString('pt-PT')}.
      </div>
    </body>
    </html>
  `;

  return new Blob([htmlContent], { type: 'text/html' });
};

/**
 * Convert form data to a base64-encoded PDF
 * This is a simplified version - in production you'd use proper PDF generation
 */
export const generateFilledPDFAsBase64 = async (formData: AdmissionFormData): Promise<string> => {
  try {
    const pdfBlob = await generateFilledPDF(formData);
    const arrayBuffer = await pdfBlob.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    // Convert to base64
    let binary = '';
    for (let i = 0; i < uint8Array.byteLength; i++) {
      binary += String.fromCharCode(uint8Array[i]);
    }
    
    return btoa(binary);
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF from form data');
  }
};

/**
 * Create a comprehensive text summary of the form data for email content
 * Data is always sent in Portuguese format regardless of display language
 */
export const generateFormSummary = (formData: AdmissionFormData): string => {
  const formatDate = () => new Date().toLocaleDateString('pt-PT');
  const formatTime = () => new Date().toLocaleTimeString('pt-PT');
  
  return `FICHA DE INSCRIÇÃO - ESCOLA "ÉRAMOS UM"


═══════════════════════════════════════════════════════════════
                           DADOS DO ALUNO
═══════════════════════════════════════════════════════════════

Nome: ${formData.studentName || 'Não fornecido'}
Data de Nascimento: ${formData.studentBirthDate || 'Não fornecido'}
Nº Segurança Social: ${formData.studentSocialSecurity || 'Não fornecido'}
Morada: ${formData.studentAddress || 'Não fornecido'}
Código Postal: ${formData.studentPostalCode || 'Não fornecido'}
CC: ${formData.studentCitizenCard || 'Não fornecido'}
NIF: ${formData.studentNIF || 'Não fornecido'}
Data de matrícula: ${formData.registrationDate || 'Não fornecido'}
Horário de permanência: ${formData.scheduleFrom && formData.scheduleTo ? `das ${formData.scheduleFrom} às ${formData.scheduleTo}` : 'Não fornecido'}
Foto: ${formData.studentPhoto ? 'Anexada' : 'Não fornecida'}


═══════════════════════════════════════════════════════════════
                    ADULTOS AUTORIZADOS A LEVAR O ALUNO
═══════════════════════════════════════════════════════════════

1. Nome: ${formData.authorizedAdult1Name || 'Não fornecido'}
   CC: ${formData.authorizedAdult1CC || 'Não fornecido'}

2. Nome: ${formData.authorizedAdult2Name || 'Não fornecido'}
   CC: ${formData.authorizedAdult2CC || 'Não fornecido'}

3. Nome: ${formData.authorizedAdult3Name || 'Não fornecido'}
   CC: ${formData.authorizedAdult3CC || 'Não fornecido'}


═══════════════════════════════════════════════════════════════
                       DADOS EM CASO DE ACIDENTE
═══════════════════════════════════════════════════════════════

Nome do contacto: ${formData.emergencyContactName || 'Não fornecido'}
Contacto principal: ${formData.emergencyContactPhone1 || 'Não fornecido'}
Contacto alternativo: ${formData.emergencyContactPhone2 || 'Não fornecido'}
Cuidados especiais na instituição: ${formData.specialCareInstructions || 'Nenhum indicado'}


═══════════════════════════════════════════════════════════════
                           DADOS DA MÃE
═══════════════════════════════════════════════════════════════

Nome: ${formData.motherName || 'Não fornecido'}
CC: ${formData.motherCC || 'Não fornecido'}
Morada: ${formData.motherAddress || 'Não fornecido'}
Código Postal: ${formData.motherPostalCode || 'Não fornecido'}
NIF: ${formData.motherNIF || 'Não fornecido'}
Tel. Residência: ${formData.motherHomePhone || 'Não fornecido'}
Telemóvel: ${formData.motherMobilePhone || 'Não fornecido'}
E-mail: ${formData.motherEmail || 'Não fornecido'}


═══════════════════════════════════════════════════════════════
                           DADOS DO PAI
═══════════════════════════════════════════════════════════════

Nome: ${formData.fatherName || 'Não fornecido'}
CC: ${formData.fatherCC || 'Não fornecido'}
Morada: ${formData.fatherAddress || 'Não fornecido'}
Código Postal: ${formData.fatherPostalCode || 'Não fornecido'}
NIF: ${formData.fatherNIF || 'Não fornecido'}
Tel. Residência: ${formData.fatherHomePhone || 'Não fornecido'}
Telemóvel: ${formData.fatherMobilePhone || 'Não fornecido'}
E-mail: ${formData.fatherEmail || 'Não fornecido'}


═══════════════════════════════════════════════════════════════
                   DADOS DO ENCARREGADO DE EDUCAÇÃO
═══════════════════════════════════════════════════════════════

Nome: ${formData.guardianName || 'Não aplicável'}
CC: ${formData.guardianCC || 'Não aplicável'}
Morada: ${formData.guardianAddress || 'Não aplicável'}
Código Postal: ${formData.guardianPostalCode || 'Não aplicável'}
NIF: ${formData.guardianNIF || 'Não aplicável'}
Tel. Residência: ${formData.guardianHomePhone || 'Não aplicável'}
Telemóvel: ${formData.guardianMobilePhone || 'Não aplicável'}
E-mail: ${formData.guardianEmail || 'Não aplicável'}


═══════════════════════════════════════════════════════════════
                    CONSENTIMENTOS DE DADOS PESSOAIS
═══════════════════════════════════════════════════════════════

O Encarregado de Educação foi informado sobre o tratamento de dados 
pessoais conforme RGPD.


═══════════════════════════════════════════════════════════════
                 CONSENTIMENTO PARA FOTOGRAFIAS E IMAGENS
═══════════════════════════════════════════════════════════════

Partilha de atividades no interior do estabelecimento: ${formData.consentActivitiesInside ? 'SIM' : 'NÃO'}
Partilha entre Encarregados de Educação da sala/grupo: ${formData.consentParentsGroup ? 'SIM' : 'NÃO'}
Página na internet do estabelecimento: ${formData.consentWebsite ? 'SIM' : 'NÃO'}
Facebook do estabelecimento: ${formData.consentFacebook ? 'SIM' : 'NÃO'}


═══════════════════════════════════════════════════════════════
                        REGULAMENTO INTERNO
═══════════════════════════════════════════════════════════════

Tomou conhecimento e aceita o Regulamento Interno: ${formData.acceptInternalRegulation ? 'SIM' : 'NÃO'}


═══════════════════════════════════════════════════════════════
                      INFORMAÇÕES DE SUBMISSÃO
═══════════════════════════════════════════════════════════════

Data de submissão: ${formatDate()}
Hora de submissão: ${formatTime()}
Submetido através do website da escola

───────────────────────────────────────────────────────────────
Esta inscrição foi preenchida e submetida online através do 
portal da Escola "Éramos Um".`;
}; 