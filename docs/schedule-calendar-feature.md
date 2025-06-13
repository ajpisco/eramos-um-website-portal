# Universal Schedule Calendar Feature

## Overview

The Eramos Um website now features an interactive calendar view for **all** school schedules (daycare, kindergarten, and elementary) using `react-big-calendar`. This provides a modern, visual way to display class schedules with better user experience compared to traditional table views.

## Implementation

### Libraries Used
- **react-big-calendar**: Main calendar component library
- **moment.js**: Date/time handling and localization
- **Custom CSS**: Enhanced styling for school-specific needs

### Features

#### 📅 Interactive Calendar Views
- **Week View**: Shows Monday-Friday schedule in a weekly format
- **Day View**: Detailed view of a single day's schedule
- **Responsive Design**: Adapts to mobile and desktop screens
- **Universal Support**: Works for daycare, kindergarten, and elementary schedules

#### 🎨 Color-Coded Activities/Subjects

**Elementary (Academic Subjects):**
- **Portuguese**: Red (#ef4444)
- **Mathematics**: Blue (#3b82f6)
- **English**: Cyan (#06b6d4)
- **Physical Education**: Yellow (#eab308)

**Daycare/Kindergarten (Activities):**
- **Music**: Pink (#ec4899)
- **Arts & Crafts**: Orange (#f97316)
- **Outdoor Play**: Green (#22c55e)
- **Story Time**: Purple (#a855f7)
- **Circle Time**: Cyan (#06b6d4)
- **Sensory Play**: Lime (#84cc16)

**Common Activities:**
- **Break**: Green (#10b981)
- **Lunch**: Orange (#f59e0b)
- **Snack**: Purple (#8b5cf6)
- **Nap**: Indigo (#6366f1) - Daycare/Kindergarten only

#### 🌍 Bilingual Support
- Portuguese and English interface
- Localized day names and calendar controls
- Proper date formatting for each language

#### 📱 Mobile Optimization
- Responsive layout for all screen sizes
- Touch-friendly controls
- Optimized event display for small screens

#### 🏫 Room/Grade Selection
- **Tab-based Selection**: No dropdowns, uses intuitive tabs
- **Automatic Updates**: Calendar updates when room/grade is selected
- **Teacher Information**: Shows assigned teachers for elementary grades

## Technical Details

### Component Structure
```
src/components/UniversalScheduleCalendar.tsx  # Universal calendar component
src/components/ScheduleCalendar.css           # Custom styling (shared)
src/pages/ClassSchedules.tsx                  # Updated integration page
```

### Data Integration
- Uses existing schedule data from all schedule files
- Converts tabular schedule data to calendar events
- Handles different time formats (HH:MM and HH:MM-HH:MM)
- Maintains teacher information display for elementary

### Calendar Configuration
- **Time Range**: 8:00 AM - 5:00 PM
- **Time Slots**: 30-minute intervals
- **Event Duration**: 
  - Daycare/Kindergarten: Based on time ranges (e.g., 08:30-09:30 = 60 min)
  - Elementary: 60 minutes for classes, 30 min for breaks
  - Lunch: 60 minutes
  - Snacks: 30 minutes

## Usage

### Navigation Flow
1. Navigate to Class Schedules page
2. Select level tab (Daycare, Kindergarten, or Elementary)
3. Select specific room/grade using sub-tabs
4. Calendar automatically displays with selected schedule
5. Switch between Week and Day views using controls
6. Click events for additional details (popup)

### Room/Grade Selection
- **Daycare**: Year 1, Year 2
- **Kindergarten**: Year 3, Year 4, Year 5  
- **Elementary**: 1st Grade, 2nd Grade, 3rd Grade, 4th Grade

### Teacher Information
- Elementary grades show teacher names in calendar header
- Automatically updates when switching between grades

## Benefits

### User Experience
- **Unified Interface**: Same calendar view for all levels
- **Visual Appeal**: Modern calendar interface
- **Better Navigation**: Tab-based room selection
- **Clear Organization**: Color-coded activities/subjects
- **Mobile Friendly**: Responsive design

### Maintenance
- **Single Component**: One calendar handles all schedule types
- **Reuses Existing Data**: No data structure changes needed
- **Bilingual Ready**: Automatic language switching
- **Extensible**: Easy to add more features or customize

## Future Enhancements

### Potential Additions
- **Month View**: Overview of entire month
- **Event Details**: Click to see teacher, room, materials
- **Print View**: Printer-friendly calendar format
- **Export**: PDF or image export functionality
- **Notifications**: Upcoming class reminders
- **Search/Filter**: Find specific activities or subjects

### Integration Opportunities
- **Student Portal**: Personal schedule views
- **Teacher Dashboard**: Class management tools
- **Parent App**: Mobile schedule access
- **Room Management**: Facility scheduling

## Technical Notes

### Dependencies
```json
{
  "react-big-calendar": "^1.x.x",
  "moment": "^2.x.x"
}
```

### Browser Support
- Modern browsers with ES6+ support
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

### Performance
- Efficient event rendering for all schedule types
- Optimized for school schedule data size
- Minimal re-renders with React hooks
- Smart time parsing for different formats

## Data Format Support

### Time Formats
- **Elementary**: "HH:MM" (e.g., "8:30")
- **Daycare/Kindergarten**: "HH:MM-HH:MM" (e.g., "08:30-09:30")
- **Automatic Detection**: Component handles both formats seamlessly

### Schedule Types
- **Daycare**: Activity-based with longer time blocks
- **Kindergarten**: Mixed activities with structured time
- **Elementary**: Subject-based with hourly slots

## Maintenance

### Updating Schedules
1. Modify data in respective schedule files:
   - `src/data/schedules/daycare.ts`
   - `src/data/schedules/kindergarten.ts`
   - `src/data/schedules/elementary.ts`
2. Calendar automatically reflects changes
3. No additional configuration needed

### Styling Changes
1. Edit `src/components/ScheduleCalendar.css`
2. Modify color schemes in UniversalScheduleCalendar component
3. Adjust responsive breakpoints as needed

### Adding New Features
1. Extend `ScheduleEvent` interface if needed
2. Add new event types or properties
3. Update styling and display logic accordingly
4. Consider impact on all schedule types

---

*This feature enhances the Eramos Um website's schedule display with modern, interactive calendar functionality for all educational levels while maintaining the existing data structure and bilingual support.* 