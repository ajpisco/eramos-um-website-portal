import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { UserPlus, CheckCircle, Download, Calendar } from "lucide-react";

const Admission = () => {
  const { t, language } = useLanguage();
  
  const requirements = [
    {
      title: language === 'en' ? 'Age Requirements' : 'Requisitos de Idade',
      items: [
        language === 'en' ? 'Daycare: 1-2 years old' : 'Berçário: 1-2 anos',
        language === 'en' ? 'Kindergarten: 3-5 years old' : 'Educação Infantil: 3-5 anos',
        language === 'en' ? 'Elementary: 1st-4th grade (6-10 years old)' : 'Fundamental I: 1º-4º ano (6-10 anos)'
      ]
    },
    {
      title: language === 'en' ? 'Academic Requirements' : 'Requisitos Acadêmicos',
      items: [
        language === 'en' ? 'Previous school records (for transfers)' : 'Histórico escolar anterior (para transferências)',
        language === 'en' ? 'Grade-appropriate assessment' : 'Avaliação apropriada para a série',
        language === 'en' ? 'Parent and student interview' : 'Entrevista com pais e aluno'
      ]
    }
  ];
  
  const documents = [
    language === 'en' ? 'Birth certificate' : 'Certidão de nascimento',
    language === 'en' ? 'ID documents of parents/guardians' : 'Documentos de identidade dos pais/responsáveis',
    language === 'en' ? 'Proof of residence' : 'Comprovante de residência',
    language === 'en' ? 'Previous school records (for transfers)' : 'Histórico escolar anterior (para transferências)',
    language === 'en' ? 'Health records including vaccinations' : 'Registros de saúde, incluindo vacinações',
    language === 'en' ? '3 recent passport-sized photos' : '3 fotos recentes no tamanho passaporte'
  ];
  
  const steps = [
    {
      title: language === 'en' ? 'Submit Application' : 'Enviar Inscrição',
      description: language === 'en' 
        ? 'Complete and submit the admission application form online or at our school office.'
        : 'Preencha e envie o formulário de inscrição online ou em nossa secretaria.'
    },
    {
      title: language === 'en' ? 'Document Submission' : 'Envio de Documentos',
      description: language === 'en' 
        ? 'Submit all required documents either in person or through our online portal.'
        : 'Envie todos os documentos necessários pessoalmente ou através do nosso portal online.'
    },
    {
      title: language === 'en' ? 'Assessment & Interview' : 'Avaliação e Entrevista',
      description: language === 'en' 
        ? 'Schedule and attend the assessment and interview session at our school.'
        : 'Agende e participe da sessão de avaliação e entrevista em nossa escola.'
    },
    {
      title: language === 'en' ? 'Decision & Enrollment' : 'Decisão e Matrícula',
      description: language === 'en' 
        ? 'Upon acceptance, complete the enrollment process and pay the registration fee.'
        : 'Após a aceitação, complete o processo de matrícula e pague a taxa de registro.'
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
                  {language === 'en' ? 'Schedule a Visit' : 'Agendar uma Visita'}
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
                  {language === 'en' 
                    ? 'Download and complete these forms to begin the application process.'
                    : 'Baixe e preencha estes formulários para iniciar o processo de inscrição.'}
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {language === 'en' ? 'Admission Application Form' : 'Formulário de Inscrição'}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {language === 'en' ? 'Medical Information Form' : 'Formulário de Informações Médicas'}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {language === 'en' ? 'Emergency Contact Form' : 'Formulário de Contato de Emergência'}
                    </span>
                    <Download className="h-5 w-5 text-school-blue" />
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-school-blue">
                      {language === 'en' ? 'Authorization Form' : 'Formulário de Autorização'}
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
