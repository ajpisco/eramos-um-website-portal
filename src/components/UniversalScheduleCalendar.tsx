import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ScheduleCalendar.css';
import { useLanguage } from '@/context/LanguageContext';
import { ScheduleByDay } from '@/types/schedules';

const localizer = momentLocalizer(moment);

interface ScheduleEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: {
    subject: string;
    room: string;
    type: 'activity' | 'break' | 'lunch' | 'snack' | 'nap' | 'class';
    color?: string;
  };
}

interface UniversalScheduleCalendarProps {
  scheduleData: ScheduleByDay;
  roomName: string;
  scheduleType: 'daycare' | 'kindergarten' | 'elementary';
}

const UniversalScheduleCalendar: React.FC<UniversalScheduleCalendarProps> = ({ 
  scheduleData, 
  roomName, 
  scheduleType 
}) => {
  const { language } = useLanguage();
  
  useEffect(() => {
    const newLocale = language === 'pt' ? 'pt' : 'en';
    if (moment.locale() !== newLocale) {
      moment.locale(newLocale);
    }
  }, [language]);

  const events: ScheduleEvent[] = useMemo(() => {
    if (!scheduleData) return [];
    
    const events: ScheduleEvent[] = [];
    const baseDate = moment().startOf('week').add(1, 'day');
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    days.forEach((day, dayIndex) => {
      const rows = scheduleData[day as keyof ScheduleByDay] || [];
      const eventDate = baseDate.clone().add(dayIndex, 'days');
      
      // If no activities for this day, create an invisible placeholder to ensure the column shows
      if (rows.length === 0) {
        events.push({
          id: `${roomName}-${day}-placeholder`,
          title: '',
          start: eventDate.clone().hour(8).minute(30).toDate(),
          end: eventDate.clone().hour(8).minute(30).add(1, 'minute').toDate(),
          resource: {
            subject: '',
            room: roomName,
            type: 'activity',
            color: 'transparent'
          }
        });
      } else {
        rows.forEach((row) => {
          const timeStr = row.time;
          let timeHour = 8;
          let timeMinute = 30;
          let duration = row.duration ?? 60;

          if (timeStr.includes('-')) {
            const [startTime, endTime] = timeStr.split('-');
            const [startHour, startMinute] = startTime.split(':').map(Number);
            const [endHour, endMinute] = endTime.split(':').map(Number);
            
            timeHour = startHour;
            timeMinute = startMinute;
            
            const startMoment = moment().hour(startHour).minute(startMinute);
            const endMoment = moment().hour(endHour).minute(endMinute);
            duration = endMoment.diff(startMoment, 'minutes');
          } else if (timeStr.includes(':')) {
            const [hourStr, minuteStr] = timeStr.split(':');
            timeHour = parseInt(hourStr);
            timeMinute = parseInt(minuteStr || '0');
          }

          const subject = row.subject;
          // Create event even for empty subjects to maintain day structure
          const startDateTime = eventDate.clone().hour(timeHour).minute(timeMinute);
          const endDateTime = startDateTime.clone().add(duration, 'minutes');
          
          let eventType: 'activity' | 'break' | 'lunch' | 'snack' | 'nap' | 'class' = 'activity';
          
          if (subject && subject.trim() !== '') {
            const subjectLower = subject.toLowerCase();
            
            if (subjectLower.includes('intervalo') || subjectLower.includes('break')) {
              eventType = 'break';
            } else if (subjectLower.includes('almoco') || subjectLower.includes('lunch')) {
              eventType = 'lunch';
            } else if (subjectLower.includes('lanche') || subjectLower.includes('snack')) {
              eventType = 'snack';
            } else if (subjectLower.includes('soneca') || subjectLower.includes('nap')) {
              eventType = 'nap';
            } else if (scheduleType === 'elementary') {
              eventType = 'class';
            } else {
              eventType = 'activity';
            }
          }
          
          events.push({
            id: `${roomName}-${day}-${timeStr}`,
            title: subject || '',
            start: startDateTime.toDate(),
            end: endDateTime.toDate(),
            resource: {
              subject: subject || '',
              room: roomName,
              type: eventType,
              color: subject && subject.trim() !== '' ? row.color : 'transparent'
            }
          });
        });
      }
    });
    
    return events;
  }, [scheduleData, roomName, scheduleType]);
  
  const eventStyleGetter = (event: ScheduleEvent) => {
    // Handle transparent/empty events
    if (event.resource.color === 'transparent' || !event.resource.subject) {
      return {
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          color: 'transparent',
          border: 'none',
          fontSize: '1px',
          padding: '0px',
          pointerEvents: 'none'
        }
      };
    }
    
    let backgroundColor = event.resource.color || '#6b7280';
    let borderColor = event.resource.color || '#6b7280';
    
    if (!event.resource.color) {
      switch (event.resource.type) {
        case 'break':
          backgroundColor = '#10b981';
          borderColor = '#10b981';
          break;
        case 'lunch':
          backgroundColor = '#f59e0b';
          borderColor = '#f59e0b';
          break;
        case 'snack':
          backgroundColor = '#8b5cf6';
          borderColor = '#8b5cf6';
          break;
        case 'nap':
          backgroundColor = '#6366f1';
          borderColor = '#6366f1';
          break;
        case 'class':
          if (event.resource.subject.toLowerCase().includes('portugues') || 
              event.resource.subject.toLowerCase().includes('portuguese')) {
            backgroundColor = '#ef4444';
            borderColor = '#ef4444';
          } else if (event.resource.subject.toLowerCase().includes('matematica') || 
                     event.resource.subject.toLowerCase().includes('math')) {
            backgroundColor = '#3b82f6';
            borderColor = '#3b82f6';
          } else if (event.resource.subject.toLowerCase().includes('ingles') || 
                     event.resource.subject.toLowerCase().includes('english')) {
            backgroundColor = '#06b6d4';
            borderColor = '#06b6d4';
          } else if (event.resource.subject.toLowerCase().includes('fisica') || 
                     event.resource.subject.toLowerCase().includes('physical')) {
            backgroundColor = '#eab308';
            borderColor = '#eab308';
          } else {
            backgroundColor = '#64748b';
            borderColor = '#64748b';
          }
          break;
        case 'activity':
          if (event.resource.subject.toLowerCase().includes('music') || 
              event.resource.subject.toLowerCase().includes('musica')) {
            backgroundColor = '#ec4899';
            borderColor = '#ec4899';
          } else if (event.resource.subject.toLowerCase().includes('arts') || 
                     event.resource.subject.toLowerCase().includes('artes')) {
            backgroundColor = '#f97316';
            borderColor = '#f97316';
          } else if (event.resource.subject.toLowerCase().includes('outdoor') || 
                     event.resource.subject.toLowerCase().includes('ar livre')) {
            backgroundColor = '#22c55e';
            borderColor = '#22c55e';
          } else if (event.resource.subject.toLowerCase().includes('story') || 
                     event.resource.subject.toLowerCase().includes('conto')) {
            backgroundColor = '#a855f7';
            borderColor = '#a855f7';
          } else if (event.resource.subject.toLowerCase().includes('circle') || 
                     event.resource.subject.toLowerCase().includes('circulo')) {
            backgroundColor = '#06b6d4';
            borderColor = '#06b6d4';
          } else if (event.resource.subject.toLowerCase().includes('sensory') || 
                     event.resource.subject.toLowerCase().includes('sensorial')) {
            backgroundColor = '#84cc16';
            borderColor = '#84cc16';
          } else {
            backgroundColor = '#64748b';
            borderColor = '#64748b';
          }
          break;
      }
    }
    
    return {
      style: {
        backgroundColor,
        borderColor,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '11px',
        fontWeight: '500',
        padding: '2px 4px',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
      }
    };
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {roomName}
            </h3>
            <p className="text-sm text-gray-600">
              {language === 'en' ? 'Weekly Schedule' : 'Horario Semanal'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-96 sm:h-[500px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView={Views.WEEK}
          views={[Views.WEEK]}
          step={30}
          timeslots={2}
          min={new Date(2024, 0, 1, 8, 0)}
          max={new Date(2199, 0, 1, 17, 0)}
          eventPropGetter={eventStyleGetter}
          showMultiDayTimes={false}
          allDayAccessor={() => false}
          popup={true}
          popupOffset={30}
          dayLayoutAlgorithm="no-overlap"
          components={{
            toolbar: () => null,
            allDaySlot: () => null
          }}
          formats={{
            timeGutterFormat: 'HH:mm',
            eventTimeRangeFormat: ({ start, end }) => 
              `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`,
            dayHeaderFormat: (date) => 
              moment(date).format(language === 'en' ? 'dddd' : 'dddd'),
          }}
          messages={{
            week: language === 'en' ? 'Week' : 'Semana',
            today: language === 'en' ? 'Today' : 'Hoje',
            previous: language === 'en' ? 'Previous' : 'Anterior',
            next: language === 'en' ? 'Next' : 'Proximo',
            showMore: (total) => language === 'en' ? `+${total} more` : `+${total} mais`,
            noEventsInRange: language === 'en' ? 'No activities scheduled' : 'Nenhuma atividade agendada'
          }}
          className="rounded-lg border border-gray-200"
        />
      </div>
    </div>
  );
};

export default UniversalScheduleCalendar; 