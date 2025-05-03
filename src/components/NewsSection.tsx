
import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface NewsItem {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  excerpt: {
    en: string;
    pt: string;
  };
  date: string;
  image: string;
}

const NewsSection = () => {
  const { t, language } = useLanguage();

  const news: NewsItem[] = [
    {
      id: "1",
      title: {
        en: "Annual Science Fair Winners Announced",
        pt: "Anunciados os Vencedores da Feira de Ciências Anual"
      },
      excerpt: {
        en: "Congratulations to all participants in our annual Science Fair! The creativity and scientific knowledge displayed were outstanding.",
        pt: "Parabéns a todos os participantes de nossa Feira de Ciências anual! A criatividade e o conhecimento científico demonstrados foram excepcionais."
      },
      date: "2023-05-15",
      image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "2",
      title: {
        en: "New Music Program Launching Next Semester",
        pt: "Novo Programa de Música Será Lançado no Próximo Semestre"
      },
      excerpt: {
        en: "We're excited to announce our expanded music program including new instruments and experienced instructors.",
        pt: "Estamos animados em anunciar nosso programa de música expandido, incluindo novos instrumentos e instrutores experientes."
      },
      date: "2023-04-28",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "3",
      title: {
        en: "Parent-Teacher Conference Schedule Released",
        pt: "Divulgado o Cronograma de Reuniões de Pais e Professores"
      },
      excerpt: {
        en: "The schedule for our upcoming parent-teacher conferences is now available. Please reserve your time slot.",
        pt: "O cronograma para nossas próximas reuniões de pais e professores já está disponível. Por favor, reserve seu horário."
      },
      date: "2023-04-10",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
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
