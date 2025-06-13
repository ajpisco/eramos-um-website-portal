import { ScheduleRow } from '../../types/schedules';

export const getElementarySchedules = (lang: string): Record<string, ScheduleRow[]> => ({
  grade1: [
    { time: "8:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Physical Education' : 'Ed. Física', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: lang === 'en' ? 'Mathematics' : 'Matemática', friday: lang === 'en' ? 'Portuguese' : 'Português' },
    { time: "9:30", monday: lang === 'en' ? 'Mathematics' : 'Matemática', tuesday: '', wednesday: '', thursday: '', friday: '' },
    { time: "10:30", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "11:00", monday: lang === 'en' ? 'Mathematics' : 'Matemática', tuesday: lang === 'en' ? 'Mathematics' : 'Matemática', wednesday: lang === 'en' ? 'Mathematics' : 'Matemática', thursday: lang === 'en' ? 'Physical Education' : 'Ed. Física', friday: lang === 'en' ? 'Discovery Time' : 'Vou descobrir…' },
    { time: "12:00", monday: lang === 'en' ? 'World Knowledge' : 'Conhecimento do Mundo', tuesday: lang === 'en' ? 'Technology Education (OE)' : 'Ed. Tec. (OE)', wednesday: lang === 'en' ? 'Dramatic Expression' : 'Expressão Dramática', thursday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', friday: '' },
    { time: "13:00", monday: lang === 'en' ? 'Lunch' : 'Almoço', tuesday: lang === 'en' ? 'Lunch' : 'Almoço', wednesday: lang === 'en' ? 'Lunch' : 'Almoço', thursday: lang === 'en' ? 'Lunch' : 'Almoço', friday: lang === 'en' ? 'Lunch' : 'Almoço' },
    { time: "14:00", monday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', tuesday: lang === 'en' ? 'English/AE' : 'Inglês/AE', wednesday: '', thursday: lang === 'en' ? 'Music Education' : 'Ed. Musical', friday: '' },
    { time: "15:00", monday: '', tuesday: lang === 'en' ? 'Music Education' : 'Ed. Musical', wednesday: '', thursday: lang === 'en' ? 'English/AE' : 'Inglês/AE', friday: '' },
    { time: "16:00", monday: lang === 'en' ? 'Snack' : 'Lanche', tuesday: lang === 'en' ? 'Snack' : 'Lanche', wednesday: lang === 'en' ? 'Snack' : 'Lanche', thursday: lang === 'en' ? 'Snack' : 'Lanche', friday: lang === 'en' ? 'Snack' : 'Lanche' }
  ],
  grade2: [
    { time: "8:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Mathematics' : 'Matemática', wednesday: lang === 'en' ? 'Physical Education' : 'Ed. Física', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Mathematics' : 'Matemática' },
    { time: "9:30", monday: lang === 'en' ? 'Mathematics' : 'Matemática', tuesday: '', wednesday: '', thursday: '', friday: '' },
    { time: "10:30", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "11:00", monday: lang === 'en' ? 'Physical Education' : 'Ed. Física', tuesday: lang === 'en' ? 'Technology Education (OE)' : 'Edu. Tec. (OE)', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: lang === 'en' ? 'Mathematics' : 'Matemática', friday: lang === 'en' ? 'Discovery Time' : 'Vou descobrir…' },
    { time: "12:00", monday: lang === 'en' ? 'World Knowledge' : 'Conhecimento do Mundo', tuesday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', wednesday: lang === 'en' ? 'Dramatic Expression' : 'Expressão Dramática', thursday: '', friday: '' },
    { time: "13:00", monday: lang === 'en' ? 'Lunch' : 'Almoço', tuesday: lang === 'en' ? 'Lunch' : 'Almoço', wednesday: lang === 'en' ? 'Lunch' : 'Almoço', thursday: lang === 'en' ? 'Lunch' : 'Almoço', friday: lang === 'en' ? 'Lunch' : 'Almoço' },
    { time: "14:00", monday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', tuesday: lang === 'en' ? 'Music Education' : 'Ed. Musical', wednesday: '', thursday: lang === 'en' ? 'English/AE' : 'Inglês/AE', friday: '' },
    { time: "15:00", monday: '', tuesday: lang === 'en' ? 'English/AE' : 'Inglês/AE', wednesday: '', thursday: lang === 'en' ? 'Music Education' : 'Ed. Musical', friday: '' },
    { time: "16:00", monday: lang === 'en' ? 'Snack' : 'Lanche', tuesday: lang === 'en' ? 'Snack' : 'Lanche', wednesday: lang === 'en' ? 'Snack' : 'Lanche', thursday: lang === 'en' ? 'Snack' : 'Lanche', friday: lang === 'en' ? 'Snack' : 'Lanche' }
  ],
  grade3: [
    { time: "8:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Technology Education (OE)/AE' : 'Ed.Tec.(OE)/AE', wednesday: lang === 'en' ? 'Mathematics' : 'Matemática', thursday: lang === 'en' ? 'Physical Education' : 'Ed. Física', friday: lang === 'en' ? 'Mathematics' : 'Matemática' },
    { time: "9:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Mathematics' : 'Matemática', wednesday: '', thursday: '', friday: '' },
    { time: "10:30", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "11:00", monday: lang === 'en' ? 'Mathematics' : 'Matemática', tuesday: lang === 'en' ? 'Physical Education' : 'Ed. Física', wednesday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Discovery Time' : 'Vou descobrir…' },
    { time: "12:00", monday: lang === 'en' ? 'World Knowledge' : 'Conhecimento do Mundo', tuesday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: '', friday: '' },
    { time: "13:00", monday: lang === 'en' ? 'Lunch' : 'Almoço', tuesday: lang === 'en' ? 'Lunch' : 'Almoço', wednesday: lang === 'en' ? 'Lunch' : 'Almoço', thursday: lang === 'en' ? 'Lunch' : 'Almoço', friday: lang === 'en' ? 'Lunch' : 'Almoço' },
    { time: "14:00", monday: lang === 'en' ? 'English' : 'Inglês', tuesday: lang === 'en' ? 'Dramatic Expression' : 'Exp. Dramática', wednesday: lang === 'en' ? 'Music Education' : 'Ed. Musical', thursday: '', friday: '' },
    { time: "15:00", monday: lang === 'en' ? 'Music Education' : 'Ed. Musical', tuesday: '', wednesday: lang === 'en' ? 'English' : 'Inglês', thursday: '', friday: '' },
    { time: "16:00", monday: lang === 'en' ? 'Snack' : 'Lanche', tuesday: lang === 'en' ? 'Snack' : 'Lanche', wednesday: lang === 'en' ? 'Snack' : 'Lanche', thursday: lang === 'en' ? 'Snack' : 'Lanche', friday: lang === 'en' ? 'Snack' : 'Lanche' }
  ],
  grade4: [
    { time: "8:30", monday: lang === 'en' ? 'Physical Education' : 'Ed. Física', tuesday: lang === 'en' ? 'Portuguese' : 'Português', wednesday: lang === 'en' ? 'Mathematics' : 'Matemática', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Mathematics' : 'Matemática' },
    { time: "9:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Technology Education (OE)/AE' : 'Ed.Tec.(OE)/AE', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: '', friday: '' },
    { time: "10:30", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "11:00", monday: lang === 'en' ? 'Mathematics' : 'Matemática', tuesday: lang === 'en' ? 'Mathematics' : 'Matemática', wednesday: lang === 'en' ? 'Physical Education' : 'Ed. Física', thursday: lang === 'en' ? 'Mathematics' : 'Matemática', friday: lang === 'en' ? 'Discovery Time' : 'Vou descobrir…' },
    { time: "12:00", monday: lang === 'en' ? 'World Knowledge' : 'Conhecimento do Mundo', tuesday: lang === 'en' ? 'Dramatic Expression' : 'Expressão Dramática', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', friday: '' },
    { time: "13:00", monday: lang === 'en' ? 'Lunch' : 'Almoço', tuesday: lang === 'en' ? 'Lunch' : 'Almoço', wednesday: lang === 'en' ? 'Lunch' : 'Almoço', thursday: lang === 'en' ? 'Lunch' : 'Almoço', friday: lang === 'en' ? 'Lunch' : 'Almoço' },
    { time: "14:00", monday: lang === 'en' ? 'Music Education' : 'Ed. Musical', tuesday: lang === 'en' ? 'Environmental Studies' : 'Estudo do Meio', wednesday: lang === 'en' ? 'English' : 'Inglês', thursday: '', friday: '' },
    { time: "15:00", monday: lang === 'en' ? 'English' : 'Inglês', tuesday: '', wednesday: lang === 'en' ? 'Music Education' : 'Ed. Musical', thursday: '', friday: '' },
    { time: "16:00", monday: lang === 'en' ? 'Snack' : 'Lanche', tuesday: lang === 'en' ? 'Snack' : 'Lanche', wednesday: lang === 'en' ? 'Snack' : 'Lanche', thursday: lang === 'en' ? 'Snack' : 'Lanche', friday: lang === 'en' ? 'Snack' : 'Lanche' }
  ]
});

// Teacher information for each grade
export const getElementaryTeachers = (lang: string): Record<string, string> => ({
  grade1: lang === 'en' ? 'Teacher: Prof. Raquel Coimbra' : 'Docente: Prof. Raquel Coimbra',
  grade2: lang === 'en' ? 'Teacher: Prof. Alexandrina Ildefonso' : 'Docente: Prof. Alexandrina Ildefonso',
  grade3: lang === 'en' ? 'Teacher: Prof. Ana Rita' : 'Docente: Prof. Ana Rita',
  grade4: lang === 'en' ? 'Teacher: Prof. Carla Moreira' : 'Docente: Prof. Carla Moreira'
}); 