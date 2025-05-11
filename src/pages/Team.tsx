import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { Users, BookOpen, Smile, UserCog } from "lucide-react";

// Placeholder image - replace with actual images or a default one
const placeholderImg = "/placeholder.svg"; 

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
}

const TeamPage = () => {
  const { t, language } = useLanguage();

  // Board members
  const boardMembers: TeamMember[] = [
    {
      name: "Alexandrina Ildefonso",
      role: t('team_elementary_teacher'),
      imageUrl: placeholderImg,
    },
    {
      name: "João Seguro",
      role: language === 'en' ? `${t('team_teacher')} & ${t('team_study_room_head')} (7th-9th Grades)` : `${t('team_teacher')} e ${t('team_study_room_head')} (Salas de Estudo 7º-9º Ano)`,
      imageUrl: placeholderImg,
    },
    {
      name: "Diogo Seguro",
      role: language === 'en' ? `${t('team_study_room_head')} (5th-6th Grades)` : `${t('team_study_room_head')} (Salas de Estudo 5º-6º Ano)`,
      imageUrl: placeholderImg,
    }
  ];

  // All teachers (elementary and kindergarten)
  const teachers: TeamMember[] = [
    { name: "Carla Moreira", role: t('team_elementary_teacher'), imageUrl: placeholderImg },
    { name: "Rita Cardoso", role: t('team_elementary_teacher'), imageUrl: placeholderImg },
    { name: "Raquel Monteiro", role: t('team_elementary_teacher'), imageUrl: placeholderImg },
    {
      name: "Andreia Ferreira",
      role: t('team_pe'),
      imageUrl: placeholderImg,
    },
    {
      name: "Inês Miranda",
      role: t('team_english_teacher'),
      imageUrl: placeholderImg,
    },
    {
      name: "Steve",
      role: t('team_music_teacher'),
      imageUrl: placeholderImg,
    },
    {
      name: "Mariana",
      role: t('team_music_teacher'),
      imageUrl: placeholderImg,
    },
    { name: "Catarina Oliveira", role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: "Catarina Dias", role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: "Christina Ashley", role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: "Joana Goulart", role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: "Catarina Lopes", role: t('team_kindergarten_teacher'), imageUrl: placeholderImg }
  ];
  
  // Operational staff
  const operational: TeamMember[] = [
    {
      name: "João Ildefonso", // Moved from Assistants
      role: t('team_school_driver'),
      imageUrl: placeholderImg,
    },
    {
      name: "Teresa Gonçalves",
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Mónica Fernandes",
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Marta Monteiro",
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Sílvia Porêlo",
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Maria dos Anjos",
      role: t('team_cook'),
      imageUrl: placeholderImg,
    },
    {
      name: "Andreia Valido",
      role: t('team_cook_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Nuno",
      role: t('team_maintenance_assistant'),
      imageUrl: placeholderImg,
    }
  ];

  // Administrative staff
  const administrative: TeamMember[] = [
    {
      name: "Fátima Monteiro",
      role: t('team_administrative_assistant'),
      imageUrl: placeholderImg,
    }
  ];

  const renderTeamSection = (
    title: string,
    members: TeamMember[],
    Icon: React.ElementType
  ) => (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <Icon className="h-8 w-8 text-school-blue mr-3" />
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
      </div>
      {members.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {members.map((person, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <img
                src={person.imageUrl || placeholderImg}
                alt={person.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-school-blue mb-1">{person.name}</h3>
                <p className="text-gray-700 text-sm">{person.role}</p>
                {person.bio && <p className="text-gray-600 text-xs mt-2">{person.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">{language === 'en' ? 'Team members coming soon.' : 'Membros da equipa em breve.'}</p>
      )}
    </section>
  );

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-school-blue mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">
              <span className="text-school-blue">{t('team_title')}</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              {t('team_page_description')}
            </p>
          </div>

          {renderTeamSection(t('team_board'), boardMembers, Users)}
          {renderTeamSection(t('team_teachers'), teachers, BookOpen)}
          {renderTeamSection(t('team_operational'), operational, UserCog)}
          {renderTeamSection(t('team_administrative'), administrative, UserCog)}
        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
