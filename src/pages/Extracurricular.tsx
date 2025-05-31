import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Activity, Brain, Waves, Dumbbell, Drama, Cpu, Guitar, Piano } from "lucide-react";
import { getActivityImage } from "@/utils/imageUtils";

const Extracurricular = () => {
  const { t, language } = useLanguage();
  
  const activities = [
    {
      name: t('extracurricular.swimming'),
      icon: Waves,
      description: t('extracurricular.swimming.description'),
      image: getActivityImage('swimming')
    },
    {
      name: t('extracurricular.guitar'),
      icon: Guitar,
      description: t('extracurricular.guitar.description'),
      image: getActivityImage('guitar')
    },
    {
      name: t('extracurricular.piano'),
      icon: Piano,
      description: t('extracurricular.piano.description'),
      image: getActivityImage('piano')
    },
    {
      name: t('extracurricular.ballet'),
      icon: Activity,
      description: t('extracurricular.ballet.description'),
      image: getActivityImage('ballet')
    },
    {
      name: t('extracurricular.karate'),
      icon: Dumbbell,
      description: t('extracurricular.karate.description'),
      image: getActivityImage('karate')
    },
    {
      name: t('extracurricular.theater'),
      icon: Drama,
      description: t('extracurricular.theater.description'),
      image: getActivityImage('theater')
    },
    {
      name: t('extracurricular.inventors'),
      icon: Cpu,
      description: t('extracurricular.inventors.description'),
      image: getActivityImage('inventors')
    },
    {
      name: t('extracurricular.football'),
      icon: Activity,
      description: t('extracurricular.football.description'),
      image: getActivityImage('football')
    }
  ];
  
  const supportActivities = [
    {
      name: t('extracurricular.pedagogical'),
      description: language === 'en'
        ? 'Additional support for students who need help with specific academic subjects. Our specialized teachers work in small groups to address individual learning needs.'
        : 'Suporte adicional para alunos que precisam de ajuda com matérias acadêmicas específicas. Nossos professores especializados trabalham em pequenos grupos para atender às necessidades individuais de aprendizagem.'
    },
    {
      name: t('extracurricular.psycho'),
      description: language === 'en'
        ? 'Professional support addressing learning difficulties, emotional development, and educational psychology to help students reach their full potential.'
        : 'Suporte profissional abordando dificuldades de aprendizagem, desenvolvimento emocional e psicologia educacional para ajudar os alunos a alcançar seu pleno potencial.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Activity className="h-10 w-10 text-school-blue-dark mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue-dark">{t('extracurricular.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('extracurricular.intro')}
            </p>
            
            {/* Combined Activities Section */}
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <Activity className="h-6 w-6 text-school-blue-dark mr-2" />
                <h2 className="text-2xl font-serif font-bold text-school-blue-dark">
                  {t('extracurricular.activities')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md max-w-sm w-full">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={activity.image} 
                        alt={activity.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-school-blue-light bg-opacity-10 p-2 rounded-full mr-3">
                          <activity.icon className="h-6 w-6 text-school-blue-dark" />
                        </div>
                        <h3 className="text-xl font-semibold text-school-blue-dark">{activity.name}</h3>
                      </div>
                      <p className="text-gray-700">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Academic Support Section */}
            <section>
              <div className="flex items-center mb-8">
                <Brain className="h-6 w-6 text-school-blue-dark mr-2" />
                <h2 className="text-2xl font-serif font-bold text-school-blue-dark">
                  {t('extracurricular.academic')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {supportActivities.map((activity, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-school-blue-dark mb-4">{activity.name}</h3>
                    <p className="text-gray-700">{activity.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Registration Info */}
            <div className="mt-16 bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-3">
                {t('extracurricular.registration.title')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('extracurricular.registration.description')}
              </p>
              <button className="px-6 py-3 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors">
                {t('extracurricular.registration.button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Extracurricular;
