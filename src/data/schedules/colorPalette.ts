// Schedule Color Palette
// This file defines all colors used in the schedule system for easy reference and maintenance

export const SCHEDULE_COLORS = {
  // Academic Subjects (Elementary)
  PORTUGUESE: '#4D7ED2',      // Red - Language/Literature
  MATHEMATICS: '#FFB400',     // Blue - Math/Logic
  ENGLISH: '#8E24AA',         // Cyan - Foreign Language
  WORLD_KNOWLEDGE: '#29A19C', // Purple - General Knowledge
  SCIENCE: '#5C6BC0', // Green - Science/Nature
  DRAMATIC_EXPRESSION: '#9575CD',   // Orange - Drama/Theater
  TECHNOLOGY_EDUCATION: '#00ACC1',  // Slate - Technology
  DISCOVERY_TIME: '#81C784',        // Violet - Exploration

  // Physical & Creative Activities
  PHYSICAL_EDUCATION: '#FF7043',    // Yellow - Sports/PE
  MUSIC_EDUCATION: '#F06292',       // Pink - Music/Sound
  ARTS_CRAFTS: '#f97316',          // Orange - Visual Arts

  // Daily Activities (Daycare/Kindergarten)
  OUTDOOR_PLAY: '#22c55e',         // Green - Nature/Outside
  FREE_PLAY: '#84cc16',            // Lime - Unstructured Play
  SENSORY_PLAY: '#84cc16',         // Lime - Tactile/Sensory
  STORY_TIME: '#a855f7',           // Violet - Reading/Stories
  CIRCLE_TIME: '#06b6d4',          // Cyan - Group Discussion
  LEARNING_CENTERS: '#06b6d4',     // Cyan - Educational Stations
  QUIET_ACTIVITIES: '#64748b',     // Slate - Calm/Focused

  // Rest & Meals
  NAP_TIME: '#6366f1',             // Indigo - Sleep/Rest
  LUNCH: '#f59e0b',                // Amber - Main Meal
  SNACK_TIME: '#8b5cf6',           // Violet - Light Meal
  BREAK: '#10b981',                // Emerald - Recess/Break

  // Default/Empty
  EMPTY_SLOT: '#6b7280',           // Gray - No Activity
  TRANSPARENT: 'transparent',      // Transparent - Invisible placeholder
  DEFAULT: '#424242'               // Gray - Fallback Color
} as const;

// Color categories for easier organization
export const COLOR_CATEGORIES = {
  ACADEMIC: {
    name: 'Academic Subjects',
    colors: {
      'Portuguese/Language': SCHEDULE_COLORS.PORTUGUESE,
      'Mathematics': SCHEDULE_COLORS.MATHEMATICS,
      'English/Foreign Language': SCHEDULE_COLORS.ENGLISH,
      'World Knowledge': SCHEDULE_COLORS.WORLD_KNOWLEDGE,
      'Environmental Studies': SCHEDULE_COLORS.SCIENCE,
      'Dramatic Expression': SCHEDULE_COLORS.DRAMATIC_EXPRESSION,
      'Technology Education': SCHEDULE_COLORS.TECHNOLOGY_EDUCATION,
      'Discovery Time': SCHEDULE_COLORS.DISCOVERY_TIME
    }
  },
  PHYSICAL_CREATIVE: {
    name: 'Physical & Creative Activities',
    colors: {
      'Physical Education': SCHEDULE_COLORS.PHYSICAL_EDUCATION,
      'Music Education': SCHEDULE_COLORS.MUSIC_EDUCATION,
      'Arts & Crafts': SCHEDULE_COLORS.ARTS_CRAFTS
    }
  },
  PLAY_LEARNING: {
    name: 'Play & Learning Activities',
    colors: {
      'Outdoor Play': SCHEDULE_COLORS.OUTDOOR_PLAY,
      'Free Play': SCHEDULE_COLORS.FREE_PLAY,
      'Sensory Play': SCHEDULE_COLORS.SENSORY_PLAY,
      'Story Time': SCHEDULE_COLORS.STORY_TIME,
      'Circle Time': SCHEDULE_COLORS.CIRCLE_TIME,
      'Learning Centers': SCHEDULE_COLORS.LEARNING_CENTERS,
      'Quiet Activities': SCHEDULE_COLORS.QUIET_ACTIVITIES
    }
  },
  DAILY_NEEDS: {
    name: 'Daily Needs & Rest',
    colors: {
      'Nap Time': SCHEDULE_COLORS.NAP_TIME,
      'Lunch': SCHEDULE_COLORS.LUNCH,
      'Snack Time': SCHEDULE_COLORS.SNACK_TIME,
      'Break': SCHEDULE_COLORS.BREAK
    }
  },
  SYSTEM: {
    name: 'System Colors',
    colors: {
      'Empty Slot': SCHEDULE_COLORS.EMPTY_SLOT,
      'Default': SCHEDULE_COLORS.DEFAULT
    }
  }
} as const;

