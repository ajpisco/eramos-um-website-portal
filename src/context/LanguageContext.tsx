
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define language types
export type Language = 'pt' | 'en';

// Define the context type
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.sitemap': 'Sitemap',

    // Hero
    'hero.line1': 'Learning with',
    'hero.line1.highlight': 'passion',
    'hero.line2': 'Growing with',
    'hero.line2.highlight': 'care',

    // Sections
    'section.programs': 'Our Programs',
    'section.activities': 'Extracurricular Activities',
    'section.news': 'Latest News',

    // Programs
    'program.daycare': 'Daycare',
    'program.daycare.ages': '1-2 years old',
    'program.daycare.description': 'A safe and nurturing environment for our youngest students to explore and develop.',
    'program.kindergarten': 'Kindergarten',
    'program.kindergarten.ages': '3-5 years old',
    'program.kindergarten.description': 'Playful learning experiences that prepare children for future academic success.',
    'program.elementary': 'Elementary School',
    'program.elementary.ages': '1st to 4th grade',
    'program.elementary.description': 'A comprehensive curriculum that fosters critical thinking and creativity.',

    // Activities
    'activity.guitar': 'Guitar',
    'activity.piano': 'Piano',
    'activity.ballet': 'Ballet',
    'activity.swimming': 'Swimming',
    'activity.surfing': 'Surfing',

    // Footer
    'footer.contact': 'Contact Us',
    'footer.links': 'Quick Links',
    'footer.social': 'Follow Us',
    'footer.rights': 'All rights reserved',

    // Pages
    'contact.title': 'Contact Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info': 'Contact Information',
    'news.title': 'Latest News',
    'sitemap.title': 'Sitemap',
    'terms.title': 'Terms of Service',
    'privacy.title': 'Privacy Policy',
  },
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.news': 'Notícias',
    'nav.contact': 'Contato',
    'nav.sitemap': 'Mapa do Site',

    // Hero
    'hero.line1': 'Aprendendo com',
    'hero.line1.highlight': 'paixão',
    'hero.line2': 'Crescendo com',
    'hero.line2.highlight': 'cuidado',

    // Sections
    'section.programs': 'Nossos Programas',
    'section.activities': 'Atividades Extracurriculares',
    'section.news': 'Últimas Notícias',

    // Programs
    'program.daycare': 'Berçário',
    'program.daycare.ages': '1-2 anos',
    'program.daycare.description': 'Um ambiente seguro e acolhedor para nossos alunos mais jovens explorarem e se desenvolverem.',
    'program.kindergarten': 'Educação Infantil',
    'program.kindergarten.ages': '3-5 anos',
    'program.kindergarten.description': 'Experiências de aprendizado lúdicas que preparam as crianças para o futuro sucesso acadêmico.',
    'program.elementary': 'Ensino Fundamental I',
    'program.elementary.ages': '1º ao 4º ano',
    'program.elementary.description': 'Um currículo abrangente que estimula o pensamento crítico e a criatividade.',

    // Activities
    'activity.guitar': 'Violão',
    'activity.piano': 'Piano',
    'activity.ballet': 'Ballet',
    'activity.swimming': 'Natação',
    'activity.surfing': 'Surf',

    // Footer
    'footer.contact': 'Entre em Contato',
    'footer.links': 'Links Rápidos',
    'footer.social': 'Siga-nos',
    'footer.rights': 'Todos os direitos reservados',

    // Pages
    'contact.title': 'Entre em Contato',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.info': 'Informações de Contato',
    'news.title': 'Últimas Notícias',
    'sitemap.title': 'Mapa do Site',
    'terms.title': 'Termos de Serviço',
    'privacy.title': 'Política de Privacidade',
  },
};

// Create provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pt');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
