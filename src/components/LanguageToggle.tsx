import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  isDarkMode?: boolean;
}

const LanguageToggle = ({ isDarkMode = false }: LanguageToggleProps) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        <Globe className={`h-4 w-4 mr-1 ${isDarkMode ? 'text-gray-700' : 'text-white'}`} />
      </div>
      
      {/* Custom language toggle switch */}
      <button 
        onClick={toggleLanguage}
        className="relative w-16 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-between px-2.5 cursor-pointer"
        aria-label={`Switch to ${language === 'en' ? 'Portuguese' : 'English'}`}
      >
        {/* PT Label */}
        <span 
          className={cn(
            "z-10 text-xs font-medium",
            language === 'pt' ? 'opacity-0' : 'text-[#22c55e]'
          )}
        >
          PT
        </span>
        
        {/* EN Label */}
        <span 
          className={cn(
            "z-10 text-xs font-medium",
            language === 'en' ? 'opacity-0' : 'text-[#0284c7]'
          )}
        >
          EN
        </span>
        
        {/* Moving Circle */}
        <span 
          className={cn(
            "absolute top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300",
            language === 'pt' 
              ? 'left-0.5 bg-[#22c55e]' 
              : 'left-[calc(100%-28px)] bg-[#0284c7]'
          )}
        >
          <span className="text-xs font-medium text-white">
            {language === 'pt' ? 'PT' : 'EN'}
          </span>
        </span>
      </button>
    </div>
  );
};

export default LanguageToggle;
