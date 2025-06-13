import React, { useState } from 'react';
import UniversalScheduleCalendar from '@/components/UniversalScheduleCalendar';
import { useLanguage } from '@/context/LanguageContext';
import { ScheduleRow } from '@/types/schedules';

// Dummy schedule data for testing
const dummySchedules = {
  daycare: {
    year1: [
      { time: "08:00-08:30", monday: "Music Time", saturday: "Art & Crafts", sunday: "Story Time" },
      { time: "08:30-09:30", monday: "Music Time", tuesday: "Art & Crafts", wednesday: "Story Time", thursday: "Outdoor Play", friday: "Free Play" },
      { time: "09:30-10:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "10:00-11:00", monday: "Circle Time", tuesday: "Sensory Play", wednesday: "Music Time", thursday: "Art & Crafts", friday: "Story Time" },
      { time: "11:00-12:00", monday: "Outdoor Play", tuesday: "Free Play", wednesday: "Circle Time", thursday: "Sensory Play", friday: "Music Time" },
      { time: "12:00-13:00", monday: "Lunch Time", tuesday: "Lunch Time", wednesday: "Lunch Time", thursday: "Lunch Time", friday: "Lunch Time" },
      { time: "13:00-14:30", monday: "Nap Time", tuesday: "Nap Time", wednesday: "Nap Time", thursday: "Nap Time", friday: "Nap Time" },
      { time: "14:30-15:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "15:00-16:00", monday: "Free Play", tuesday: "Outdoor Play", wednesday: "Art & Crafts", thursday: "Story Time", friday: "Circle Time" }
    ] as ScheduleRow[],
    year2: [
      { time: "08:30-09:30", monday: "Learning Centers", tuesday: "Music Time", wednesday: "Art & Crafts", thursday: "Story Time", friday: "Outdoor Play" },
      { time: "09:30-10:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "10:00-11:00", monday: "Sensory Play", tuesday: "Circle Time", wednesday: "Learning Centers", thursday: "Music Time", friday: "Art & Crafts" },
      { time: "11:00-12:00", monday: "Story Time", tuesday: "Outdoor Play", wednesday: "Sensory Play", thursday: "Circle Time", friday: "Learning Centers" },
      { time: "12:00-13:00", monday: "Lunch Time", tuesday: "Lunch Time", wednesday: "Lunch Time", thursday: "Lunch Time", friday: "Lunch Time" },
      { time: "13:00-14:30", monday: "Nap Time", tuesday: "Nap Time", wednesday: "Nap Time", thursday: "Nap Time", friday: "Nap Time" },
      { time: "14:30-15:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "15:00-16:00", monday: "Music Time", tuesday: "Art & Crafts", wednesday: "Story Time", thursday: "Outdoor Play", friday: "Free Play" }
    ] as ScheduleRow[]
  },
  kindergarten: {
    year3: [
      { time: "08:30-09:30", monday: "Circle Time", tuesday: "Learning Centers", wednesday: "Music Time", thursday: "Art & Crafts", friday: "Story Time" },
      { time: "09:30-10:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "10:00-11:00", monday: "Outdoor Play", tuesday: "Circle Time", wednesday: "Learning Centers", thursday: "Music Time", friday: "Art & Crafts" },
      { time: "11:00-12:00", monday: "Story Time", tuesday: "Outdoor Play", wednesday: "Circle Time", thursday: "Learning Centers", friday: "Music Time" },
      { time: "12:00-13:00", monday: "Lunch Time", tuesday: "Lunch Time", wednesday: "Lunch Time", thursday: "Lunch Time", friday: "Lunch Time" },
      { time: "13:00-14:00", monday: "Quiet Time", tuesday: "Quiet Time", wednesday: "Quiet Time", thursday: "Quiet Time", friday: "Quiet Time" },
      { time: "14:00-14:30", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "14:30-15:30", monday: "Art & Crafts", tuesday: "Story Time", wednesday: "Outdoor Play", thursday: "Circle Time", friday: "Learning Centers" },
      { time: "15:30-16:00", monday: "Free Play", tuesday: "Free Play", wednesday: "Free Play", thursday: "Free Play", friday: "Free Play" }
    ] as ScheduleRow[],
    year4: [
      { time: "08:30-09:30", monday: "Learning Centers", tuesday: "Music Time", wednesday: "Art & Crafts", thursday: "Story Time", friday: "Circle Time" },
      { time: "09:30-10:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "10:00-11:00", monday: "Outdoor Play", tuesday: "Learning Centers", wednesday: "Music Time", thursday: "Art & Crafts", friday: "Story Time" },
      { time: "11:00-12:00", monday: "Circle Time", tuesday: "Outdoor Play", wednesday: "Learning Centers", thursday: "Music Time", friday: "Art & Crafts" },
      { time: "12:00-13:00", monday: "Lunch Time", tuesday: "Lunch Time", wednesday: "Lunch Time", thursday: "Lunch Time", friday: "Lunch Time" },
      { time: "13:00-14:00", monday: "Quiet Time", tuesday: "Quiet Time", wednesday: "Quiet Time", thursday: "Quiet Time", friday: "Quiet Time" },
      { time: "14:00-14:30", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "14:30-15:30", monday: "Story Time", tuesday: "Circle Time", wednesday: "Outdoor Play", thursday: "Learning Centers", friday: "Music Time" },
      { time: "15:30-16:00", monday: "Free Play", tuesday: "Free Play", wednesday: "Free Play", thursday: "Free Play", friday: "Free Play" }
    ] as ScheduleRow[],
    year5: [
      { time: "08:30-09:30", monday: "Music Time", tuesday: "Art & Crafts", wednesday: "Story Time", thursday: "Circle Time", friday: "Learning Centers" },
      { time: "09:30-10:00", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "10:00-11:00", monday: "Outdoor Play", tuesday: "Music Time", wednesday: "Art & Crafts", thursday: "Story Time", friday: "Circle Time" },
      { time: "11:00-12:00", monday: "Learning Centers", tuesday: "Outdoor Play", wednesday: "Music Time", thursday: "Art & Crafts", friday: "Story Time" },
      { time: "12:00-13:00", monday: "Lunch Time", tuesday: "Lunch Time", wednesday: "Lunch Time", thursday: "Lunch Time", friday: "Lunch Time" },
      { time: "13:00-14:00", monday: "Quiet Time", tuesday: "Quiet Time", wednesday: "Quiet Time", thursday: "Quiet Time", friday: "Quiet Time" },
      { time: "14:00-14:30", monday: "Snack Time", tuesday: "Snack Time", wednesday: "Snack Time", thursday: "Snack Time", friday: "Snack Time" },
      { time: "14:30-15:30", monday: "Circle Time", tuesday: "Learning Centers", wednesday: "Outdoor Play", thursday: "Music Time", friday: "Art & Crafts" },
      { time: "15:30-16:00", monday: "Free Play", tuesday: "Free Play", wednesday: "Free Play", thursday: "Free Play", friday: "Free Play" }
    ] as ScheduleRow[]
  },
  elementary: {
    '1st': [
      { time: "08:30", monday: "Portuguese", tuesday: "Mathematics", wednesday: "English", thursday: "Portuguese", friday: "Physical Education" },
      { time: "09:30", monday: "Mathematics", tuesday: "Portuguese", wednesday: "Mathematics", thursday: "English", friday: "Portuguese" },
      { time: "10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "11:00", monday: "English", tuesday: "Physical Education", wednesday: "Portuguese", thursday: "Mathematics", friday: "English" },
      { time: "12:00", monday: "Lunch", tuesday: "Lunch", wednesday: "Lunch", thursday: "Lunch", friday: "Lunch" },
      { time: "13:00", monday: "Physical Education", tuesday: "English", wednesday: "Physical Education", thursday: "Portuguese", friday: "Mathematics" },
      { time: "14:00", monday: "Portuguese", tuesday: "Mathematics", wednesday: "English", thursday: "Physical Education", friday: "Portuguese" },
      { time: "15:00", monday: "Mathematics", tuesday: "Portuguese", wednesday: "Mathematics", thursday: "English", friday: "Mathematics" }
    ] as ScheduleRow[],
    '2nd': [
      { time: "08:30", monday: "Mathematics", tuesday: "English", wednesday: "Portuguese", thursday: "Mathematics", friday: "Portuguese" },
      { time: "09:30", monday: "Portuguese", tuesday: "Mathematics", wednesday: "Physical Education", thursday: "English", friday: "Mathematics" },
      { time: "10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "11:00", monday: "Physical Education", tuesday: "Portuguese", wednesday: "English", thursday: "Portuguese", friday: "Physical Education" },
      { time: "12:00", monday: "Lunch", tuesday: "Lunch", wednesday: "Lunch", thursday: "Lunch", friday: "Lunch" },
      { time: "13:00", monday: "English", tuesday: "Physical Education", wednesday: "Mathematics", thursday: "Physical Education", friday: "English" },
      { time: "14:00", monday: "Mathematics", tuesday: "Portuguese", wednesday: "Portuguese", thursday: "Mathematics", friday: "Portuguese" },
      { time: "15:00", monday: "Portuguese", tuesday: "English", wednesday: "Mathematics", thursday: "Portuguese", friday: "Mathematics" }
    ] as ScheduleRow[],
    '3rd': [
      { time: "08:30", monday: "English", tuesday: "Portuguese", wednesday: "Mathematics", thursday: "Physical Education", friday: "English" },
      { time: "09:30", monday: "Physical Education", tuesday: "Mathematics", wednesday: "English", thursday: "Portuguese", friday: "Mathematics" },
      { time: "10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "11:00", monday: "Portuguese", tuesday: "Physical Education", wednesday: "Portuguese", thursday: "Mathematics", friday: "Portuguese" },
      { time: "12:00", monday: "Lunch", tuesday: "Lunch", wednesday: "Lunch", thursday: "Lunch", friday: "Lunch" },
      { time: "13:00", monday: "Mathematics", tuesday: "English", wednesday: "Physical Education", thursday: "English", friday: "Physical Education" },
      { time: "14:00", monday: "Portuguese", tuesday: "Portuguese", wednesday: "Mathematics", thursday: "Portuguese", friday: "English" },
      { time: "15:00", monday: "English", tuesday: "Mathematics", wednesday: "Portuguese", thursday: "Mathematics", friday: "Portuguese" }
    ] as ScheduleRow[],
    '4th': [
      { time: "08:30", monday: "Portuguese", tuesday: "Physical Education", wednesday: "English", thursday: "Mathematics", friday: "Portuguese" },
      { time: "09:30", monday: "Mathematics", tuesday: "English", wednesday: "Portuguese", thursday: "Physical Education", friday: "English" },
      { time: "10:30", monday: "Break", tuesday: "Break", wednesday: "Break", thursday: "Break", friday: "Break" },
      { time: "11:00", monday: "Physical Education", tuesday: "Mathematics", wednesday: "Physical Education", thursday: "English", friday: "Mathematics" },
      { time: "12:00", monday: "Lunch", tuesday: "Lunch", wednesday: "Lunch", thursday: "Lunch", friday: "Lunch" },
      { time: "13:00", monday: "English", tuesday: "Portuguese", wednesday: "Mathematics", thursday: "Portuguese", friday: "Physical Education" },
      { time: "14:00", monday: "Mathematics", tuesday: "Mathematics", wednesday: "Portuguese", thursday: "English", friday: "Portuguese" },
      { time: "15:00", monday: "Portuguese", tuesday: "Portuguese", wednesday: "English", thursday: "Mathematics", friday: "Mathematics" }
    ] as ScheduleRow[]
  }
};

const TestPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLevel, setSelectedLevel] = useState<'daycare' | 'kindergarten' | 'elementary'>('daycare');
  const [selectedRoom, setSelectedRoom] = useState<string>('year1');

  // Get available rooms/grades for each level
  const getRoomsForLevel = (level: string) => {
    switch (level) {
      case 'daycare':
        return [
          { key: 'year1', name: language === 'en' ? 'Year 1' : 'Ano 1' },
          { key: 'year2', name: language === 'en' ? 'Year 2' : 'Ano 2' }
        ];
      case 'kindergarten':
        return [
          { key: 'year3', name: language === 'en' ? 'Year 3' : 'Ano 3' },
          { key: 'year4', name: language === 'en' ? 'Year 4' : 'Ano 4' },
          { key: 'year5', name: language === 'en' ? 'Year 5' : 'Ano 5' }
        ];
      case 'elementary':
        return [
          { key: '1st', name: language === 'en' ? '1st Grade' : '1º Ano' },
          { key: '2nd', name: language === 'en' ? '2nd Grade' : '2º Ano' },
          { key: '3rd', name: language === 'en' ? '3rd Grade' : '3º Ano' },
          { key: '4th', name: language === 'en' ? '4th Grade' : '4º Ano' }
        ];
      default:
        return [];
    }
  };

  // Get schedule data for selected level and room
  const getScheduleData = () => {
    return dummySchedules[selectedLevel]?.[selectedRoom as keyof typeof dummySchedules[typeof selectedLevel]] || [];
  };

  const handleLevelChange = (level: 'daycare' | 'kindergarten' | 'elementary') => {
    setSelectedLevel(level);
    // Set default room for the new level
    const rooms = getRoomsForLevel(level);
    if (rooms.length > 0) {
      setSelectedRoom(rooms[0].key);
    }
  };

  const currentRooms = getRoomsForLevel(selectedLevel);
  const scheduleData = getScheduleData();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === 'en' ? 'Schedule Calendar Test' : 'Teste do Calendário de Horários'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' 
              ? 'Test the universal schedule calendar with dummy data for different schedule types and rooms.' 
              : 'Teste o calendário universal de horários com dados fictícios para diferentes tipos de horários e salas.'}
          </p>
          <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">
              <strong>{language === 'en' ? 'Note:' : 'Nota:'}</strong> {language === 'en' 
                ? 'This test uses dummy data, not real school schedules.' 
                : 'Este teste usa dados fictícios, não horários escolares reais.'}
            </p>
          </div>
        </div>

        {/* Level Selection Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => handleLevelChange('daycare')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedLevel === 'daycare'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {language === 'en' ? 'Daycare' : 'Creche'}
              </button>
              <button
                onClick={() => handleLevelChange('kindergarten')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedLevel === 'kindergarten'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {language === 'en' ? 'Kindergarten' : 'Jardim de Infância'}
              </button>
              <button
                onClick={() => handleLevelChange('elementary')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  selectedLevel === 'elementary'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {language === 'en' ? 'Elementary' : 'Ensino Básico'}
              </button>
            </nav>
          </div>
        </div>

        {/* Room/Grade Selection Tabs */}
        {currentRooms.length > 0 && (
          <div className="mb-6">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {currentRooms.map((room) => (
                  <button
                    key={room.key}
                    onClick={() => setSelectedRoom(room.key)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      selectedRoom === room.key
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {room.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Debug Info */}
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">
            {language === 'en' ? 'Debug Information' : 'Informações de Debug'}
          </h3>
          <p className="text-blue-800 text-sm">
            <strong>{language === 'en' ? 'Level' : 'Nível'}:</strong> {selectedLevel} | 
            <strong> {language === 'en' ? 'Room' : 'Sala'}:</strong> {selectedRoom} | 
            <strong> {language === 'en' ? 'Events' : 'Eventos'}:</strong> {scheduleData.length}
          </p>
        </div>

        {/* Calendar */}
        {scheduleData.length > 0 ? (
          <UniversalScheduleCalendar
            scheduleData={scheduleData}
            roomName={currentRooms.find(room => room.key === selectedRoom)?.name || selectedRoom}
            scheduleType={selectedLevel}
          />
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <p className="text-gray-500">
              {language === 'en' 
                ? 'No schedule data available for this selection.' 
                : 'Nenhum dado de horário disponível para esta seleção.'}
            </p>
          </div>
        )}

        {/* Language Toggle for Testing */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            {language === 'en' ? 'Current Language' : 'Idioma Atual'}: {language.toUpperCase()}
          </p>
          <p className="text-xs text-gray-400">
            {language === 'en' 
              ? 'Use the language toggle in the main navigation to test bilingual support.' 
              : 'Use o alternador de idioma na navegação principal para testar o suporte bilíngue.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestPage; 