
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Sitemap as SitemapIcon } from "lucide-react";

const Sitemap = () => {
  const { t, language } = useLanguage();

  const pages = [
    {
      title: language === 'en' ? 'Home' : 'Início',
      url: '/',
      children: []
    },
    {
      title: language === 'en' ? 'News' : 'Notícias',
      url: '/news',
      children: []
    },
    {
      title: language === 'en' ? 'Contact' : 'Contato',
      url: '/contact',
      children: []
    },
    {
      title: language === 'en' ? 'Sitemap' : 'Mapa do Site',
      url: '/sitemap',
      children: []
    },
    {
      title: language === 'en' ? 'Terms of Service' : 'Termos de Serviço',
      url: '/terms',
      children: []
    },
    {
      title: language === 'en' ? 'Privacy Policy' : 'Política de Privacidade',
      url: '/privacy',
      children: []
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <SitemapIcon className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('sitemap.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {pages.map((page, index) => (
                <li key={index}>
                  <Link 
                    to={page.url}
                    className="text-lg font-medium text-school-blue hover:underline"
                  >
                    {page.title}
                  </Link>
                  
                  {page.children.length > 0 && (
                    <ul className="ml-6 mt-2 space-y-1">
                      {page.children.map((child, childIndex) => (
                        <li key={`${index}-${childIndex}`}>
                          <Link 
                            to={child.url}
                            className="text-gray-700 hover:text-school-blue hover:underline"
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sitemap;
