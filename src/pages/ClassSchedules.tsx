
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { Calendar, Clock } from "lucide-react";

const ClassSchedules = () => {
  const { t, language } = useLanguage();
  const [activeGrade, setActiveGrade] = useState("grade1");
  
  // Sample schedules data
  const schedules = {
    grade1: [
      {
        time: "08:00 - 08:45",
        monday: language === 'en' ? 'Portuguese' : 'Português',
        tuesday: language === 'en' ? 'Math' : 'Matemática',
        wednesday: language === 'en' ? 'Science' : 'Ciências',
        thursday: language === 'en' ? 'Portuguese' : 'Português',
        friday: language === 'en' ? 'Math' : 'Matemática'
      },
      {
        time: "08:45 - 09:30",
        monday: language === 'en' ? 'Math' : 'Matemática',
        tuesday: language === 'en' ? 'Portuguese' : 'Português',
        wednesday: language === 'en' ? 'Arts' : 'Artes',
        thursday: language === 'en' ? 'Math' : 'Matemática',
        friday: language === 'en' ? 'Portuguese' : 'Português'
      },
      {
        time: "09:30 - 09:45",
        monday: language === 'en' ? 'Break' : 'Intervalo',
        tuesday: language === 'en' ? 'Break' : 'Intervalo',
        wednesday: language === 'en' ? 'Break' : 'Intervalo',
        thursday: language === 'en' ? 'Break' : 'Intervalo',
        friday: language === 'en' ? 'Break' : 'Intervalo'
      },
      {
        time: "09:45 - 10:30",
        monday: language === 'en' ? 'P.E.' : 'Ed. Física',
        tuesday: language === 'en' ? 'Science' : 'Ciências',
        wednesday: language === 'en' ? 'English' : 'Inglês',
        thursday: language === 'en' ? 'Science' : 'Ciências',
        friday: language === 'en' ? 'Music' : 'Música'
      },
      {
        time: "10:30 - 11:15",
        monday: language === 'en' ? 'English' : 'Inglês',
        tuesday: language === 'en' ? 'Arts' : 'Artes',
        wednesday: language === 'en' ? 'P.E.' : 'Ed. Física',
        thursday: language === 'en' ? 'English' : 'Inglês',
        friday: language === 'en' ? 'Science' : 'Ciências'
      }
    ],
    grade2: [
      {
        time: "08:00 - 08:45",
        monday: language === 'en' ? 'Math' : 'Matemática',
        tuesday: language === 'en' ? 'Portuguese' : 'Português',
        wednesday: language === 'en' ? 'English' : 'Inglês',
        thursday: language === 'en' ? 'Math' : 'Matemática',
        friday: language === 'en' ? 'Portuguese' : 'Português'
      },
      {
        time: "08:45 - 09:30",
        monday: language === 'en' ? 'Portuguese' : 'Português',
        tuesday: language === 'en' ? 'Math' : 'Matemática',
        wednesday: language === 'en' ? 'Science' : 'Ciências',
        thursday: language === 'en' ? 'Portuguese' : 'Português',
        friday: language === 'en' ? 'Math' : 'Matemática'
      },
      {
        time: "09:30 - 09:45",
        monday: language === 'en' ? 'Break' : 'Intervalo',
        tuesday: language === 'en' ? 'Break' : 'Intervalo',
        wednesday: language === 'en' ? 'Break' : 'Intervalo',
        thursday: language === 'en' ? 'Break' : 'Intervalo',
        friday: language === 'en' ? 'Break' : 'Intervalo'
      },
      {
        time: "09:45 - 10:30",
        monday: language === 'en' ? 'Science' : 'Ciências',
        tuesday: language === 'en' ? 'English' : 'Inglês',
        wednesday: language === 'en' ? 'P.E.' : 'Ed. Física',
        thursday: language === 'en' ? 'Arts' : 'Artes',
        friday: language === 'en' ? 'English' : 'Inglês'
      },
      {
        time: "10:30 - 11:15",
        monday: language === 'en' ? 'Arts' : 'Artes',
        tuesday: language === 'en' ? 'P.E.' : 'Ed. Física',
        wednesday: language === 'en' ? 'Music' : 'Música',
        thursday: language === 'en' ? 'Science' : 'Ciências',
        friday: language === 'en' ? 'P.E.' : 'Ed. Física'
      }
    ],
    grade3: [
      {
        time: "08:00 - 08:45",
        monday: language === 'en' ? 'Science' : 'Ciências',
        tuesday: language === 'en' ? 'English' : 'Inglês',
        wednesday: language === 'en' ? 'Math' : 'Matemática',
        thursday: language === 'en' ? 'Portuguese' : 'Português',
        friday: language === 'en' ? 'Science' : 'Ciências'
      },
      {
        time: "08:45 - 09:30",
        monday: language === 'en' ? 'Portuguese' : 'Português',
        tuesday: language === 'en' ? 'Math' : 'Matemática',
        wednesday: language === 'en' ? 'Portuguese' : 'Português',
        thursday: language === 'en' ? 'Math' : 'Matemática',
        friday: language === 'en' ? 'English' : 'Inglês'
      },
      {
        time: "09:30 - 09:45",
        monday: language === 'en' ? 'Break' : 'Intervalo',
        tuesday: language === 'en' ? 'Break' : 'Intervalo',
        wednesday: language === 'en' ? 'Break' : 'Intervalo',
        thursday: language === 'en' ? 'Break' : 'Intervalo',
        friday: language === 'en' ? 'Break' : 'Intervalo'
      },
      {
        time: "09:45 - 10:30",
        monday: language === 'en' ? 'Math' : 'Matemática',
        tuesday: language === 'en' ? 'Portuguese' : 'Português',
        wednesday: language === 'en' ? 'English' : 'Inglês',
        thursday: language === 'en' ? 'Science' : 'Ciências',
        friday: language === 'en' ? 'Portuguese' : 'Português'
      },
      {
        time: "10:30 - 11:15",
        monday: language === 'en' ? 'P.E.' : 'Ed. Física',
        tuesday: language === 'en' ? 'Music' : 'Música',
        wednesday: language === 'en' ? 'Arts' : 'Artes',
        thursday: language === 'en' ? 'P.E.' : 'Ed. Física',
        friday: language === 'en' ? 'Arts' : 'Artes'
      }
    ],
    grade4: [
      {
        time: "08:00 - 08:45",
        monday: language === 'en' ? 'English' : 'Inglês',
        tuesday: language === 'en' ? 'Science' : 'Ciências',
        wednesday: language === 'en' ? 'Portuguese' : 'Português',
        thursday: language === 'en' ? 'Math' : 'Matemática',
        friday: language === 'en' ? 'English' : 'Inglês'
      },
      {
        time: "08:45 - 09:30",
        monday: language === 'en' ? 'Math' : 'Matemática',
        tuesday: language === 'en' ? 'Portuguese' : 'Português',
        wednesday: language === 'en' ? 'Math' : 'Matemática',
        thursday: language === 'en' ? 'Portuguese' : 'Português',
        friday: language === 'en' ? 'Science' : 'Ciências'
      },
      {
        time: "09:30 - 09:45",
        monday: language === 'en' ? 'Break' : 'Intervalo',
        tuesday: language === 'en' ? 'Break' : 'Intervalo',
        wednesday: language === 'en' ? 'Break' : 'Intervalo',
        thursday: language === 'en' ? 'Break' : 'Intervalo',
        friday: language === 'en' ? 'Break' : 'Intervalo'
      },
      {
        time: "09:45 - 10:30",
        monday: language === 'en' ? 'Arts' : 'Artes',
        tuesday: language === 'en' ? 'P.E.' : 'Ed. Física',
        wednesday: language === 'en' ? 'Science' : 'Ciências',
        thursday: language === 'en' ? 'English' : 'Inglês',
        friday: language === 'en' ? 'Math' : 'Matemática'
      },
      {
        time: "10:30 - 11:15",
        monday: language === 'en' ? 'Portuguese' : 'Português',
        tuesday: language === 'en' ? 'Arts' : 'Artes',
        wednesday: language === 'en' ? 'Music' : 'Música',
        thursday: language === 'en' ? 'P.E.' : 'Ed. Física',
        friday: language === 'en' ? 'Geography' : 'Geografia'
      }
    ]
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('schedules.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-8">
              {t('schedules.intro')}
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
                {t('schedules.grade1')}
              </button>
              <button 
                onClick={() => setActiveGrade("grade2")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade2" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('schedules.grade2')}
              </button>
              <button 
                onClick={() => setActiveGrade("grade3")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade3" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('schedules.grade3')}
              </button>
              <button 
                onClick={() => setActiveGrade("grade4")} 
                className={`px-4 py-2 m-1 rounded-md ${
                  activeGrade === "grade4" 
                    ? "bg-school-blue text-white" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {t('schedules.grade4')}
              </button>
            </div>
            
            {/* Schedule Table */}
            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 border-b text-left">{language === 'en' ? 'Time' : 'Horário'}</th>
                    <th className="px-4 py-3 border-b text-left">{language === 'en' ? 'Monday' : 'Segunda'}</th>
                    <th className="px-4 py-3 border-b text-left">{language === 'en' ? 'Tuesday' : 'Terça'}</th>
                    <th className="px-4 py-3 border-b text-left">{language === 'en' ? 'Wednesday' : 'Quarta'}</th>
                    <th className="px-4 py-3 border-b text-left">{language === 'en' ? 'Thursday' : 'Quinta'}</th>
                    <th className="px-4 py-3 border-b text-left">{language === 'en' ? 'Friday' : 'Sexta'}</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules[activeGrade as keyof typeof schedules].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 border-b flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-school-blue" />
                        {row.time}
                      </td>
                      <td className="px-4 py-3 border-b">{row.monday}</td>
                      <td className="px-4 py-3 border-b">{row.tuesday}</td>
                      <td className="px-4 py-3 border-b">{row.wednesday}</td>
                      <td className="px-4 py-3 border-b">{row.thursday}</td>
                      <td className="px-4 py-3 border-b">{row.friday}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center text-gray-600">
              <p>
                {language === 'en' 
                  ? 'Note: Schedules may be subject to occasional changes. Parents will be notified in advance.'
                  : 'Nota: Os horários podem estar sujeitos a alterações ocasionais. Os pais serão notificados com antecedência.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ClassSchedules;
