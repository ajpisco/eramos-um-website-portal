import React, { useState, useMemo, useEffect } from 'react';
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/pt';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ScheduleCalendar.css';
import { useLanguage } from '@/context/LanguageContext';
import { getElementarySchedules, getElementaryTeachers } from '@/data/schedules/elementary';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

interface ScheduleEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  resource: {
    subject: string;
    grade: string;
    teacher: string;
    type: 'class' | 'break' | 'lunch' | 'snack';
  };
}

interface ScheduleCalendarProps {
  selectedGrade?: string;
}

const ScheduleCalendar: React.FC<ScheduleCalendarProps> = ({ selectedGrade = 'grade1' }) => {
  const { language, t } = useLanguage();
  const [view, setView] = useState<View>(Views.WEEK);
  const [currentGrade, setCurrentGrade] = useState(selectedGrade);
  
  // Set moment locale based on language
  useEffect(() => {
    moment.locale(language === 'pt' ? 'pt' : 'en');
  }, [language]);
  
  // Get schedule data
  const schedules = getElementarySchedules(language);
  const teachers = getElementaryTeachers(language);
  
  // Convert schedule data to calendar events
  const events: ScheduleEvent[] = useMemo(() => {
    const schedule = schedules[currentGrade];
    if (!schedule) return [];
    
    const events: ScheduleEvent[] = [];
    const baseDate = moment().startOf('week').add(1, 'day'); // Start from Monday
    
    schedule.forEach((row) => {
      const timeStr = row.time;
      let timeHour = 8;
      let timeMinute = 0;
      
      // Parse time string - format is "HH:MM"
      if (timeStr.includes(':')) {
        const [hourStr, minuteStr] = timeStr.split(':');
        timeHour = parseInt(hourStr);
        timeMinute = parseInt(minuteStr || '0');
      }
      
      // Calculate end time (assuming 1-hour slots, except for breaks)
      let duration = 60; // minutes
      
      // Create events for each day of the week
      const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
      days.forEach((day, dayIndex) => {
        const subject = row[day as keyof typeof row];
        if (subject && subject.trim() !== '') {
          const eventDate = baseDate.clone().add(dayIndex, 'days');
          const startDateTime = eventDate.clone().hour(timeHour).minute(timeMinute);
          
          // Determine event type and duration based on subject content
          let eventType: 'class' | 'break' | 'lunch' | 'snack' = 'class';
          const subjectLower = subject.toLowerCase();
          if (subjectLower.includes('intervalo') || subjectLower.includes('break')) {
            eventType = 'break';
            duration = 30;
          } else if (subjectLower.includes('almoço') || subjectLower.includes('lunch')) {
            eventType = 'lunch';
            duration = 60;
          } else if (subjectLower.includes('lanche') || subjectLower.includes('snack')) {
            eventType = 'snack';
            duration = 30;
          } else {
            duration = 60; // Regular class duration
          }
          
          const endDateTime = startDateTime.clone().add(duration, 'minutes');
          
          events.push({
            id: `${currentGrade}-${day}-${timeStr}`,
            title: subject,
            start: startDateTime.toDate(),
            end: endDateTime.toDate(),
            resource: {
              subject,
              grade: currentGrade,
              teacher: teachers[currentGrade] || '',
              type: eventType
            }
          });
        }
      });
    });
    
    return events;
  }, [schedules, currentGrade, teachers, language]);
  
  // Custom event style getter
  const eventStyleGetter = (event: ScheduleEvent) => {
    let backgroundColor = '#3174ad';
    let borderColor = '#3174ad';
    
    switch (event.resource.type) {
      case 'break':
        backgroundColor = '#28a745';
        borderColor = '#28a745';
        break;
      case 'lunch':
        backgroundColor = '#fd7e14';
        borderColor = '#fd7e14';
        break;
      case 'snack':
        backgroundColor = '#6f42c1';
        borderColor = '#6f42c1';
        break;
      case 'class':
        // Different colors for different subjects
        if (event.resource.subject.toLowerCase().includes('português') || 
            event.resource.subject.toLowerCase().includes('portuguese')) {
          backgroundColor = '#dc3545';
          borderColor = '#dc3545';
        } else if (event.resource.subject.toLowerCase().includes('matemática') || 
                   event.resource.subject.toLowerCase().includes('math')) {
          backgroundColor = '#007bff';
          borderColor = '#007bff';
        } else if (event.resource.subject.toLowerCase().includes('inglês') || 
                   event.resource.subject.toLowerCase().includes('english')) {
          backgroundColor = '#17a2b8';
          borderColor = '#17a2b8';
        } else if (event.resource.subject.toLowerCase().includes('física') || 
                   event.resource.subject.toLowerCase().includes('physical')) {
          backgroundColor = '#ffc107';
          borderColor = '#ffc107';
        }
        break;
    }
    
    return {
      style: {
        backgroundColor,
        borderColor,
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        fontSize: '12px',
        padding: '2px 4px'
      }
    };
  };
  
  // Custom event component
  const EventComponent = ({ event }: { event: ScheduleEvent }) => (
    <div className="text-xs font-medium">
      {event.title}
    </div>
  );
  
  // Grade selection options
  const gradeOptions = [
    { value: 'grade1', label: language === 'en' ? '1st Grade' : '1º Ano' },
    { value: 'grade2', label: language === 'en' ? '2nd Grade' : '2º Ano' },
    { value: 'grade3', label: language === 'en' ? '3rd Grade' : '3º Ano' },
    { value: 'grade4', label: language === 'en' ? '4th Grade' : '4º Ano' }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Header with grade selection */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {language === 'en' ? 'Class Schedules' : 'Horários das Turmas'}
            </h2>
            <p className="text-gray-600">
              {teachers[currentGrade]}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Grade Selection */}
            <select
              value={currentGrade}
              onChange={(e) => setCurrentGrade(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {gradeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            {/* View Selection */}
            <div className="flex rounded-md shadow-sm">
              <button
                onClick={() => setView(Views.WEEK)}
                className={`px-4 py-2 text-sm font-medium rounded-l-md border ${
                  view === Views.WEEK
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {language === 'en' ? 'Week' : 'Semana'}
              </button>
              <button
                onClick={() => setView(Views.DAY)}
                className={`px-4 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${
                  view === Views.DAY
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {language === 'en' ? 'Day' : 'Dia'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div className="mb-4 flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span>{language === 'en' ? 'Portuguese' : 'Português'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span>{language === 'en' ? 'Mathematics' : 'Matemática'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-cyan-500 rounded"></div>
          <span>{language === 'en' ? 'English' : 'Inglês'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500 rounded"></div>
          <span>{language === 'en' ? 'Physical Education' : 'Ed. Física'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span>{language === 'en' ? 'Break' : 'Intervalo'}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
          <span>{language === 'en' ? 'Lunch' : 'Almoço'}</span>
        </div>
      </div>
      
      {/* Calendar */}
      <div className="h-96 sm:h-[600px]">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          view={view}
          onView={setView}
          views={[Views.WEEK, Views.DAY]}
          step={30}
          timeslots={2}
          min={new Date(2024, 0, 1, 8, 0)} // 8:00 AM
          max={new Date(2024, 0, 1, 17, 0)} // 5:00 PM
          eventPropGetter={eventStyleGetter}
          showMultiDayTimes={false}
          popup={true}
          popupOffset={30}
          dayLayoutAlgorithm="no-overlap"
          components={{
            event: EventComponent,
            toolbar: () => null // Hide default toolbar since we have custom controls
          }}
          formats={{
            timeGutterFormat: 'HH:mm',
            eventTimeRangeFormat: ({ start, end }) => 
              `${moment(start).format('HH:mm')} - ${moment(end).format('HH:mm')}`,
            dayHeaderFormat: (date) => 
              moment(date).format(language === 'en' ? 'dddd, MMM Do' : 'dddd, D [de] MMM'),
            dayRangeHeaderFormat: ({ start, end }) => 
              `${moment(start).format('D MMM')} - ${moment(end).format('D MMM YYYY')}`,
          }}
          messages={{
            week: language === 'en' ? 'Week' : 'Semana',
            day: language === 'en' ? 'Day' : 'Dia',
            today: language === 'en' ? 'Today' : 'Hoje',
            previous: language === 'en' ? 'Previous' : 'Anterior',
            next: language === 'en' ? 'Next' : 'Próximo',
            showMore: (total) => language === 'en' ? `+${total} more` : `+${total} mais`,
            noEventsInRange: language === 'en' ? 'No classes scheduled' : 'Nenhuma aula agendada'
          }}
          className="rounded-lg border border-gray-200"
        />
      </div>
    </div>
  );
};

export default ScheduleCalendar; 