// Helper function to get color by activity type
export const getColorByActivity = (activityName: string): string => {
  const activity = activityName.toLowerCase();
  
  // Academic subjects
  if (activity.includes('portugues') || activity.includes('portuguese')) {
    return SCHEDULE_COLORS.PORTUGUESE;
  }
  if (activity.includes('matematica') || activity.includes('math')) {
    return SCHEDULE_COLORS.MATHEMATICS;
  }
  if (activity.includes('ingles') || activity.includes('english')) {
    return SCHEDULE_COLORS.ENGLISH;
  }
  if (activity.includes('conhecimento do mundo') || activity.includes('world knowledge')) {
    return SCHEDULE_COLORS.WORLD_KNOWLEDGE;
  }
  if (activity.includes('estudo do meio') || activity.includes('environmental studies')) {
    return SCHEDULE_COLORS.SCIENCE;
  }
  if (activity.includes('expressão dramática') || activity.includes('dramatic expression')) {
    return SCHEDULE_COLORS.DRAMATIC_EXPRESSION;
  }
  if (activity.includes('ed. tec') || activity.includes('technology education')) {
    return SCHEDULE_COLORS.TECHNOLOGY_EDUCATION;
  }
  if (activity.includes('vou descobrir') || activity.includes('discovery time')) {
    return SCHEDULE_COLORS.DISCOVERY_TIME;
  }
  
  // Physical & Creative
  if (activity.includes('ed. física') || activity.includes('physical education')) {
    return SCHEDULE_COLORS.PHYSICAL_EDUCATION;
  }
  if (activity.includes('ed. musical') || activity.includes('music')) {
    return SCHEDULE_COLORS.MUSIC_EDUCATION;
  }
  if (activity.includes('artes') || activity.includes('arts') || activity.includes('crafts')) {
    return SCHEDULE_COLORS.ARTS_CRAFTS;
  }
  
  // Play & Learning
  if (activity.includes('ar livre') || activity.includes('outdoor play')) {
    return SCHEDULE_COLORS.OUTDOOR_PLAY;
  }
  if (activity.includes('brincadeira livre') || activity.includes('free play')) {
    return SCHEDULE_COLORS.FREE_PLAY;
  }
  if (activity.includes('sensorial') || activity.includes('sensory')) {
    return SCHEDULE_COLORS.SENSORY_PLAY;
  }
  if (activity.includes('conto') || activity.includes('story')) {
    return SCHEDULE_COLORS.STORY_TIME;
  }
  if (activity.includes('círculo') || activity.includes('circle')) {
    return SCHEDULE_COLORS.CIRCLE_TIME;
  }
  if (activity.includes('centros') || activity.includes('learning centers')) {
    return SCHEDULE_COLORS.LEARNING_CENTERS;
  }
  if (activity.includes('atividades calmas') || activity.includes('quiet activities')) {
    return SCHEDULE_COLORS.QUIET_ACTIVITIES;
  }
  
  // Daily needs
  if (activity.includes('soneca') || activity.includes('nap')) {
    return SCHEDULE_COLORS.NAP_TIME;
  }
  if (activity.includes('almoço') || activity.includes('lunch')) {
    return SCHEDULE_COLORS.LUNCH;
  }
  if (activity.includes('lanche') || activity.includes('snack')) {
    return SCHEDULE_COLORS.SNACK_TIME;
  }
  if (activity.includes('intervalo') || activity.includes('break')) {
    return SCHEDULE_COLORS.BREAK;
  }
  
  // Default
  return SCHEDULE_COLORS.DEFAULT;
};

// Export individual colors for direct use
export const {
  PORTUGUESE,
  MATHEMATICS,
  ENGLISH,
  WORLD_KNOWLEDGE,
  SCIENCE,
  DRAMATIC_EXPRESSION,
  TECHNOLOGY_EDUCATION,
  DISCOVERY_TIME,
  PHYSICAL_EDUCATION,
  MUSIC_EDUCATION,
  ARTS_CRAFTS,
  OUTDOOR_PLAY,
  FREE_PLAY,
  SENSORY_PLAY,
  STORY_TIME,
  CIRCLE_TIME,
  LEARNING_CENTERS,
  QUIET_ACTIVITIES,
  NAP_TIME,
  LUNCH,
  SNACK_TIME,
  BREAK,
  EMPTY_SLOT,
  TRANSPARENT,
  DEFAULT
} = SCHEDULE_COLORS;
