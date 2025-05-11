import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { FileText, Download } from "lucide-react";

const Regulation = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('regulation.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-8">
                {t('regulation.intro')}
              </p>
              
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-school-blue">
                  {/* Sample regulation highlights */}
                  1. {language === 'en' ? 'Respect and Responsibility' : 'Respeito e Responsabilidade'}
                </h2>
                <p className="text-gray-700 pl-6">
                  {language === 'en' 
                    ? 'Students are expected to show respect to all members of the school community and take responsibility for their actions.'
                    : 'Espera-se que os alunos demonstrem respeito a todos os membros da comunidade escolar e assumam responsabilidade por suas ações.'}
                </p>
                
                <h2 className="text-xl font-semibold text-school-blue">
                  2. {language === 'en' ? 'Attendance and Punctuality' : 'Frequência e Pontualidade'}
                </h2>
                <p className="text-gray-700 pl-6">
                  {language === 'en'
                    ? 'Regular attendance is required. Students should arrive on time for all classes and school activities.'
                    : 'A frequência regular é obrigatória. Os alunos devem chegar pontualmente para todas as aulas e atividades escolares.'}
                </p>
                
                <h2 className="text-xl font-semibold text-school-blue">
                  3. {language === 'en' ? 'Academic Integrity' : 'Integridade Acadêmica'}
                </h2>
                <p className="text-gray-700 pl-6">
                  {language === 'en'
                    ? 'All work submitted must be the student\'s own. Plagiarism and cheating are serious offenses.'
                    : 'Todo trabalho apresentado deve ser próprio do aluno. Plágio e cola são infrações graves.'}
                </p>
              </div>
            </section>
            
            {/* Full Document Download */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-4">
                {t('regulation.document_title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('regulation.document_description')}
              </p>
              <a
                href="/downloads/20230719131936_20220603144847_Regulamento_Interno_2022-2023.pdf"
                download="Regulamento_Interno.pdf"
                className="inline-flex items-center px-6 py-3 bg-school-blue text-white font-semibold rounded-lg shadow-md hover:bg-school-blue-dark transition-colors duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('regulation.document_button')}
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Regulation;
