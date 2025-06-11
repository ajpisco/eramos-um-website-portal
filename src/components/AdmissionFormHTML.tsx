import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { User, UserCheck, Edit3 } from 'lucide-react';
import { PhotoUpload } from '@/components/PhotoUpload';

export interface AdmissionFormData {
  // Dados do Aluno (Student Data)
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
  
  // Adultos autorizados (Authorized Adults)
  authorizedAdult1Name: string;
  authorizedAdult1CC: string;
  authorizedAdult2Name: string;
  authorizedAdult2CC: string;
  authorizedAdult3Name: string;
  authorizedAdult3CC: string;
  
  // Dados de Emergência (Emergency Data)
  emergencyContactName: string;
  emergencyContactPhone1: string;
  emergencyContactPhone2: string;
  specialCareInstructions: string;
  
  // Dados da Mãe (Mother's Data)
  motherName: string;
  motherCC: string;
  motherAddress: string;
  motherPostalCode: string;
  motherNIF: string;
  motherHomePhone: string;
  motherMobilePhone: string;
  motherEmail: string;
  
  // Dados do Pai (Father's Data)
  fatherName: string;
  fatherCC: string;
  fatherAddress: string;
  fatherPostalCode: string;
  fatherNIF: string;
  fatherHomePhone: string;
  fatherMobilePhone: string;
  fatherEmail: string;
  
  // Dados do Encarregado de Educação (Legal Guardian Data)
  guardianName: string;
  guardianCC: string;
  guardianAddress: string;
  guardianPostalCode: string;
  guardianNIF: string;
  guardianHomePhone: string;
  guardianMobilePhone: string;
  guardianEmail: string;
  
  // Consentimentos (Consents)
  consentActivitiesInside: boolean;
  consentParentsGroup: boolean;
  consentWebsite: boolean;
  consentFacebook: boolean;
  acceptInternalRegulation: boolean;
  
  // Data de submissão
  submissionDate: string;
}

interface AdmissionFormHTMLProps {
  formData: AdmissionFormData;
  onFormDataChange: (data: AdmissionFormData) => void;
  guardianDataSource: 'mother' | 'father' | 'custom';
  onGuardianDataSourceChange: (source: 'mother' | 'father' | 'custom') => void;
  authorizedAdultsDataSource: {
    adult1: 'mother' | 'father' | 'custom';
    adult2: 'mother' | 'father' | 'custom';
    adult3: 'mother' | 'father' | 'custom';
  };
  onAuthorizedAdultsDataSourceChange: (adult: 'adult1' | 'adult2' | 'adult3', source: 'mother' | 'father' | 'custom') => void;
  emergencyDataSource: 'mother' | 'father' | 'custom';
  onEmergencyDataSourceChange: (source: 'mother' | 'father' | 'custom') => void;
  onPhotoUpload?: (url: string, publicId: string) => void;
  onPhotoRemove?: () => void;
  className?: string;
}

