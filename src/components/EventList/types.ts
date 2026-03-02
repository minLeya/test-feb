export interface IEvent {
  id: string;
  title: string;
  tags: string[]; 
  date: Date;
}

export interface EventListProps {
  events: IEvent[];
  selectedDate: Date;
  className?: string;
}

export interface EventCardProps {
  event: IEvent;
  onClick: () => void;
}