export interface NewsItem {
  id: string;
  title: {
    en: string;
    pt: string;
  };
  excerpt: {
    en: string;
    pt: string;
  };
  content: {
    en: string;
    pt: string;
  };
  date: string;
  image: string;
  photos?: {
    src: string;
    alt: {
      en: string;
      pt: string;
    };
    width?: number;
    height?: number;
  }[];
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title: {
      en: "World Music Day 2019",
      pt: "Dia Mundial da Música 2019"
    },
    excerpt: {
      en: "On October 1st, World Music Day is celebrated. This week, Eramos Um celebrated with our students, teachers and the entire school community.",
      pt: "No dia 1 de outubro comemora-se o Dia Mundial da Música. Esta semana, a Éramos Um celebrou com os nossos alunos, docentes e toda a comunidade escolar."
    },
    content: {
      en: "On October 1st, World Music Day is celebrated. This week, Eramos Um celebrated with our students, teachers and the entire school community. Music is a universal language that brings people together and enriches our educational experience.",
      pt: "No dia 1 de outubro comemora-se o Dia Mundial da Música. Esta semana, a Éramos Um celebrou com os nossos alunos, docentes e toda a comunidade escolar. A música é uma linguagem universal que une as pessoas e enriquece a nossa experiência educativa."
    },
    date: "2019-10-05",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "2",
    title: {
      en: "1-Year-Old Class - World Food Day 2019",
      pt: "Turma de 1 ano - Dia Mundial da Alimentação 2019"
    },
    excerpt: {
      en: "Our youngest students celebrated World Food Day with fun activities exploring healthy eating and nutrition.",
      pt: "Os nossos alunos mais novos celebraram o Dia Mundial da Alimentação com atividades divertidas explorando alimentação saudável e nutrição."
    },
    content: {
      en: "Our 1-year-old class had a wonderful celebration of World Food Day! Through age-appropriate activities, our youngest students explored different foods, textures, and the importance of healthy eating. It was amazing to see their curiosity and joy as they discovered new flavors and learned about nutrition in a fun, engaging way.",
      pt: "A nossa turma de 1 ano teve uma celebração maravilhosa do Dia Mundial da Alimentação! Através de atividades adequadas à idade, os nossos alunos mais novos exploraram diferentes alimentos, texturas e a importância da alimentação saudável. Foi incrível ver a sua curiosidade e alegria enquanto descobriam novos sabores e aprendiam sobre nutrição de forma divertida e envolvente."
    },
    date: "2019-10-14",
    image: "https://images.unsplash.com/photo-1609501676725-7186f734b2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1609501676725-7186f734b2b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Children exploring healthy foods during World Food Day celebration",
          pt: "Crianças explorando alimentos saudáveis durante a celebração do Dia Mundial da Alimentação"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Young students learning about nutrition through play",
          pt: "Jovens alunos aprendendo sobre nutrição através da brincadeira"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Interactive food exploration activity",
          pt: "Atividade interativa de exploração de alimentos"
        },
        width: 1200,
        height: 800
      }
    ]
  },
  {
    id: "3",
    title: {
      en: "Plastic Arts Work - 3rd and 4th Grade",
      pt: "Trabalho de expressão plástica - 3º e 4º ano"
    },
    excerpt: {
      en: "Collaborative work between 3rd and 4th grade classes.",
      pt: "Trabalho realizado em cooperação entre as turmas do 3º e 4º ano."
    },
    content: {
      en: "Our 3rd and 4th grade students collaborated on a beautiful plastic arts project. This cooperative work demonstrates how different age groups can work together to create something meaningful while developing their artistic skills and teamwork abilities.",
      pt: "Os nossos alunos do 3º e 4º ano colaboraram num belo projeto de expressão plástica. Este trabalho cooperativo demonstra como diferentes faixas etárias podem trabalhar juntas para criar algo significativo enquanto desenvolvem as suas competências artísticas e capacidades de trabalho em equipa."
    },
    date: "2019-10-15",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "4",
    title: {
      en: "Who Said Only Adults Tell Stories?",
      pt: "Quem disse que só os adultos contam histórias?"
    },
    excerpt: {
      en: "4th grade students accompanied Teacher Xana to the younger students' classrooms to read stories. A project that promotes reading and intergenerational sharing.",
      pt: "Os alunos do 4º Ano acompanharam a Professora Xana às salas dos colegas mais novos para lerem histórias. Um projeto que promove a leitura e a partilha intergeracional."
    },
    content: {
      en: "Our 4th grade students took on the role of storytellers, visiting younger classrooms to read stories. This beautiful initiative promotes reading skills while fostering mentorship and connection between different age groups in our school community.",
      pt: "Os nossos alunos do 4º ano assumiram o papel de contadores de histórias, visitando as salas dos mais novos para ler histórias. Esta bela iniciativa promove as competências de leitura enquanto fomenta a mentoria e a ligação entre diferentes faixas etárias na nossa comunidade escolar."
    },
    date: "2019-10-15",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "5",
    title: {
      en: "World Food Day 2019",
      pt: "Dia Mundial da Alimentação - 2019"
    },
    excerpt: {
      en: "On the 16th we celebrated World Food Day. For this day, work was carried out in partnership with families to promote healthy eating habits.",
      pt: "No dia 16 comemoramos o Dia Mundial da Alimentação. Para este dia foi realizado um trabalho em parceria com as famílias para promover hábitos alimentares saudáveis."
    },
    content: {
      en: "On October 16th we celebrated World Food Day with special activities designed in partnership with families. This collaborative approach helps reinforce healthy eating habits both at school and at home, creating a consistent message about the importance of nutrition.",
      pt: "No dia 16 de outubro celebrámos o Dia Mundial da Alimentação com atividades especiais concebidas em parceria com as famílias. Esta abordagem colaborativa ajuda a reforçar hábitos alimentares saudáveis tanto na escola como em casa, criando uma mensagem consistente sobre a importância da nutrição."
    },
    date: "2019-10-21",
    image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "6",
    title: {
      en: "Bread for God 2019",
      pt: "Pão por Deus - 2019"
    },
    excerpt: {
      en: "Today is a day of cultural sharing, we celebrated Bread for God! This is a project that aims to promote Portuguese traditions.",
      pt: "Hoje é dia de partilha cultural, celebrámos o Pão por Deus! Este é um projeto que visa promover as tradições portuguesas."
    },
    content: {
      en: "Today we celebrated the traditional Portuguese festival of 'Pão por Deus' (Bread for God). This cultural sharing project aims to promote Portuguese traditions and connect our students with their heritage through meaningful celebrations.",
      pt: "Hoje celebrámos a tradicional festa portuguesa do 'Pão por Deus'. Este projeto de partilha cultural visa promover as tradições portuguesas e conectar os nossos alunos com a sua herança através de celebrações significativas."
    },
    date: "2019-10-31",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "7",
    title: {
      en: "The Oceanarium is not only in Lisbon - 2019/2020",
      pt: "O Oceanário não está só em Lisboa - 2019/2020"
    },
    excerpt: {
      en: "Eramos Um went to the Cascais seawall to observe the exhibition 'The Oceanarium is not only in Lisbon'.",
      pt: "A Éramos Um foi ao paredão de Cascais observar a exposição 'O Oceanário não está só em Lisboa'."
    },
    content: {
      en: "Our students visited the Cascais seawall to explore the fascinating exhibition 'The Oceanarium is not only in Lisbon'. This educational trip provided hands-on learning about marine life and ocean conservation right on our doorstep.",
      pt: "Os nossos alunos visitaram o paredão de Cascais para explorar a fascinante exposição 'O Oceanário não está só em Lisboa'. Esta viagem educativa proporcionou aprendizagem prática sobre a vida marinha e conservação dos oceanos mesmo à nossa porta."
    },
    date: "2019-11-18",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "8",
    title: {
      en: "The Komodo Dragon came to school!",
      pt: "O Dragão-de-Komodo veio à escola!"
    },
    excerpt: {
      en: "On January 23rd we visited the Zoo digitally! As part of the 'Endangered Species' exhibition, we had an incredible virtual experience.",
      pt: "Dia 23 de janeiro visitámos o Jardim Zoológico de forma digital! No âmbito da exposição 'Espécies Ameaçadas', tivemos uma experiência virtual incrível."
    },
    content: {
      en: "On January 23rd, we had an amazing digital visit to the Zoo! As part of the 'Endangered Species' exhibition, our students experienced an incredible virtual encounter with a Komodo Dragon, learning about wildlife conservation and the importance of protecting endangered species.",
      pt: "No dia 23 de janeiro, tivemos uma visita digital incrível ao Jardim Zoológico! No âmbito da exposição 'Espécies Ameaçadas', os nossos alunos viveram um encontro virtual incrível com um Dragão-de-Komodo, aprendendo sobre conservação da vida selvagem e a importância de proteger espécies ameaçadas."
    },
    date: "2020-02-04",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "9",
    title: {
      en: "The Eramos Um Little Farm!",
      pt: "A quintinha da Éramos Um!"
    },
    excerpt: {
      en: "In January, Eramos Um students designed a chicken coop for our little school. From paper we moved to action and now we have our own little farm!",
      pt: "Em janeiro os alunos da Éramos Um projetaram um galinheiro para a nossa escolinha. Do papel passámos a ações e agora temos a nossa própria quintinha!"
    },
    content: {
      en: "In January, our creative students designed a chicken coop for our school. What started as drawings on paper became reality as we built our very own little farm! This hands-on project teaches responsibility, care for animals, and connects children with nature.",
      pt: "Em janeiro, os nossos alunos criativos projetaram um galinheiro para a nossa escola. O que começou como desenhos no papel tornou-se realidade quando construímos a nossa própria quintinha! Este projeto prático ensina responsabilidade, cuidado com os animais e conecta as crianças com a natureza."
    },
    date: "2020-02-26",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "10",
    title: {
      en: "Our Grandmothers are the Greatest!",
      pt: "As nossas avós são as maiores!"
    },
    excerpt: {
      en: "A special celebration honoring our beloved grandmothers and their important role in our students' lives.",
      pt: "Uma celebração especial em honra das nossas queridas avós e do seu papel importante na vida dos nossos alunos."
    },
    content: {
      en: "We held a heartwarming celebration to honor our students' grandmothers. These special women play such an important role in our children's lives, sharing wisdom, love, and traditions that enrich our school community.",
      pt: "Realizámos uma celebração emocionante para honrar as avós dos nossos alunos. Estas mulheres especiais desempenham um papel tão importante na vida das nossas crianças, partilhando sabedoria, amor e tradições que enriquecem a nossa comunidade escolar."
    },
    date: "2020-04-04",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "11",
    title: {
      en: "Playing to Learn!",
      pt: "Brincar para aprender!"
    },
    excerpt: {
      en: "Learning through play is fundamental to child development. At Eramos Um, we believe that play is the most natural way for children to learn.",
      pt: "Aprender através da brincadeira é fundamental para o desenvolvimento infantil. Na Éramos Um, acreditamos que brincar é a forma mais natural das crianças aprenderem."
    },
    content: {
      en: "At Eramos Um, we understand that play is not just fun - it's fundamental to learning! Through play, children develop social skills, creativity, problem-solving abilities, and emotional intelligence. Our approach integrates learning with play in meaningful ways.",
      pt: "Na Éramos Um, compreendemos que brincar não é apenas diversão - é fundamental para a aprendizagem! Através da brincadeira, as crianças desenvolvem competências sociais, criatividade, capacidades de resolução de problemas e inteligência emocional. A nossa abordagem integra a aprendizagem com a brincadeira de formas significativas."
    },
    date: "2020-04-08",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "12",
    title: {
      en: "Play and Nature",
      pt: "Brincadeira e a natureza"
    },
    excerpt: {
      en: "Learning is a continuous process without temporal or spatial limits. That's why learning indoors is as important as learning outdoors.",
      pt: "A aprendizagem é um processo continuo sem limites temporais ou de lugar. Por isso tanto é importante a aprendizagem no interior como no exterior."
    },
    content: {
      en: "Learning is a continuous process without temporal or spatial limits. That's why learning indoors is as important as learning outdoors. At Eramos Um, we embrace nature as our extended classroom, where children can explore, discover, and learn in the most natural environment possible.",
      pt: "A aprendizagem é um processo continuo sem limites temporais ou de lugar. Por isso tanto é importante a aprendizagem no interior como no exterior. Na Éramos Um, abraçamos a natureza como a nossa sala de aula estendida, onde as crianças podem explorar, descobrir e aprender no ambiente mais natural possível."
    },
    date: "2020-11-17",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "13",
    title: {
      en: "Heterogeneous Room Activities - 2020",
      pt: "Atividades da Sala Heterogénea - 2020"
    },
    excerpt: {
      en: "Playing also teaches us... We learn that: We need to plant, water, care for and nurture growth in all aspects of learning.",
      pt: "A brincar também aprendemos... Aprendemos que: É preciso plantar, regar, cuidar e nutrir o crescimento em todos os aspetos da aprendizagem."
    },
    content: {
      en: "In our heterogeneous classroom, playing also teaches us valuable lessons! We learn that just like plants, learning requires planting seeds of knowledge, watering them with curiosity, caring for them with attention, and nurturing growth through patience and dedication.",
      pt: "Na nossa sala heterogénea, a brincar também aprendemos lições valiosas! Aprendemos que, tal como as plantas, a aprendizagem requer plantar sementes de conhecimento, regá-las com curiosidade, cuidar delas com atenção e nutrir o crescimento através da paciência e dedicação."
    },
    date: "2020-11-17",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "14",
    title: {
      en: "Adapted Schedule - During Confinement Period",
      pt: "Horário adaptado - em período de confinamento"
    },
    excerpt: {
      en: "During challenging times, we adapted our schedule to continue providing quality education while ensuring everyone's safety and well-being.",
      pt: "Durante tempos desafiantes, adaptámos o nosso horário para continuar a fornecer educação de qualidade, garantindo a segurança e bem-estar de todos."
    },
    content: {
      en: "During the challenging confinement period, Eramos Um quickly adapted our schedule and teaching methods to ensure continuity of learning. We implemented safety protocols while maintaining our commitment to providing quality education and supporting our school community through difficult times.",
      pt: "Durante o período desafiante de confinamento, a Éramos Um adaptou rapidamente o nosso horário e métodos de ensino para garantir a continuidade da aprendizagem. Implementámos protocolos de segurança mantendo o nosso compromisso de fornecer educação de qualidade e apoiar a nossa comunidade escolar em tempos difíceis."
    },
    date: "2021-02-09",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "15",
    title: {
      en: "School Reopening - March 2021",
      pt: "Reabertura das escolas - março 2021"
    },
    excerpt: {
      en: "We have our school entrance filled with love and affection from our students, families and colleagues.",
      pt: "Temos a entrada da nossa escola repleta de amor e carinho dos nossos alunos/as, famílias e colegas."
    },
    content: {
      en: "What a joy to reopen our school doors in March 2021! Our school entrance was filled with love and affection from our students, families, and colleagues. After a challenging period, coming back together as a school community felt like a celebration of resilience and hope.",
      pt: "Que alegria reabrir as portas da nossa escola em março de 2021! A entrada da nossa escola estava repleta de amor e carinho dos nossos alunos, famílias e colegas. Após um período desafiante, voltar a estar juntos como comunidade escolar pareceu uma celebração de resistência e esperança."
    },
    date: "2021-03-15",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "16",
    title: {
      en: "Our Little Athletes Achieve Great Things Every Day!",
      pt: "Os nossos pequenos atletas realizam todos os dias grandes conquistas!"
    },
    excerpt: {
      en: "Our Physical Education classes are quite fun and with them we learn various sports modalities.",
      pt: "As nossas aulas de Educação Física são bastante divertidas e com elas aprendemos diversas modalidades desportivas."
    },
    content: {
      en: "Our Physical Education classes are incredibly fun and educational! Through them, our little athletes learn various sports modalities while developing physical skills, teamwork, and sportsmanship. Every day brings new achievements and personal growth for our students.",
      pt: "As nossas aulas de Educação Física são incrivelmente divertidas e educativas! Através delas, os nossos pequenos atletas aprendem várias modalidades desportivas enquanto desenvolvem competências físicas, trabalho de equipa e espírito desportivo. Todos os dias trazem novas conquistas e crescimento pessoal para os nossos alunos."
    },
    date: "2021-04-27",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "17",
    title: {
      en: "Living with Health",
      pt: "Viver com Saúde"
    },
    excerpt: {
      en: "Health and well-being are fundamental pillars of our educational approach at Eramos Um.",
      pt: "A saúde e o bem-estar são pilares fundamentais da nossa abordagem educativa na Éramos Um."
    },
    content: {
      en: "At Eramos Um, we believe that living with health encompasses physical, mental, and emotional well-being. Our holistic approach to education includes promoting healthy habits, physical activity, nutritious eating, and emotional intelligence as essential components of child development.",
      pt: "Na Éramos Um, acreditamos que viver com saúde abrange o bem-estar físico, mental e emocional. A nossa abordagem holística à educação inclui a promoção de hábitos saudáveis, atividade física, alimentação nutritiva e inteligência emocional como componentes essenciais do desenvolvimento infantil."
    },
    date: "2021-05-10",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "18",
    title: {
      en: "Family Day",
      pt: "Dia da Família"
    },
    excerpt: {
      en: "A wonderful Family Day for everyone who forms the fantastic Eramos Um Family with us!",
      pt: "Um maravilhoso Dia da Família para todos que connosco formam a fantástica Família Éramos Um!"
    },
    content: {
      en: "We celebrated a wonderful Family Day with all the families that make up our fantastic Eramos Um community! This special day brings together students, parents, teachers, and staff in celebration of the bonds that make our school family so strong.",
      pt: "Celebrámos um maravilhoso Dia da Família com todas as famílias que compõem a nossa fantástica comunidade Éramos Um! Este dia especial reúne alunos, pais, professores e funcionários em celebração dos laços que tornam a nossa família escolar tão forte."
    },
    date: "2021-05-15",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "19",
    title: {
      en: "Beginning of the 2021/2022 School Year",
      pt: "Início do ano letivo 2021/2022"
    },
    excerpt: {
      en: "A new school year begins with excitement, new challenges, and endless possibilities for learning and growth.",
      pt: "Um novo ano letivo começa com entusiasmo, novos desafios e infinitas possibilidades de aprendizagem e crescimento."
    },
    content: {
      en: "The beginning of the 2021/2022 school year marked a fresh start for our Eramos Um community. With renewed energy and optimism, we welcomed students back to a safe and nurturing learning environment, ready to embark on new educational adventures together.",
      pt: "O início do ano letivo 2021/2022 marcou um novo começo para a nossa comunidade Éramos Um. Com energia renovada e otimismo, recebemos os alunos de volta a um ambiente de aprendizagem seguro e acolhedor, prontos para embarcar juntos em novas aventuras educativas."
    },
    date: "2021-09-15",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "20",
    title: {
      en: "At Eramos Um, Our Future is Built Today!",
      pt: "Na Éramos Um, o nosso futuro constrói-se hoje!"
    },
    excerpt: {
      en: "Every day at our school is an investment in our students' future, building strong foundations for lifelong learning.",
      pt: "Todos os dias na nossa escola são um investimento no futuro dos nossos alunos, construindo bases sólidas para a aprendizagem ao longo da vida."
    },
    content: {
      en: "At Eramos Um, we firmly believe that our future is built today! Every lesson, every interaction, every moment of discovery contributes to shaping confident, capable, and caring individuals who will make a positive impact on the world.",
      pt: "Na Éramos Um, acreditamos firmemente que o nosso futuro se constrói hoje! Cada lição, cada interação, cada momento de descoberta contribui para formar indivíduos confiantes, capazes e carinhosos que terão um impacto positivo no mundo."
    },
    date: "2021-10-11",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "21",
    title: {
      en: "Let's Help Others",
      pt: "Vamos ajudar os outros"
    },
    excerpt: {
      en: "Teaching empathy and social responsibility through community service and helping those in need.",
      pt: "Ensinar empatia e responsabilidade social através do serviço comunitário e ajuda aos necessitados."
    },
    content: {
      en: "At Eramos Um, we believe in teaching our students the importance of helping others and giving back to the community. Through various charitable initiatives and community service projects, we instill values of empathy, compassion, and social responsibility in our young learners.",
      pt: "Na Éramos Um, acreditamos em ensinar aos nossos alunos a importância de ajudar os outros e retribuir à comunidade. Através de várias iniciativas de caridade e projetos de serviço comunitário, incutimos valores de empatia, compaixão e responsabilidade social nos nossos jovens aprendizes."
    },
    date: "2021-12-03",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "22",
    title: {
      en: "Our Physical Education Classes",
      pt: "As nossas aulas de educação física"
    },
    excerpt: {
      en: "Our Physical Education classes transform into games where we exercise body and mind in healthy competition.",
      pt: "As nossas aulas de educação física transformam-se em brincadeiras onde exercitamos corpo e mente numa competição saudável."
    },
    content: {
      en: "Our Physical Education classes are much more than exercise - they transform into engaging games where students exercise both body and mind through healthy competition. These activities promote physical fitness, teamwork, fair play, and the joy of movement.",
      pt: "As nossas aulas de Educação Física são muito mais do que exercício - transformam-se em jogos envolventes onde os alunos exercitam corpo e mente através de competição saudável. Estas atividades promovem a aptidão física, trabalho de equipa, fair play e a alegria do movimento."
    },
    date: "2022-02-16",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "23",
    title: {
      en: "The Freedom of Play",
      pt: "A liberdade do Brincar"
    },
    excerpt: {
      en: "At Eramos Um we promote daily contact with Nature, growing in balance and harmony in a healthy way.",
      pt: "Na Éramos Um promovemos, diariamente, o contacto com a Natureza crescendo em equilíbrio e harmonia de forma saudável."
    },
    content: {
      en: "At Eramos Um, we promote daily contact with Nature, allowing our children to grow in balance and harmony in the healthiest way possible. The freedom of play in natural environments fosters creativity, independence, and a deep connection with the world around us.",
      pt: "Na Éramos Um, promovemos diariamente o contacto com a Natureza, permitindo que as nossas crianças cresçam em equilíbrio e harmonia da forma mais saudável possível. A liberdade de brincar em ambientes naturais fomenta a criatividade, independência e uma ligação profunda com o mundo que nos rodeia."
    },
    date: "2022-02-21",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "24",
    title: {
      en: "Carnival",
      pt: "Carnaval"
    },
    excerpt: {
      en: "Carnival is synonymous with fun and joy, so our students dressed up and celebrated cheerfully.",
      pt: "O Carnaval é sinónimo de diversão e alegria, portanto os nossos alunos vestiram-se a rigor e celebraram alegremente."
    },
    content: {
      en: "Carnival time at Eramos Um is pure magic! This celebration is synonymous with fun and joy, and our students embraced the spirit by dressing up in colorful costumes and celebrating with infectious enthusiasm. These moments of joy create lasting memories and strengthen our school community bonds.",
      pt: "A época do Carnaval na Éramos Um é pura magia! Esta celebração é sinónimo de diversão e alegria, e os nossos alunos abraçaram o espírito vestindo-se com trajes coloridos e celebrando com entusiasmo contagiante. Estes momentos de alegria criam memórias duradouras e fortalecem os laços da nossa comunidade escolar."
    },
    date: "2022-02-28",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Students in colorful carnival costumes celebrating",
          pt: "Alunos em trajes coloridos de carnaval celebrando"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1549451371-64aa98a6f632?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Carnival parade with children in festive outfits",
          pt: "Desfile de carnaval com crianças em trajes festivos"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Joyful carnival celebration at school",
          pt: "Celebração alegre de carnaval na escola"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Children dancing and celebrating carnival",
          pt: "Crianças dançando e celebrando o carnaval"
        },
        width: 1200,
        height: 800
      }
    ]
  },
  {
    id: "25",
    title: {
      en: "Hand in Hand for PEACE",
      pt: "De mãos dadas pela PAZ"
    },
    excerpt: {
      en: "The families of our students demonstrated that 'Hand in hand for PEACE' we build a better world.",
      pt: "As famílias dos nossos alunos demonstraram que 'De mãos dadas pela PAZ' construímos um mundo melhor."
    },
    content: {
      en: "Our school families came together in a powerful demonstration of unity, showing that 'Hand in hand for PEACE' we can build a better world. This meaningful initiative reinforced our commitment to teaching values of peace, tolerance, and global citizenship to our students.",
      pt: "As famílias da nossa escola uniram-se numa poderosa demonstração de unidade, mostrando que 'De mãos dadas pela PAZ' podemos construir um mundo melhor. Esta iniciativa significativa reforçou o nosso compromisso de ensinar valores de paz, tolerância e cidadania global aos nossos alunos."
    },
    date: "2022-03-04",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "26",
    title: {
      en: "Knowledge Has No Borders!",
      pt: "O conhecimento não tem fronteiras!"
    },
    excerpt: {
      en: "This week we celebrated Pi Day. Knowledge has no borders! Sharing with peers is an important lesson in cooperation and learning.",
      pt: "Esta semana celebrámos o Dia do Pi. O conhecimento não tem fronteiras! Partilhar com os pares é uma lição importante de cooperação e aprendizagem."
    },
    content: {
      en: "This week we celebrated Pi Day, demonstrating that knowledge truly has no borders! Our students learned that sharing knowledge with peers is not just educational but also an important lesson in cooperation, collaboration, and the universal nature of learning.",
      pt: "Esta semana celebrámos o Dia do Pi, demonstrando que o conhecimento verdadeiramente não tem fronteiras! Os nossos alunos aprenderam que partilhar conhecimento com os pares não é apenas educativo, mas também uma lição importante de cooperação, colaboração e da natureza universal da aprendizagem."
    },
    date: "2022-03-14",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "27",
    title: {
      en: "Harmony Between Body and Soul",
      pt: "Harmonia entre corpo e alma"
    },
    excerpt: {
      en: "Balance and harmony between body and soul, daily, at Eramos Um.",
      pt: "Equilíbrio e harmonia entre corpo e alma, diariamente, na Éramos Um."
    },
    content: {
      en: "At Eramos Um, we strive for balance and harmony between body and soul every single day. Our holistic approach to education recognizes that true learning encompasses physical, emotional, and spiritual well-being, creating well-rounded individuals prepared for life's challenges.",
      pt: "Na Éramos Um, esforçamo-nos por equilibrio e harmonia entre corpo e alma todos os dias. A nossa abordagem holística à educação reconhece que a verdadeira aprendizagem abrange o bem-estar físico, emocional e espiritual, criando indivíduos completos preparados para os desafios da vida."
    },
    date: "2022-03-17",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "28",
    title: {
      en: "Brief Summary of the 1st Semester",
      pt: "Pequeno resumo do 1º semestre"
    },
    excerpt: {
      en: "A reflection on the achievements, learning experiences, and memorable moments from our first semester.",
      pt: "Uma reflexão sobre as conquistas, experiências de aprendizagem e momentos memoráveis do nosso primeiro semestre."
    },
    content: {
      en: "As we conclude our first semester, we reflect on the incredible journey of learning, growth, and discovery. Our students have achieved remarkable milestones, formed lasting friendships, and developed new skills that will serve them well in their educational journey.",
      pt: "Ao concluir o nosso primeiro semestre, refletimos sobre a incrível jornada de aprendizagem, crescimento e descoberta. Os nossos alunos alcançaram marcos notáveis, formaram amizades duradouras e desenvolveram novas competências que os servirão bem na sua jornada educativa."
    },
    date: "2022-05-17",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "29",
    title: {
      en: "September was a Whirlwind of Emotions",
      pt: "Setembro foi um rodopio de emoções"
    },
    excerpt: {
      en: "The beginning of a new school year brought excitement, anticipation, and a wonderful mix of emotions for our entire school community.",
      pt: "O início de um novo ano letivo trouxe entusiasmo, expectativa e uma maravilhosa mistura de emoções para toda a nossa comunidade escolar."
    },
    content: {
      en: "September was truly a whirlwind of emotions as we welcomed back our students and families for another exciting school year. The mix of anticipation, joy, and nervous excitement created a vibrant atmosphere that reminded us why we love what we do at Eramos Um.",
      pt: "Setembro foi verdadeiramente um rodopio de emoções quando recebemos de volta os nossos alunos e famílias para mais um ano letivo emocionante. A mistura de expectativa, alegria e nervosismo criou uma atmosfera vibrante que nos lembrou porque amamos o que fazemos na Éramos Um."
    },
    date: "2022-10-18",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "30",
    title: {
      en: "5th Edition Eramos Um Duathlon",
      pt: "5ª Edição Duatlo Éramos Um"
    },
    excerpt: {
      en: "During European Sports Week, we reminded our students about the importance of physical activity and healthy living.",
      pt: "Na Semana Europeia do Desporto relembrámos aos nossos alunos a importância da atividade física e vida saudável."
    },
    content: {
      en: "During European Sports Week, we organized the 5th Edition of the Eramos Um Duathlon, reminding our students about the importance of physical activity, healthy living, and the joy of sports. This event celebrated fitness, determination, and the spirit of friendly competition.",
      pt: "Durante a Semana Europeia do Desporto, organizámos a 5ª Edição do Duatlo Éramos Um, relembrando aos nossos alunos a importância da atividade física, vida saudável e a alegria do desporto. Este evento celebrou a aptidão física, determinação e o espírito de competição amigável."
    },
    date: "2023-10-06",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
    photos: [
      {
        src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Students participating in the duathlon event",
          pt: "Alunos participando no evento de duatlo"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Young athletes running during the duathlon",
          pt: "Jovens atletas correndo durante o duatlo"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Cycling portion of the duathlon competition",
          pt: "Parte de ciclismo da competição de duatlo"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Students celebrating their achievements",
          pt: "Alunos celebrando suas conquistas"
        },
        width: 1200,
        height: 800
      },
      {
        src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
        alt: {
          en: "Team spirit and sportsmanship during the event",
          pt: "Espírito de equipa e desportivismo durante o evento"
        },
        width: 1200,
        height: 800
      }
    ]
  },
  {
    id: "31",
    title: {
      en: "Autumn Hunt",
      pt: "Caça ao Outono"
    },
    excerpt: {
      en: "Last week we had a fun Autumn Hunt. We discovered many new things!",
      pt: "Na semana passada realizámos uma divertida Caça ao Outono. Descobrimos muitas coisas novas!"
    },
    content: {
      en: "Last week we organized a delightful Autumn Hunt that had our students exploring the beautiful changes of the season. Through this engaging activity, we discovered many new things about nature, seasonal changes, and the wonders that autumn brings to our environment.",
      pt: "Na semana passada organizámos uma deliciosa Caça ao Outono que levou os nossos alunos a explorar as belas mudanças da estação. Através desta atividade envolvente, descobrimos muitas coisas novas sobre a natureza, mudanças sazonais e as maravilhas que o outono traz ao nosso ambiente."
    },
    date: "2023-10-06",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "32",
    title: {
      en: "Family Day",
      pt: "Dia da Família"
    },
    excerpt: {
      en: "Another wonderful Family Day celebration bringing together our school community in joy and togetherness.",
      pt: "Mais uma maravilhosa celebração do Dia da Família reunindo a nossa comunidade escolar em alegria e união."
    },
    content: {
      en: "We celebrated another wonderful Family Day, bringing together our entire school community in a spirit of joy, love, and togetherness. These special moments strengthen the bonds between families, students, and teachers, creating memories that last a lifetime.",
      pt: "Celebrámos mais um maravilhoso Dia da Família, reunindo toda a nossa comunidade escolar num espírito de alegria, amor e união. Estes momentos especiais fortalecem os laços entre famílias, alunos e professores, criando memórias que duram toda a vida."
    },
    date: "2024-05-20",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "33",
    title: {
      en: "World Children's Day",
      pt: "Dia Mundial da Criança"
    },
    excerpt: {
      en: "Friday we celebrated World Children's Day! Among various fun activities that brightened our day, our students enjoyed special moments of joy and celebration.",
      pt: "Sexta-feira celebrámos o Dia Mundial da Criança! Entre várias atividades lúdicas que alegraram o nosso dia, os nossos alunos desfrutaram de momentos especiais de alegria e celebração."
    },
    content: {
      en: "On Friday we celebrated World Children's Day with great enthusiasm! Our school was filled with laughter and joy as students participated in various fun activities designed to celebrate childhood and the rights of children everywhere.",
      pt: "Na sexta-feira celebrámos o Dia Mundial da Criança com grande entusiasmo! A nossa escola encheu-se de risos e alegria enquanto os alunos participaram em várias atividades divertidas concebidas para celebrar a infância e os direitos das crianças em todo o lado."
    },
    date: "2024-06-02",
    image: "https://images.unsplash.com/photo-1560582861-45078880e48e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "34",
    title: {
      en: "Visit to the Post Office!",
      pt: "Visita aos correios!"
    },
    excerpt: {
      en: "An educational visit to learn about postal services and communication.",
      pt: "Uma visita educativa para aprender sobre os serviços postais e comunicação."
    },
    content: {
      en: "Our students had an exciting educational visit to the local post office! This hands-on learning experience taught them about postal services, communication, and the important role that postal workers play in our community.",
      pt: "Os nossos alunos tiveram uma visita educativa emocionante aos correios locais! Esta experiência de aprendizagem prática ensinou-lhes sobre os serviços postais, comunicação e o papel importante que os trabalhadores dos correios desempenham na nossa comunidade."
    },
    date: "2025-02-13",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "35",
    title: {
      en: "We're Going on a Bear Hunt",
      pt: "Vamos à Caça do Urso"
    },
    excerpt: {
      en: "At our school, we believe that learning can be fun and engaging through creative storytelling and interactive activities.",
      pt: "Na nossa escola, acreditamos que a aprendizagem pode ser divertida e envolvente através de narrativas criativas e atividades interativas."
    },
    content: {
      en: "At our school, we believe that learning should be fun and engaging! Through creative storytelling like 'We're Going on a Bear Hunt', we create interactive experiences that capture children's imagination while developing language skills and encouraging active participation.",
      pt: "Na nossa escola, acreditamos que a aprendizagem deve ser divertida e envolvente! Através de narrativas criativas como 'Vamos à Caça do Urso', criamos experiências interativas que capturam a imaginação das crianças enquanto desenvolvem competências linguísticas e encorajam a participação ativa."
    },
    date: "2025-02-13",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  },
  {
    id: "36",
    title: {
      en: "Municipal Mata Piolho Tournament",
      pt: "Torneio Concelhio do Mata Piolho"
    },
    excerpt: {
      en: "Sport goes far beyond competition. It teaches values, builds character, and brings our community together.",
      pt: "O desporto vai muito além da competição. Ensina valores, constrói carácter e une a nossa comunidade."
    },
    content: {
      en: "Our students participated in the Municipal Mata Piolho Tournament, demonstrating that sport goes far beyond competition. Through sports, children learn important values like teamwork, perseverance, fair play, and respect for others while building character and bringing our community together.",
      pt: "Os nossos alunos participaram no Torneio Concelhio do Mata Piolho, demonstrando que o desporto vai muito além da competição. Através do desporto, as crianças aprendem valores importantes como trabalho de equipa, perseverança, fair play e respeito pelos outros, enquanto constroem carácter e unem a nossa comunidade."
    },
    date: "2025-02-13",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
  }
];

// Helper function to get the latest news items (displayed in reverse chronological order)
export const getLatestNews = (count: number = 3): NewsItem[] => {
  return [...newsData].reverse().slice(0, count);
};

// Helper function to get all news in reverse chronological order (latest first)
export const getAllNewsReversed = (): NewsItem[] => {
  return [...newsData].reverse();
}; 