import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Activity, Brain, Waves, Dumbbell, Drama, Cpu } from "lucide-react";

const Extracurricular = () => {
  const { t, language } = useLanguage();
  
  const activities = [
    {
      name: t('extracurricular.swimming'),
      icon: Waves,
      description: language === 'en'
        ? 'Swimming lessons for all skill levels. Classes take place at our heated pool with certified instructors.'
        : 'Aulas de natação para todos os níveis de habilidade. As aulas acontecem em nossa piscina aquecida com instrutores certificados.',
      image: "https://images.unsplash.com/photo-1600965962324-592903ae5fc4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: t('extracurricular.ballet'),
      icon: Activity,
      description: language === 'en'
        ? 'Ballet classes for beginners and intermediate students, focusing on technique, flexibility, and expression.'
        : 'Aulas de ballet para alunos iniciantes e intermediários, com foco em técnica, flexibilidade e expressão.',
      image: "https://images.unsplash.com/photo-1596882671619-d146dba96db6?q=80&w=2274&auto=format&fit=crop"
    },
    {
      name: t('extracurricular.karate'),
      icon: Dumbbell,
      description: language === 'en'
        ? 'Karate training emphasizes discipline, focus, and physical coordination.'
        : 'O treinamento de karatê enfatiza disciplina, foco e coordenação física.',
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2071&auto=format&fit=crop"
    },
    {
      name: t('extracurricular.theater'),
      icon: Drama,
      description: language === 'en'
        ? 'Theater classes develop creativity, self-expression, and confidence through dramatic arts and performance.'
        : 'Aulas de teatro desenvolvem criatividade, autoexpressão e confiança através das artes dramáticas e performance.',
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: t('extracurricular.robotics'),
      icon: Cpu,
      description: language === 'en'
        ? 'Robotics classes introduce students to programming, engineering, and problem-solving through hands-on robot building.'
        : 'Aulas de robótica introduzem os alunos à programação, engenharia e resolução de problemas através da construção prática de robôs.',
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: t('extracurricular.football'),
      icon: Activity,
      description: language === 'en'
        ? 'Football training focuses on teamwork, physical fitness, and fundamental skills development in a fun environment.'
        : 'O treinamento de futebol foca no trabalho em equipe, condicionamento físico e desenvolvimento de habilidades fundamentais em um ambiente divertido.',
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2070&auto=format&fit=crop"
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
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <Activity className="h-6 w-6 text-school-blue-dark mr-2" />
                <h2 className="text-2xl font-serif font-bold text-school-blue-dark">
                  {t('extracurricular.activities')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activities.map((activity, index) => (
                  <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md">
                    <div className="h-48 overflow-hidden">
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
              <div className="flex items-center mb-6">
                <Brain className="h-6 w-6 text-school-blue-dark mr-2" />
                <h2 className="text-2xl font-serif font-bold text-school-blue-dark">
                  {t('extracurricular.academic')}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {supportActivities.map((activity, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-school-blue-dark mb-3">{activity.name}</h3>
                    <p className="text-gray-700">{activity.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Registration Info */}
            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Activity Registration' : 'Inscrição em Atividades'}
              </h3>
              <p className="text-gray-700 mb-4">
                {language === 'en' 
                  ? 'To enroll your child in any of our extracurricular activities, please contact the school office or complete the registration form.'
                  : 'Para inscrever seu filho em qualquer uma de nossas atividades extracurriculares, entre em contato com a secretaria da escola ou preencha o formulário de inscrição.'}
              </p>
              <button className="px-6 py-3 bg-school-blue text-white rounded-md hover:bg-opacity-90 transition-colors">
                {language === 'en' ? 'Registration Form' : 'Formulário de Inscrição'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Extracurricular;
