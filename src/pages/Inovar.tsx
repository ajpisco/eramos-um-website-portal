import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Settings, Users, ExternalLink } from "lucide-react";

const Inovar = () => {
  const { t, language } = useLanguage();

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
                {language === 'en' ? 'What is Inovar?' : 'O que é o Inovar?'}
              </h2>
              
              <p className="text-gray-700 mb-6">
                {language === 'en' 
                  ? 'Inovar is our school\'s digital platform that helps parents stay connected with their children\'s educational progress. It enables communication between teachers, parents, and school administration, while providing real-time updates on academic performance, attendance, and school events.'
                  : 'Inovar é a plataforma digital da nossa escola que ajuda os pais a se manterem conectados com o progresso educacional de seus filhos. Ela permite a comunicação entre professores, pais e administração escolar, além de fornecer atualizações em tempo real sobre desempenho acadêmico, frequência e eventos escolares.'}
              </p>
              
              <h2 className="text-2xl font-serif font-bold text-school-blue-dark mb-4">
                {language === 'en' ? 'Key Features' : 'Principais Recursos'}
              </h2>
              
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>
                    {language === 'en' 
                      ? 'Real-time access to grades and academic progress'
                      : 'Acesso em tempo real a notas e progresso acadêmico'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>
                    {language === 'en' 
                      ? 'Attendance tracking and notifications'
                      : 'Acompanhamento de frequência e notificações'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>
                    {language === 'en' 
                      ? 'Direct messaging between parents and teachers'
                      : 'Mensagens diretas entre pais e professores'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>
                    {language === 'en' 
                      ? 'School calendar and event notifications'
                      : 'Calendário escolar e notificações de eventos'}
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-green-dark mr-2">•</span>
                  <span>
                    {language === 'en' 
                      ? 'Homework assignments and submission tracking'
                      : 'Tarefas de casa e acompanhamento de entregas'}
                  </span>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* For Parents */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 text-school-blue-dark mr-2" />
                  <h2 className="text-xl font-serif font-bold text-school-blue-dark">
                    {t('inovar.parents')}
                  </h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {language === 'en' 
                    ? 'Parents can access their child\'s academic information, communicate with teachers, and stay updated on school events.'
                    : 'Os pais podem acessar informações acadêmicas de seus filhos, comunicar-se com professores e manter-se atualizados sobre eventos escolares.'}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h3 className="font-medium text-gray-800">
                    {language === 'en' ? 'How to Access:' : 'Como Acessar:'}
                  </h3>
                  <ol className="list-decimal pl-5 text-gray-700">
                    <li>{language === 'en' ? 'Visit the Inovar parent portal' : 'Visite o portal dos pais do Inovar'}</li>
                    <li>{language === 'en' ? 'Enter your registered email' : 'Digite seu email registrado'}</li>
                    <li>{language === 'en' ? 'Enter your password' : 'Digite sua senha'}</li>
                    <li>{language === 'en' ? 'Click "Login"' : 'Clique em "Entrar"'}</li>
                  </ol>
                </div>
                
                <a 
                  href="https://inovar.parents.edu.br" 
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
                  {language === 'en' 
                    ? 'Teachers can record grades, take attendance, assign homework, and communicate with parents through the platform.'
                    : 'Os professores podem registrar notas, fazer chamada, passar tarefas de casa e se comunicar com os pais através da plataforma.'}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h3 className="font-medium text-gray-800">
                    {language === 'en' ? 'Teacher Resources:' : 'Recursos para Professores:'}
                  </h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• {language === 'en' ? 'Grade management system' : 'Sistema de gestão de notas'}</li>
                    <li>• {language === 'en' ? 'Attendance tracking' : 'Controle de frequência'}</li>
                    <li>• {language === 'en' ? 'Lesson planning tools' : 'Ferramentas de planejamento de aulas'}</li>
                    <li>• {language === 'en' ? 'Parent communication center' : 'Centro de comunicação com os pais'}</li>
                  </ul>
                </div>
                
                <a 
                  href="https://inovar.teachers.edu.br" 
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
                {language === 'en' ? 'Need Help?' : 'Precisa de Ajuda?'}
              </h3>
              <p className="text-gray-700">
                {language === 'en' 
                  ? 'If you need assistance with Inovar, please contact our IT support team at it-support@eramosum.edu.br or call (11) 5555-1234 ext. 789.'
                  : 'Se precisar de ajuda com o Inovar, entre em contato com nossa equipe de suporte de TI em it-support@eramosum.edu.br ou ligue para (11) 5555-1234 ramal 789.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inovar;
