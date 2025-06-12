import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { UserPlus, CheckCircle, Download, Calendar, X, FileText, User, Mail, ArrowLeft, ArrowRight, Phone, Trash2, UserCheck, Edit3, Camera } from "lucide-react";
import { useState, useEffect } from "react";
import { sendAdmissionNotificationWithPDF, sendAdmissionApplicationForm, EmailErrorType } from "@/services/emailService";
import AdmissionFormHTML, { AdmissionFormData } from "@/components/AdmissionFormHTML";
import { generateFormSummary } from "@/services/pdfService";
import { useFormPersistence } from "@/hooks/useFormPersistence";
import { PhotoUpload } from "@/components/PhotoUpload";

const Admission = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  // Photo upload state
  const [studentPhotoData, setStudentPhotoData] = useState<{
    url: string;
    publicId: string;
  } | null>(null);
  
  // Guardian data source state
  const [guardianDataSource, setGuardianDataSource] = useState<'mother' | 'father' | 'custom'>('custom');
  
  // Emergency data source state
  const [emergencyDataSource, setEmergencyDataSource] = useState<'mother' | 'father' | 'custom'>('custom');
  
  // Contact data source state
  const [contactDataSource, setContactDataSource] = useState<'mother' | 'father' | 'custom'>('custom');
  
  // Authorized adults data source state
  const [authorizedAdultsDataSource, setAuthorizedAdultsDataSource] = useState<{
    adult1: 'mother' | 'father' | 'custom';
    adult2: 'mother' | 'father' | 'custom';
    adult3: 'mother' | 'father' | 'custom';
  }>({
    adult1: 'custom',
    adult2: 'custom', 
    adult3: 'custom'
  });
  
  // New form data state for the HTML form
  const [formData, setFormData] = useState<AdmissionFormData>({
    // Dados do Aluno (Student Data)
    studentName: '',
    studentPhoto: null,
    studentPhotoUrl: '',
    studentPhotoPublicId: '',
    studentBirthDate: '',
    studentSocialSecurity: '',
    studentAddress: '',
    studentPostalCode: '',
    studentCitizenCard: '',
    studentNIF: '',
    registrationDate: '',
    scheduleFrom: '',
    scheduleTo: '',
    
    // Adultos autorizados (Authorized Adults)
    authorizedAdult1Name: '',
    authorizedAdult1CC: '',
    authorizedAdult2Name: '',
    authorizedAdult2CC: '',
    authorizedAdult3Name: '',
    authorizedAdult3CC: '',
    
    // Dados de Emergência (Emergency Data)
    emergencyContactName: '',
    emergencyContactPhone1: '',
    emergencyContactPhone2: '',
    specialCareInstructions: '',
    
    // Dados da Mãe (Mother's Data)
    motherName: '',
    motherCC: '',
    motherAddress: '',
    motherPostalCode: '',
    motherNIF: '',
    motherHomePhone: '',
    motherMobilePhone: '',
    motherEmail: '',
    
    // Dados do Pai (Father's Data)
    fatherName: '',
    fatherCC: '',
    fatherAddress: '',
    fatherPostalCode: '',
    fatherNIF: '',
    fatherHomePhone: '',
    fatherMobilePhone: '',
    fatherEmail: '',
    
    // Dados do Encarregado de Educação (Legal Guardian Data)
    guardianName: '',
    guardianCC: '',
    guardianAddress: '',
    guardianPostalCode: '',
    guardianNIF: '',
    guardianHomePhone: '',
    guardianMobilePhone: '',
    guardianEmail: '',
    
    // Consentimentos (Consents)
    consentActivitiesInside: false,
    consentParentsGroup: false,
    consentWebsite: false,
    consentFacebook: false,
    acceptInternalRegulation: false,
    
    // Data de submissão
    submissionDate: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showMissingFieldsTooltip, setShowMissingFieldsTooltip] = useState(false);

  // Auto-sync contact data when contactDataSource is not custom
  useEffect(() => {
    if (contactDataSource !== 'custom') {
      copyParentDataToContact(contactDataSource);
    }
  }, [formData.motherName, formData.motherEmail, formData.motherMobilePhone, 
      formData.fatherName, formData.fatherEmail, formData.fatherMobilePhone, 
      contactDataSource]);

  // Handler for authorized adults data source changes
  const handleAuthorizedAdultsDataSourceChange = (adult: 'adult1' | 'adult2' | 'adult3', source: 'mother' | 'father' | 'custom') => {
    setAuthorizedAdultsDataSource(prev => ({
      ...prev,
      [adult]: source
    }));
  };

  // Function to copy parent data to contact fields
  const copyParentDataToContact = (source: 'mother' | 'father') => {
    const sourcePrefix = source === 'mother' ? 'mother' : 'father';
    
    setContactData({
      name: formData[`${sourcePrefix}Name` as keyof AdmissionFormData] as string || '',
      email: formData[`${sourcePrefix}Email` as keyof AdmissionFormData] as string || '',
      phone: formData[`${sourcePrefix}MobilePhone` as keyof AdmissionFormData] as string || ''
    });
  };

  // Handle contact data source change
  const handleContactSourceChange = (source: 'mother' | 'father' | 'custom') => {
    setContactDataSource(source);
    
    if (source === 'mother' || source === 'father') {
      copyParentDataToContact(source);
    }
  };

  // Initialize form persistence
  const {
    restoreFormData,
    clearSavedData,
    hasSavedData,
    getSavedDataInfo
  } = useFormPersistence(formData, setFormData, {
    storageKey: 'admission-form-data',
    debounceMs: 1500, // Save after 1.5 seconds of inactivity
    excludeFields: ['studentPhoto', 'submissionDate'], // Don't persist files and submission date
    onRestore: (data, extraData) => {
      console.log('Form data restored:', data);
      if (extraData?.guardianDataSource) {
        setGuardianDataSource(extraData.guardianDataSource);
      }
      if (extraData?.emergencyDataSource) {
        setEmergencyDataSource(extraData.emergencyDataSource);
      }
      if (extraData?.contactDataSource) {
        setContactDataSource(extraData.contactDataSource);
      }
      if (extraData?.authorizedAdultsDataSource) {
        setAuthorizedAdultsDataSource(extraData.authorizedAdultsDataSource);
      }
    },
    onSave: (data, extraData) => {
      console.log('Form data saved:', data);
    }
  }, { guardianDataSource, emergencyDataSource, contactDataSource, authorizedAdultsDataSource }); // Pass all data sources as extra data

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setCurrentStep(1);
    
    // Automatically restore previous data if available
    if (hasSavedData()) {
      restoreFormData();
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setContactData({ name: '', email: '', phone: '' });
  };

  const handleClearForm = () => {
    const confirmClear = window.confirm(t('admission.modal.clear_form_confirm'));
    if (confirmClear) {
      // Clear saved data
      clearSavedData();
      
      // Reset data sources
      setGuardianDataSource('custom');
      setEmergencyDataSource('custom');
      setContactDataSource('custom');
      setAuthorizedAdultsDataSource({
        adult1: 'custom',
        adult2: 'custom',
        adult3: 'custom'
      });
      
      // Reset form data to empty state
      setFormData({
        // Dados do Aluno (Student Data)
        studentName: '',
        studentPhoto: null,
        studentPhotoUrl: '',
        studentPhotoPublicId: '',
        studentBirthDate: '',
        studentSocialSecurity: '',
        studentAddress: '',
        studentPostalCode: '',
        studentCitizenCard: '',
        studentNIF: '',
        registrationDate: '',
        scheduleFrom: '',
        scheduleTo: '',
        
        // Adultos autorizados (Authorized Adults)
        authorizedAdult1Name: '',
        authorizedAdult1CC: '',
        authorizedAdult2Name: '',
        authorizedAdult2CC: '',
        authorizedAdult3Name: '',
        authorizedAdult3CC: '',
        
        // Dados de Emergência (Emergency Data)
        emergencyContactName: '',
        emergencyContactPhone1: '',
        emergencyContactPhone2: '',
        specialCareInstructions: '',
        
        // Dados da Mãe (Mother's Data)
        motherName: '',
        motherCC: '',
        motherAddress: '',
        motherPostalCode: '',
        motherNIF: '',
        motherHomePhone: '',
        motherMobilePhone: '',
        motherEmail: '',
        
        // Dados do Pai (Father's Data)
        fatherName: '',
        fatherCC: '',
        fatherAddress: '',
        fatherPostalCode: '',
        fatherNIF: '',
        fatherHomePhone: '',
        fatherMobilePhone: '',
        fatherEmail: '',
        
        // Dados do Encarregado de Educação (Legal Guardian Data)
        guardianName: '',
        guardianCC: '',
        guardianAddress: '',
        guardianPostalCode: '',
        guardianNIF: '',
        guardianHomePhone: '',
        guardianMobilePhone: '',
        guardianEmail: '',
        
        // Consentimentos (Consents)
        consentActivitiesInside: false,
        consentParentsGroup: false,
        consentWebsite: false,
        consentFacebook: false,
        acceptInternalRegulation: false,
        
        // Data de submissão
        submissionDate: ''
      });
      
      // Also reset contact data
      setContactData({ name: '', email: '', phone: '' });
    }
  };

  const handleContinue = () => {
    // Pre-populate contact data from form data if available
    if (formData.motherName || formData.motherEmail || formData.motherMobilePhone) {
      setContactData({
        name: formData.motherName || contactData.name,
        email: formData.motherEmail || contactData.email,
        phone: formData.motherMobilePhone || contactData.phone
      });
    } else if (formData.fatherName || formData.fatherEmail || formData.fatherMobilePhone) {
      setContactData({
        name: formData.fatherName || contactData.name,
        email: formData.fatherEmail || contactData.email,
        phone: formData.fatherMobilePhone || contactData.phone
      });
    } else if (formData.guardianName || formData.guardianEmail || formData.guardianMobilePhone) {
      setContactData({
        name: formData.guardianName || contactData.name,
        email: formData.guardianEmail || contactData.email,
        phone: formData.guardianMobilePhone || contactData.phone
      });
    }
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for missing critical fields
    const missingFields = [];
    if (!contactData.name.trim()) missingFields.push(t('admission.modal.contact.name_label'));
    if (!contactData.email.trim()) missingFields.push(t('admission.modal.contact.email_label'));
    if (!contactData.phone.trim()) missingFields.push(t('admission.modal.contact.phone_label'));
    
    // If there are missing fields, ask for confirmation
    if (missingFields.length > 0) {
      const confirmSubmit = window.confirm(t('admission.modal.incomplete_warning'));
      if (!confirmSubmit) {
        return; // User chose not to continue
      }
    }
    
    setIsSubmitting(true);
    
    // Debug: Log form data before submission
    console.log('Form submission debug:', {
      studentPhotoUrl: formData.studentPhotoUrl,
      studentPhotoPublicId: formData.studentPhotoPublicId,
      studentPhotoData: studentPhotoData,
      formDataKeys: Object.keys(formData),
      hasPhotoUrl: !!formData.studentPhotoUrl
    });
    
    // Fix: Ensure photo URL is in formData if we have studentPhotoData
    const finalFormData = { ...formData };
    if (!finalFormData.studentPhotoUrl && studentPhotoData?.url) {
      console.log('Fixing missing studentPhotoUrl from studentPhotoData');
      finalFormData.studentPhotoUrl = studentPhotoData.url;
      finalFormData.studentPhotoPublicId = studentPhotoData.publicId;
    }
    
    console.log('Final form data for submission:', {
      studentPhotoUrl: finalFormData.studentPhotoUrl,
      studentPhotoPublicId: finalFormData.studentPhotoPublicId
    });
    
    try {
      // Send comprehensive admission application form with full HTML template
      const emailResult = await sendAdmissionApplicationForm(finalFormData, contactData);
      
      // Close modal and show appropriate success/error message
      handleCloseModal();
      
      if (emailResult.success) {
        // Clear saved form data after successful submission
        clearSavedData();
        alert(t('admission.modal.email_sent'));
      } else {
        console.error('Email sending failed:', emailResult.error, 'Type:', emailResult.errorType);
        
        // Provide specific error messages based on error type
        switch (emailResult.errorType) {
          case EmailErrorType.NETWORK_ERROR:
            alert(t('admission.modal.network_error'));
            break;
          case EmailErrorType.TIMEOUT_ERROR:
            alert(t('admission.modal.timeout_error'));
            break;
          case EmailErrorType.AUTHENTICATION_ERROR:
            alert(t('admission.modal.auth_error'));
            break;
          case EmailErrorType.SERVER_ERROR:
            alert(t('admission.modal.server_error'));
            break;
          case EmailErrorType.VALIDATION_ERROR:
            alert(t('admission.modal.validation_error'));
            break;
          default:
            alert(t('admission.modal.email_error'));
        }
      }
    } catch (error) {
      console.error('Submission error:', error);
      handleCloseModal();
      alert(t('admission.modal.submission_error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setContactData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Sync parent data between form and contact data
  const handleFormDataChange = (newFormData: AdmissionFormData) => {
    setFormData(newFormData);
    
    // Auto-sync parent email and phone to contact data from mother's data primarily
    if (newFormData.motherEmail && newFormData.motherMobilePhone) {
      setContactData(prev => ({
        name: newFormData.motherName || prev.name,
        email: newFormData.motherEmail || prev.email,
        phone: newFormData.motherMobilePhone || prev.phone
      }));
    } else if (newFormData.fatherEmail && newFormData.fatherMobilePhone) {
      setContactData(prev => ({
        name: newFormData.fatherName || prev.name,
        email: newFormData.fatherEmail || prev.email,
        phone: newFormData.fatherMobilePhone || prev.phone
      }));
    } else if (newFormData.guardianEmail && newFormData.guardianMobilePhone) {
      setContactData(prev => ({
        name: newFormData.guardianName || prev.name,
        email: newFormData.guardianEmail || prev.email,
        phone: newFormData.guardianMobilePhone || prev.phone
      }));
    }
  };

  // Validate form - check if required fields are filled
  const isFormValid = () => {
    const requiredFields = [
      'studentName', 'studentBirthDate', 'studentAddress', 'studentPostalCode',
      'emergencyContactName', 'emergencyContactPhone1',
      'motherName', 'motherMobilePhone', 'motherEmail',
      'fatherName', 'fatherMobilePhone', 'fatherEmail',
      'acceptInternalRegulation'
    ];
    
    return requiredFields.every(field => {
      const value = formData[field as keyof AdmissionFormData];
      if (typeof value === 'boolean') {
        return value; // For acceptInternalRegulation checkbox
      }
      return value && String(value).trim();
    });
  };

  // Get missing required fields for tooltip
  const getMissingRequiredFields = () => {
    const requiredFields = [
      { key: 'studentName', label: t('admission.form.student_name') },
      { key: 'studentBirthDate', label: t('admission.form.birth_date') },
      { key: 'studentAddress', label: t('admission.form.address') },
      { key: 'studentPostalCode', label: t('admission.form.postal_code') },
      { key: 'emergencyContactName', label: t('admission.form.emergency_contact_name') },
      { key: 'emergencyContactPhone1', label: t('admission.form.emergency_phone1') },
      { key: 'motherName', label: t('admission.form.mother_name') },
      { key: 'motherMobilePhone', label: t('admission.form.mother_mobile') },
      { key: 'motherEmail', label: t('admission.form.mother_email') },
      { key: 'fatherName', label: t('admission.form.father_name') },
      { key: 'fatherMobilePhone', label: t('admission.form.father_mobile') },
      { key: 'fatherEmail', label: t('admission.form.father_email') },
      { key: 'acceptInternalRegulation', label: t('admission.form.accept_regulation') }
    ];
    
    return requiredFields.filter(field => {
      const value = formData[field.key as keyof AdmissionFormData];
      if (typeof value === 'boolean') {
        return !value; // For acceptInternalRegulation checkbox
      }
      return !value || !String(value).trim();
    }).map(field => field.label);
  };

  // Update validation - no longer block submission, just visual feedback
  const isContactFormValid = contactData.name.trim() && contactData.email.trim() && contactData.email.includes('@') && contactData.phone.trim();
  const hasAnyContactInfo = contactData.name.trim() || contactData.email.trim() || contactData.phone.trim();
  
  const requirements = [
    {
      title: t('admission.requirements.age.title'),
      items: [
        t('admission.requirements.age.daycare'),
        t('admission.requirements.age.kindergarten'),
        t('admission.requirements.age.elementary')
      ]
    },
    {
      title: t('admission.requirements.academic.title'),
      items: [
        t('admission.requirements.academic.records'),
        t('admission.requirements.academic.assessment'),
        t('admission.requirements.academic.interview')
      ]
    }
  ];
  
  const documents = [
    t('admission.documents.birth_certificate'),
    t('admission.documents.id_documents'),
    t('admission.documents.proof_residence'),
    t('admission.documents.school_records'),
    t('admission.documents.health_records'),
    t('admission.documents.photos')
  ];
  
  const steps = [
    {
      title: t('admission.steps.submit.title'),
      description: t('admission.steps.submit.description')
    },
    {
      title: t('admission.steps.documents.title'),
      description: t('admission.steps.documents.description')
    },
    {
      title: t('admission.steps.assessment.title'),
      description: t('admission.steps.assessment.description')
    },
    {
      title: t('admission.steps.decision.title'),
      description: t('admission.steps.decision.description')
    }
  ];

  // Photo upload handlers
  const handlePhotoUpload = (url: string, publicId: string) => {
    console.log('Admission: handlePhotoUpload called', { url, publicId });
    setStudentPhotoData({ url, publicId });
    setFormData(prev => {
      const updated = {
        ...prev,
        studentPhotoUrl: url,
        studentPhotoPublicId: publicId
      };
      console.log('Admission: Updated formData with photo', { 
        studentPhotoUrl: updated.studentPhotoUrl, 
        studentPhotoPublicId: updated.studentPhotoPublicId 
      });
      return updated;
    });
  };

  const handlePhotoRemove = () => {
    console.log('Admission: handlePhotoRemove called');
    setStudentPhotoData(null);
    setFormData(prev => ({
      ...prev,
      studentPhoto: null,
      studentPhotoUrl: '',
      studentPhotoPublicId: ''
    }));
  };

  // Sync studentPhotoData with formData if they get out of sync
  useEffect(() => {
    if (studentPhotoData && !formData.studentPhotoUrl) {
      console.log('Syncing studentPhotoData to formData');
      setFormData(prev => ({
        ...prev,
        studentPhotoUrl: studentPhotoData.url,
        studentPhotoPublicId: studentPhotoData.publicId
      }));
    }
  }, [studentPhotoData, formData.studentPhotoUrl]);

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <UserPlus className="h-10 w-10 text-school-blue-dark mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue-dark">{t('admission.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-10">
              {t('admission.intro')}
            </p>
            
            {/* Application Process */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6 text-center">
                {t('admission.process')}
              </h2>
              
              <div className="space-y-6 md:space-y-0 grid md:grid-cols-2 md:gap-6">
                {steps.map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md relative">
                    <div className="absolute -top-4 left-6 bg-school-blue-dark text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-school-blue-dark mb-3 mt-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="#" 
                    className="inline-flex items-center px-6 py-3 border-2 border-school-blue text-school-blue rounded-md hover:bg-school-blue hover:text-white transition-colors"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    {t('admission.schedule_visit')}
                  </a>
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleOpenModal();
                    }}
                >
                    {t('admission.apply_online')}
                </a>
                </div>
              </div>
            </section>
            
            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6 text-center">
                {t('admission.requirements')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {requirements.map((req, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-school-blue-dark mb-4">{req.title}</h3>
                    <ul className="space-y-2">
                      {req.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-school-green-dark mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Required Documents */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6 text-center">
                {t('admission.documents')}
              </h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-school-green-dark mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
            
            {/* Download Forms */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6 text-center">
                {t('admission.download')}
              </h2>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 text-center">
                  {t('admission.forms.download_description')}
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {t('admission.forms.application')}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {t('admission.forms.medical')}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {t('admission.forms.emergency')}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {t('admission.forms.authorization')}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[95vh] flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-school-blue-dark mr-3" />
                <div>
                  <h2 className="text-xl font-semibold text-school-blue-dark">
                    {t('admission.modal.title')}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {currentStep === 1 ? t('admission.modal.step_indicator_simple') : t('admission.modal.step_indicator_simple_2')}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={t('admission.modal.close')}
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="px-6 py-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center">
                <div className={`flex items-center ${currentStep >= 1 ? 'text-school-blue-dark' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 1 ? 'bg-school-blue text-white' : 'bg-gray-200'}`}>
                    1
                  </div>
                  <span className="ml-2 text-sm font-medium">{t('admission.modal.step1.title')}</span>
                </div>
                <div className={`flex-1 h-0.5 mx-4 ${currentStep >= 2 ? 'bg-school-blue' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center ${currentStep >= 2 ? 'text-school-blue-dark' : 'text-gray-400'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${currentStep >= 2 ? 'bg-school-blue text-white' : 'bg-gray-200'}`}>
                    2
                  </div>
                  <span className="ml-2 text-sm font-medium">{t('admission.modal.step2.title')}</span>
                </div>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-auto">
              {/* Step 1 Content - HTML Form */}
              <div className={`${currentStep === 1 ? 'block' : 'hidden'}`}>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-school-blue-dark mb-2">
                      {t('admission.modal.step1.title')}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {t('admission.modal.step1.description')}
                    </p>
                    <p className="text-gray-600">
                      {t('admission.form.description')}
                    </p>
                  </div>
                  
                  {/* HTML Form Component */}
                  <AdmissionFormHTML 
                    formData={formData}
                    onFormDataChange={handleFormDataChange}
                    guardianDataSource={guardianDataSource}
                    onGuardianDataSourceChange={setGuardianDataSource}
                    authorizedAdultsDataSource={authorizedAdultsDataSource}
                    onAuthorizedAdultsDataSourceChange={handleAuthorizedAdultsDataSourceChange}
                    emergencyDataSource={emergencyDataSource}
                    onEmergencyDataSourceChange={setEmergencyDataSource}
                    onPhotoUpload={handlePhotoUpload}
                    onPhotoRemove={handlePhotoRemove}
                  />
                </div>
              </div>

              {/* Step 2 Content */}
              <div className={`${currentStep === 2 ? 'block' : 'hidden'}`}>
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-school-blue-dark mb-2">
                      {t('admission.modal.step2.title')}
                    </h3>
                    <p className="text-gray-600">
                      {t('admission.modal.step2.description')}
                    </p>
                  </div>

                  {/* Contact Data Source Buttons */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-600 mb-3">{t('admission.modal.contact_description')}</p>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => handleContactSourceChange('mother')}
                        className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                          contactDataSource === 'mother'
                            ? 'bg-pink-100 border-pink-300 text-pink-800 shadow-sm'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-pink-50 hover:border-pink-200'
                        }`}
                      >
                        <User className="h-4 w-4 mr-2" />
                        {t('admission.form.copy_from_mother')}
                        {contactDataSource === 'mother' && <UserCheck className="h-4 w-4 ml-2 text-pink-600" />}
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => handleContactSourceChange('father')}
                        className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                          contactDataSource === 'father'
                            ? 'bg-blue-100 border-blue-300 text-blue-800 shadow-sm'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-200'
                        }`}
                      >
                        <User className="h-4 w-4 mr-2" />
                        {t('admission.form.copy_from_father')}
                        {contactDataSource === 'father' && <UserCheck className="h-4 w-4 ml-2 text-blue-600" />}
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => handleContactSourceChange('custom')}
                        className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                          contactDataSource === 'custom'
                            ? 'bg-green-100 border-green-300 text-green-800 shadow-sm'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-green-50 hover:border-green-200'
                        }`}
                      >
                        <Edit3 className="h-4 w-4 mr-2" />
                        {t('admission.form.custom_entry')}
                        {contactDataSource === 'custom' && <UserCheck className="h-4 w-4 ml-2 text-green-600" />}
                      </button>
                    </div>
                    
                    {contactDataSource !== 'custom' && (
                      <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
                        <p className="text-sm text-blue-800">
                          <UserCheck className="h-4 w-4 inline mr-1" />
                          {contactDataSource === 'mother' 
                            ? t('admission.modal.contact_synced_mother')
                            : t('admission.modal.contact_synced_father')
                          }
                        </p>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline h-4 w-4 mr-1" />
                        {t('admission.modal.contact.name_label')}
                      </label>
                      <input
                        type="text"
                        value={contactData.name}
                        onChange={(e) => contactDataSource === 'custom' && handleInputChange('name', e.target.value)}
                        placeholder={t('admission.modal.contact.name_placeholder')}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent ${
                          contactData.name.trim() ? 'border-green-300' : 'border-gray-300'
                        } ${contactDataSource !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                        disabled={contactDataSource !== 'custom'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline h-4 w-4 mr-1" />
                        {t('admission.modal.contact.email_label')}
                      </label>
                      <input
                        type="email"
                        value={contactData.email}
                        onChange={(e) => contactDataSource === 'custom' && handleInputChange('email', e.target.value)}
                        placeholder={t('admission.modal.contact.email_placeholder')}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent ${
                          contactData.email.trim() && contactData.email.includes('@') ? 'border-green-300' : 'border-gray-300'
                        } ${contactDataSource !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                        disabled={contactDataSource !== 'custom'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline h-4 w-4 mr-1" />
                        {t('admission.modal.contact.phone_label')}
                      </label>
                      <input
                        type="text"
                        value={contactData.phone}
                        onChange={(e) => contactDataSource === 'custom' && handleInputChange('phone', e.target.value)}
                        placeholder={t('admission.modal.contact.phone_placeholder')}
                        className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent ${
                          contactData.phone.trim() ? 'border-green-300' : 'border-gray-300'
                        } ${contactDataSource !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                        disabled={contactDataSource !== 'custom'}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-200 flex-shrink-0">
              <div className="flex justify-between">
                <div className="flex items-center gap-3">
                  {currentStep === 2 && (
                    <button
                      onClick={handleBack}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      {t('admission.modal.back')}
                    </button>
                  )}
                  <button
                    onClick={handleClearForm}
                    className="inline-flex items-center px-4 py-2 border border-red-300 text-red-700 rounded-md hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    {t('admission.modal.clear_form')}
                  </button>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleCloseModal}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {t('admission.modal.close')}
                  </button>
                  
                  {currentStep === 1 && (
                    <div 
                      className="relative"
                      onMouseEnter={() => !isFormValid() && setShowMissingFieldsTooltip(true)}
                      onMouseLeave={() => setShowMissingFieldsTooltip(false)}
                    >
                      <button
                        onClick={(e) => {
                          if (!isFormValid()) {
                            e.preventDefault();
                            setShowMissingFieldsTooltip(true);
                            // Hide tooltip after 3 seconds when clicked
                            setTimeout(() => setShowMissingFieldsTooltip(false), 3000);
                          } else {
                            handleContinue();
                          }
                        }}
                        className={`inline-flex items-center px-6 py-2 rounded-md transition-colors ${
                          isFormValid() 
                            ? 'bg-school-blue text-white hover:bg-opacity-90' 
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {t('admission.modal.continue')}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                      
                      {/* Missing Fields Tooltip */}
                      {showMissingFieldsTooltip && !isFormValid() && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-gray-900 text-white text-sm rounded-lg p-3 shadow-lg z-50">
                          <div className="font-medium mb-2">{t('admission.modal.missing_fields_title')}:</div>
                          <ul className="space-y-1 text-xs">
                            {getMissingRequiredFields().map((field, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-red-400 mr-2">•</span>
                                {field}
                              </li>
                            ))}
                          </ul>
                          {/* Tooltip Arrow */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`inline-flex items-center px-6 py-2 rounded-md transition-colors disabled:cursor-not-allowed ${
                        isContactFormValid 
                          ? 'bg-school-blue text-white hover:bg-opacity-90' 
                          : hasAnyContactInfo 
                            ? 'bg-orange-500 text-white hover:bg-orange-600' 
                            : 'bg-gray-400 text-white hover:bg-gray-500'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t('admission.modal.sending_email')}
                        </>
                      ) : (
                        t('admission.modal.submit')
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Admission;
