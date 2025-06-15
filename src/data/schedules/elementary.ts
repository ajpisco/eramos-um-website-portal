import { ScheduleRow, ScheduleByDay } from '../../types/schedules';
import { SCHEDULE_COLORS } from './colorPalette';

export const getElementarySchedules = (lang: string): Record<string, ScheduleByDay> => ({
  grade1: {
    monday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "World Knowledge" : "Conhecimento do Mundo", duration: 60, color: SCHEDULE_COLORS.WORLD_KNOWLEDGE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    tuesday: [
      { time: "8:30", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "9:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "Technology Education (OE)" : "Ed. Tec. (OE)", duration: 60, color: SCHEDULE_COLORS.TECHNOLOGY_EDUCATION },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "English/AE" : "Inglês/AE", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "15:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    wednesday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "Dramatic Expression" : "Expressão Dramática", duration: 60, color: SCHEDULE_COLORS.DRAMATIC_EXPRESSION },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    thursday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 120, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "12:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "15:00", subject: lang === 'en' ? "English/AE" : "Inglês/AE", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    friday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Discovery Time" : "Vou descobrir…", duration: 120, color: SCHEDULE_COLORS.DISCOVERY_TIME },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ]
  },
  grade2: {
    monday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "12:00", subject: lang === 'en' ? "World Knowledge" : "Conhecimento do Mundo", duration: 60, color: SCHEDULE_COLORS.WORLD_KNOWLEDGE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    tuesday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 120, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Technology Education (OE)" : "Ed. Tec. (OE)", duration: 60, color: SCHEDULE_COLORS.TECHNOLOGY_EDUCATION },
      { time: "12:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "15:00", subject: lang === 'en' ? "English/AE" : "Inglês/AE", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    wednesday: [
      { time: "8:30", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "12:00", subject: lang === 'en' ? "Dramatic Expression" : "Expressão Dramática", duration: 60, color: SCHEDULE_COLORS.DRAMATIC_EXPRESSION },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    thursday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "English/AE" : "Inglês/AE", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "15:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    friday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 120, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Discovery Time" : "Vou descobrir…", duration: 120, color: SCHEDULE_COLORS.DISCOVERY_TIME },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ]
  },
  grade3: {
    monday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "World Knowledge" : "Conhecimento do Mundo", duration: 60, color: SCHEDULE_COLORS.WORLD_KNOWLEDGE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "English" : "Inglês", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "15:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    tuesday: [
      { time: "8:30", subject: lang === 'en' ? "Technology Education (OE)/AE" : "Ed.Tec.(OE)/AE", duration: 60, color: SCHEDULE_COLORS.TECHNOLOGY_EDUCATION },
      { time: "9:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "12:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Dramatic Expression" : "Exp. Dramática", duration: 60, color: SCHEDULE_COLORS.DRAMATIC_EXPRESSION },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    wednesday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "12:00", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "15:00", subject: lang === 'en' ? "English" : "Inglês", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    thursday: [
      { time: "8:30", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    friday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 120, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Discovery Time" : "Vou descobrir…", duration: 120, color: SCHEDULE_COLORS.DISCOVERY_TIME },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ]
  },
  grade4: {
    monday: [
      { time: "8:30", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "9:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "World Knowledge" : "Conhecimento do Mundo", duration: 60, color: SCHEDULE_COLORS.WORLD_KNOWLEDGE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "15:00", subject: lang === 'en' ? "English" : "Inglês", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    tuesday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "9:30", subject: lang === 'en' ? "Technology Education (OE)/AE" : "Ed.Tec.(OE)/AE", duration: 60, color: SCHEDULE_COLORS.TECHNOLOGY_EDUCATION },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "Dramatic Expression" : "Expressão Dramática", duration: 60, color: SCHEDULE_COLORS.DRAMATIC_EXPRESSION },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    wednesday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "9:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 60, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION },
      { time: "12:00", subject: lang === 'en' ? "Portuguese" : "Português", duration: 60, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "14:00", subject: lang === 'en' ? "English" : "Inglês", duration: 60, color: SCHEDULE_COLORS.ENGLISH },
      { time: "15:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    thursday: [
      { time: "8:30", subject: lang === 'en' ? "Portuguese" : "Português", duration: 120, color: SCHEDULE_COLORS.PORTUGUESE },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 60, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "12:00", subject: lang === 'en' ? "Environmental Studies" : "Estudo do Meio", duration: 60, color: SCHEDULE_COLORS.SCIENCE },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ],
    friday: [
      { time: "8:30", subject: lang === 'en' ? "Mathematics" : "Matemática", duration: 120, color: SCHEDULE_COLORS.MATHEMATICS },
      { time: "10:30", subject: lang === 'en' ? "Break" : "Intervalo", duration: 30, color: SCHEDULE_COLORS.DEFAULT },
      { time: "11:00", subject: lang === 'en' ? "Discovery Time" : "Vou descobrir…", duration: 120, color: SCHEDULE_COLORS.DISCOVERY_TIME },
      { time: "13:00", subject: lang === 'en' ? "Lunch" : "Almoço", duration: 60, color: SCHEDULE_COLORS.DEFAULT },
      { time: "16:00", subject: lang === 'en' ? "Snack" : "Lanche", duration: 30, color: SCHEDULE_COLORS.SNACK_TIME }
    ]
  }
});

// Teacher information for each grade
export const getElementaryTeachers = (lang: string): Record<string, string> => ({
  grade1: lang === 'en' ? 'Teacher: Prof. Raquel Coimbra' : 'Docente: Prof. Raquel Coimbra',
  grade2: lang === 'en' ? 'Teacher: Prof. Alexandrina Ildefonso' : 'Docente: Prof. Alexandrina Ildefonso',
  grade3: lang === 'en' ? 'Teacher: Prof. Ana Rita' : 'Docente: Prof. Ana Rita',
  grade4: lang === 'en' ? 'Teacher: Prof. Carla Moreira' : 'Docente: Prof. Carla Moreira'
}); 