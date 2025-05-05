import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Map } from "lucide-react";

const Sitemap = () => {
  const { t } = useLanguage();

  const pages = [
    {
      title: t('nav.home'),
      url: '/',
      children: []
    },
    {
      title: t('nav.school'),
      url: '#',
      children: [
        {
          title: t('nav.about'),
          url: '/about'
        },
        {
          title: t('nav.team'),
          url: '/team'
        },
        {
          title: t('nav.regulation'),
          url: '/regulation'
        }
      ]
    },
    {
      title: t('nav.daily'),
      url: '#',
      children: [
        {
          title: t('nav.lunch'),
          url: '/lunch-menu'
        },
        {
          title: t('nav.dress'),
          url: '/dress-code'
        },
        {
          title: t('nav.schedule'),
          url: '/class-schedules'
        },
        {
          title: t('nav.books'),
          url: '/school-books'
        },
        {
          title: t('nav.calendar'),
          url: '/academic-calendar'
        }
      ]
    },
    {
      title: t('nav.programs'),
      url: '#',
      children: [
        {
          title: t('nav.extracurricular'),
          url: '/extracurricular'
        },
        {
          title: t('nav.inovar'),
          url: '/inovar'
        }
      ]
    },
    {
      title: t('nav.admission'),
      url: '/admission',
      children: []
    },
    {
      title: t('nav.news'),
      url: '/news',
      children: []
    },
    {
      title: t('nav.contact'),
      url: '/contact',
      children: []
    },
    {
      title: t('nav.sitemap'),
      url: '/sitemap',
      children: []
    },
    {
      title: t('nav.terms'),
      url: '/terms',
      children: []
    },
    {
      title: t('nav.privacy'),
      url: '/privacy',
      children: []
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Map className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('sitemap.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              {pages.map((page, index) => (
                <li key={index}>
                  {page.url === '#' ? (
                    <span className="text-lg font-medium text-gray-700">{page.title}</span>
                  ) : (
                    <Link 
                      to={page.url}
                      className="text-lg font-medium text-school-blue hover:underline"
                    >
                      {page.title}
                    </Link>
                  )}
                  
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
