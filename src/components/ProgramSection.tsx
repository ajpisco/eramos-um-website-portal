
import { useLanguage } from "@/context/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";

const ProgramSection = () => {
  const { t } = useLanguage();

  const programs = [
    {
      id: 'daycare',
      image: 'https://images.unsplash.com/photo-1526620290166-6b18d2ac9706?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
      titleKey: 'program.daycare',
      agesKey: 'program.daycare.ages',
      descriptionKey: 'program.daycare.description',
    },
    {
      id: 'kindergarten',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
      titleKey: 'program.kindergarten',
      agesKey: 'program.kindergarten.ages',
      descriptionKey: 'program.kindergarten.description',
    },
    {
      id: 'elementary',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80',
      titleKey: 'program.elementary',
      agesKey: 'program.elementary.ages',
      descriptionKey: 'program.elementary.description',
    },
  ];

  return (
    <section id="programs" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          <span className="text-school-blue">{t('section.programs')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="card-gradient overflow-hidden transform hover:scale-[1.02] transition-transform">
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={t(program.titleKey)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold text-school-blue mb-1">
                  {t(program.titleKey)}
                </h3>
                <p className="text-sm text-school-green font-medium mb-3">
                  {t(program.agesKey)}
                </p>
                <p className="text-gray-700">
                  {t(program.descriptionKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
