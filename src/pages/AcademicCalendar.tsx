import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { CalendarDays, Clock, PauseCircle, BookOpen, Calendar, TrendingUp, CheckCircle, PlayCircle, Pause } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const AcademicCalendar = () => {
  const { t, language } = useLanguage();
  
  // Helper function to parse DD/MM/YYYY format to Date
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  };

  // Helper function to format date for display
  const formatDateForDisplay = (dateStr: string) => {
    const date = parseDate(dateStr);
    
    if (language === 'en') {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } else {
      return date.toLocaleDateString('pt-PT', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  // Helper function to format date range for display
  const formatDateRange = (startDateStr: string, endDateStr: string) => {
    const startDate = parseDate(startDateStr);
    const endDate = parseDate(endDateStr);
    
    if (language === 'en') {
      const startFormatted = startDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      const endFormatted = endDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
      return `${startFormatted} - ${endFormatted}`;
    } else {
      const startFormatted = startDate.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long' });
      const endFormatted = endDate.toLocaleDateString('pt-PT', { day: 'numeric', month: 'long', year: 'numeric' });
      return `${startFormatted} - ${endFormatted}`;
    }
  };

  // Helper function to calculate duration between dates
  const calculateDuration = (startDateStr: string, endDateStr: string) => {
    const startDate = parseDate(startDateStr);
    const endDate = parseDate(endDateStr);
    const timeDiff = endDate.getTime() - startDate.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
    
    return {
      days: daysDiff,
      type: daysDiff >= 7 ? 'major' : 'minor',
      formattedDuration: language === 'en' 
        ? `${daysDiff} day${daysDiff !== 1 ? 's' : ''}`
        : `${daysDiff} dia${daysDiff !== 1 ? 's' : ''}`
    };
  };

  // Helper function to calculate progress and status
  const calculateSemesterProgress = (startDateStr: string, endDateStr: string) => {
    const today = new Date();
    const startDate = parseDate(startDateStr);
    const endDate = parseDate(endDateStr);
    
    if (today < startDate) {
      return {
        status: 'not_started',
        progress: 0,
        daysRemaining: Math.ceil((startDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
      };
    } else if (today > endDate) {
      return {
        status: 'finished',
        progress: 100,
        daysRemaining: 0
      };
    } else {
      const totalDuration = endDate.getTime() - startDate.getTime();
      const elapsed = today.getTime() - startDate.getTime();
      const progress = Math.round((elapsed / totalDuration) * 100);
      const daysRemaining = Math.ceil((endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      return {
        status: 'in_progress',
        progress,
        daysRemaining
      };
    }
  };

  // Semester dates data
  const semesterData = [
    {
      id: 'semester1',
      title: t('calendar.semester1'),
      startDate: '11/09/2024',
      endDate: '28/01/2025',
      icon: BookOpen,
      color: 'bg-school-blue',
      gradient: 'from-school-blue to-school-blue-dark'
    },
    {
      id: 'semester2',
      title: t('calendar.semester2'),
      startDate: '03/02/2025',
      endDate: '27/06/2025',
      icon: BookOpen,
      color: 'bg-school-green',
      gradient: 'from-school-green to-school-green-dark'
    }
  ].map(semester => ({
    ...semester,
    ...calculateSemesterProgress(semester.startDate, semester.endDate),
    startDateFormatted: formatDateForDisplay(semester.startDate),
    endDateFormatted: formatDateForDisplay(semester.endDate)
  }));

  // Academic interruptions data
  const interruptionsBase = [
    {
      id: 'break_1',
      name: language === 'en' ? '1st Academic Break' : '1ª Interrupção Letiva',
      startDate: '18/11/2024',
      endDate: '20/11/2024',
      description: language === 'en' 
        ? 'First academic interruption of the school year' 
        : 'Primeira interrupção letiva do ano escolar',
      color: 'bg-blue-500'
    },
    {
      id: 'break_2',
      name: language === 'en' ? '2nd Academic Break (Christmas)' : '2ª Interrupção Letiva (Natal)',
      startDate: '23/12/2024',
      endDate: '03/01/2025',
      description: language === 'en' 
        ? 'Christmas and New Year holiday period' 
        : 'Período de férias de Natal e Ano Novo',
      color: 'bg-red-500'
    },
    {
      id: 'break_3',
      name: language === 'en' ? '3rd Academic Break' : '3ª Interrupção Letiva',
      startDate: '29/01/2025',
      endDate: '31/01/2025',
      description: language === 'en' 
        ? 'Short mid-semester break' 
        : 'Pequena pausa no meio do período',
      color: 'bg-green-500'
    },
    {
      id: 'break_4',
      name: language === 'en' ? '4th Academic Break' : '4ª Interrupção Letiva',
      startDate: '03/03/2025',
      endDate: '05/03/2025',
      description: language === 'en' 
        ? 'Brief academic interruption' 
        : 'Breve interrupção letiva',
      color: 'bg-purple-500'
    },
    {
      id: 'break_5',
      name: language === 'en' ? '5th Academic Break (Easter)' : '5ª Interrupção Letiva (Páscoa)',
      startDate: '14/04/2025',
      endDate: '24/04/2025',
      description: language === 'en' 
        ? 'Easter holiday period' 
        : 'Período de férias da Páscoa',
      color: 'bg-orange-500'
    }
  ];

  const interruptions = interruptionsBase.map(interruption => {
    const durationData = calculateDuration(interruption.startDate, interruption.endDate);
    return {
      ...interruption,
      dates: formatDateRange(interruption.startDate, interruption.endDate),
      duration: durationData.formattedDuration,
      type: durationData.type,
      days: durationData.days
    };
  });

  // Helper function to get status icon
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'not_started':
        return <Pause className="h-4 w-4" />;
      case 'in_progress':
        return <PlayCircle className="h-4 w-4" />;
      case 'finished':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  // Helper function to get status color
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'not_started':
        return 'text-gray-500 bg-gray-100';
      case 'in_progress':
        return 'text-school-blue bg-school-blue bg-opacity-10';
      case 'finished':
        return 'text-school-green bg-school-green bg-opacity-10';
      default:
        return 'text-gray-500 bg-gray-100';
    }
  };

  return (
    <Layout>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white min-h-screen">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-school-blue rounded-full shadow-lg">
                <CalendarDays className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              <span className="bg-gradient-to-r from-school-blue to-school-blue-dark bg-clip-text text-transparent">
                {t('calendar.title')}
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('calendar.intro')}
            </p>
          </div>

          {/* Semester Dates Section */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="p-2 bg-school-blue rounded-lg mr-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-800">
                {t('calendar.semesters.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {semesterData.map((semester) => {
                const IconComponent = semester.icon;
                return (
                  <Card key={semester.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg">
                    <CardHeader className={`bg-gradient-to-r ${semester.gradient} text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-10 rounded-full -mr-10 -mt-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white bg-opacity-10 rounded-full -ml-8 -mb-8"></div>
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center">
                          <div className="p-3 bg-white bg-opacity-20 rounded-lg mr-4">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-2xl font-serif">{semester.title}</CardTitle>
                        </div>
                        <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20 ${getStatusColor(semester.status)}`}>
                          {getStatusIcon(semester.status)}
                          <span className="ml-1 text-white">
                            {t(`calendar.status.${semester.status}`)}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {t('calendar.semesters.start_date')}
                          </span>
                          <span className="font-semibold text-gray-800">{semester.startDateFormatted}</span>
                        </div>
                        <div className="w-full h-px bg-gray-200"></div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                            {t('calendar.semesters.end_date')}
                          </span>
                          <span className="font-semibold text-gray-800">{semester.endDateFormatted}</span>
                        </div>
                        
                        {/* Progress Section */}
                        <div className="mt-6 space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <TrendingUp className="h-4 w-4 text-gray-500 mr-2" />
                              <span className="text-sm font-medium text-gray-600">
                                {t('calendar.progress.title')}
                              </span>
                            </div>
                            <span className="text-lg font-bold text-school-blue">
                              {semester.progress}%
                            </span>
                          </div>
                          
                          <Progress value={semester.progress} className="h-3" />
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>
                              {semester.status === 'not_started' 
                                ? t('calendar.progress.starts_in')
                                : semester.status === 'finished'
                                ? t('calendar.progress.completed')
                                : t('calendar.progress.days_remaining')
                              }
                            </span>
                            {semester.status !== 'finished' && (
                              <span className="font-medium">
                                {semester.daysRemaining} {language === 'en' ? 'days' : 'dias'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Academic Interruptions Section */}
          <section>
            <div className="flex items-center mb-8">
              <div className="p-2 bg-school-green rounded-lg mr-4">
                <PauseCircle className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-800">
                {t('calendar.interruptions.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {interruptions.map((interruption) => (
                <Card key={interruption.id} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-4 h-4 rounded-full ${interruption.color} mr-3 flex-shrink-0 mt-1`}></div>
                        <div>
                          <h3 className="text-xl font-serif font-bold text-gray-800 mb-1">
                            {interruption.name}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{interruption.duration}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        interruption.type === 'major' 
                          ? 'bg-school-blue bg-opacity-10 text-school-blue-dark' 
                          : 'bg-school-green bg-opacity-10 text-school-green-dark'
                      }`}>
                        {interruption.type === 'major' 
                          ? t('calendar.interruptions.major_break')
                          : t('calendar.interruptions.minor_break')
                        }
                      </span>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="font-semibold text-gray-800 text-center">{interruption.dates}</p>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {interruption.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-school-blue-light to-school-green-light rounded-2xl p-6 shadow-lg">
              <p className="text-gray-700 font-medium">
                {language === 'en' 
                  ? 'Note: Dates may be subject to change. Parents will be notified in advance of any schedule modifications.'
                  : 'Nota: As datas podem estar sujeitas a alterações. Os pais serão notificados com antecedência sobre quaisquer modificações de cronograma.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AcademicCalendar;
