import React from 'react';
import { COLOR_CATEGORIES } from '@/data/schedules/colorPalette';
import { useLanguage } from '@/context/LanguageContext';

interface ColorSwatchProps {
  color: string;
  name: string;
  description?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, name, description }) => (
  <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
    <div 
      className="w-8 h-8 rounded-md border border-gray-200 shadow-sm flex-shrink-0"
      style={{ backgroundColor: color }}
      title={color}
    />
    <div className="flex-1 min-w-0">
      <div className="text-sm font-medium text-gray-900 truncate">
        {name}
      </div>
      {description && (
        <div className="text-xs text-gray-500 truncate">
          {description}
        </div>
      )}
      <div className="text-xs font-mono text-gray-400">
        {color}
      </div>
    </div>
  </div>
);

interface ColorCategoryProps {
  title: string;
  colors: Record<string, string>;
}

const ColorCategory: React.FC<ColorCategoryProps> = ({ title, colors }) => (
  <div className="bg-white rounded-lg border border-gray-200 p-4">
    <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
      {title}
    </h3>
    <div className="space-y-2">
      {Object.entries(colors).map(([name, color]) => (
        <ColorSwatch 
          key={name}
          color={color}
          name={name}
        />
      ))}
    </div>
  </div>
);

const ScheduleColorPalette: React.FC = () => {
  const { language } = useLanguage();
  
  const translations = {
    en: {
      title: 'Schedule Color Palette',
      subtitle: 'Colors used throughout the schedule system',
      copyColor: 'Click to copy color code',
      categories: {
        'Academic Subjects': 'Academic Subjects',
        'Physical & Creative Activities': 'Physical & Creative Activities',
        'Play & Learning Activities': 'Play & Learning Activities',
        'Daily Needs & Rest': 'Daily Needs & Rest',
        'System Colors': 'System Colors'
      }
    },
    pt: {
      title: 'Paleta de Cores dos Horários',
      subtitle: 'Cores utilizadas em todo o sistema de horários',
      copyColor: 'Clique para copiar o código da cor',
      categories: {
        'Academic Subjects': 'Disciplinas Académicas',
        'Physical & Creative Activities': 'Atividades Físicas e Criativas',
        'Play & Learning Activities': 'Atividades de Brincadeira e Aprendizagem',
        'Daily Needs & Rest': 'Necessidades Diárias e Descanso',
        'System Colors': 'Cores do Sistema'
      }
    }
  };

  const t = translations[language as keyof typeof translations];

  const handleColorClick = (color: string) => {
    navigator.clipboard.writeText(color).then(() => {
      // You could add a toast notification here
      console.log(`Color ${color} copied to clipboard`);
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {t.title}
        </h1>
        <p className="text-gray-600">
          {t.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(COLOR_CATEGORIES).map(([key, category]) => (
          <ColorCategory
            key={key}
            title={t.categories[category.name as keyof typeof t.categories] || category.name}
            colors={category.colors}
          />
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">
          {language === 'en' ? 'Usage Instructions' : 'Instruções de Uso'}
        </h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>
            {language === 'en' 
              ? '• Click on any color swatch to copy the hex code to your clipboard'
              : '• Clique em qualquer amostra de cor para copiar o código hex para a área de transferência'
            }
          </li>
          <li>
            {language === 'en'
              ? '• Use these colors when creating or modifying schedule activities'
              : '• Use estas cores ao criar ou modificar atividades do horário'
            }
          </li>
          <li>
            {language === 'en'
              ? '• Colors are organized by activity type for easy selection'
              : '• As cores estão organizadas por tipo de atividade para fácil seleção'
            }
          </li>
        </ul>
      </div>

      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500">
          {language === 'en'
            ? 'Color palette defined in src/data/schedules/colorPalette.ts'
            : 'Paleta de cores definida em src/data/schedules/colorPalette.ts'
          }
        </p>
      </div>
    </div>
  );
};

export default ScheduleColorPalette;
