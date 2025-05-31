import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { UserPlus, CheckCircle, Download, Calendar } from "lucide-react";

const Admission = () => {
  const { t } = useLanguage();
  
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
              
              <div className="space-y-6 md:space-y-0 grid md:grid-cols-2 md:gap-8">
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
              
              <div className="mt-8 text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center px-6 py-3 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  {t('admission.schedule_visit')}
                </a>
              </div>
            </section>
            
            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-6 text-center">
                {t('admission.requirements')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <section>
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
    </Layout>
  );
};

export default Admission;
