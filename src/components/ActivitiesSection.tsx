
import { useLanguage } from "@/context/LanguageContext";
import { Guitar, Piano } from "lucide-react";

const ActivitiesSection = () => {
  const { t } = useLanguage();

  const activities = [
    {
      id: 'guitar',
      icon: <Guitar className="h-12 w-12 text-school-blue" />,
      titleKey: 'activity.guitar',
      image: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 'piano',
      icon: <Piano className="h-12 w-12 text-school-blue" />,
      titleKey: 'activity.piano',
      image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 'ballet',
      icon: <span className="text-4xl text-school-blue">🩰</span>,
      titleKey: 'activity.ballet',
      image: 'https://images.unsplash.com/photo-1575052814086-f385ca5d91b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 'swimming',
      icon: <span className="text-4xl text-school-blue">🏊‍♂️</span>,
      titleKey: 'activity.swimming',
      image: 'https://images.unsplash.com/photo-1560090995-01632a28895b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    },
    {
      id: 'surfing',
      icon: <span className="text-4xl text-school-blue">🏄‍♂️</span>,
      titleKey: 'activity.surfing',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80',
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
          <span className="text-school-green">{t('section.activities')}</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={t(activity.titleKey)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <div className="flex justify-center mb-3">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800">
                  {t(activity.titleKey)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
