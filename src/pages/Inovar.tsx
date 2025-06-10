import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Settings, Users, ExternalLink } from "lucide-react";

const Inovar = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Settings className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('inovar.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="text-lg text-gray-700 mb-6">
                {t('inovar.intro')}
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-4">
                {t('inovar.features')}
              </h2>
              
              <p className="text-gray-700 mb-6">
                {t('inovar.description')}
              </p>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>{t('inovar.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>{t('inovar.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>{t('inovar.feature3')}</span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* For Parents */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-school-blue-dark mr-2" />
                  <h2 className="text-xl font-serif font-bold text-school-blue-dark">
                    {t('inovar.parents')}
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {t('inovar.parents_description')}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h3 className="font-medium text-gray-800">
                    {t('inovar.how_to_access')}
                  </h3>
                  <ol className="list-decimal pl-5 text-gray-700">
                    <li>{t('inovar.access_step1')}</li>
                    <li>{t('inovar.access_step2')}</li>
                    <li>{t('inovar.access_step3')}</li>
                    <li>{t('inovar.access_step4')}</li>
                  </ol>
                </div>
                
                <a 
                  href="https://eramosum.inovarmais.com/consulta"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {t('inovar.login')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              {/* For Teachers */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Settings className="h-6 w-6 text-school-blue-dark mr-2" />
                  <h2 className="text-xl font-serif font-bold text-school-blue-dark">
                    {t('inovar.teachers')}
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {t('inovar.teachers_description')}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h3 className="font-medium text-gray-800">
                    {t('inovar.teacher_resources')}
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• {t('inovar.resource1')}</li>
                    <li>• {t('inovar.resource2')}</li>
                    <li>• {t('inovar.resource3')}</li>
                    <li>• {t('inovar.resource4')}</li>
                  </ul>
                </div>
                
                <a 
                  href="https://eramosum.inovarmais.com/alunos/Inicial.wgx"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-5 py-2 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors"
                >
                  {t('inovar.login')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            {/* Support Section */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-school-blue-dark mb-3">
                {t('inovar.need_help')}
              </h3>
              <p className="text-gray-700">
                {t('inovar.support_text')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inovar;
