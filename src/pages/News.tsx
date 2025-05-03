
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface NewsItem {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  content: {
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

const News = () => {
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
      content: {
        en: "Our annual Science Fair was a great success with over 50 student projects from all grade levels. The judges were impressed with the high level of scientific inquiry and presentation skills. Special congratulations to our winners: Maria Silva (1st place), João Santos (2nd place), and Ana Oliveira (3rd place).",
        pt: "Nossa Feira de Ciências anual foi um grande sucesso com mais de 50 projetos de alunos de todas as séries. Os juízes ficaram impressionados com o alto nível de investigação científica e habilidades de apresentação. Parabéns especiais aos nossos vencedores: Maria Silva (1º lugar), João Santos (2º lugar) e Ana Oliveira (3º lugar)."
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
      content: {
        en: "Starting next semester, we are expanding our music program to include piano, guitar, violin, and chorus. We've hired three new instructors, all with extensive experience teaching children. Each student will have the opportunity to explore different instruments before choosing one for dedicated study.",
        pt: "A partir do próximo semestre, estamos expandindo nosso programa de música para incluir piano, violão, violino e coral. Contratamos três novos instrutores, todos com ampla experiência em ensinar crianças. Cada aluno terá a oportunidade de explorar diferentes instrumentos antes de escolher um para estudo dedicado."
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
      content: {
        en: "Our parent-teacher conferences will be held May 20-22. Each conference will be 20 minutes long, providing ample time to discuss your child's progress. You can reserve your slot through our online portal or by calling the school office.",
        pt: "Nossas reuniões de pais e professores serão realizadas de 20 a 22 de maio. Cada reunião terá 20 minutos de duração, proporcionando tempo suficiente para discutir o progresso de seu filho. Você pode reservar seu horário através do nosso portal online ou ligando para a secretaria da escola."
      },
      date: "2023-04-10",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "4",
      title: {
        en: "Summer Camp Registration Now Open",
        pt: "Inscrições para o Acampamento de Verão Abertas"
      },
      excerpt: {
        en: "Our popular summer camp program returns with exciting activities for all ages. Limited spots available!",
        pt: "Nosso popular programa de acampamento de verão retorna com atividades emocionantes para todas as idades. Vagas limitadas!"
      },
      content: {
        en: "Our summer camp will run from June 15 to August 15, with weekly themed activities including sports, arts and crafts, nature exploration, and science experiments. Early bird registration discount is available until May 1st.",
        pt: "Nosso acampamento de verão funcionará de 15 de junho a 15 de agosto, com atividades temáticas semanais, incluindo esportes, artes e ofícios, exploração da natureza e experimentos científicos. Desconto para inscrição antecipada disponível até 1º de maio."
      },
      date: "2023-03-20",
      image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "5",
      title: {
        en: "New School Library Collection Unveiled",
        pt: "Nova Coleção da Biblioteca Escolar Revelada"
      },
      excerpt: {
        en: "Thanks to a generous donation, our library has added over 500 new books spanning various subjects and reading levels.",
        pt: "Graças a uma generosa doação, nossa biblioteca adicionou mais de 500 novos livros abrangendo vários assuntos e níveis de leitura."
      },
      content: {
        en: "We're thrilled to announce that our library has received a substantial donation from the Community Education Foundation, allowing us to purchase over 500 new books. The new collection includes fiction, non-fiction, reference materials, and bilingual books to support our diverse student body.",
        pt: "Estamos entusiasmados em anunciar que nossa biblioteca recebeu uma doação substancial da Fundação de Educação Comunitária, permitindo-nos comprar mais de 500 novos livros. A nova coleção inclui ficção, não-ficção, materiais de referência e livros bilíngues para apoiar nosso diversificado corpo discente."
      },
      date: "2023-03-05",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    },
    {
      id: "6",
      title: {
        en: "School Achieves Environmental Certification",
        pt: "Escola Conquista Certificação Ambiental"
      },
      excerpt: {
        en: "Our school has been recognized for its sustainability efforts with a Green School certification.",
        pt: "Nossa escola foi reconhecida por seus esforços de sustentabilidade com uma certificação de Escola Verde."
      },
      content: {
        en: "After a year-long effort to improve our environmental practices, we're proud to announce that Eramos Um has achieved Green School certification. This recognition comes as a result of our recycling program, energy conservation measures, organic garden, and environmental education curriculum.",
        pt: "Após um esforço de um ano para melhorar nossas práticas ambientais, temos o orgulho de anunciar que o Eramos Um conquistou a certificação de Escola Verde. Este reconhecimento é resultado do nosso programa de reciclagem, medidas de conservação de energia, horta orgânica e currículo de educação ambiental."
      },
      date: "2023-02-18",
      image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
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
    <Layout>
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center mb-12">
            <span className="text-school-blue">{t('news.title')}</span>
          </h1>
          
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
      </div>
    </Layout>
  );
};

export default News;