const AdmissionFormHTML: React.FC<AdmissionFormHTMLProps> = ({ 
  formData, 
  onFormDataChange,
  guardianDataSource,
  onGuardianDataSourceChange,
  authorizedAdultsDataSource,
  onAuthorizedAdultsDataSourceChange,
  emergencyDataSource,
  onEmergencyDataSourceChange,
  onPhotoUpload,
  onPhotoRemove,
  className = "" 
}) => {
  const { t } = useLanguage();
  
  // Track which buttons have been used for authorized adults
  const [usedMotherButton, setUsedMotherButton] = useState(false);
  const [usedFatherButton, setUsedFatherButton] = useState(false);
  
  // Track how many authorized adult slots are visible (starts with 1)
  const [visibleAdults, setVisibleAdults] = useState(1);

  const handleInputChange = (field: keyof AdmissionFormData, value: string | boolean | File | null) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  const handleFileChange = (field: keyof AdmissionFormData, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    handleInputChange(field, file);
  };

  // Function to copy parent data to guardian fields
  const copyParentDataToGuardian = (source: 'mother' | 'father') => {
    const sourcePrefix = source === 'mother' ? 'mother' : 'father';
    
    const updatedFormData = {
      ...formData,
      guardianName: formData[`${sourcePrefix}Name` as keyof AdmissionFormData] as string,
      guardianCC: formData[`${sourcePrefix}CC` as keyof AdmissionFormData] as string,
      guardianAddress: formData[`${sourcePrefix}Address` as keyof AdmissionFormData] as string,
      guardianPostalCode: formData[`${sourcePrefix}PostalCode` as keyof AdmissionFormData] as string,
      guardianNIF: formData[`${sourcePrefix}NIF` as keyof AdmissionFormData] as string,
      guardianHomePhone: formData[`${sourcePrefix}HomePhone` as keyof AdmissionFormData] as string,
      guardianMobilePhone: formData[`${sourcePrefix}MobilePhone` as keyof AdmissionFormData] as string,
      guardianEmail: formData[`${sourcePrefix}Email` as keyof AdmissionFormData] as string,
    };
    
    onFormDataChange(updatedFormData);
  };

  // Function to copy parent data to emergency contact fields
  const copyParentDataToEmergency = (source: 'mother' | 'father') => {
    const sourcePrefix = source === 'mother' ? 'mother' : 'father';
    
    const updatedFormData = {
      ...formData,
      emergencyContactName: formData[`${sourcePrefix}Name` as keyof AdmissionFormData] as string,
      emergencyContactPhone1: formData[`${sourcePrefix}MobilePhone` as keyof AdmissionFormData] as string,
      emergencyContactPhone2: formData[`${sourcePrefix}HomePhone` as keyof AdmissionFormData] as string,
    };
    
    onFormDataChange(updatedFormData);
  };

  // Function to copy parent data to specific authorized adult
  const copyParentDataToAuthorizedAdult = (adultNumber: number, source: 'mother' | 'father') => {
    const sourcePrefix = source === 'mother' ? 'mother' : 'father';
    
    const updatedFormData = {
      ...formData,
      [`authorizedAdult${adultNumber}Name`]: formData[`${sourcePrefix}Name` as keyof AdmissionFormData] as string,
      [`authorizedAdult${adultNumber}CC`]: formData[`${sourcePrefix}CC` as keyof AdmissionFormData] as string,
    };
    
    onFormDataChange(updatedFormData);
  };

  // Function to count how many adults have data or are assigned
  const countActiveAdults = () => {
    let count = 0;
    for (let i = 1; i <= 3; i++) {
      const name = formData[`authorizedAdult${i}Name` as keyof AdmissionFormData] as string;
      const cc = formData[`authorizedAdult${i}CC` as keyof AdmissionFormData] as string;
      const source = authorizedAdultsDataSource[`adult${i}` as 'adult1' | 'adult2' | 'adult3'];
      
      if (name || cc || source !== 'custom') {
        count = i; // Set count to the highest adult number with data
      }
    }
    return Math.max(count, 1); // Always show at least 1 adult
  };

  // Update visible adults based on data
  const updateVisibleAdults = () => {
    const activeCount = countActiveAdults();
    setVisibleAdults(activeCount);
  };

  // Handle simple button selection for authorized adults
  const handleAuthorizedAdultSimpleSelection = (source: 'mother' | 'father') => {
    // Check if this button is already used
    if ((source === 'mother' && usedMotherButton) || (source === 'father' && usedFatherButton)) {
      // Toggle off - remove the selection and shift others up
      if (source === 'mother') {
        setUsedMotherButton(false);
      } else {
        setUsedFatherButton(false);
      }
      
      // Get current arrangement
      const currentArrangement = [
        { source: authorizedAdultsDataSource.adult1, name: formData.authorizedAdult1Name, cc: formData.authorizedAdult1CC },
        { source: authorizedAdultsDataSource.adult2, name: formData.authorizedAdult2Name, cc: formData.authorizedAdult2CC },
        { source: authorizedAdultsDataSource.adult3, name: formData.authorizedAdult3Name, cc: formData.authorizedAdult3CC }
      ];
      
      // Separate custom data and parent data
      const customAdults = currentArrangement.filter(adult => 
        adult.source === 'custom' && (adult.name.trim() || adult.cc.trim())
      );
      const parentAdults = currentArrangement.filter(adult => 
        adult.source !== source && adult.source !== 'custom'
      );
      
      // Prepare new form data with cleared authorized adults
      const newFormData = {
        ...formData,
        authorizedAdult1Name: '',
        authorizedAdult1CC: '',
        authorizedAdult2Name: '',
        authorizedAdult2CC: '',
        authorizedAdult3Name: '',
        authorizedAdult3CC: '',
      };
      
      // Reset all adult data sources to custom
      onAuthorizedAdultsDataSourceChange('adult1', 'custom');
      onAuthorizedAdultsDataSourceChange('adult2', 'custom');
      onAuthorizedAdultsDataSourceChange('adult3', 'custom');
      
      // Combine custom and remaining parent data, prioritizing custom data
      const allRemainingAdults = [...customAdults, ...parentAdults];
      
      // Reassign all remaining data
      allRemainingAdults.forEach((adult, index) => {
        if (index < 3) { // Only assign if we have space for 3 adults
          const adultKey = `adult${index + 1}` as 'adult1' | 'adult2' | 'adult3';
          onAuthorizedAdultsDataSourceChange(adultKey, adult.source);
          
          // Assign the data
          if (index === 0) {
            if (adult.source === 'custom') {
              newFormData.authorizedAdult1Name = adult.name;
              newFormData.authorizedAdult1CC = adult.cc;
            } else {
              newFormData.authorizedAdult1Name = adult.source === 'mother' ? formData.motherName : formData.fatherName;
              newFormData.authorizedAdult1CC = adult.source === 'mother' ? formData.motherCC : formData.fatherCC;
            }
          } else if (index === 1) {
            if (adult.source === 'custom') {
              newFormData.authorizedAdult2Name = adult.name;
              newFormData.authorizedAdult2CC = adult.cc;
            } else {
              newFormData.authorizedAdult2Name = adult.source === 'mother' ? formData.motherName : formData.fatherName;
              newFormData.authorizedAdult2CC = adult.source === 'mother' ? formData.motherCC : formData.fatherCC;
            }
          } else if (index === 2) {
            if (adult.source === 'custom') {
              newFormData.authorizedAdult3Name = adult.name;
              newFormData.authorizedAdult3CC = adult.cc;
            } else {
              newFormData.authorizedAdult3Name = adult.source === 'mother' ? formData.motherName : formData.fatherName;
              newFormData.authorizedAdult3CC = adult.source === 'mother' ? formData.motherCC : formData.fatherCC;
            }
          }
        }
      });
      
      // Apply all changes at once
      onFormDataChange(newFormData);
      
      // Update visible adults after state change
      setTimeout(updateVisibleAdults, 0);
      return;
    }

    // Helper function to check if an adult slot has custom data
    const hasCustomData = (adultKey: 'adult1' | 'adult2' | 'adult3') => {
      const adultNumber = parseInt(adultKey.replace('adult', ''));
      const name = formData[`authorizedAdult${adultNumber}Name` as keyof AdmissionFormData] as string;
      const cc = formData[`authorizedAdult${adultNumber}CC` as keyof AdmissionFormData] as string;
      const source = authorizedAdultsDataSource[adultKey];
      
      // Has custom data if source is custom AND there's actual data in the fields
      return source === 'custom' && (name.trim() !== '' || cc.trim() !== '');
    };

    // Toggle on - find the first available adult slot (FIFO) that doesn't have custom data
    let targetAdult: 'adult1' | 'adult2' | 'adult3' | null = null;
    
    if (authorizedAdultsDataSource.adult1 === 'custom' && !hasCustomData('adult1')) {
      targetAdult = 'adult1';
    } else if (authorizedAdultsDataSource.adult2 === 'custom' && !hasCustomData('adult2')) {
      targetAdult = 'adult2';
    } else if (authorizedAdultsDataSource.adult3 === 'custom' && !hasCustomData('adult3')) {
      targetAdult = 'adult3';
    }
    
    if (targetAdult) {
      // Update the data source for this adult
      onAuthorizedAdultsDataSourceChange(targetAdult, source);
      
      // Copy data from parent
      const adultNumber = parseInt(targetAdult.replace('adult', ''));
      copyParentDataToAuthorizedAdult(adultNumber, source);
      
      // Mark button as used
      if (source === 'mother') {
        setUsedMotherButton(true);
      } else {
        setUsedFatherButton(true);
      }
      
      // Expand visible adults if we're using a new slot
      const newVisibleCount = Math.max(visibleAdults, adultNumber);
      setVisibleAdults(newVisibleCount);
    }
  };

  // Add a new adult slot (+ button functionality)
  const addNewAdultSlot = () => {
    if (visibleAdults < 3) {
      setVisibleAdults(visibleAdults + 1);
    }
  };

  // Handle guardian data source change
  const handleGuardianSourceChange = (source: 'mother' | 'father' | 'custom') => {
    onGuardianDataSourceChange(source);
    
    if (source === 'mother' || source === 'father') {
      copyParentDataToGuardian(source);
    }
  };

  // Handle emergency data source change
  const handleEmergencySourceChange = (source: 'mother' | 'father' | 'custom') => {
    onEmergencyDataSourceChange(source);
    
    if (source === 'mother' || source === 'father') {
      copyParentDataToEmergency(source);
    }
  };

  // Update visible adults when form data changes (for custom entries)
  useEffect(() => {
    updateVisibleAdults();
  }, [formData.authorizedAdult1Name, formData.authorizedAdult1CC, 
      formData.authorizedAdult2Name, formData.authorizedAdult2CC,
      formData.authorizedAdult3Name, formData.authorizedAdult3CC,
      authorizedAdultsDataSource]);

  // Auto-sync guardian data when parent data changes (if guardian is linked to parent)
  useEffect(() => {
    if (guardianDataSource === 'mother' || guardianDataSource === 'father') {
      copyParentDataToGuardian(guardianDataSource);
    }
  }, [
    formData.motherName, formData.motherCC, formData.motherAddress, formData.motherPostalCode,
    formData.motherNIF, formData.motherHomePhone, formData.motherMobilePhone, formData.motherEmail,
    formData.fatherName, formData.fatherCC, formData.fatherAddress, formData.fatherPostalCode,
    formData.fatherNIF, formData.fatherHomePhone, formData.fatherMobilePhone, formData.fatherEmail,
    guardianDataSource
  ]);

  // Auto-sync emergency data when parent data changes (if emergency is linked to parent)
  useEffect(() => {
    if (emergencyDataSource === 'mother' || emergencyDataSource === 'father') {
      copyParentDataToEmergency(emergencyDataSource);
    }
  }, [
    formData.motherName, formData.motherHomePhone, formData.motherMobilePhone,
    formData.fatherName, formData.fatherHomePhone, formData.fatherMobilePhone,
    emergencyDataSource
  ]);

  // Auto-sync authorized adults data when parent data changes
  useEffect(() => {
    Object.entries(authorizedAdultsDataSource).forEach(([adult, source]) => {
      if (source === 'mother' || source === 'father') {
        const adultNumber = parseInt(adult.replace('adult', ''));
        copyParentDataToAuthorizedAdult(adultNumber, source);
      }
    });
  }, [
    formData.motherName, formData.motherCC,
    formData.fatherName, formData.fatherCC,
    authorizedAdultsDataSource
  ]);

  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const sectionClasses = "bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6";
  const requiredClasses = "text-red-500";

  // Guardian input classes - disabled when copying from parent
  const guardianInputClasses = `${inputClasses} ${guardianDataSource !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`;

  // Emergency input classes - disabled when copying from parent
  const emergencyInputClasses = `${inputClasses} ${emergencyDataSource !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`;

  // Function to get authorized adult input classes
  const getAuthorizedAdultInputClasses = (adult: 'adult1' | 'adult2' | 'adult3') => {
    return `${inputClasses} ${authorizedAdultsDataSource[adult] !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`;
  };

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      {/* Dados do Aluno (Student Data) */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.student_data')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.student_name')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => handleInputChange('studentName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.student_name_placeholder')}
            />
          </div>
          
          {/* Photo Upload Section */}
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.student_photo')}
            </label>
            <div className="mt-2">
              <PhotoUpload
                studentName={formData.studentName || 'Student'}
                onPhotoUpload={(url, publicId) => {
                  if (onPhotoUpload) {
                    onPhotoUpload(url, publicId);
                  }
                  handleInputChange('studentPhotoUrl', url);
                  handleInputChange('studentPhotoPublicId', publicId);
                }}
                onPhotoRemove={() => {
                  if (onPhotoRemove) {
                    onPhotoRemove();
                  }
                  handleInputChange('studentPhoto', null);
                  handleInputChange('studentPhotoUrl', '');
                  handleInputChange('studentPhotoPublicId', '');
                }}
                currentPhoto={formData.studentPhotoUrl ? {
                  url: formData.studentPhotoUrl,
                  publicId: formData.studentPhotoPublicId
                } : undefined}
                className="w-full"
              />
            </div>
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.birth_date')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="date"
              required
              value={formData.studentBirthDate}
              onChange={(e) => handleInputChange('studentBirthDate', e.target.value)}
              className={inputClasses}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.social_security')}
            </label>
            <input
              type="text"
              value={formData.studentSocialSecurity}
              onChange={(e) => handleInputChange('studentSocialSecurity', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.social_security_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.citizen_card')}
            </label>
            <input
              type="text"
              value={formData.studentCitizenCard}
              onChange={(e) => handleInputChange('studentCitizenCard', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.citizen_card_placeholder')}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.address')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.studentAddress}
              onChange={(e) => handleInputChange('studentAddress', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.address_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.postal_code')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.studentPostalCode}
              onChange={(e) => handleInputChange('studentPostalCode', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.postal_code_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.nif')}
            </label>
            <input
              type="text"
              value={formData.studentNIF}
              onChange={(e) => handleInputChange('studentNIF', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.nif_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.registration_date')}
            </label>
            <input
              type="date"
              value={formData.registrationDate}
              onChange={(e) => handleInputChange('registrationDate', e.target.value)}
              className={inputClasses}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.schedule_from')}
            </label>
            <input
              type="time"
              value={formData.scheduleFrom}
              onChange={(e) => handleInputChange('scheduleFrom', e.target.value)}
              className={inputClasses}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.schedule_to')}
            </label>
            <input
              type="time"
              value={formData.scheduleTo}
              onChange={(e) => handleInputChange('scheduleTo', e.target.value)}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      {/* Dados da Mãe (Mother's Data) */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.mother_data')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.mother_name')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.motherName}
              onChange={(e) => handleInputChange('motherName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_name_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.mother_cc')}
            </label>
            <input
              type="text"
              value={formData.motherCC}
              onChange={(e) => handleInputChange('motherCC', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_cc_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.mother_nif')}
            </label>
            <input
              type="text"
              value={formData.motherNIF}
              onChange={(e) => handleInputChange('motherNIF', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_nif_placeholder')}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.mother_address')}
            </label>
            <input
              type="text"
              value={formData.motherAddress}
              onChange={(e) => handleInputChange('motherAddress', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_address_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.mother_postal_code')}
            </label>
            <input
              type="text"
              value={formData.motherPostalCode}
              onChange={(e) => handleInputChange('motherPostalCode', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_postal_code_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.mother_home_phone')}
            </label>
            <input
              type="tel"
              value={formData.motherHomePhone}
              onChange={(e) => handleInputChange('motherHomePhone', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_home_phone_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.mother_mobile')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.motherMobilePhone}
              onChange={(e) => handleInputChange('motherMobilePhone', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_mobile_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.mother_email')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="email"
              required
              value={formData.motherEmail}
              onChange={(e) => handleInputChange('motherEmail', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.mother_email_placeholder')}
            />
          </div>
        </div>
      </div>

      {/* Dados do Pai (Father's Data) */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.father_data')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.father_name')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.fatherName}
              onChange={(e) => handleInputChange('fatherName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_name_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.father_cc')}
            </label>
            <input
              type="text"
              value={formData.fatherCC}
              onChange={(e) => handleInputChange('fatherCC', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_cc_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.father_nif')}
            </label>
            <input
              type="text"
              value={formData.fatherNIF}
              onChange={(e) => handleInputChange('fatherNIF', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_nif_placeholder')}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.father_address')}
            </label>
            <input
              type="text"
              value={formData.fatherAddress}
              onChange={(e) => handleInputChange('fatherAddress', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_address_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.father_postal_code')}
            </label>
            <input
              type="text"
              value={formData.fatherPostalCode}
              onChange={(e) => handleInputChange('fatherPostalCode', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_postal_code_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.father_home_phone')}
            </label>
            <input
              type="tel"
              value={formData.fatherHomePhone}
              onChange={(e) => handleInputChange('fatherHomePhone', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_home_phone_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.father_mobile')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.fatherMobilePhone}
              onChange={(e) => handleInputChange('fatherMobilePhone', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_mobile_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.father_email')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="email"
              required
              value={formData.fatherEmail}
              onChange={(e) => handleInputChange('fatherEmail', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.father_email_placeholder')}
            />
          </div>
        </div>
      </div>

      {/* Dados do Encarregado de Educação (Guardian Data) */}
      <div className={sectionClasses}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-school-blue-dark">
            {t('admission.form.guardian_data')}
          </h3>
        </div>
        
        {/* Guardian Data Source Buttons */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-3">{t('admission.form.guardian_description')}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleGuardianSourceChange('mother')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                guardianDataSource === 'mother'
                  ? 'bg-pink-100 border-pink-300 text-pink-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-pink-50 hover:border-pink-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              {t('admission.form.copy_from_mother')}
              {guardianDataSource === 'mother' && <UserCheck className="h-4 w-4 ml-2 text-pink-600" />}
            </button>
            
            <button
              type="button"
              onClick={() => handleGuardianSourceChange('father')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                guardianDataSource === 'father'
                  ? 'bg-blue-100 border-blue-300 text-blue-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              {t('admission.form.copy_from_father')}
              {guardianDataSource === 'father' && <UserCheck className="h-4 w-4 ml-2 text-blue-600" />}
            </button>
            
            <button
              type="button"
              onClick={() => handleGuardianSourceChange('custom')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                guardianDataSource === 'custom'
                  ? 'bg-green-100 border-green-300 text-green-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-green-50 hover:border-green-200'
              }`}
            >
              <Edit3 className="h-4 w-4 mr-2" />
              {t('admission.form.custom_entry')}
              {guardianDataSource === 'custom' && <UserCheck className="h-4 w-4 ml-2 text-green-600" />}
            </button>
          </div>
          
          {guardianDataSource !== 'custom' && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800">
                <UserCheck className="h-4 w-4 inline mr-1" />
                {guardianDataSource === 'mother' 
                  ? t('admission.form.guardian_synced_mother')
                  : t('admission.form.guardian_synced_father')
                }
              </p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.guardian_name')}
            </label>
            <input
              type="text"
              value={formData.guardianName}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianName', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_name_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.guardian_cc')}
            </label>
            <input
              type="text"
              value={formData.guardianCC}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianCC', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_cc_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.guardian_nif')}
            </label>
            <input
              type="text"
              value={formData.guardianNIF}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianNIF', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_nif_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.guardian_address')}
            </label>
            <input
              type="text"
              value={formData.guardianAddress}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianAddress', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_address_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.guardian_postal_code')}
            </label>
            <input
              type="text"
              value={formData.guardianPostalCode}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianPostalCode', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_postal_code_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.guardian_home_phone')}
            </label>
            <input
              type="tel"
              value={formData.guardianHomePhone}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianHomePhone', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_home_phone_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.guardian_mobile')}
            </label>
            <input
              type="tel"
              value={formData.guardianMobilePhone}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianMobilePhone', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_mobile_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.guardian_email')}
            </label>
            <input
              type="email"
              value={formData.guardianEmail}
              onChange={(e) => guardianDataSource === 'custom' && handleInputChange('guardianEmail', e.target.value)}
              className={guardianInputClasses}
              placeholder={t('admission.form.guardian_email_placeholder')}
              disabled={guardianDataSource !== 'custom'}
            />
          </div>
        </div>
      </div>

      {/* Adultos Autorizados (Authorized Adults) */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.authorized_adults')}
        </h3>
        <p className="text-sm text-gray-600 mb-4">{t('admission.form.authorized_adults_description')}</p>
        
        {/* Simple Selection Buttons for Authorized Adults */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-3">
            {t('admission.form.authorized_data_source')}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-3">
            <button
              type="button"
              onClick={() => handleAuthorizedAdultSimpleSelection('mother')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                usedMotherButton
                  ? 'bg-pink-100 border-pink-300 text-pink-800 hover:bg-pink-200'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-pink-50 hover:border-pink-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              {t('admission.form.copy_from_mother')}
              {usedMotherButton && <UserCheck className="h-4 w-4 ml-2 text-pink-600" />}
            </button>
            
            <button
              type="button"
              onClick={() => handleAuthorizedAdultSimpleSelection('father')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                usedFatherButton
                  ? 'bg-blue-100 border-blue-300 text-blue-800 hover:bg-blue-200'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              {t('admission.form.copy_from_father')}
              {usedFatherButton && <UserCheck className="h-4 w-4 ml-2 text-blue-600" />}
            </button>
          </div>
        </div>
        
        {Array.from({ length: visibleAdults }, (_, index) => {
          const num = index + 1;
          const adultKey = `adult${num}` as 'adult1' | 'adult2' | 'adult3';
          const currentSource = authorizedAdultsDataSource[adultKey];
          const isAssigned = currentSource !== 'custom';
          
          return (
            <div key={num} className={`mb-4 p-4 rounded-lg transition-all duration-200 ${
              isAssigned ? 'bg-gray-50 border border-gray-200' : 'bg-gray-25 border border-gray-100'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-md font-medium text-gray-800">
                  {t('admission.form.authorized_adult')} {num}
                </h4>
                {isAssigned && (
                  <span className={`text-xs px-2 py-1 rounded ${
                    currentSource === 'mother' ? 'bg-pink-100 text-pink-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {currentSource === 'mother' ? t('admission.form.from_mother') : t('admission.form.from_father')}
                  </span>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClasses}>
                    {t('admission.form.authorized_adult_name')}
                  </label>
                  <input
                    type="text"
                    value={formData[`authorizedAdult${num}Name` as keyof AdmissionFormData] as string}
                    onChange={(e) => currentSource === 'custom' && handleInputChange(`authorizedAdult${num}Name` as keyof AdmissionFormData, e.target.value)}
                    className={getAuthorizedAdultInputClasses(adultKey)}
                    placeholder={t('admission.form.authorized_adult_name_placeholder')}
                    disabled={currentSource !== 'custom'}
                  />
                </div>
                <div>
                  <label className={labelClasses}>
                    {t('admission.form.authorized_adult_cc')}
                  </label>
                  <input
                    type="text"
                    value={formData[`authorizedAdult${num}CC` as keyof AdmissionFormData] as string}
                    onChange={(e) => currentSource === 'custom' && handleInputChange(`authorizedAdult${num}CC` as keyof AdmissionFormData, e.target.value)}
                    className={getAuthorizedAdultInputClasses(adultKey)}
                    placeholder={t('admission.form.authorized_adult_cc_placeholder')}
                    disabled={currentSource !== 'custom'}
                  />
                </div>
              </div>
            </div>
          );
        })}
        
        {/* Add New Adult Button */}
        {visibleAdults < 3 && (
          <div className="mb-4">
            <button
              type="button"
              onClick={addNewAdultSlot}
              className="inline-flex items-center px-4 py-2 border border-dashed border-gray-300 rounded-md text-gray-600 hover:border-gray-400 hover:text-gray-700 transition-all duration-200"
            >
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              {t('admission.form.add_adult')}
            </button>
          </div>
        )}
      </div>

      {/* Dados de Emergência (Emergency Data) */}
      <div className={sectionClasses}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-school-blue-dark">
            {t('admission.form.emergency_data')}
          </h3>
        </div>
        
        {/* Emergency Data Source Buttons */}
        <div className="mb-6">
          <p className="text-sm text-gray-600 mb-3">{t('admission.form.emergency_description')}</p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => handleEmergencySourceChange('mother')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                emergencyDataSource === 'mother'
                  ? 'bg-pink-100 border-pink-300 text-pink-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-pink-50 hover:border-pink-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              {t('admission.form.copy_from_mother')}
              {emergencyDataSource === 'mother' && <UserCheck className="h-4 w-4 ml-2 text-pink-600" />}
            </button>
            
            <button
              type="button"
              onClick={() => handleEmergencySourceChange('father')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                emergencyDataSource === 'father'
                  ? 'bg-blue-100 border-blue-300 text-blue-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-200'
              }`}
            >
              <User className="h-4 w-4 mr-2" />
              {t('admission.form.copy_from_father')}
              {emergencyDataSource === 'father' && <UserCheck className="h-4 w-4 ml-2 text-blue-600" />}
            </button>
            
            <button
              type="button"
              onClick={() => handleEmergencySourceChange('custom')}
              className={`inline-flex items-center px-4 py-2 rounded-md border transition-all duration-200 ${
                emergencyDataSource === 'custom'
                  ? 'bg-green-100 border-green-300 text-green-800 shadow-sm'
                  : 'bg-white border-gray-300 text-gray-700 hover:bg-green-50 hover:border-green-200'
              }`}
            >
              <Edit3 className="h-4 w-4 mr-2" />
              {t('admission.form.custom_entry')}
              {emergencyDataSource === 'custom' && <UserCheck className="h-4 w-4 ml-2 text-green-600" />}
            </button>
          </div>
          
          {emergencyDataSource !== 'custom' && (
            <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded-md">
              <p className="text-sm text-blue-800">
                <UserCheck className="h-4 w-4 inline mr-1" />
                {emergencyDataSource === 'mother' 
                  ? t('admission.form.emergency_synced_mother')
                  : t('admission.form.emergency_synced_father')
                }
              </p>
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.emergency_contact_name')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.emergencyContactName}
              onChange={(e) => emergencyDataSource === 'custom' && handleInputChange('emergencyContactName', e.target.value)}
              className={emergencyInputClasses}
              placeholder={t('admission.form.emergency_contact_name_placeholder')}
              disabled={emergencyDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.emergency_phone1')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.emergencyContactPhone1}
              onChange={(e) => emergencyDataSource === 'custom' && handleInputChange('emergencyContactPhone1', e.target.value)}
              className={emergencyInputClasses}
              placeholder={t('admission.form.emergency_phone1_placeholder')}
              disabled={emergencyDataSource !== 'custom'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.emergency_phone2')}
            </label>
            <input
              type="tel"
              value={formData.emergencyContactPhone2}
              onChange={(e) => emergencyDataSource === 'custom' && handleInputChange('emergencyContactPhone2', e.target.value)}
              className={emergencyInputClasses}
              placeholder={t('admission.form.emergency_phone2_placeholder')}
              disabled={emergencyDataSource !== 'custom'}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.special_care')}
            </label>
            <textarea
              rows={3}
              value={formData.specialCareInstructions}
              onChange={(e) => handleInputChange('specialCareInstructions', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.special_care_placeholder')}
            />
          </div>
        </div>
      </div>

      {/* GDPR e Consentimentos (GDPR and Consents) */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.data_protection')}
        </h3>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-blue-900 mb-3">{t('admission.form.data_protection_info')}</h4>
          <div className="text-sm text-blue-800 space-y-2">
            <p>• {t('admission.form.data_info_1')}</p>
            <p>• {t('admission.form.data_info_2')}</p>
            <p>• {t('admission.form.data_info_3')}</p>
            <p>• {t('admission.form.data_info_4')}</p>
            <p>• {t('admission.form.data_info_5')}</p>
            <p>• {t('admission.form.data_info_6')}</p>
          </div>
        </div>

        <h4 className="font-semibold text-school-blue-dark mb-3">
          {t('admission.form.photo_consent')}
        </h4>
        <p className="text-sm text-gray-600 mb-4">{t('admission.form.photo_consent_description')}</p>
        
        <div className="space-y-3 mb-6">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.consentActivitiesInside}
              onChange={(e) => handleInputChange('consentActivitiesInside', e.target.checked)}
              className="mt-1 h-4 w-4 text-school-blue focus:ring-school-blue border-gray-300 rounded"
            />
            <span className="text-sm">{t('admission.form.consent_activities_inside')}</span>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.consentParentsGroup}
              onChange={(e) => handleInputChange('consentParentsGroup', e.target.checked)}
              className="mt-1 h-4 w-4 text-school-blue focus:ring-school-blue border-gray-300 rounded"
            />
            <span className="text-sm">{t('admission.form.consent_parents_group')}</span>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.consentWebsite}
              onChange={(e) => handleInputChange('consentWebsite', e.target.checked)}
              className="mt-1 h-4 w-4 text-school-blue focus:ring-school-blue border-gray-300 rounded"
            />
            <span className="text-sm">{t('admission.form.consent_website')}</span>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.consentFacebook}
              onChange={(e) => handleInputChange('consentFacebook', e.target.checked)}
              className="mt-1 h-4 w-4 text-school-blue focus:ring-school-blue border-gray-300 rounded"
            />
            <span className="text-sm">{t('admission.form.consent_facebook')}</span>
          </label>
        </div>

        <div className="border-t pt-4">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              required
              checked={formData.acceptInternalRegulation}
              onChange={(e) => handleInputChange('acceptInternalRegulation', e.target.checked)}
              className="mt-1 h-4 w-4 text-school-blue focus:ring-school-blue border-gray-300 rounded"
            />
            <span className="text-sm">
              <span className={requiredClasses}>*</span> {t('admission.form.accept_regulation')}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormHTML; 