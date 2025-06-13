import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { getAllNewsReversed } from "@/data/news";

const News = () => {
  const { t, language } = useLanguage();

  // Get all news in reverse chronological order (latest first)
  const allNews = getAllNewsReversed();

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
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-12">
            <span className="text-school-blue">{t('news.title')}</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allNews.map((item) => (
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
      </div>
    </Layout>
  );
};

export default News;
