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
      year1: [],
      year2: []
    };

    const kindergartenBooks = {
      year3: [],
      year4: [],
      year5: []
    };

    const elementaryBooks = {
      grade1: [
        {
          subject: language === 'en' ? 'Portuguese/Mathematics' : 'Português/Matemática',
          title: 'Português/Matemática - Bloco Pedagógico Vamos aprender',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-0'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: 'Estudo do Meio - Manual Vamos aprender',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-1'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: 'Manual Little Rocky 1',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-2'
        },
        {
          subject: language === 'en' ? 'Digital Platform' : 'Plataforma Digital',
          title: 'Escola Virtual - Licença anual 1.º ano*',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-3'
        }
      ],
      grade2: [
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: 'Português - Manual Top 2',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-4'
        },
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: 'Matemática - Bloco Pedagógico Top 2',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-5'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: 'Estudo do Meio - Manual Top 2',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-6'
        },
        {
          subject: language === 'en' ? 'Grammar' : 'Gramática',
          title: 'A Gramática de Português, 1º ciclo',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-7'
        },
        {
          subject: language === 'en' ? 'Grammar Exercises' : 'Exercícios de Gramática',
          title: 'A Gramática Exercícios 2',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-8'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: 'Manual Little Rocky 2',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148411-9'
        },
        {
          subject: language === 'en' ? 'Digital Platform' : 'Plataforma Digital',
          title: 'Escola Virtual - Licença anual 2.º ano*',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-0'
        }
      ],
      grade3: [
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: 'Português - Manual Zupi 3',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-1'
        },
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: 'Matemática - Bloco Pedagógico Zupi 3',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-2'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: 'Estudo do Meio - Manual Zupi 3',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-3'
        },
        {
          subject: language === 'en' ? 'Grammar Exercises' : 'Exercícios de Gramática',
          title: 'A Gramática Exercícios 3',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-4'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: 'Easy Peasy 3',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-5'
        },
        {
          subject: language === 'en' ? 'Dictionary' : 'Dicionário',
          title: 'Dicionário Escolar da Língua Portuguesa 2º Ciclo',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-6'
        },
        {
          subject: language === 'en' ? 'Digital Platform' : 'Plataforma Digital',
          title: 'Escola Virtual - Licença anual 3.º ano*',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-7'
        }
      ],
      grade4: [
        {
          subject: language === 'en' ? 'Portuguese' : 'Português',
          title: 'Português - Manual Zupi 4',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-8'
        },
        {
          subject: language === 'en' ? 'Mathematics' : 'Matemática',
          title: 'Matemática - Bloco Pedagógico Zupi 4',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148412-9'
        },
        {
          subject: language === 'en' ? 'Environmental Studies' : 'Estudo do Meio',
          title: 'Estudo do Meio - Manual Zupi 4',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148413-0'
        },
        {
          subject: language === 'en' ? 'Grammar Exercises' : 'Exercícios de Gramática',
          title: 'A Gramática Exercícios 4',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148413-1'
        },
        {
          subject: language === 'en' ? 'English' : 'Inglês',
          title: 'Easy Peasy 4',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148413-2'
        },
        {
          subject: language === 'en' ? 'Digital Platform' : 'Plataforma Digital',
          title: 'Escola Virtual - Licença anual 4.º ano*',
          author: 'Porto Editora',
          publisher: 'Porto Editora',
          isbn: '978-3-16-148413-3'
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
              <div className="mb-12">
                {activeSubOption.books.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
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
                ) : (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {t('books.no_books_required')}
                    </h3>
                    <p className="text-blue-700">
                      {t('books.no_books_message')}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            {/* Discount Note */}
            <div className="bg-school-blue bg-opacity-5 border-l-4 border-school-blue rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-school-blue rounded-full flex items-center justify-center">
                    <span className="text-white text-base font-bold">*</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-800 font-semibold text-base leading-relaxed">
                    {t('books.discount_note')}
                  </p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {t('books.discount_contact')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SchoolBooks;
