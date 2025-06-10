# 8pt Grid System - Spacing Guide

## Overview
This project follows an 8pt grid system for consistent spacing throughout the UI. All spacing values should be multiples of 8px to ensure visual harmony and scalability across different screen sizes.

## Base Spacing Values

### Tailwind CSS Classes and 8pt Grid Equivalents
- `gap-1` = 4px (use for tight spacing within components)
- `gap-2` = 8px (1x base unit)
- `gap-3` = 12px (1.5x base unit, use sparingly)
- `gap-4` = 16px (2x base unit)
- `gap-5` = 20px (2.5x base unit, use sparingly)
- `gap-6` = 24px (3x base unit) **← PRIMARY CHOICE**
- `gap-8` = 32px (4x base unit)
- `gap-10` = 40px (5x base unit)
- `gap-12` = 48px (6x base unit)
- `gap-16` = 64px (8x base unit)

## Spacing Hierarchy

### Component Level Spacing
- **Form fields within sections**: `gap-4` (16px)
- **Card grids and content sections**: `gap-6` (24px) 
- **Major layout sections**: `gap-8` (32px)
- **Page-level content blocks**: `gap-16` (64px)

### Current Implementation Status ✅

#### Main Layout Components
- `ProgramSection.tsx`: `gap-6` (24px) - ✅ Updated
- `NewsSection.tsx`: `gap-6` (24px) - ✅ Updated  
- `Footer.tsx`: `gap-6` (24px) - ✅ Updated

#### Page Components
- `News.tsx`: `gap-6` (24px) - ✅ Updated
- `Team.tsx`: `gap-6` (24px) - ✅ Updated
- `Extracurricular.tsx`: `gap-6` (24px) - ✅ Updated
- `Admission.tsx`: `gap-6` (24px) - ✅ Updated
- `Inovar.tsx`: `gap-6` (24px) - ✅ Updated
- `AcademicCalendar.tsx`: `gap-6` (24px) - ✅ Updated
- `DressCode.tsx`: `gap-6` (24px) - ✅ Updated
- `SchoolBooks.tsx`: `gap-6` (24px) - ✅ Already correct
- `Contact.tsx`: `gap-16` (64px) - ✅ Maintained for layout separation

#### Form Components
- `AdmissionFormHTML.tsx`: `gap-4` (16px) - ✅ Appropriate for forms

## Design Principles

### Why 8pt Grid?
1. **Scalability**: Works well with retina displays (@2x, @3x scaling)
2. **Consistency**: Eliminates guesswork in spacing decisions
3. **Material Design**: Aligns with Google's Material Design 8dp system
4. **Developer-Designer Harmony**: Clear communication between teams

### Spacing Guidelines
- **Tight spacing**: Use `gap-4` (16px) for related form elements
- **Standard spacing**: Use `gap-6` (24px) for most grid layouts
- **Loose spacing**: Use `gap-8` (32px) for major sections
- **Section separation**: Use `gap-16` (64px) for distinct content areas

### Typography Considerations
- Line heights should also follow 8pt increments
- Margin/padding around text elements: multiples of 8px
- Icon sizes: 16px, 24px, 32px, 48px, etc.

## Implementation Notes

### Before (Inconsistent)
- Random gap values: `gap-8`, `gap-6`, `gap-4` without system
- No clear hierarchy or reasoning

### After (8pt Grid System)
- Systematic approach with clear hierarchy
- Primary choice: `gap-6` (24px) for most layouts
- Consistent visual rhythm across all components
- Better scalability and maintainability

## Next Steps
- [ ] Update remaining utility components if any
- [ ] Review padding/margin classes for 8pt compliance  
- [ ] Update component spacing in Storybook/documentation
- [ ] Consider creating custom Tailwind spacing utilities if needed

---
*This spacing system ensures visual consistency and professional appearance across the entire Éramos Um website.* 