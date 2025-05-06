import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Book, Download } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Book className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('about.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Mission Section */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-4">
                {t('about.mission_title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.mission')}
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-4">
                {t('about.values_title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.values')}
              </p>
            </section>
            
            {/* Approach Section */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-4">
                {t('about.approach_title')}
              </h2>
              <p className="text-lg text-gray-700">
                {t('about.approach')}
              </p>
            </section>
            
            {/* History Section */}
            <section className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-4">
                {t('about.history_title')}
              </h2>
              <p className="text-lg text-gray-700">
                {t('about.history')}
              </p>
            </section>
            
            {/* Educational Project Document */}
            <section className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-4">
                {t('about.project_title')}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {t('about.project_description')}
              </p>
              <a 
                href="/downloads/20170907013856_Projeto_Educativo.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                <Download className="mr-2 h-5 w-5" />
                {t('about.project_button')}
              </a>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
