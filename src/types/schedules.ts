export interface ScheduleRow {
  time: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
}

export interface SubOption {
  key: string;
  labelKey: string;
  scheduleData?: ScheduleRow[];
  scheduleTitleKey: string;
} 