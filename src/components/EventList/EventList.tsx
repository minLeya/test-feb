import React from 'react';
import EventCard from './EventCard';
import type { EventListProps } from './types';
import styles from './EventList.module.scss';

const EventList: React.FC<EventListProps> = ({ 
  events, 
  className 
}) => {
  return (
    <div className={`${styles.eventList} ${className || ''}`}>
      <div className={styles.eventsContainer}>
        {events.length > 0 ? (
          events.map(event => (
            <EventCard 
              key={event.id}
              event={event}
              onClick={() => console.log('Event clicked:', event.id)}
            />
          ))
        ) : (
          <div className={styles.noEvents}>
            <p className={styles.noEventsText}>
              Нет мероприятий на выбранную дату
            </p>
            <p className={styles.noEventsSubtext}>
              Попробуйте выбрать другую дату
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventList;