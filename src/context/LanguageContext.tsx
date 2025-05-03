
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
    'nav.school': 'School',
    'nav.about': 'About Us',
    'nav.team': 'Our Team',
    'nav.regulation': 'Internal Regulation',
    'nav.daily_life': 'Daily Life',
    'nav.lunch_menu': 'Lunch Menu',
    'nav.dress_code': 'Dress Code',
    'nav.class_schedules': 'Class Schedules',
    'nav.school_books': 'School Books',
    'nav.academic_calendar': 'Academic Calendar',
    'nav.programs_services': 'Programs & Services',
    'nav.extracurricular': 'Extracurricular Activities',
    'nav.inovar': 'Inovar Tool',
    'nav.admission': 'Admission',

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
    
    // About Us Page
    'about.title': 'About Us',
    'about.mission_title': 'Our Mission',
    'about.mission': 'To provide a nurturing environment where children can learn and grow to their full potential.',
    'about.values_title': 'Our Values',
    'about.values': 'Excellence, Respect, Innovation, Creativity, and Community.',
    'about.approach_title': 'Educational Approach',
    'about.approach': 'We combine traditional teaching methods with innovative approaches to create a comprehensive learning experience.',
    'about.history_title': 'Our History',
    'about.history': 'Eramos Um was founded in 1995 with a vision to provide quality education that emphasizes both academic excellence and character development.',
    'about.project_title': 'Educational Project',
    'about.project_description': 'Learn more about our educational philosophy and approach by downloading our Educational Project document.',
    'about.project_button': 'Download Educational Project',

    // Team Page
    'team.title': 'Our Team',
    'team.directors': 'Directors',
    'team.teachers': 'Teachers',
    'team.staff': 'Support Staff',
    
    // Regulation Page
    'regulation.title': 'Internal Regulation',
    'regulation.intro': 'Our school operates under a set of guidelines that ensure a safe, respectful, and productive learning environment for all students.',
    'regulation.document_title': 'Internal Regulation Document',
    'regulation.document_description': 'The complete internal regulation document can be downloaded here:',
    'regulation.document_button': 'Download Regulation',
    
    // Lunch Menu
    'lunch.title': 'Lunch Menu',
    'lunch.intro': 'We provide nutritious and delicious meals prepared daily by our kitchen staff.',
    'lunch.today': 'Today\'s Menu',
    'lunch.week': 'This Week',
    'lunch.next_week': 'Next Week',
    
    // Dress Code
    'dress.title': 'Dress Code',
    'dress.intro': 'Our dress code helps foster a sense of community and equality among students.',
    'dress.policy': 'Dress Code Policy',
    'dress.purchase_title': 'Where to Buy',
    'dress.purchase_info': 'School uniforms can be purchased from our official supplier:',
    
    // Class Schedules
    'schedules.title': 'Class Schedules',
    'schedules.intro': 'Our schedule is designed to provide a balanced day with academic subjects, arts, physical education, and break times.',
    'schedules.grade1': '1st Grade',
    'schedules.grade2': '2nd Grade',
    'schedules.grade3': '3rd Grade',
    'schedules.grade4': '4th Grade',
    
    // Academic Calendar
    'calendar.title': 'Academic Calendar',
    'calendar.intro': 'Our academic year is divided into two semesters with vacation periods and holidays.',
    'calendar.semester1': 'First Semester',
    'calendar.semester2': 'Second Semester',
    'calendar.breaks': 'Academic Breaks',
    
    // School Books
    'books.title': 'School Books',
    'books.intro': 'Required textbooks and reading materials for each grade level.',
    'books.grade1': '1st Grade Books',
    'books.grade2': '2nd Grade Books',
    'books.grade3': '3rd Grade Books',
    'books.grade4': '4th Grade Books',
    'books.where_to_buy': 'Where to Buy',
    
    // Extracurricular Activities
    'extracurricular.title': 'Extracurricular Activities',
    'extracurricular.intro': 'We offer a variety of activities to enrich our students\' education beyond the classroom.',
    'extracurricular.sports': 'Sports',
    'extracurricular.arts': 'Arts',
    'extracurricular.academic': 'Academic Support',
    'extracurricular.swimming': 'Swimming',
    'extracurricular.ballet': 'Ballet',
    'extracurricular.karate': 'Karate',
    'extracurricular.horse_riding': 'Horse Riding',
    'extracurricular.dance': 'Contemporary Dance',
    'extracurricular.it': 'Information Technology',
    'extracurricular.music': 'Music',
    'extracurricular.pedagogical': 'Pedagogical Support',
    'extracurricular.psycho': 'Psychopedagogical Support',
    
    // Inovar Tool
    'inovar.title': 'Inovar Tool',
    'inovar.intro': 'Inovar is our digital platform for communication between school, teachers, and families.',
    'inovar.parents': 'For Parents',
    'inovar.teachers': 'For Teachers',
    'inovar.login': 'Login to Inovar',
    
    // Admission
    'admission.title': 'School Admission',
    'admission.intro': 'Join our school community by following these admission steps.',
    'admission.requirements': 'Requirements',
    'admission.process': 'Application Process',
    'admission.documents': 'Required Documents',
    'admission.download': 'Download Admission Forms',

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
    'nav.school': 'Escola',
    'nav.about': 'Sobre Nós',
    'nav.team': 'Nossa Equipe',
    'nav.regulation': 'Regulamento Interno',
    'nav.daily_life': 'Dia a Dia',
    'nav.lunch_menu': 'Cardápio',
    'nav.dress_code': 'Uniforme',
    'nav.class_schedules': 'Horários das Aulas',
    'nav.school_books': 'Material Escolar',
    'nav.academic_calendar': 'Calendário Acadêmico',
    'nav.programs_services': 'Programas & Serviços',
    'nav.extracurricular': 'Atividades Extracurriculares',
    'nav.inovar': 'Ferramenta Inovar',
    'nav.admission': 'Admissão',

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
    
    // About Us Page
    'about.title': 'Sobre Nós',
    'about.mission_title': 'Nossa Missão',
    'about.mission': 'Proporcionar um ambiente acolhedor onde as crianças possam aprender e crescer em seu pleno potencial.',
    'about.values_title': 'Nossos Valores',
    'about.values': 'Excelência, Respeito, Inovação, Criatividade e Comunidade.',
    'about.approach_title': 'Abordagem Educacional',
    'about.approach': 'Combinamos métodos tradicionais de ensino com abordagens inovadoras para criar uma experiência de aprendizagem abrangente.',
    'about.history_title': 'Nossa História',
    'about.history': 'Eramos Um foi fundada em 1995 com a visão de oferecer uma educação de qualidade que enfatiza tanto a excelência acadêmica quanto o desenvolvimento do caráter.',
    'about.project_title': 'Projeto Educacional',
    'about.project_description': 'Saiba mais sobre nossa filosofia e abordagem educacional baixando nosso documento de Projeto Educacional.',
    'about.project_button': 'Baixar Projeto Educacional',

    // Team Page
    'team.title': 'Nossa Equipe',
    'team.directors': 'Diretores',
    'team.teachers': 'Professores',
    'team.staff': 'Equipe de Apoio',
    
    // Regulation Page
    'regulation.title': 'Regulamento Interno',
    'regulation.intro': 'Nossa escola opera sob um conjunto de diretrizes que garantem um ambiente de aprendizagem seguro, respeitoso e produtivo para todos os alunos.',
    'regulation.document_title': 'Documento de Regulamento Interno',
    'regulation.document_description': 'O documento completo de regulamento interno pode ser baixado aqui:',
    'regulation.document_button': 'Baixar Regulamento',
    
    // Lunch Menu
    'lunch.title': 'Cardápio',
    'lunch.intro': 'Fornecemos refeições nutritivas e deliciosas preparadas diariamente pela nossa equipe de cozinha.',
    'lunch.today': 'Cardápio de Hoje',
    'lunch.week': 'Esta Semana',
    'lunch.next_week': 'Próxima Semana',
    
    // Dress Code
    'dress.title': 'Uniforme',
    'dress.intro': 'Nosso código de vestimenta ajuda a promover um senso de comunidade e igualdade entre os alunos.',
    'dress.policy': 'Política de Uniforme',
    'dress.purchase_title': 'Onde Comprar',
    'dress.purchase_info': 'Os uniformes escolares podem ser adquiridos em nosso fornecedor oficial:',
    
    // Class Schedules
    'schedules.title': 'Horários das Aulas',
    'schedules.intro': 'Nosso horário é projetado para proporcionar um dia equilibrado com disciplinas acadêmicas, artes, educação física e intervalos.',
    'schedules.grade1': '1º Ano',
    'schedules.grade2': '2º Ano',
    'schedules.grade3': '3º Ano',
    'schedules.grade4': '4º Ano',
    
    // Academic Calendar
    'calendar.title': 'Calendário Acadêmico',
    'calendar.intro': 'Nosso ano acadêmico é dividido em dois semestres com períodos de férias e feriados.',
    'calendar.semester1': 'Primeiro Semestre',
    'calendar.semester2': 'Segundo Semestre',
    'calendar.breaks': 'Pausas Acadêmicas',
    
    // School Books
    'books.title': 'Material Escolar',
    'books.intro': 'Livros didáticos e materiais de leitura necessários para cada série.',
    'books.grade1': 'Material do 1º Ano',
    'books.grade2': 'Material do 2º Ano',
    'books.grade3': 'Material do 3º Ano',
    'books.grade4': 'Material do 4º Ano',
    'books.where_to_buy': 'Onde Comprar',
    
    // Extracurricular Activities
    'extracurricular.title': 'Atividades Extracurriculares',
    'extracurricular.intro': 'Oferecemos uma variedade de atividades para enriquecer a educação de nossos alunos além da sala de aula.',
    'extracurricular.sports': 'Esportes',
    'extracurricular.arts': 'Artes',
    'extracurricular.academic': 'Apoio Acadêmico',
    'extracurricular.swimming': 'Natação',
    'extracurricular.ballet': 'Ballet',
    'extracurricular.karate': 'Karatê',
    'extracurricular.horse_riding': 'Equitação',
    'extracurricular.dance': 'Dança Contemporânea',
    'extracurricular.it': 'Informática',
    'extracurricular.music': 'Música',
    'extracurricular.pedagogical': 'Apoio Pedagógico',
    'extracurricular.psycho': 'Apoio Psicopedagógico',
    
    // Inovar Tool
    'inovar.title': 'Ferramenta Inovar',
    'inovar.intro': 'Inovar é nossa plataforma digital para comunicação entre escola, professores e famílias.',
    'inovar.parents': 'Para Pais',
    'inovar.teachers': 'Para Professores',
    'inovar.login': 'Entrar no Inovar',
    
    // Admission
    'admission.title': 'Admissão Escolar',
    'admission.intro': 'Junte-se à nossa comunidade escolar seguindo estas etapas de admissão.',
    'admission.requirements': 'Requisitos',
    'admission.process': 'Processo de Aplicação',
    'admission.documents': 'Documentos Necessários',
    'admission.download': 'Baixar Formulários de Admissão',

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
