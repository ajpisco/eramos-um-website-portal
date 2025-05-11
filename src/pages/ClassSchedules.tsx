import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { CalendarDays, Clock } from "lucide-react";
import { ScheduleRow, SubOption } from "@/types/schedules";
import { getDaycareSchedules } from "@/data/schedules/daycare";
import { getKindergartenSchedules } from "@/data/schedules/kindergarten";
import { getElementarySchedules } from "@/data/schedules/elementary";

const ClassSchedules = () => {
  const { t, language } = useLanguage();
  const [activeMainTab, setActiveMainTab] = useState("daycare");
  const [activeSubOption, setActiveSubOption] = useState<SubOption | null>(null);

  const daycareSchedules = getDaycareSchedules(language);
  const kindergartenSchedules = getKindergartenSchedules(language);
  const elementarySchedules = getElementarySchedules(language);

  const tabSubOptions: Record<string, SubOption[]> = {
    daycare: [
      { key: "d1", labelKey: "schedules.option.daycare_year1", scheduleData: daycareSchedules.year1, scheduleTitleKey: "schedules.year1" },
      { key: "d2", labelKey: "schedules.option.daycare_year2", scheduleData: daycareSchedules.year2, scheduleTitleKey: "schedules.year2" },
    ],
    kindergarten: [
      { key: "k3", labelKey: "schedules.option.kinder_year3", scheduleData: kindergartenSchedules.year3, scheduleTitleKey: "schedules.year3" },
      { key: "k4", labelKey: "schedules.option.kinder_year4", scheduleData: kindergartenSchedules.year4, scheduleTitleKey: "schedules.year4" },
      { key: "k5", labelKey: "schedules.option.kinder_year5", scheduleData: kindergartenSchedules.year5, scheduleTitleKey: "schedules.year5" },
    ],
    elementary: [
      { key: "e1", labelKey: "schedules.option.elementary_grade1", scheduleData: elementarySchedules.grade1, scheduleTitleKey: "schedules.grade1" },
      { key: "e2", labelKey: "schedules.option.elementary_grade2", scheduleData: elementarySchedules.grade2, scheduleTitleKey: "schedules.grade2" },
      { key: "e3", labelKey: "schedules.option.elementary_grade3", scheduleData: elementarySchedules.grade3, scheduleTitleKey: "schedules.grade3" },
      { key: "e4", labelKey: "schedules.option.elementary_grade4", scheduleData: elementarySchedules.grade4, scheduleTitleKey: "schedules.grade4" },
    ],
  };

  useEffect(() => {
    if (activeMainTab && tabSubOptions[activeMainTab] && tabSubOptions[activeMainTab].length > 0) {
      const currentSubOptions = tabSubOptions[activeMainTab];
      const stillActive = currentSubOptions.find(sub => sub.key === activeSubOption?.key);
      if (stillActive && stillActive.scheduleData !== activeSubOption?.scheduleData) {
        setActiveSubOption(stillActive);
      } else if (!stillActive || !activeSubOption) {
        setActiveSubOption(currentSubOptions[0]);
      }
    } else {
      setActiveSubOption(null);
    }
  }, [activeMainTab, language, tabSubOptions, activeSubOption]);

  const handleMainTabClick = (tabKey: string) => {
    setActiveMainTab(tabKey);
  };

  const handleSubOptionClick = (subOption: SubOption) => {
    setActiveSubOption(subOption);
  };

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <CalendarDays className="h-10 w-10 text-school-blue mr-3" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
              <span className="text-school-blue">{t('schedules.title')}</span>
            </h1>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-4">
              {t('schedules.intro')}
            </p>
            
            {/* Main Tabs */}
            <div className="flex justify-center mb-2">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => handleMainTabClick("daycare")} 
                  className={`px-4 py-2 rounded-md text-sm md:text-base ${activeMainTab === "daycare" ? "bg-white shadow text-school-blue font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-school-blue"}`}>
                  {t('schedules.tab.daycare')}
                </button>
                <button 
                  onClick={() => handleMainTabClick("kindergarten")} 
                  className={`px-4 py-2 rounded-md text-sm md:text-base ${activeMainTab === "kindergarten" ? "bg-white shadow text-school-blue font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-school-blue"}`}>
                  {t('schedules.tab.kindergarten')}
                </button>
                <button 
                  onClick={() => handleMainTabClick("elementary")} 
                  className={`px-4 py-2 rounded-md text-sm md:text-base ${activeMainTab === "elementary" ? "bg-white shadow text-school-blue font-semibold" : "text-gray-600 hover:bg-gray-200 hover:text-school-blue"}`}>
                  {t('schedules.tab.elementary')}
                </button>
              </div>
            </div>

            {/* Sub-Option Tabs */}
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
            
            {/* Schedule Table Display Logic */}
            {activeSubOption && activeSubOption.scheduleData ? (
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
                    {activeSubOption.scheduleData.map((row, index) => (
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
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-gray-600">
                  {t('schedules.select_option')}
                </p>
              </div>
            )}
            
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
