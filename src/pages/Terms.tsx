import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { FileText } from "lucide-react";

const Terms = () => {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <FileText className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('terms.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            {language === 'en' ? (
              <>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.intro')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.intro.text')}
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.definitions')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.definitions.text')}
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.use')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.use.text')}
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.privacy')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.privacy.text')}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.limitations')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.limitations.text')}
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.intro')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.intro.text')}
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.definitions')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.definitions.text')}
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.use')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.use.text')}
                  </p>
                </div>
                <div className="mb-8 p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.privacy')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.privacy.text')}
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-3">{t('terms.section.limitations')}</h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t('terms.limitations.text')}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
