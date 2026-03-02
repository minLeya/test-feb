import React, { useState } from 'react';
import Calendar from '../Calendar';
import EventList from '../EventList';
import type { EventsSectionProps } from './types';
import { mockEvents, calendarEvents } from '../../data/events';
import styles from './EventsSection.module.scss';

const EventsSection: React.FC<EventsSectionProps> = ({ 
  initialDate = new Date(2024, 3, 18),
  className 
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(initialDate);

  const filteredEvents = mockEvents.filter(event => {
    return new Date(event.date).toDateString() === selectedDate.toDateString();
  });

  return (
    <section className={`${styles.eventsSection} ${className || ''}`}>
      <div className={styles.container}>
        <Calendar 
          selectedDate={selectedDate}
          events={calendarEvents}
          onDateSelect={setSelectedDate}
          className={styles.calendar}
        />
        
        <EventList 
          events={filteredEvents}
          selectedDate={selectedDate}
          className={styles.eventList}
        />
      </div>
    </section>
  );
};

export default EventsSection;