import { ScheduleRow } from '../../types/schedules';

export const getElementarySchedules = (lang: string): Record<string, ScheduleRow[]> => ({
  grade1: [
    { time: "08:00 - 08:45", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Math' : 'Matemática', wednesday: lang === 'en' ? 'Science' : 'Ciências', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Math' : 'Matemática' },
    { time: "08:45 - 09:30", monday: lang === 'en' ? 'Math' : 'Matemática', tuesday: lang === 'en' ? 'Portuguese' : 'Português', wednesday: lang === 'en' ? 'Arts' : 'Artes', thursday: lang === 'en' ? 'Math' : 'Matemática', friday: lang === 'en' ? 'Portuguese' : 'Português' },
    { time: "09:30 - 09:45", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "09:45 - 10:30", monday: lang === 'en' ? 'P.E.' : 'Ed. Física', tuesday: lang === 'en' ? 'Science' : 'Ciências', wednesday: lang === 'en' ? 'English' : 'Inglês', thursday: lang === 'en' ? 'Science' : 'Ciências', friday: lang === 'en' ? 'Music' : 'Música' },
    { time: "10:30 - 11:15", monday: lang === 'en' ? 'English' : 'Inglês', tuesday: lang === 'en' ? 'Arts' : 'Artes', wednesday: lang === 'en' ? 'P.E.' : 'Ed. Física', thursday: lang === 'en' ? 'English' : 'Inglês', friday: lang === 'en' ? 'Science' : 'Ciências' }
  ],
  grade2: [
    { time: "08:00 - 08:45", monday: lang === 'en' ? 'Math' : 'Matemática', tuesday: lang === 'en' ? 'Portuguese' : 'Português', wednesday: lang === 'en' ? 'English' : 'Inglês', thursday: lang === 'en' ? 'Math' : 'Matemática', friday: lang === 'en' ? 'Portuguese' : 'Português' },
    { time: "08:45 - 09:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Math' : 'Matemática', wednesday: lang === 'en' ? 'Science' : 'Ciências', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Math' : 'Matemática' },
    { time: "09:30 - 09:45", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "09:45 - 10:30", monday: lang === 'en' ? 'Science' : 'Ciências', tuesday: lang === 'en' ? 'English' : 'Inglês', wednesday: lang === 'en' ? 'P.E.' : 'Ed. Física', thursday: lang === 'en' ? 'Arts' : 'Artes', friday: lang === 'en' ? 'English' : 'Inglês' },
    { time: "10:30 - 11:15", monday: lang === 'en' ? 'Arts' : 'Artes', tuesday: lang === 'en' ? 'P.E.' : 'Ed. Física', wednesday: lang === 'en' ? 'Music' : 'Música', thursday: lang === 'en' ? 'Science' : 'Ciências', friday: lang === 'en' ? 'P.E.' : 'Ed. Física' }
  ],
  grade3: [
    { time: "08:00 - 08:45", monday: lang === 'en' ? 'Science' : 'Ciências', tuesday: lang === 'en' ? 'English' : 'Inglês', wednesday: lang === 'en' ? 'Math' : 'Matemática', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Science' : 'Ciências' },
    { time: "08:45 - 09:30", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Math' : 'Matemática', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: lang === 'en' ? 'Math' : 'Matemática', friday: lang === 'en' ? 'English' : 'Inglês' },
    { time: "09:30 - 09:45", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "09:45 - 10:30", monday: lang === 'en' ? 'Math' : 'Matemática', tuesday: lang === 'en' ? 'Portuguese' : 'Português', wednesday: lang === 'en' ? 'English' : 'Inglês', thursday: lang === 'en' ? 'Science' : 'Ciências', friday: lang === 'en' ? 'Portuguese' : 'Português' },
    { time: "10:30 - 11:15", monday: lang === 'en' ? 'P.E.' : 'Ed. Física', tuesday: lang === 'en' ? 'Music' : 'Música', wednesday: lang === 'en' ? 'Arts' : 'Artes', thursday: lang === 'en' ? 'P.E.' : 'Ed. Física', friday: lang === 'en' ? 'Arts' : 'Artes' }
  ],
  grade4: [
    { time: "08:00 - 08:45", monday: lang === 'en' ? 'English' : 'Inglês', tuesday: lang === 'en' ? 'Science' : 'Ciências', wednesday: lang === 'en' ? 'Portuguese' : 'Português', thursday: lang === 'en' ? 'Math' : 'Matemática', friday: lang === 'en' ? 'English' : 'Inglês' },
    { time: "08:45 - 09:30", monday: lang === 'en' ? 'Math' : 'Matemática', tuesday: lang === 'en' ? 'Portuguese' : 'Português', wednesday: lang === 'en' ? 'Math' : 'Matemática', thursday: lang === 'en' ? 'Portuguese' : 'Português', friday: lang === 'en' ? 'Science' : 'Ciências' },
    { time: "09:30 - 09:45", monday: lang === 'en' ? 'Break' : 'Intervalo', tuesday: lang === 'en' ? 'Break' : 'Intervalo', wednesday: lang === 'en' ? 'Break' : 'Intervalo', thursday: lang === 'en' ? 'Break' : 'Intervalo', friday: lang === 'en' ? 'Break' : 'Intervalo' },
    { time: "09:45 - 10:30", monday: lang === 'en' ? 'Arts' : 'Artes', tuesday: lang === 'en' ? 'P.E.' : 'Ed. Física', wednesday: lang === 'en' ? 'Science' : 'Ciências', thursday: lang === 'en' ? 'English' : 'Inglês', friday: lang === 'en' ? 'Math' : 'Matemática' },
    { time: "10:30 - 11:15", monday: lang === 'en' ? 'Portuguese' : 'Português', tuesday: lang === 'en' ? 'Arts' : 'Artes', wednesday: lang === 'en' ? 'Music' : 'Música', thursday: lang === 'en' ? 'P.E.' : 'Ed. Física', friday: lang === 'en' ? 'Geography' : 'Geografia' }
  ]
}); 