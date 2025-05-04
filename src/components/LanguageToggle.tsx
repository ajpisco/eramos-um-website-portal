
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
      <div className="flex items-center">
        <Globe className="h-4 w-4 mr-1" />
      </div>
      <span className="text-sm font-medium">PT</span>
      <Switch 
        checked={language === 'en'}
        onCheckedChange={handleToggle}
      />
      <span className="text-sm font-medium">EN</span>
    </div>
  );
};

export default LanguageToggle;
