
import { useLanguage } from "@/context/LanguageContext";
import { Guitar, Piano, Activity, Waves, Dumbbell, Brain, Music, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
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
      image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.swimming',
    },
    {
      id: 'guitar',
      icon: <Guitar className="h-12 w-12 text-white" />,
      titleKey: 'activity.guitar',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.music',
    },
    {
      id: 'piano',
      icon: <Piano className="h-12 w-12 text-white" />,
      titleKey: 'activity.piano',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.music',
    },
    {
      id: 'ballet',
      icon: <span className="text-4xl text-white">🩰</span>,
      titleKey: 'activity.ballet',
      image: 'https://images.unsplash.com/photo-1575052814086-f385ca5d91b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.dance',
    },
    {
      id: 'karate',
      icon: <Dumbbell className="h-12 w-12 text-white" />,
      titleKey: 'activity.karate',
      image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.sports',
    },
    {
      id: 'horse_riding',
      icon: <Activity className="h-12 w-12 text-white" />,
      titleKey: 'activity.horse_riding',
      image: 'https://images.unsplash.com/photo-1511994298241-608e28f14fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.outdoor',
    },
    {
      id: 'dance',
      icon: <Activity className="h-12 w-12 text-white" />,
      titleKey: 'activity.dance',
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.dance',
    },
    {
      id: 'it',
      icon: <Brain className="h-12 w-12 text-white" />,
      titleKey: 'activity.it',
      image: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.tech',
    },
    {
      id: 'music',
      icon: <Music className="h-12 w-12 text-white" />,
      titleKey: 'activity.music',
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
      location: 'activity.location.music',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-6">
          <span className="text-school-green">{t('section.activities')}</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
          {t('section.activities.description')}
        </p>
        
        <div className="relative px-4">
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
              <CarouselItem className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <Link to="/extracurricular" className="group relative flex h-[400px] overflow-hidden rounded-lg bg-school-blue bg-opacity-90">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                    <ChevronRight className="h-16 w-16 text-white mb-4" />
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {t('section.activities.see_all')}
                    </h3>
                  </div>
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-school-green border-none text-white hover:bg-school-green-dark hover:text-white" />
            <CarouselNext className="right-0 bg-school-green border-none text-white hover:bg-school-green-dark hover:text-white" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
          <Link to="/extracurricular" className="inline-flex items-center text-school-blue hover:text-school-green transition-colors font-medium">
            {t('section.activities.learn_more')}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
