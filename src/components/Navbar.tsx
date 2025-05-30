import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { 
  Menu, 
  X, 
  ChevronDown,
  ChevronRight
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from '@/assets/logos/main.png';

const Navbar = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(current => current === section ? null : section);
  };

  // Use white text only on home page when not scrolled, dark text everywhere else
  const shouldUseDarkText = !isHomePage || isScrolled;
  const navTextColor = shouldUseDarkText ? "text-gray-700" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="School Logo" className="h-20 w-auto mr-2" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {/* School Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`navbar-link hover:bg-transparent ${navTextColor}`}>
                    {t('nav.school')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/about" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.about')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/team" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.team')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/regulation" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.regulation')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Daily Life Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`navbar-link hover:bg-transparent ${navTextColor}`}>
                    {t('nav.daily')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/lunch-menu" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.lunch')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/dress-code" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.dress')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/class-schedules" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.schedule')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/school-books" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.books')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/academic-calendar" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.calendar')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Programs & Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={`navbar-link hover:bg-transparent ${navTextColor}`}>
                    {t('nav.programs')}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/extracurricular" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.extracurricular')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/inovar" className="block p-2 hover:bg-slate-100 rounded-md">
                            {t('nav.inovar')}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Admissions Link */}
                <NavigationMenuItem>
                  <Link to="/admission" className={`navbar-link ${navTextColor}`}>
                    {t('nav.admission')}
                  </Link>
                </NavigationMenuItem>

                {/* Contact Link */}
                <NavigationMenuItem>
                  <Link to="/contact" className={`navbar-link ${navTextColor} ${isActive('/contact') ? 'active-link' : ''}`}>
                    {t('nav.contact')}
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="ml-6">
              <LanguageToggle isDarkMode={shouldUseDarkText} />
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className={`h-6 w-6 ${navTextColor}`} />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-3 flex flex-col bg-white animate-fade-in">
            {/* School section */}
            <button 
              className="flex items-center justify-between px-3 py-2 font-medium border-b border-gray-100"
              onClick={() => toggleMobileSection('school')}
            >
              <span>{t('nav.school')}</span>
              {expandedMobileSection === 'school' ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMobileSection === 'school' && (
              <div className="space-y-1 pl-3">
                <Link
                  to="/about"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.about')}
                </Link>
                <Link
                  to="/team"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.team')}
                </Link>
                <Link
                  to="/regulation"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.regulation')}
                </Link>
              </div>
            )}
            
            {/* Daily Life section */}
            <button 
              className="flex items-center justify-between px-3 py-2 font-medium border-b border-gray-100"
              onClick={() => toggleMobileSection('daily_life')}
            >
              <span>{t('nav.daily')}</span>
              {expandedMobileSection === 'daily_life' ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMobileSection === 'daily_life' && (
              <div className="space-y-1 pl-3">
                <Link
                  to="/lunch-menu"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.lunch')}
                </Link>
                <Link
                  to="/dress-code"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.dress')}
                </Link>
                <Link
                  to="/class-schedules"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.schedule')}
                </Link>
                <Link
                  to="/school-books"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.books')}
                </Link>
                <Link
                  to="/academic-calendar"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.calendar')}
                </Link>
              </div>
            )}
            
            {/* Programs & Services section */}
            <button 
              className="flex items-center justify-between px-3 py-2 font-medium border-b border-gray-100"
              onClick={() => toggleMobileSection('programs_services')}
            >
              <span>{t('nav.programs')}</span>
              {expandedMobileSection === 'programs_services' ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMobileSection === 'programs_services' && (
              <div className="space-y-1 pl-3">
                <Link
                  to="/extracurricular"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.extracurricular')}
                </Link>
                <Link
                  to="/inovar"
                  className="px-6 py-2 block text-gray-700 hover:text-school-blue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('nav.inovar')}
                </Link>
              </div>
            )}
            
            {/* Direct links */}
            <Link
              to="/admission"
              className="px-3 py-2 text-gray-700 hover:text-school-blue border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.admission')}
            </Link>
            
            <Link
              to="/contact"
              className="px-3 py-2 text-gray-700 hover:text-school-blue border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            
            <div className="px-3 py-2">
              <LanguageToggle isDarkMode={true} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
