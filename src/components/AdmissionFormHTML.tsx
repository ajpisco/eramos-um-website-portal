import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { User, UserCheck, Edit3 } from 'lucide-react';

export interface AdmissionFormData {
  // Dados do Aluno (Student Data)
  studentName: string;
  studentPhoto: File | null;
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
  className?: string;
}

const AdmissionFormHTML: React.FC<AdmissionFormHTMLProps> = ({ 
  formData, 
  onFormDataChange,
  guardianDataSource,
  onGuardianDataSourceChange,
  className = "" 
}) => {
  const { t } = useLanguage();
  
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

  // Handle guardian data source change
  const handleGuardianSourceChange = (source: 'mother' | 'father' | 'custom') => {
    onGuardianDataSourceChange(source);
    
    if (source === 'mother' || source === 'father') {
      copyParentDataToGuardian(source);
    }
  };

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

  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const sectionClasses = "bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6";
  const requiredClasses = "text-red-500";

  // Guardian input classes - disabled when copying from parent
  const guardianInputClasses = `${inputClasses} ${guardianDataSource !== 'custom' ? 'bg-gray-50 cursor-not-allowed' : ''}`;

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
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.student_photo')}
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange('studentPhoto', e)}
              className={inputClasses}
            />
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
              {t('admission.form.custom_guardian')}
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
        
        {[1, 2, 3].map((num) => (
          <div key={num} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 p-4 bg-gray-50 rounded">
            <div>
              <label className={labelClasses}>
                {t('admission.form.authorized_adult_name')} {num}
              </label>
              <input
                type="text"
                value={formData[`authorizedAdult${num}Name` as keyof AdmissionFormData] as string}
                onChange={(e) => handleInputChange(`authorizedAdult${num}Name` as keyof AdmissionFormData, e.target.value)}
                className={inputClasses}
                placeholder={t('admission.form.authorized_adult_name_placeholder')}
              />
            </div>
            <div>
              <label className={labelClasses}>
                {t('admission.form.authorized_adult_cc')} {num}
              </label>
              <input
                type="text"
                value={formData[`authorizedAdult${num}CC` as keyof AdmissionFormData] as string}
                onChange={(e) => handleInputChange(`authorizedAdult${num}CC` as keyof AdmissionFormData, e.target.value)}
                className={inputClasses}
                placeholder={t('admission.form.authorized_adult_cc_placeholder')}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dados de Emergência (Emergency Data) */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.emergency_data')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.emergency_contact_name')} <span className={requiredClasses}>*</span>
            </label>
            <input
              type="text"
              required
              value={formData.emergencyContactName}
              onChange={(e) => handleInputChange('emergencyContactName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.emergency_contact_name_placeholder')}
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
              onChange={(e) => handleInputChange('emergencyContactPhone1', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.emergency_phone1_placeholder')}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.emergency_phone2')}
            </label>
            <input
              type="tel"
              value={formData.emergencyContactPhone2}
              onChange={(e) => handleInputChange('emergencyContactPhone2', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.emergency_phone2_placeholder')}
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