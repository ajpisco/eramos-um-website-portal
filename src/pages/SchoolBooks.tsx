import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { BookOpen, ExternalLink } from "lucide-react";

interface Book {
  subject: string;
  title: string;
  author: string;
  publisher: string;
  isbn: string;
}

interface BookSubOption {
  key: string;
  labelKey: string;
  books: Book[];
}

// Constants for localStorage keys
const BOOKS_STORAGE_KEYS = {
  MAIN_TAB: 'eramos-um-books-main-tab',
  SUB_OPTION: 'eramos-um-books-sub-option'
};

const SchoolBooks = () => {
  const { t, language } = useLanguage();
  const [activeMainTab, setActiveMainTab] = useState("daycare");
  const [activeSubOption, setActiveSubOption] = useState<BookSubOption | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Books data organized by education level and year/grade
  const getBooksData = () => {
    const daycareBooks = {
      year1: [
        {
          subject: language === 'en' ? 'Early Learning' : 'Aprendizagem Precoce',
          title: language === 'en' ? 'My First Colors and Shapes' : 'Minhas Primeiras Cores e Formas',
          author: language === 'en' ? 'Ana Santos' : 'Ana Santos',
          publisher: language === 'en' ? 'Early Education Press' : 'Editora Educação Precoce',
          isbn: '978-3-16-148410-0'
        },
        {
          subject: language === 'en' ? 'Motor Skills' : 'Coordenação Motora',
          title: language === 'en' ? 'Little Hands, Big Adventures' : 'Mãozinhas, Grandes Aventuras',
          author: language === 'en' ? 'Maria Costa' : 'Maria Costa',
          publisher: language === 'en' ? 'Child Development Books' : 'Livros Desenvolvimento Infantil',
          isbn: '978-3-16-148410-1'
        }
      ],
      year2: [
        {
          subject: language === 'en' ? 'Pre-Reading' : 'Pré-Leitura',
          title: language === 'en' ? 'Letters and Sounds Adventure' : 'Aventura das Letras e Sons',
          author: language === 'en' ? 'João Silva' : 'João Silva',
          publisher: language === 'en' ? 'Early Education Press' : 'Editora Educação Precoce',
          isbn: '978-3-16-148410-2'
        },
        {
          subject: language === 'en' ? 'Numbers' : 'Números',
          title: language === 'en' ? 'Counting Fun' : 'Diversão com Números',
          author: language === 'en' ? 'Carla Pereira' : 'Carla Pereira',
          publisher: language === 'en' ? 'Math for Kids' : 'Matemática para Crianças',
          isbn: '978-3-16-148410-3'
        }
      ]
    };

    const kindergartenBooks = {
      year3: [
        {
          subject: language === 'en' ? 'Pre-Writing' : 'Pré-Escrita',
          title: language === 'en' ? 'My First Writing Book' : 'Meu Primeiro Livro de Escrita',
          author: language === 'en' ? 'Rita Oliveira' : 'Rita Oliveira',
          publisher: language === 'en' ? 'Kindergarten Press' : 'Editora Jardim de Infância',
          isbn: '978-3-16-148410-4'
        },
        {
          subject: language === 'en' ? 'Basic Math' : 'Matemática Básica',
          title: language === 'en' ? 'Numbers and Me' : 'Os Números e Eu',
          author: language === 'en' ? 'Pedro Santos' : 'Pedro Santos',
          publisher: language === 'en' ? 'Early Math Books' : 'Livros Matemática Inicial',
          isbn: '978-3-16-148410-5'
        }
      ],
      year4: [
        {
          subject: language === 'en' ? 'Reading Readiness' : 'Preparação para Leitura',
          title: language === 'en' ? 'Stories and Words' : 'Histórias e Palavras',
          author: language === 'en' ? 'Luisa Ferreira' : 'Luisa Ferreira',
          publisher: language === 'en' ? 'Reading Adventures' : 'Aventuras de Leitura',
          isbn: '978-3-16-148410-6'
        },
        {
          subject: language === 'en' ? 'Science Discovery' : 'Descoberta Científica',
          title: language === 'en' ? 'Little Scientists' : 'Pequenos Cientistas',
          author: language === 'en' ? 'Carlos Lima' : 'Carlos Lima',
          publisher: language === 'en' ? 'Discovery Kids' : 'Crianças Descobridoras',
          isbn: '978-3-16-148410-7'
        }
      ],
      year5: [
        {
          subject: language === 'en' ? 'Advanced Reading' : 'Leitura Avançada',
          title: language === 'en' ? 'Reading Adventures' : 'Aventuras de Leitura',
          author: language === 'en' ? 'Sofia Rodrigues' : 'Sofia Rodrigues',
          publisher: language === 'en' ? 'Advanced Learning' : 'Aprendizagem Avançada',
          isbn: '978-3-16-148410-8'
        },
        {
          subject: language === 'en' ? 'Math Concepts' : 'Conceitos Matemáticos',
          title: language === 'en' ? 'Math Explorers' : 'Exploradores da Matemática',
          author: language === 'en' ? 'Miguel Torres' : 'Miguel Torres',
          publisher: language === 'en' ? 'Math Adventures' : 'Aventuras Matemáticas',
          isbn: '978-3-16-148410-9'
        }
      ]
    };

    const elementaryBooks = {
      grade1: [
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: language === 'en' ? 'Math Adventures 1' : 'Aventuras Matemáticas 1',
          author: 'Maria Silva',
          publisher: language === 'en' ? 'Educational Press' : 'Editora Educacional',
          isbn: '978-3-16-148411-0'
        },
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: language === 'en' ? 'Portuguese Language 1' : 'Língua Portuguesa 1',
          author: 'João Pereira',
          publisher: language === 'en' ? 'Learning Books' : 'Livros de Aprendizagem',
          isbn: '978-3-16-148411-1'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: language === 'en' ? 'Discovering Our World 1' : 'Descobrindo Nosso Mundo 1',
          author: 'Ana Costa',
          publisher: language === 'en' ? 'Discovery Press' : 'Editora Descoberta',
          isbn: '978-3-16-148411-2'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: language === 'en' ? 'English Adventure 1' : 'Aventura em Inglês 1',
          author: 'John Smith',
          publisher: language === 'en' ? 'Global Education' : 'Educação Global',
          isbn: '978-3-16-148411-3'
        }
      ],
      grade2: [
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: language === 'en' ? 'Math Adventures 2' : 'Aventuras Matemáticas 2',
          author: 'Maria Silva',
          publisher: language === 'en' ? 'Educational Press' : 'Editora Educacional',
          isbn: '978-3-16-148411-4'
        },
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: language === 'en' ? 'Portuguese Language 2' : 'Língua Portuguesa 2',
          author: 'João Pereira',
          publisher: language === 'en' ? 'Learning Books' : 'Livros de Aprendizagem',
          isbn: '978-3-16-148411-5'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: language === 'en' ? 'Discovering Our World 2' : 'Descobrindo Nosso Mundo 2',
          author: 'Ana Costa',
          publisher: language === 'en' ? 'Discovery Press' : 'Editora Descoberta',
          isbn: '978-3-16-148411-6'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: language === 'en' ? 'English Adventure 2' : 'Aventura em Inglês 2',
          author: 'John Smith',
          publisher: language === 'en' ? 'Global Education' : 'Educação Global',
          isbn: '978-3-16-148411-7'
        }
      ],
      grade3: [
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: language === 'en' ? 'Math Adventures 3' : 'Aventuras Matemáticas 3',
          author: 'Maria Silva',
          publisher: language === 'en' ? 'Educational Press' : 'Editora Educacional',
          isbn: '978-3-16-148411-8'
        },
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: language === 'en' ? 'Portuguese Language 3' : 'Língua Portuguesa 3',
          author: 'João Pereira',
          publisher: language === 'en' ? 'Learning Books' : 'Livros de Aprendizagem',
          isbn: '978-3-16-148411-9'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: language === 'en' ? 'Discovering Our World 3' : 'Descobrindo Nosso Mundo 3',
          author: 'Ana Costa',
          publisher: language === 'en' ? 'Discovery Press' : 'Editora Descoberta',
          isbn: '978-3-16-148412-0'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: language === 'en' ? 'English Adventure 3' : 'Aventura em Inglês 3',
          author: 'John Smith',
          publisher: language === 'en' ? 'Global Education' : 'Educação Global',
          isbn: '978-3-16-148412-1'
        }
      ],
      grade4: [
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: language === 'en' ? 'Math Adventures 4' : 'Aventuras Matemáticas 4',
          author: 'Maria Silva',
          publisher: language === 'en' ? 'Educational Press' : 'Editora Educacional',
          isbn: '978-3-16-148412-2'
        },
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: language === 'en' ? 'Portuguese Language 4' : 'Língua Portuguesa 4',
          author: 'João Pereira',
          publisher: language === 'en' ? 'Learning Books' : 'Livros de Aprendizagem',
          isbn: '978-3-16-148412-3'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: language === 'en' ? 'Discovering Our World 4' : 'Descobrindo Nosso Mundo 4',
          author: 'Ana Costa',
          publisher: language === 'en' ? 'Discovery Press' : 'Editora Descoberta',
          isbn: '978-3-16-148412-4'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: language === 'en' ? 'English Adventure 4' : 'Aventura em Inglês 4',
          author: 'John Smith',
          publisher: language === 'en' ? 'Global Education' : 'Educação Global',
          isbn: '978-3-16-148412-5'
        },
        {
          subject: language === 'en' ? 'Geography' : 'Geografia',
          title: language === 'en' ? 'Our World 4' : 'Nosso Mundo 4',
          author: 'Carlos Santos',
          publisher: language === 'en' ? 'Global Education' : 'Educação Global',
          isbn: '978-3-16-148412-6'
        }
      ]
    };

    return { daycareBooks, kindergartenBooks, elementaryBooks };
  };

  const { daycareBooks, kindergartenBooks, elementaryBooks } = getBooksData();

  const tabSubOptions: Record<string, BookSubOption[]> = {
    daycare: [
      { key: "d1", labelKey: "books.option.daycare_year1", books: daycareBooks.year1 },
      { key: "d2", labelKey: "books.option.daycare_year2", books: daycareBooks.year2 },
    ],
    kindergarten: [
      { key: "k3", labelKey: "books.option.kinder_year3", books: kindergartenBooks.year3 },
      { key: "k4", labelKey: "books.option.kinder_year4", books: kindergartenBooks.year4 },
      { key: "k5", labelKey: "books.option.kinder_year5", books: kindergartenBooks.year5 },
    ],
    elementary: [
      { key: "e1", labelKey: "books.option.elementary_grade1", books: elementaryBooks.grade1 },
      { key: "e2", labelKey: "books.option.elementary_grade2", books: elementaryBooks.grade2 },
      { key: "e3", labelKey: "books.option.elementary_grade3", books: elementaryBooks.grade3 },
      { key: "e4", labelKey: "books.option.elementary_grade4", books: elementaryBooks.grade4 },
    ],
  };

  // Load saved preferences from localStorage on component mount
  useEffect(() => {
    try {
      const savedMainTab = localStorage.getItem(BOOKS_STORAGE_KEYS.MAIN_TAB);
      const savedSubOptionKey = localStorage.getItem(BOOKS_STORAGE_KEYS.SUB_OPTION);
      
      // Restore main tab if valid
      if (savedMainTab && tabSubOptions[savedMainTab]) {
        setActiveMainTab(savedMainTab);
        
        // Restore sub option if valid for the saved main tab
        if (savedSubOptionKey) {
          const subOptions = tabSubOptions[savedMainTab];
          const savedSubOption = subOptions.find(sub => sub.key === savedSubOptionKey);
          if (savedSubOption) {
            setActiveSubOption(savedSubOption);
          } else {
            // If saved sub option is not valid, use first available
            setActiveSubOption(subOptions[0]);
          }
        } else {
          // No saved sub option, use first available
          setActiveSubOption(tabSubOptions[savedMainTab][0]);
        }
      } else {
        // No valid saved preferences, use defaults
        setActiveMainTab("daycare");
        setActiveSubOption(tabSubOptions["daycare"][0]);
      }
    } catch (error) {
      // If localStorage fails, use defaults
      console.warn('Failed to load books preferences from localStorage:', error);
      setActiveMainTab("daycare");
      setActiveSubOption(tabSubOptions["daycare"][0]);
    }
    
    setIsInitialized(true);
  }, []);

  // Update sub option when main tab changes (but not during initialization)
  useEffect(() => {
    if (!isInitialized) return;
    
    if (activeMainTab && tabSubOptions[activeMainTab] && tabSubOptions[activeMainTab].length > 0) {
      const currentSubOptions = tabSubOptions[activeMainTab];
      if (!activeSubOption || !currentSubOptions.find(sub => sub.key === activeSubOption.key)) {
        setActiveSubOption(currentSubOptions[0]);
      }
    } else {
      setActiveSubOption(null);
    }
  }, [activeMainTab, language, isInitialized]);

  // Save preferences to localStorage whenever they change
  useEffect(() => {
    if (!isInitialized) return;
    
    try {
      localStorage.setItem(BOOKS_STORAGE_KEYS.MAIN_TAB, activeMainTab);
    } catch (error) {
      console.warn('Failed to save main tab preference to localStorage:', error);
    }
  }, [activeMainTab, isInitialized]);

  useEffect(() => {
    if (!isInitialized || !activeSubOption) return;
    
    try {
      localStorage.setItem(BOOKS_STORAGE_KEYS.SUB_OPTION, activeSubOption.key);
    } catch (error) {
      console.warn('Failed to save sub option preference to localStorage:', error);
    }
  }, [activeSubOption, isInitialized]);

  const handleMainTabClick = (tabKey: string) => {
    setActiveMainTab(tabKey);
  };

  const handleSubOptionClick = (subOption: BookSubOption) => {
    setActiveSubOption(subOption);
  };

  const bookstores = [
    {
      name: language === 'en' ? 'Academic Bookstore' : 'Livraria Académica',
      address: language === 'en' ? 'Rua da Educação, 123' : 'Rua da Educação, 123',
      phone: '(11) 5555-1234',
      website: 'www.academicbooks.pt'
    },
    {
      name: language === 'en' ? 'School Central' : 'Central Escolar',
      address: 'Av. da Educação, 456',
      phone: '(11) 5555-8765',
      website: 'www.centralescolar.pt'
    },
    {
      name: language === 'en' ? 'Online Education Store' : 'Loja de Educação Online',
      address: '',
      phone: '(11) 5555-7654',
      website: 'www.edubookstore.pt'
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
          
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-6">
              {t('books.intro')}
            </p>
            
            {/* Main Tabs */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => handleMainTabClick("daycare")} 
                  className={`px-4 py-2 rounded-md text-sm md:text-base ${activeMainTab === "daycare" ? "bg-white shadow text-school-blue font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-school-blue"}`}>
                  {t('books.tab.daycare')}
                </button>
                <button 
                  onClick={() => handleMainTabClick("kindergarten")} 
                  className={`px-4 py-2 rounded-md text-sm md:text-base ${activeMainTab === "kindergarten" ? "bg-white shadow text-school-blue font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-school-blue"}`}>
                  {t('books.tab.kindergarten')}
                </button>
                <button 
                  onClick={() => handleMainTabClick("elementary")} 
                  className={`px-4 py-2 rounded-md text-sm md:text-base ${activeMainTab === "elementary" ? "bg-white shadow text-school-blue font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-school-blue"}`}>
                  {t('books.tab.elementary')}
                </button>
              </div>
            </div>

            {/* Sub-Option Tabs (Year/Grade Selection) */}
            {activeMainTab && tabSubOptions[activeMainTab] && (
              <div className="flex justify-center mb-8">
                <div className="inline-flex bg-gray-100 rounded-lg p-1 mt-1">
                  {tabSubOptions[activeMainTab].map((subOpt) => (
                    <button
                      key={subOpt.key}
                      onClick={() => handleSubOptionClick(subOpt)}
                      className={`px-3 py-1.5 rounded-md text-xs md:text-sm ${activeSubOption?.key === subOpt.key ? "bg-white shadow text-school-purple font-semibold" : "text-gray-500 hover:bg-gray-200 hover:text-school-purple"}`}>
                      {t(subOpt.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Books List */}
            {activeSubOption && (
              <div className="grid grid-cols-1 gap-6 mb-12">
                {activeSubOption.books.map((book, index) => (
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
            )}
            
            {/* Where to Buy */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-6 text-center">
                {t('books.where_to_buy')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bookstores.map((store, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-school-blue mb-2">{store.name}</h3>
                    {store.address && (
                      <p className="text-gray-600 text-sm mb-1">
                        <span className="font-medium">{t('books.address_label')} </span>
                        {store.address}
                      </p>
                    )}
                    <p className="text-gray-600 text-sm mb-1">
                      <span className="font-medium">{t('books.phone_label')} </span>
                      {store.phone}
                    </p>
                    <p className="text-gray-600 text-sm">
                      <span className="font-medium">{t('books.website_label')} </span>
                      <a 
                        href={`https://${store.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-school-blue hover:underline inline-flex items-center"
                      >
                        {store.website}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolBooks;
