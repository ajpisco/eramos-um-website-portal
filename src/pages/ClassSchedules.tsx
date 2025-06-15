import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Layout from "@/components/Layout";
import { CalendarDays } from "lucide-react";
import { SubOption } from "@/types/schedules";
import { getDaycareSchedules } from "@/data/schedules/daycare";
import { getKindergartenSchedules } from "@/data/schedules/kindergarten";
import { getElementarySchedules, getElementaryTeachers } from "@/data/schedules/elementary";
import UniversalScheduleCalendar from "@/components/UniversalScheduleCalendar";

// Constants for localStorage keys
const SCHEDULE_STORAGE_KEYS = {
  MAIN_TAB: 'eramos-um-schedule-main-tab',
  SUB_OPTION: 'eramos-um-schedule-sub-option'
};

const ClassSchedules = () => {
  const { t, language } = useLanguage();
  const [activeMainTab, setActiveMainTab] = useState("daycare");
  const [activeSubOption, setActiveSubOption] = useState<SubOption | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const daycareSchedules = getDaycareSchedules(language);
  const kindergartenSchedules = getKindergartenSchedules(language);
  const elementarySchedules = getElementarySchedules(language);
  const elementaryTeachers = getElementaryTeachers(language);

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

  // Load saved preferences from localStorage on component mount
  useEffect(() => {
    try {
      const savedMainTab = localStorage.getItem(SCHEDULE_STORAGE_KEYS.MAIN_TAB);
      const savedSubOptionKey = localStorage.getItem(SCHEDULE_STORAGE_KEYS.SUB_OPTION);
      
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
      console.warn('Failed to load schedule preferences from localStorage:', error);
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
      localStorage.setItem(SCHEDULE_STORAGE_KEYS.MAIN_TAB, activeMainTab);
    } catch (error) {
      console.warn('Failed to save main tab preference to localStorage:', error);
    }
  }, [activeMainTab, isInitialized]);

  useEffect(() => {
    if (!isInitialized || !activeSubOption) return;
    
    try {
      localStorage.setItem(SCHEDULE_STORAGE_KEYS.SUB_OPTION, activeSubOption.key);
    } catch (error) {
      console.warn('Failed to save sub option preference to localStorage:', error);
    }
  }, [activeSubOption, isInitialized]);

  const handleMainTabClick = (tabKey: string) => {
    setActiveMainTab(tabKey);
  };

  const handleSubOptionClick = (subOption: SubOption) => {
    setActiveSubOption(subOption);
  };

  // Get room name for display
  const getRoomName = (subOption: SubOption) => {
    if (activeMainTab === 'elementary') {
      const gradeKey = subOption.key.replace('e', 'grade');
      const teacher = elementaryTeachers[gradeKey] || '';
      return `${t(subOption.labelKey)} - ${teacher}`;
    }
    return t(subOption.labelKey);
  };

  // Get schedule type for the calendar
  const getScheduleType = (): 'daycare' | 'kindergarten' | 'elementary' => {
    return activeMainTab as 'daycare' | 'kindergarten' | 'elementary';
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
          
          <div className="max-w-6xl mx-auto">
            <p className="text-lg text-gray-700 text-center mb-6">
              {t('schedules.intro')}
            </p>
            
            {/* Main Tabs */}
            <div className="flex justify-center mb-4">
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

            {/* Sub-Option Tabs (Room/Grade Selection) */}
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
            
            {/* Universal Calendar Display */}
            {activeSubOption && activeSubOption.scheduleData ? (
              <UniversalScheduleCalendar
                scheduleData={activeSubOption.scheduleData}
                roomName={getRoomName(activeSubOption)}
                scheduleType={getScheduleType()}
              />
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
