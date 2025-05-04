
import React, { createContext, useContext, useState } from "react";

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.school': 'School',
    'nav.about': 'About Us',
    'nav.team': 'Team',
    'nav.regulation': 'Internal Regulation',
    'nav.daily_life': 'Daily Life',
    'nav.lunch_menu': 'Lunch Menu',
    'nav.dress_code': 'Dress Code',
    'nav.class_schedules': 'Class Schedules',
    'nav.school_books': 'School Books',
    'nav.academic_calendar': 'Academic Calendar',
    'nav.programs_services': 'Programs & Services',
    'nav.extracurricular': 'Extracurricular Activities',
    'nav.inovar': 'Inovar',
    'nav.admission': 'Admission',
    'nav.contact': 'Contact',
    
    'hero.line1': 'Empowering the',
    'hero.line1.highlight': 'future',
    'hero.line2': 'Nurturing the',
    'hero.line2.highlight': 'present',
    'hero.line3': 'Building a foundation for lifelong learning',
    'hero.line4': 'Where every child reaches their potential',
    'hero.cta': 'Contact Us',
    
    'section.programs': 'Our Programs',
    'section.activities': 'Extracurricular Activities',
    'section.activities.description': 'Discover our wide range of engaging activities designed to develop skills, foster creativity, and promote healthy habits.',
    'section.activities.see_all': 'See All Activities',
    'section.activities.learn_more': 'Learn more about our activities',
    'section.news': 'Latest News',
    
    'activity.guitar': 'Guitar',
    'activity.piano': 'Piano',
    'activity.ballet': 'Ballet',
    'activity.swimming': 'Swimming',
    'activity.surfing': 'Surfing',
    'activity.karate': 'Karate',
    'activity.horse_riding': 'Horse Riding',
    'activity.dance': 'Contemporary Dance',
    'activity.it': 'IT Classes',
    'activity.music': 'Music',
    
    'program.preschool': 'Preschool',
    'program.elementary': 'Elementary School',
    'program.middle': 'Middle School',
    'program.high': 'High School',
    
    'footer.about': 'About Eramos Um',
    'footer.about_text': 'A modern educational institution focused on holistic development and academic excellence.',
    'footer.links': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.social': 'Follow Us',
    'footer.copyright': '© 2024 Eramos Um. All rights reserved.',
    
    'contact.title': 'Contact Us',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info': 'School Information',
    
    'extracurricular.title': 'Extracurricular Activities',
    'extracurricular.intro': 'Our school offers a wide range of extracurricular activities designed to enrich your child\'s educational experience and develop new skills.',
    'extracurricular.sports': 'Sports Activities',
    'extracurricular.arts': 'Arts & Technology',
    'extracurricular.activities': 'Activities',
    'extracurricular.academic': 'Academic Support',
    'extracurricular.swimming': 'Swimming',
    'extracurricular.ballet': 'Ballet',
    'extracurricular.karate': 'Karate',
    'extracurricular.horse_riding': 'Horse Riding',
    'extracurricular.dance': 'Contemporary Dance',
    'extracurricular.it': 'Information Technology',
    'extracurricular.music': 'Music Lessons',
    'extracurricular.pedagogical': 'Pedagogical Support',
    'extracurricular.psycho': 'Psychopedagogical Support',
    
    'regulation.title': 'Internal Regulation',
    'regulation.intro': 'Our Internal Regulation establishes the guidelines, rules, and procedures that govern our school community. Understanding and following these regulations helps create a harmonious educational environment where all students can thrive.',
    'regulation.document_title': 'Complete Document',
    'regulation.document_description': 'Download the complete Internal Regulation document for comprehensive information on school policies, student conduct, academic requirements, and operational procedures.',
    'regulation.document_button': 'Download Regulation (PDF)',
    
    'team.title': 'Our Team',
    'team.directors': 'School Directors',
    'team.teachers': 'Teachers',
    'team.staff': 'Support Staff'
  },
  pt: {
    'nav.school': 'Escola',
    'nav.about': 'Sobre Nós',
    'nav.team': 'Equipe',
    'nav.regulation': 'Regulamento Interno',
    'nav.daily_life': 'Dia a Dia',
    'nav.lunch_menu': 'Cardápio',
    'nav.dress_code': 'Uniforme',
    'nav.class_schedules': 'Horário das Aulas',
    'nav.school_books': 'Lista de Livros',
    'nav.academic_calendar': 'Calendário Acadêmico',
    'nav.programs_services': 'Programas & Serviços',
    'nav.extracurricular': 'Atividades Extracurriculares',
    'nav.inovar': 'Inovar',
    'nav.admission': 'Admissão',
    'nav.contact': 'Contato',
    
    'hero.line1': 'Capacitando o',
    'hero.line1.highlight': 'futuro',
    'hero.line2': 'Nutrindo o',
    'hero.line2.highlight': 'presente',
    'hero.line3': 'Construindo uma base para a aprendizagem ao longo da vida',
    'hero.line4': 'Onde cada criança alcança seu potencial',
    'hero.cta': 'Entre em Contato',
    
    'section.programs': 'Nossos Programas',
    'section.activities': 'Atividades Extracurriculares',
    'section.activities.description': 'Descubra nossa ampla gama de atividades envolventes projetadas para desenvolver habilidades, estimular a criatividade e promover hábitos saudáveis.',
    'section.activities.see_all': 'Ver Todas as Atividades',
    'section.activities.learn_more': 'Saiba mais sobre nossas atividades',
    'section.news': 'Últimas Notícias',
    
    'activity.guitar': 'Violão',
    'activity.piano': 'Piano',
    'activity.ballet': 'Ballet',
    'activity.swimming': 'Natação',
    'activity.surfing': 'Surf',
    'activity.karate': 'Karatê',
    'activity.horse_riding': 'Equitação',
    'activity.dance': 'Dança Contemporânea',
    'activity.it': 'Aulas de Informática',
    'activity.music': 'Música',
    
    'program.preschool': 'Educação Infantil',
    'program.elementary': 'Ensino Fundamental I',
    'program.middle': 'Ensino Fundamental II',
    'program.high': 'Ensino Médio',
    
    'footer.about': 'Sobre Eramos Um',
    'footer.about_text': 'Uma instituição educacional moderna focada no desenvolvimento holístico e na excelência acadêmica.',
    'footer.links': 'Links Rápidos',
    'footer.contact': 'Contate-nos',
    'footer.social': 'Siga-nos',
    'footer.copyright': '© 2024 Eramos Um. Todos os direitos reservados.',
    
    'contact.title': 'Entre em Contato',
    'contact.form.name': 'Seu Nome',
    'contact.form.email': 'Endereço de Email',
    'contact.form.message': 'Sua Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.info': 'Informações da Escola',
    
    'extracurricular.title': 'Atividades Extracurriculares',
    'extracurricular.intro': 'Nossa escola oferece uma ampla gama de atividades extracurriculares projetadas para enriquecer a experiência educacional do seu filho e desenvolver novas habilidades.',
    'extracurricular.sports': 'Atividades Esportivas',
    'extracurricular.arts': 'Artes & Tecnologia',
    'extracurricular.activities': 'Atividades',
    'extracurricular.academic': 'Suporte Acadêmico',
    'extracurricular.swimming': 'Natação',
    'extracurricular.ballet': 'Ballet',
    'extracurricular.karate': 'Karatê',
    'extracurricular.horse_riding': 'Equitação',
    'extracurricular.dance': 'Dança Contemporânea',
    'extracurricular.it': 'Tecnologia da Informação',
    'extracurricular.music': 'Aulas de Música',
    'extracurricular.pedagogical': 'Suporte Pedagógico',
    'extracurricular.psycho': 'Suporte Psicopedagógico',
    
    'regulation.title': 'Regulamento Interno',
    'regulation.intro': 'Nosso Regulamento Interno estabelece as diretrizes, regras e procedimentos que governam nossa comunidade escolar. Entender e seguir esses regulamentos ajuda a criar um ambiente educacional harmonioso onde todos os alunos podem prosperar.',
    'regulation.document_title': 'Documento Completo',
    'regulation.document_description': 'Baixe o documento completo do Regulamento Interno para informações abrangentes sobre políticas escolares, conduta dos alunos, requisitos acadêmicos e procedimentos operacionais.',
    'regulation.document_button': 'Baixar Regulamento (PDF)',
    
    'team.title': 'Nossa Equipe',
    'team.directors': 'Diretores da Escola',
    'team.teachers': 'Professores',
    'team.staff': 'Equipe de Apoio'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
