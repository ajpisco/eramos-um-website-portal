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
      name: t('team.alexandrina_ildefonso'),
      role: t('team_elementary_teacher'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.joao_seguro'),
      role: language === 'en' ? `${t('team_teacher')} & ${t('team_study_room_head')} (7th-9th Grades)` : `${t('team_teacher')} e ${t('team_study_room_head')} (Salas de Estudo 7º-9º Ano)`,
      imageUrl: placeholderImg,
    },
    {
      name: t('team.diogo_seguro'),
      role: language === 'en' ? `${t('team_study_room_head')} (5th-6th Grades)` : `${t('team_study_room_head')} (Salas de Estudo 5º-6º Ano)`,
      imageUrl: placeholderImg,
    }
  ];

  // All teachers (elementary and kindergarten)
  const teachers: TeamMember[] = [
    { name: t('team.carla_moreira'), role: t('team_elementary_teacher'), imageUrl: placeholderImg },
    { name: t('team.rita_cardoso'), role: t('team_elementary_teacher'), imageUrl: placeholderImg },
    { name: t('team.raquel_monteiro'), role: t('team_elementary_teacher'), imageUrl: placeholderImg },
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
    { name: t('team.catarina_oliveira'), role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: t('team.catarina_dias'), role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: t('team.christina_ashley'), role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: t('team.joana_goulart'), role: t('team_kindergarten_teacher'), imageUrl: placeholderImg },
    { name: t('team.catarina_lopes'), role: t('team_kindergarten_teacher'), imageUrl: placeholderImg }
  ];
  
  // Operational staff
  const operational: TeamMember[] = [
    {
      name: t('team.joao_ildefonso'),
      role: t('team_school_driver'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.teresa_goncalves'),
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.monica_fernandes'),
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.marta_monteiro'),
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.silvia_porelo'),
      role: t('team_operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.maria_dos_anjos'),
      role: t('team_cook'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.andreia_valido'),
      role: t('team_cook_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: t('team.nuno'),
      role: t('team_maintenance_assistant'),
      imageUrl: placeholderImg,
    }
  ];

  // Administrative staff
  const administrative: TeamMember[] = [
    {
      name: t('team.fatima_monteiro'),
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
        <p className="text-gray-600">{t('team.coming_soon')}</p>
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
