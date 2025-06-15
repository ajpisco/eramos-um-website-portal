// Schedule row for a single subject/time
export interface ScheduleRow {
  time: string;
  subject: string;
  duration?: number; // duration in minutes (optional)
  color?: string; // background color for the activity (optional)
}

// Schedule organized by day
export type ScheduleByDay = {
  monday: ScheduleRow[];
  tuesday: ScheduleRow[];
  wednesday: ScheduleRow[];
  thursday: ScheduleRow[];
  friday: ScheduleRow[];
};

export interface SubOption {
  key: string;
  labelKey: string;
  scheduleData?: ScheduleByDay;
  scheduleTitleKey: string;
} 