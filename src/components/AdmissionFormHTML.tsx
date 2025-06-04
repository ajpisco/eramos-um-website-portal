import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export interface AdmissionFormData {
  // Student Information
  studentName: string;
  studentBirthDate: string;
  studentGender: string;
  studentNationality: string;
  studentGrade: string;
  
  // Parent/Guardian Information
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  parentOccupation: string;
  parentAddress: string;
  
  // Emergency Contact
  emergencyName: string;
  emergencyPhone: string;
  emergencyRelation: string;
  
  // Previous School (if applicable)
  previousSchool: string;
  previousSchoolYear: string;
  reasonForTransfer: string;
  
  // Medical Information
  allergies: string;
  medications: string;
  medicalConditions: string;
  
  // Additional Information
  specialNeeds: string;
  additionalComments: string;
}

interface AdmissionFormHTMLProps {
  formData: AdmissionFormData;
  onFormDataChange: (data: AdmissionFormData) => void;
  className?: string;
}

const AdmissionFormHTML: React.FC<AdmissionFormHTMLProps> = ({ 
  formData, 
  onFormDataChange, 
  className = "" 
}) => {
  const { t } = useLanguage();

  const handleInputChange = (field: keyof AdmissionFormData, value: string) => {
    onFormDataChange({
      ...formData,
      [field]: value
    });
  };

  const inputClasses = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-blue focus:border-transparent";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const sectionClasses = "bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-6";

  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-school-blue-dark mb-2">
          {t('admission.form.title') || 'Admission Application Form'}
        </h2>
        <p className="text-gray-600">
          {t('admission.form.description') || 'Please fill out all required fields below.'}
        </p>
      </div>

      {/* Student Information */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.student_info') || 'Student Information'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              {t('admission.form.student_name') || 'Student Full Name'} *
            </label>
            <input
              type="text"
              required
              value={formData.studentName}
              onChange={(e) => handleInputChange('studentName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.student_name_placeholder') || 'Enter student\'s full name'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.birth_date') || 'Birth Date'} *
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
              {t('admission.form.gender') || 'Gender'} *
            </label>
            <select
              required
              value={formData.studentGender}
              onChange={(e) => handleInputChange('studentGender', e.target.value)}
              className={inputClasses}
            >
              <option value="">{t('admission.form.select_gender') || 'Select gender'}</option>
              <option value="male">{t('admission.form.male') || 'Male'}</option>
              <option value="female">{t('admission.form.female') || 'Female'}</option>
              <option value="other">{t('admission.form.other') || 'Other'}</option>
            </select>
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.nationality') || 'Nationality'} *
            </label>
            <input
              type="text"
              required
              value={formData.studentNationality}
              onChange={(e) => handleInputChange('studentNationality', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.nationality_placeholder') || 'Enter nationality'}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.grade') || 'Grade/Level Applying For'} *
            </label>
            <select
              required
              value={formData.studentGrade}
              onChange={(e) => handleInputChange('studentGrade', e.target.value)}
              className={inputClasses}
            >
              <option value="">{t('admission.form.select_grade') || 'Select grade'}</option>
              <option value="daycare-1">{t('admission.form.daycare_1') || 'Daycare (1 year)'}</option>
              <option value="daycare-2">{t('admission.form.daycare_2') || 'Daycare (2 years)'}</option>
              <option value="kindergarten-3">{t('admission.form.kindergarten_3') || 'Kindergarten (3 years)'}</option>
              <option value="kindergarten-4">{t('admission.form.kindergarten_4') || 'Kindergarten (4 years)'}</option>
              <option value="kindergarten-5">{t('admission.form.kindergarten_5') || 'Kindergarten (5 years)'}</option>
              <option value="grade-1">{t('admission.form.grade_1') || '1st Grade'}</option>
              <option value="grade-2">{t('admission.form.grade_2') || '2nd Grade'}</option>
              <option value="grade-3">{t('admission.form.grade_3') || '3rd Grade'}</option>
              <option value="grade-4">{t('admission.form.grade_4') || '4th Grade'}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Parent/Guardian Information */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.parent_info') || 'Parent/Guardian Information'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              {t('admission.form.parent_name') || 'Parent/Guardian Full Name'} *
            </label>
            <input
              type="text"
              required
              value={formData.parentName}
              onChange={(e) => handleInputChange('parentName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.parent_name_placeholder') || 'Enter parent/guardian name'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.parent_email') || 'Email Address'} *
            </label>
            <input
              type="email"
              required
              value={formData.parentEmail}
              onChange={(e) => handleInputChange('parentEmail', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.parent_email_placeholder') || 'Enter email address'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.parent_phone') || 'Phone Number'} *
            </label>
            <input
              type="tel"
              required
              value={formData.parentPhone}
              onChange={(e) => handleInputChange('parentPhone', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.parent_phone_placeholder') || 'Enter phone number'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.parent_occupation') || 'Occupation'}
            </label>
            <input
              type="text"
              value={formData.parentOccupation}
              onChange={(e) => handleInputChange('parentOccupation', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.parent_occupation_placeholder') || 'Enter occupation'}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.address') || 'Home Address'} *
            </label>
            <textarea
              required
              rows={3}
              value={formData.parentAddress}
              onChange={(e) => handleInputChange('parentAddress', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.address_placeholder') || 'Enter complete home address'}
            />
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.emergency_contact') || 'Emergency Contact'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelClasses}>
              {t('admission.form.emergency_name') || 'Emergency Contact Name'} *
            </label>
            <input
              type="text"
              required
              value={formData.emergencyName}
              onChange={(e) => handleInputChange('emergencyName', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.emergency_name_placeholder') || 'Enter emergency contact name'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.emergency_phone') || 'Emergency Phone'} *
            </label>
            <input
              type="tel"
              required
              value={formData.emergencyPhone}
              onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.emergency_phone_placeholder') || 'Enter emergency phone'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.emergency_relation') || 'Relationship'} *
            </label>
            <input
              type="text"
              required
              value={formData.emergencyRelation}
              onChange={(e) => handleInputChange('emergencyRelation', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.emergency_relation_placeholder') || 'e.g., Grandmother, Uncle'}
            />
          </div>
        </div>
      </div>

      {/* Previous School Information */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.previous_school') || 'Previous School Information'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              {t('admission.form.previous_school_name') || 'Previous School Name'}
            </label>
            <input
              type="text"
              value={formData.previousSchool}
              onChange={(e) => handleInputChange('previousSchool', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.previous_school_placeholder') || 'Enter previous school name (if applicable)'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.previous_school_year') || 'Last Year Attended'}
            </label>
            <input
              type="text"
              value={formData.previousSchoolYear}
              onChange={(e) => handleInputChange('previousSchoolYear', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.previous_school_year_placeholder') || 'e.g., 2023-2024'}
            />
          </div>
          
          <div className="md:col-span-2">
            <label className={labelClasses}>
              {t('admission.form.transfer_reason') || 'Reason for Transfer'}
            </label>
            <textarea
              rows={3}
              value={formData.reasonForTransfer}
              onChange={(e) => handleInputChange('reasonForTransfer', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.transfer_reason_placeholder') || 'Please explain reason for changing schools (if applicable)'}
            />
          </div>
        </div>
      </div>

      {/* Medical Information */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.medical_info') || 'Medical Information'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className={labelClasses}>
              {t('admission.form.allergies') || 'Allergies'}
            </label>
            <textarea
              rows={2}
              value={formData.allergies}
              onChange={(e) => handleInputChange('allergies', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.allergies_placeholder') || 'List any known allergies or write "None"'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.medications') || 'Current Medications'}
            </label>
            <textarea
              rows={2}
              value={formData.medications}
              onChange={(e) => handleInputChange('medications', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.medications_placeholder') || 'List any current medications or write "None"'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.medical_conditions') || 'Medical Conditions'}
            </label>
            <textarea
              rows={2}
              value={formData.medicalConditions}
              onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.medical_conditions_placeholder') || 'List any medical conditions we should be aware of or write "None"'}
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className={sectionClasses}>
        <h3 className="text-lg font-semibold text-school-blue-dark mb-4">
          {t('admission.form.additional_info') || 'Additional Information'}
        </h3>
        <div className="space-y-4">
          <div>
            <label className={labelClasses}>
              {t('admission.form.special_needs') || 'Special Educational Needs'}
            </label>
            <textarea
              rows={3}
              value={formData.specialNeeds}
              onChange={(e) => handleInputChange('specialNeeds', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.special_needs_placeholder') || 'Please describe any special educational needs or accommodations required'}
            />
          </div>
          
          <div>
            <label className={labelClasses}>
              {t('admission.form.additional_comments') || 'Additional Comments'}
            </label>
            <textarea
              rows={4}
              value={formData.additionalComments}
              onChange={(e) => handleInputChange('additionalComments', e.target.value)}
              className={inputClasses}
              placeholder={t('admission.form.additional_comments_placeholder') || 'Any additional information you would like us to know about your child'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionFormHTML; 