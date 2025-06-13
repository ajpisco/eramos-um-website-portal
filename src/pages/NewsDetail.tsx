import { useParams, Navigate, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { newsData } from "@/data/news";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();

  // Find the news item by ID
  const newsItem = newsData.find(item => item.id === id);

  // If news item not found, redirect to 404
  if (!newsItem) {
    return <Navigate to="/404" replace />;
  }

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
          <article className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-8">
              <img 
                src={newsItem.image} 
                alt={newsItem.title[language]} 
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Article Header */}
            <header className="mb-8">
              <div className="text-sm text-school-green font-medium mb-4">
                {formatDate(newsItem.date)}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
                {newsItem.title[language]}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {newsItem.excerpt[language]}
              </p>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {newsItem.content[language]}
                </p>
              </div>
            </div>

            {/* Back to News Link */}
            <div className="mt-12 text-center">
              <Link 
                to="/news" 
                className="inline-flex items-center text-school-blue font-medium hover:underline"
              >
                ← {language === 'en' ? 'Back to News' : 'Voltar às Notícias'}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export default NewsDetail; 