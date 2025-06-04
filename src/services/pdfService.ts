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
      <title>Admission Application - ${formData.studentName}</title>
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
        <div class="form-title">Admission Application Form</div>
        <div style="font-size: 14px; color: #6b7280; margin-top: 10px;">
          Submitted on: ${new Date().toLocaleDateString('en-GB')}
        </div>
      </div>

      <!-- Student Information -->
      <div class="section">
        <div class="section-title">Student Information</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Student Full Name <span class="required">*</span></span>
            <div class="field-value">${formData.studentName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Birth Date <span class="required">*</span></span>
            <div class="field-value">${formData.studentBirthDate || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Gender <span class="required">*</span></span>
            <div class="field-value">${formData.studentGender || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Nationality <span class="required">*</span></span>
            <div class="field-value">${formData.studentNationality || ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Grade/Level Applying For <span class="required">*</span></span>
          <div class="field-value">${formData.studentGrade || ''}</div>
        </div>
      </div>

      <!-- Parent/Guardian Information -->
      <div class="section">
        <div class="section-title">Parent/Guardian Information</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Parent/Guardian Full Name <span class="required">*</span></span>
            <div class="field-value">${formData.parentName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Email Address <span class="required">*</span></span>
            <div class="field-value">${formData.parentEmail || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Phone Number <span class="required">*</span></span>
            <div class="field-value">${formData.parentPhone || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Occupation</span>
            <div class="field-value">${formData.parentOccupation || ''}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Home Address <span class="required">*</span></span>
          <div class="field-value">${formData.parentAddress || ''}</div>
        </div>
      </div>

      <!-- Emergency Contact -->
      <div class="section">
        <div class="section-title">Emergency Contact</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Emergency Contact Name <span class="required">*</span></span>
            <div class="field-value">${formData.emergencyName || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Emergency Phone <span class="required">*</span></span>
            <div class="field-value">${formData.emergencyPhone || ''}</div>
          </div>
          <div class="field">
            <span class="field-label">Relationship <span class="required">*</span></span>
            <div class="field-value">${formData.emergencyRelation || ''}</div>
          </div>
        </div>
      </div>

      <!-- Previous School Information -->
      <div class="section">
        <div class="section-title">Previous School Information</div>
        <div class="field-group">
          <div class="field">
            <span class="field-label">Previous School Name</span>
            <div class="field-value">${formData.previousSchool || 'N/A'}</div>
          </div>
          <div class="field">
            <span class="field-label">Last Year Attended</span>
            <div class="field-value">${formData.previousSchoolYear || 'N/A'}</div>
          </div>
        </div>
        <div class="field field-full">
          <span class="field-label">Reason for Transfer</span>
          <div class="field-value">${formData.reasonForTransfer || 'N/A'}</div>
        </div>
      </div>

      <!-- Medical Information -->
      <div class="section">
        <div class="section-title">Medical Information</div>
        <div class="field field-full">
          <span class="field-label">Allergies</span>
          <div class="field-value">${formData.allergies || 'None reported'}</div>
        </div>
        <div class="field field-full">
          <span class="field-label">Current Medications</span>
          <div class="field-value">${formData.medications || 'None reported'}</div>
        </div>
        <div class="field field-full">
          <span class="field-label">Medical Conditions</span>
          <div class="field-value">${formData.medicalConditions || 'None reported'}</div>
        </div>
      </div>

      <!-- Additional Information -->
      <div class="section">
        <div class="section-title">Additional Information</div>
        <div class="field field-full">
          <span class="field-label">Special Educational Needs</span>
          <div class="field-value">${formData.specialNeeds || 'None reported'}</div>
        </div>
        <div class="field field-full">
          <span class="field-label">Additional Comments</span>
          <div class="field-value">${formData.additionalComments || 'No additional comments'}</div>
        </div>
      </div>

      <div class="submission-info">
        <strong>Application Submitted Successfully</strong><br>
        This form was completed and submitted online on ${new Date().toLocaleDateString('en-GB')} at ${new Date().toLocaleTimeString('en-GB')}.
      </div>
    </body>
    </html>
  `;

  // For now, return the HTML as a blob (which can be converted to PDF server-side)
  // In a real implementation, you'd use a library like jsPDF or send this to a server
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
 * Create a simple text summary of the form data for email content
 */
export const generateFormSummary = (formData: AdmissionFormData): string => {
  return `
ADMISSION APPLICATION SUMMARY

Student Information:
- Name: ${formData.studentName || 'Not provided'}
- Birth Date: ${formData.studentBirthDate || 'Not provided'}
- Gender: ${formData.studentGender || 'Not provided'}
- Nationality: ${formData.studentNationality || 'Not provided'}
- Grade Applying For: ${formData.studentGrade || 'Not provided'}

Parent/Guardian Information:
- Name: ${formData.parentName || 'Not provided'}
- Email: ${formData.parentEmail || 'Not provided'}
- Phone: ${formData.parentPhone || 'Not provided'}
- Occupation: ${formData.parentOccupation || 'Not provided'}
- Address: ${formData.parentAddress || 'Not provided'}

Emergency Contact:
- Name: ${formData.emergencyName || 'Not provided'}
- Phone: ${formData.emergencyPhone || 'Not provided'}
- Relationship: ${formData.emergencyRelation || 'Not provided'}

Previous School: ${formData.previousSchool || 'N/A'}
Last Year Attended: ${formData.previousSchoolYear || 'N/A'}
Reason for Transfer: ${formData.reasonForTransfer || 'N/A'}

Medical Information:
- Allergies: ${formData.allergies || 'None reported'}
- Medications: ${formData.medications || 'None reported'}
- Medical Conditions: ${formData.medicalConditions || 'None reported'}

Additional Information:
- Special Needs: ${formData.specialNeeds || 'None reported'}
- Comments: ${formData.additionalComments || 'No additional comments'}

Submitted on: ${new Date().toLocaleDateString('en-GB')} at ${new Date().toLocaleTimeString('en-GB')}
  `.trim();
}; 