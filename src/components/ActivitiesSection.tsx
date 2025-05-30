import { useLanguage } from "@/context/LanguageContext";
import { Guitar, Piano, Waves, Dumbbell, ChevronRight, Drama, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { getActivityImage } from "@/utils/imageUtils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ActivitiesSection = () => {
  const { t } = useLanguage();

  const activities = [
    {
      id: 'swimming',
      icon: <Waves className="h-12 w-12 text-white" />,
      titleKey: 'activity.swimming',
      image: getActivityImage('swimming'),
      location: 'activity.location.swimming',
    },
    {
      id: 'guitar',
      icon: <Guitar className="h-12 w-12 text-white" />,
      titleKey: 'activity.guitar',
      image: getActivityImage('guitar'),
      location: 'activity.location.music',
    },
    {
      id: 'piano',
      icon: <Piano className="h-12 w-12 text-white" />,
      titleKey: 'activity.piano',
      image: getActivityImage('piano'),
      location: 'activity.location.music',
    },
    {
      id: 'ballet',
      icon: <span className="text-4xl text-white">🩰</span>,
      titleKey: 'activity.ballet',
      image: getActivityImage('ballet'),
      location: 'activity.location.dance',
    },
    {
      id: 'karate',
      icon: <Dumbbell className="h-12 w-12 text-white" />,
      titleKey: 'activity.karate',
      image: getActivityImage('karate'),
      location: 'activity.location.sports',
    },
    {
      id: 'theater',
      icon: <Drama className="h-12 w-12 text-white" />,
      titleKey: 'activity.theater',
      image: getActivityImage('theater'),
      location: 'activity.location.arts',
    },
    {
      id: 'inventors',
      icon: <Cpu className="h-12 w-12 text-white" />,
      titleKey: 'activity.inventors',
      image: getActivityImage('inventors'),
      location: 'activity.location.tech',
    },
    {
      id: 'football',
      icon: <span className="text-4xl text-white">⚽</span>,
      titleKey: 'activity.football',
      image: getActivityImage('football'),
      location: 'activity.location.sports',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
          <span className="text-school-green-dark">{t('section.activities')}</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          {t('section.activities.description')}
        </p>
        
        <div className="relative px-20">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {activities.map((activity) => (
                <CarouselItem key={activity.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                  <div className="group relative h-[400px] overflow-hidden rounded-lg activity-card">
                    <img 
                      src={activity.image} 
                      alt={t(activity.titleKey)} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        console.warn(`Failed to load image for ${activity.id}: ${activity.image}`);
                        // Show gradient background with icon as fallback
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'w-full h-full bg-gradient-to-br from-school-blue to-school-green flex items-center justify-center';
                          fallback.innerHTML = `<div class="text-white">${activity.icon}</div>`;
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity group-hover:bg-opacity-50"></div>
                    <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                      <div className="mb-2 opacity-90">
                        {t(activity.location)}
                      </div>
                      <h3 className="text-3xl font-serif mb-6">{t(activity.titleKey)}</h3>
                      <div className="activity-indicator"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-16 bg-school-green-dark border-none text-white hover:bg-school-green-light hover:text-white" />
            <CarouselNext className="-right-16 bg-school-blue-dark border-none text-white hover:bg-school-blue-light hover:text-white" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/extracurricular" className="inline-flex items-center text-school-blue-dark hover:text-school-green-dark transition-colors font-medium">
            {t('section.activities.learn_more')}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
