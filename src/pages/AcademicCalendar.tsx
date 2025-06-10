import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { CalendarDays } from "lucide-react";

const AcademicCalendar = () => {
  const { t, language } = useLanguage();
  
  const semester1Events = [
    {
      date: language === 'en' ? 'February 1' : '1 de Fevereiro',
      event: language === 'en' ? 'First day of classes' : 'Primeiro dia de aulas'
    },
    {
      date: language === 'en' ? 'February 20-21' : '20-21 de Fevereiro',
      event: language === 'en' ? 'Carnival Holiday' : 'Feriado de Carnaval'
    },
    {
      date: language === 'en' ? 'March 15' : '15 de Março',
      event: language === 'en' ? 'Parent-Teacher Conferences' : 'Reunião de Pais e Professores'
    },
    {
      date: language === 'en' ? 'April 7' : '7 de Abril',
      event: language === 'en' ? 'Good Friday' : 'Sexta-feira Santa'
    },
    {
      date: language === 'en' ? 'April 21' : '21 de Abril',
      event: language === 'en' ? 'Tiradentes Day' : 'Dia de Tiradentes'
    },
    {
      date: language === 'en' ? 'May 1' : '1 de Maio',
      event: language === 'en' ? 'Labor Day' : 'Dia do Trabalho'
    },
    {
      date: language === 'en' ? 'June 15' : '15 de Junho',
      event: language === 'en' ? 'Corpus Christi' : 'Corpus Christi'
    },
    {
      date: language === 'en' ? 'June 30' : '30 de Junho',
      event: language === 'en' ? 'End of First Semester' : 'Fim do Primeiro Semestre'
    }
  ];
  
  const semester2Events = [
    {
      date: language === 'en' ? 'August 1' : '1 de Agosto',
      event: language === 'en' ? 'Classes Resume' : 'Retorno às Aulas'
    },
    {
      date: language === 'en' ? 'September 7' : '7 de Setembro',
      event: language === 'en' ? 'Independence Day' : 'Dia da Independência'
    },
    {
      date: language === 'en' ? 'October 12' : '12 de Outubro',
      event: language === 'en' ? 'Children\'s Day' : 'Dia das Crianças'
    },
    {
      date: language === 'en' ? 'November 2' : '2 de Novembro',
      event: language === 'en' ? 'All Souls Day' : 'Dia de Finados'
    },
    {
      date: language === 'en' ? 'November 15' : '15 de Novembro',
      event: language === 'en' ? 'Republic Day' : 'Proclamação da República'
    },
    {
      date: language === 'en' ? 'December 10' : '10 de Dezembro',
      event: language === 'en' ? 'School Winter Festival' : 'Festival de Inverno da Escola'
    },
    {
      date: language === 'en' ? 'December 15' : '15 de Dezembro',
      event: language === 'en' ? 'Last day of classes' : 'Último dia de aulas'
    }
  ];
  
  const schoolBreaks = [
    {
      name: language === 'en' ? 'Winter Break' : 'Férias de Inverno',
      dates: language === 'en' ? 'July 1 - July 31' : '1 de Julho - 31 de Julho',
      description: language === 'en' 
        ? 'School closed for winter holiday.' 
        : 'Escola fechada para férias de inverno.'
    },
    {
      name: language === 'en' ? 'Summer Break' : 'Férias de Verão',
      dates: language === 'en' ? 'December 16 - January 31' : '16 de Dezembro - 31 de Janeiro',
      description: language === 'en' 
        ? 'School closed for summer holiday.' 
        : 'Escola fechada para férias de verão.'
    },
    {
      name: language === 'en' ? 'Easter Break' : 'Recesso de Páscoa',
      dates: language === 'en' ? 'April 6 - April 9' : '6 de Abril - 9 de Abril',
      description: language === 'en' 
        ? 'Short break for Easter holiday.' 
        : 'Pequeno recesso para feriado da Páscoa.'
    }
  ];

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <CalendarDays className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('calendar.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('calendar.intro')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* First Semester */}
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-bold text-school-blue mb-6">
                  {t('calendar.semester1')}
                </h2>
                
                <div className="space-y-4">
                  {semester1Events.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-1/3 font-medium text-gray-700">{item.date}</div>
                      <div className="w-2/3 text-gray-700">{item.event}</div>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Second Semester */}
              <section className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-serif font-bold text-school-blue mb-6">
                  {t('calendar.semester2')}
                </h2>
                
                <div className="space-y-4">
                  {semester2Events.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-1/3 font-medium text-gray-700">{item.date}</div>
                      <div className="w-2/3 text-gray-700">{item.event}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            
            {/* School Breaks */}
            <section className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-serif font-bold text-school-blue mb-6">
                {t('calendar.breaks')}
              </h2>
              
              <div className="space-y-6">
                {schoolBreaks.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-xl text-school-blue mb-2">{item.name}</h3>
                    <p className="mb-1"><span className="font-medium">{language === 'en' ? 'Dates: ' : 'Datas: '}</span>{item.dates}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <div className="mt-8 text-center text-gray-600">
              <p>
                {language === 'en' 
                  ? 'Note: Dates may be subject to change. Parents will be notified in advance of any schedule changes.'
                  : 'Nota: As datas podem estar sujeitas a alterações. Os pais serão notificados com antecedência sobre quaisquer alterações de cronograma.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicCalendar;
