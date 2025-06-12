import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { BookOpen, ExternalLink } from "lucide-react";

const SchoolBooks = () => {
  const { t, language } = useLanguage();
  const [activeGrade, setActiveGrade] = useState("grade1");
  
  // Sample books data
  const books = {
    grade1: [
      {
        subject: t('books.subject.math'),
        title: t('books.title.math_adventures_1'),
        author: t('books.author.maria_silva'),
        publisher: t('books.publisher.educational_press'),
        isbn: '978-3-16-148410-0'
      },
      {
        subject: language === 'en' ? 'Portuguese' : 'Português',
        title: language === 'en' ? 'Portuguese Language 1' : 'Língua Portuguesa 1',
        author: 'João Pereira',
        publisher: 'Learning Books',
        isbn: '978-3-16-148410-1'
      },
      {
        subject: language === 'en' ? 'Science' : 'Ciências',
        title: language === 'en' ? 'Discovering Our World 1' : 'Descobrindo Nosso Mundo 1',
        author: 'Ana Costa',
        publisher: 'Discovery Press',
        isbn: '978-3-16-148410-2'
      },
      {
        subject: language === 'en' ? 'English' : 'Inglês',
        title: language === 'en' ? 'English Adventure 1' : 'Aventura em Inglês 1',
        author: 'John Smith',
        publisher: 'Global Education',
        isbn: '978-3-16-148410-3'
      }
    ],
    grade2: [
      {
        subject: language === 'en' ? 'Mathematics' : 'Matemática',
        title: language === 'en' ? 'Math Adventures 2' : 'Aventuras Matemáticas 2',
        author: 'Maria Silva',
        publisher: 'Educational Press',
        isbn: '978-3-16-148410-4'
      },
      {
        subject: language === 'en' ? 'Portuguese' : 'Português',
        title: language === 'en' ? 'Portuguese Language 2' : 'Língua Portuguesa 2',
        author: 'João Pereira',
        publisher: 'Learning Books',
        isbn: '978-3-16-148410-5'
      },
      {
        subject: language === 'en' ? 'Science' : 'Ciências',
        title: language === 'en' ? 'Discovering Our World 2' : 'Descobrindo Nosso Mundo 2',
        author: 'Ana Costa',
        publisher: 'Discovery Press',
        isbn: '978-3-16-148410-6'
      },
      {
        subject: language === 'en' ? 'English' : 'Inglês',
        title: language === 'en' ? 'English Adventure 2' : 'Aventura em Inglês 2',
        author: 'John Smith',
        publisher: 'Global Education',
        isbn: '978-3-16-148410-7'
      }
    ],
    grade3: [
      {
        subject: language === 'en' ? 'Mathematics' : 'Matemática',
        title: language === 'en' ? 'Math Adventures 3' : 'Aventuras Matemáticas 3',
        author: 'Maria Silva',
        publisher: 'Educational Press',
        isbn: '978-3-16-148410-8'
      },
      {
        subject: language === 'en' ? 'Portuguese' : 'Português',
        title: language === 'en' ? 'Portuguese Language 3' : 'Língua Portuguesa 3',
        author: 'João Pereira',
        publisher: 'Learning Books',
        isbn: '978-3-16-148410-9'
      },
      {
        subject: language === 'en' ? 'Science' : 'Ciências',
        title: language === 'en' ? 'Discovering Our World 3' : 'Descobrindo Nosso Mundo 3',
        author: 'Ana Costa',
        publisher: 'Discovery Press',
        isbn: '978-3-16-148411-0'
      },
      {
        subject: language === 'en' ? 'English' : 'Inglês',
        title: language === 'en' ? 'English Adventure 3' : 'Aventura em Inglês 3',
        author: 'John Smith',
        publisher: 'Global Education',
        isbn: '978-3-16-148411-1'
      }
    ],
    grade4: [
      {
        subject: language === 'en' ? 'Mathematics' : 'Matemática',
        title: language === 'en' ? 'Math Adventures 4' : 'Aventuras Matemáticas 4',
        author: 'Maria Silva',
        publisher: 'Educational Press',
        isbn: '978-3-16-148411-2'
      },
      {
        subject: language === 'en' ? 'Portuguese' : 'Português',
        title: language === 'en' ? 'Portuguese Language 4' : 'Língua Portuguesa 4',
        author: 'João Pereira',
        publisher: 'Learning Books',
        isbn: '978-3-16-148411-3'
      },
      {
        subject: language === 'en' ? 'Science' : 'Ciências',
        title: language === 'en' ? 'Discovering Our World 4' : 'Descobrindo Nosso Mundo 4',
        author: 'Ana Costa',
        publisher: 'Discovery Press',
        isbn: '978-3-16-148411-4'
      },
      {
        subject: language === 'en' ? 'English' : 'Inglês',
        title: language === 'en' ? 'English Adventure 4' : 'Aventura em Inglês 4',
        author: 'John Smith',
        publisher: 'Global Education',
        isbn: '978-3-16-148411-5'
      },
      {
        subject: language === 'en' ? 'Geography' : 'Geografia',
        title: language === 'en' ? 'Our World 4' : 'Nosso Mundo 4',
        author: 'Carlos Santos',
        publisher: 'Global Education',
        isbn: '978-3-16-148411-6'
      }
    ]
  };

  const bookstores = [
    {
      name: t('books.store.academic'),
      address: t('books.store.academic_address'),
      phone: t('books.store.academic_phone'),
      website: t('books.store.academic_website')
    },
    {
      name: language === 'en' ? 'School Central' : 'Central Escolar',
      address: 'Av. da Educação, 456',
      phone: '(11) 5555-8765',
      website: 'www.centralescolar.com.br'
    },
    {
      name: language === 'en' ? 'Online Education Store' : 'Loja de Educação Online',
      address: '',
      phone: '(11) 5555-7654',
      website: 'www.edubookstore.com.br'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('books.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('books.intro')}
            </p>
            
            {/* Grade Selection Tabs */}
            <div className="flex flex-wrap justify-center mb-8">
              <button 
                onClick={() => setActiveGrade("grade1")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade1" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('books.grade1')}
              </button>
              <button 
                onClick={() => setActiveGrade("grade2")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade2" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('books.grade2')}
              </button>
              <button 
                onClick={() => setActiveGrade("grade3")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade3" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('books.grade3')}
              </button>
              <button 
                onClick={() => setActiveGrade("grade4")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade4" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('books.grade4')}
              </button>
            </div>
            
            {/* Books List */}
            <div className="grid grid-cols-1 gap-6 mb-12">
              {books[activeGrade as keyof typeof books].map((book, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="h-12 w-12 flex-shrink-0 bg-school-green bg-opacity-20 rounded-full flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-school-green" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-school-blue">{book.title}</h3>
                      <p className="text-gray-500 text-sm mb-2">{book.subject}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
                        <div>
                          <span className="font-medium">{t('books.author_label')} </span> {book.author}
                        </div>
                        <div>
                          <span className="font-medium">{t('books.publisher_label')} </span> {book.publisher}
                        </div>
                        <div className="md:col-span-2">
                          <span className="font-medium">{t('books.isbn_label')} </span> {book.isbn}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Where to Buy */}
            <section>
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-6 text-center">
                {t('books.where_to_buy')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {bookstores.map((store, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-school-blue mb-3">{store.name}</h3>
                    {store.address && (
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">{t('books.address_label')} </span> {store.address}
                      </p>
                    )}
                    {store.phone && (
                      <p className="text-gray-700 mb-1">
                        <span className="font-medium">{t('books.phone_label')} </span> {store.phone}
                      </p>
                    )}
                    <a 
                      href={`https://${store.website}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center text-school-blue hover:underline mt-2"
                    >
                      <span>{store.website}</span>
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolBooks;
