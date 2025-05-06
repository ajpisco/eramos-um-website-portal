import { useLanguage } from "@/context/LanguageContext";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from '@/assets/logos/main.png';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-school-blue mb-4">
              {t('footer.contact')}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-school-green mr-2 mt-0.5" />
                <span>Praceta Vasco Morgado, nº45, Murtal</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-school-green mr-2" />
                <a href="tel:214530512" className="hover:text-school-blue transition-colors">
                  214 530 512
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-school-green mr-2" />
                <a href="tel:964234322" className="hover:text-school-blue transition-colors">
                  964 234 322
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-school-green mr-2" />
                <a href="mailto:secretaria@eramosum.pt" className="hover:text-school-blue transition-colors">
                  secretaria@eramosum.pt
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-school-blue mb-4">
              {t('footer.links')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="hover:text-school-blue transition-colors">
                  {t('nav.news')}
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="hover:text-school-blue transition-colors">
                  {t('nav.sitemap')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-school-blue transition-colors">
                  {t('privacy.title')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-school-blue transition-colors">
                  {t('terms.title')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-serif font-semibold text-school-blue mb-4">
              {t('footer.social')}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/eramos.um.cooperativa.de.ensino"
                target="_blank"
                rel="noreferrer"
                className="bg-school-blue hover:bg-school-blue-dark text-white p-2 rounded-full transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/eramos.um/"
                target="_blank"
                rel="noreferrer"
                className="bg-school-blue hover:bg-school-blue-dark text-white p-2 rounded-full transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>

            {/* School Logo */}
            <div className="mt-6">
              <img src={logo} alt="School Logo" className="h-14 w-auto" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>
            &copy; {currentYear} Eramos Um. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
