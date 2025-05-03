
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-school-blue">
              Eramos <span className="text-school-green">Um</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`navbar-link ${isActive('/') ? 'active-link' : ''}`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/news"
              className={`navbar-link ${isActive('/news') ? 'active-link' : ''}`}
            >
              {t('nav.news')}
            </Link>
            <Link
              to="/contact"
              className={`navbar-link ${isActive('/contact') ? 'active-link' : ''}`}
            >
              {t('nav.contact')}
            </Link>
            <div className="ml-6">
              <LanguageToggle />
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
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 space-y-3 flex flex-col bg-white animate-fade-in">
            <Link
              to="/"
              className="px-3 py-2 text-gray-700 hover:text-school-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/news"
              className="px-3 py-2 text-gray-700 hover:text-school-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.news')}
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 text-gray-700 hover:text-school-blue"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageToggle />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
