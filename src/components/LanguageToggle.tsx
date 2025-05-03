
import { Switch } from "@/components/ui/switch";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (checked: boolean) => {
    setLanguage(checked ? 'en' : 'pt');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">PT</span>
      <div className="flex items-center">
        <Globe className="h-4 w-4 mr-1" />
        <Switch 
          checked={language === 'en'}
          onCheckedChange={handleToggle}
        />
      </div>
      <span className="text-sm font-medium">EN</span>
    </div>
  );
};

export default LanguageToggle;
