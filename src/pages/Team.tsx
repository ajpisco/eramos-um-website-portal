
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Users } from "lucide-react";

const Team = () => {
  const { t, language } = useLanguage();

  const directors = [
    {
      name: "Maria Silva",
      role: language === 'en' ? "Principal" : "Diretora",
      image: "/placeholder.svg",
      bio: language === 'en' 
        ? "With over 20 years of experience in education, Maria leads our school with passion and vision."
        : "Com mais de 20 anos de experiência em educação, Maria lidera nossa escola com paixão e visão."
    },
    {
      name: "João Santos",
      role: language === 'en' ? "Assistant Principal" : "Diretor Assistente",
      image: "/placeholder.svg",
      bio: language === 'en'
        ? "João oversees our curriculum development and teacher training."
        : "João supervisiona o desenvolvimento do currículo e o treinamento de professores."
    }
  ];

  const teachers = [
    {
      name: "Ana Oliveira",
      role: language === 'en' ? "1st Grade Teacher" : "Professora do 1º Ano",
      image: "/placeholder.svg"
    },
    {
      name: "Carlos Pereira",
      role: language === 'en' ? "2nd Grade Teacher" : "Professor do 2º Ano",
      image: "/placeholder.svg"
    },
    {
      name: "Juliana Matos",
      role: language === 'en' ? "3rd Grade Teacher" : "Professora do 3º Ano",
      image: "/placeholder.svg"
    },
    {
      name: "Ricardo Fernandes",
      role: language === 'en' ? "4th Grade Teacher" : "Professor do 4º Ano",
      image: "/placeholder.svg"
    },
    {
      name: "Beatriz Lima",
      role: language === 'en' ? "Kindergarten Teacher" : "Professora da Educação Infantil",
      image: "/placeholder.svg"
    },
    {
      name: "Marcos Souza",
      role: language === 'en' ? "Physical Education" : "Educação Física",
      image: "/placeholder.svg"
    }
  ];

  const staff = [
    {
      name: "Luiza Costa",
      role: language === 'en' ? "School Counselor" : "Orientadora Escolar",
      image: "/placeholder.svg"
    },
    {
      name: "Gabriel Martins",
      role: language === 'en' ? "Librarian" : "Bibliotecário",
      image: "/placeholder.svg"
    },
    {
      name: "Teresa Almeida",
      role: language === 'en' ? "Chef" : "Cozinheira",
      image: "/placeholder.svg"
    },
    {
      name: "Roberto Dias",
      role: language === 'en' ? "Administrative Assistant" : "Assistente Administrativo",
      image: "/placeholder.svg"
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Users className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('team.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Directors Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-8 text-center">
                {t('team.directors')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {directors.map((person, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-32 h-32 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-school-blue">{person.name}</h3>
                      <p className="text-gray-600 mb-3">{person.role}</p>
                      <p className="text-gray-700">{person.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Teachers Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-8 text-center">
                {t('team.teachers')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {teachers.map((person, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-28 h-28 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="text-lg font-bold text-school-blue">{person.name}</h3>
                    <p className="text-gray-600">{person.role}</p>
                  </div>
                ))}
              </div>
            </section>
            
            {/* Staff Section */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-8 text-center">
                {t('team.staff')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {staff.map((person, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-3"
                    />
                    <h3 className="text-lg font-bold text-school-blue">{person.name}</h3>
                    <p className="text-gray-600">{person.role}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
