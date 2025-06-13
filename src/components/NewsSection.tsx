import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getLatestNews } from "@/data/news";

const NewsSection = () => {
  const { t, language } = useLanguage();

  // Get the latest 3 news items
  const latestNews = getLatestNews(3);

  // Format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'en' ? 'en-US' : 'pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            <span className="text-school-blue">{t('section.news')}</span>
          </h2>
          <Link to="/news">
            <Button variant="outline" className="border-school-blue text-school-blue hover:bg-school-blue hover:text-white">
              {language === 'en' ? 'View All' : 'Ver Tudo'}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestNews.map((item) => (
            <Card key={item.id} className="card-gradient overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title[language]} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-school-green font-medium mb-2">
                  {formatDate(item.date)}
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-800 mb-2">
                  {item.title[language]}
                </h3>
                <p className="text-gray-700 mb-4">
                  {item.excerpt[language]}
                </p>
                <Link 
                  to={`/news/${item.id}`}
                  className="text-school-blue font-medium hover:underline"
                >
                  {language === 'en' ? 'Read more' : 'Leia mais'}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
