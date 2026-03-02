export interface ICalendarEvent {
  id: string;
  date: Date;
}

export interface CalendarProps {
  selectedDate: Date;
  events: ICalendarEvent[];
  onDateSelect: (date: Date) => void;
  className?: string;
}

export interface CalendarDay {
  type: 'day' | 'empty';
  date: Date;
  day: number;
  isSelected: boolean;
  isToday: boolean;
  hasEvents: boolean;
}