import { ScheduleByDay } from '../../types/schedules';
import { SCHEDULE_COLORS } from './colorPalette';

export const getKindergartenSchedules = (lang: string) => ({
  year3: {
    monday: [
        { time: "09:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 30, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
        { time: "10:00", subject: lang === 'en' ? "Physical Education" : "Ed. Física", duration: 30, color: SCHEDULE_COLORS.PHYSICAL_EDUCATION }
    ],
    tuesday: [
      { time: "00:00", subject: "", duration: 1, color: 'transparent' }
    ],
    wednesday: [
        { time: "09:00", subject: lang === 'en' ? "Music Education" : "Ed. Musical", duration: 30, color: SCHEDULE_COLORS.MUSIC_EDUCATION },
        { time: "10:00", subject: lang === 'en' ? "English" : "Inglês", duration: 30, color: SCHEDULE_COLORS.ENGLISH }
    ],
    thursday: [
        { time: "00:00", subject: "", duration: 1, color: 'transparent' }
    ],
    friday: [
        { time: "00:00", subject: "", duration: 1, color: 'transparent' }
    ]
  },
  year4: {
    monday: [
      { time: "08:30", subject: lang === 'en' ? "Learning Centers" : "Centros de Aprendizagem", duration: 60, color: SCHEDULE_COLORS.LEARNING_CENTERS }
    ],
    tuesday: [
      { time: "08:30", subject: lang === 'en' ? "Sensory Play" : "Jogo Sensorial", duration: 60, color: SCHEDULE_COLORS.SENSORY_PLAY }
    ],
    wednesday: [
      { time: "08:30", subject: lang === 'en' ? "Outdoor Play" : "Brincadeira ao Ar Livre", duration: 60, color: SCHEDULE_COLORS.OUTDOOR_PLAY }
    ],
    thursday: [
      { time: "08:30", subject: lang === 'en' ? "Circle Time" : "Tempo de Circulo", duration: 60, color: SCHEDULE_COLORS.CIRCLE_TIME }
    ],
    friday: [
      { time: "08:30", subject: lang === 'en' ? "Arts & Crafts" : "Artes e Oficios", duration: 60, color: SCHEDULE_COLORS.ARTS_CRAFTS }
    ]
  },
  year5: {
    monday: [
      { time: "08:30", subject: lang === 'en' ? "Music & Movement" : "Musica e Movimento", duration: 60, color: SCHEDULE_COLORS.MUSIC_EDUCATION }
    ],
    tuesday: [
      { time: "08:30", subject: lang === 'en' ? "Free Play" : "Brincadeira Livre", duration: 60, color: SCHEDULE_COLORS.FREE_PLAY }
    ],
    wednesday: [
      { time: "08:30", subject: lang === 'en' ? "Story Time" : "Hora do Conto", duration: 60, color: SCHEDULE_COLORS.STORY_TIME }
    ],
    thursday: [
      { time: "08:30", subject: lang === 'en' ? "Quiet Activities" : "Atividades Calmas", duration: 60, color: SCHEDULE_COLORS.QUIET_ACTIVITIES }
    ],
    friday: [
      { time: "08:30", subject: lang === 'en' ? "Learning Centers" : "Centros de Aprendizagem", duration: 60, color: SCHEDULE_COLORS.LEARNING_CENTERS }
    ]
  }
}); 