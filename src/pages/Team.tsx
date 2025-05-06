import Layout from "@/components/Layout";
import { useLanguage } from "@/context/LanguageContext";
import { Users, BookOpen, Smile, UserCog } from "lucide-react";

// Placeholder image - replace with actual images or a default one
const placeholderImg = "/placeholder.svg"; 

interface TeamMember {
  name: string;
  role: string; // This will be the primary role for display
  bio?: string; // For more detailed descriptions if needed, can be translated if complex
  imageUrl?: string;
}

const TeamPage = () => {
  const { t, language } = useLanguage();

  const boardMembers: TeamMember[] = [
    {
      name: "João Seguro",
      role: language === 'en' ? `${t('team.teacher')} & ${t('team.study_room_head')} (7th-9th Grades)` : `${t('team.teacher')} e ${t('team.study_room_head')} (Salas de Estudo 7º-9º Ano)`,
      // bio: "Also a board member.", // Example if bio is needed
      imageUrl: placeholderImg,
    },
    {
      name: "Diogo Seguro",
      role: language === 'en' ? `${t('team.study_room_head')} (5th-6th Grades)` : `${t('team.study_room_head')} (Salas de Estudo 5º-6º Ano)`,
      // bio: "Also a board member.",
      imageUrl: placeholderImg,
    },
    {
      name: "Alexandrina Ildefonso",
      role: t('program.elementary'), // Role: Elementary Teacher
      // bio: "Also a board member.",
      imageUrl: placeholderImg,
    },
  ];

  const elementaryTeachers: TeamMember[] = [
    { name: "Carla Moreira", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Ana Rita", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Raquel Monteiro", role: t('team.teacher'), imageUrl: placeholderImg },
    {
      name: "Andreia Ferreira",
      role: t('team.pe'), // Role: Sports Teacher
      imageUrl: placeholderImg,
    },
    {
      name: "Inês Miranda",
      role: t('team.english_teacher'), // Role: English Teacher
      imageUrl: placeholderImg,
    },
    {
      name: "Steve",
      role: t('team.music_teacher'), // Role: Music Teacher
      imageUrl: placeholderImg,
    },
    {
      name: "Mariana",
      role: t('team.music_teacher'), // Role: Music Teacher
      imageUrl: placeholderImg,
    },
  ];

  const kindergartenTeachers: TeamMember[] = [
    { name: "Catarina Oliveira", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Catarina Dias", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Christina Ashley", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Joana Goulart", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Mónica Vieira", role: t('team.teacher'), imageUrl: placeholderImg },
    { name: "Catarina Lopes", role: t('team.teacher'), imageUrl: placeholderImg },
  ];

  const supportStaff: TeamMember[] = [
    {
      name: "João Ildefonso",
      role: t('team.school_driver'),
      imageUrl: placeholderImg,
    },
    {
      name: "Fátima Monteiro",
      role: t('team.administrative_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Teresa Gonçalves",
      role: t('team.operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Mónica Fernandes",
      role: t('team.operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Maria dos Anjos",
      role: t('team.cook'),
      imageUrl: placeholderImg,
    },
    {
      name: "Susana Bourdain",
      role: t('team.cook_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Andreia Valido",
      role: t('team.cook_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Marta Monteiro",
      role: t('team.operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "Sílvia Porêlo",
      role: t('team.operational_assistant'),
      imageUrl: placeholderImg,
    },
    {
      name: "João Gomes",
      role: t('team.maintenance_assistant'),
      imageUrl: placeholderImg,
    },
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
              <span className="text-school-blue">{t('team.title')}</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              {t('team.directors.description')} {/* Using existing key for general description */}
            </p>
          </div>

          {renderTeamSection(t('team.directors'), boardMembers, Users)}
          {renderTeamSection(t('program.elementary') + " " + t('team.teachers'), elementaryTeachers, BookOpen)}
          {renderTeamSection(t('program.kindergarten') + " " + t('team.teachers'), kindergartenTeachers, Smile)}
          {renderTeamSection(t('team.staff'), supportStaff, UserCog)}

        </div>
      </div>
    </Layout>
  );
};

export default TeamPage;
