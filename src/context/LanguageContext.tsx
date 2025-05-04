
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
    
    'activity.location.swimming': 'AQUATICS',
    'activity.location.music': 'MUSIC',
    'activity.location.dance': 'PERFORMING ARTS',
    'activity.location.sports': 'ATHLETICS',
    'activity.location.outdoor': 'OUTDOOR',
    'activity.location.tech': 'TECHNOLOGY',
    
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
    'team.directors.description': 'Our dedicated leadership team brings years of experience in educational administration and a commitment to excellence.',
    'team.teachers': 'Teachers',
    'team.teachers.description': 'Our highly qualified teachers are passionate about education and committed to helping each student reach their full potential.',
    'team.staff': 'Support Staff',
    'team.staff.description': 'Our support staff works tirelessly behind the scenes to ensure the smooth operation of our school and provide assistance to students and families.',
    
    'inovar.title': 'Inovar Platform',
    'inovar.description': 'Inovar is our digital school management platform that connects parents, students, and teachers.',
    'inovar.features': 'Platform Features',
    'inovar.login': 'Login to Platform',
    
    'lunch.title': 'Lunch Menu',
    'lunch.description': 'Our lunch menu is carefully crafted by nutritionists to provide balanced and healthy meals for our students.',
    'lunch.weekly': 'Weekly Menu',
    
    'dress.title': 'Dress Code',
    'dress.description': 'Our dress code is designed to create a sense of community and belonging while ensuring students are comfortable and ready to learn.',
    'dress.requirements': 'Uniform Requirements',
    
    'schedule.title': 'Class Schedules',
    'schedule.description': 'Our class schedules are designed to provide a balanced academic experience with time for extracurricular activities.',
    'schedule.download': 'Download Schedule',
    
    'books.title': 'School Books',
    'books.description': 'Here you\'ll find the list of required textbooks and materials for each grade level.',
    'books.download': 'Download Book List',
    
    'calendar.title': 'Academic Calendar',
    'calendar.description': 'Our academic calendar outlines important dates throughout the school year, including holidays, exam periods, and special events.',
    'calendar.download': 'Download Calendar',
    
    'admission.title': 'Admission',
    'admission.description': 'We welcome applications from families who share our educational philosophy and commitment to academic excellence.',
    'admission.process': 'Admission Process',
    'admission.apply': 'Apply Now'
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
    
    'activity.location.swimming': 'AQUÁTICOS',
    'activity.location.music': 'MÚSICA',
    'activity.location.dance': 'ARTES CÊNICAS',
    'activity.location.sports': 'ATLETISMO',
    'activity.location.outdoor': 'AR LIVRE',
    'activity.location.tech': 'TECNOLOGIA',
    
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
    'team.directors.description': 'Nossa equipe de liderança dedicada traz anos de experiência em administração educacional e um compromisso com a excelência.',
    'team.teachers': 'Professores',
    'team.teachers.description': 'Nossos professores altamente qualificados são apaixonados por educação e comprometidos em ajudar cada aluno a alcançar seu pleno potencial.',
    'team.staff': 'Equipe de Apoio',
    'team.staff.description': 'Nossa equipe de apoio trabalha incansavelmente nos bastidores para garantir o bom funcionamento de nossa escola e fornecer assistência aos alunos e às famílias.',
    
    'inovar.title': 'Plataforma Inovar',
    'inovar.description': 'Inovar é nossa plataforma digital de gestão escolar que conecta pais, alunos e professores.',
    'inovar.features': 'Recursos da Plataforma',
    'inovar.login': 'Entrar na Plataforma',
    
    'lunch.title': 'Cardápio',
    'lunch.description': 'Nosso cardápio é cuidadosamente elaborado por nutricionistas para oferecer refeições equilibradas e saudáveis aos nossos alunos.',
    'lunch.weekly': 'Cardápio Semanal',
    
    'dress.title': 'Uniforme',
    'dress.description': 'Nosso código de vestimenta foi projetado para criar um senso de comunidade e pertencimento, garantindo que os alunos estejam confortáveis e prontos para aprender.',
    'dress.requirements': 'Requisitos do Uniforme',
    
    'schedule.title': 'Horário das Aulas',
    'schedule.description': 'Nossos horários de aula são projetados para proporcionar uma experiência acadêmica equilibrada com tempo para atividades extracurriculares.',
    'schedule.download': 'Baixar Horário',
    
    'books.title': 'Lista de Livros',
    'books.description': 'Aqui você encontrará a lista de livros didáticos e materiais necessários para cada série.',
    'books.download': 'Baixar Lista de Livros',
    
    'calendar.title': 'Calendário Acadêmico',
    'calendar.description': 'Nosso calendário acadêmico destaca datas importantes ao longo do ano letivo, incluindo feriados, períodos de exames e eventos especiais.',
    'calendar.download': 'Baixar Calendário',
    
    'admission.title': 'Admissão',
    'admission.description': 'Recebemos inscrições de famílias que compartilham nossa filosofia educacional e compromisso com a excelência acadêmica.',
    'admission.process': 'Processo de Admissão',
    'admission.apply': 'Inscreva-se Agora'
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
