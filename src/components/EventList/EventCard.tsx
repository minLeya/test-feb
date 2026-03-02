import React from "react";
import type { EventCardProps } from "./types";
import styles from "./EventCard.module.scss";

const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
  const handleWriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Написать:", event.id);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Подробнее:", event.id);
  };

  return (
    <article className={styles.eventCard} onClick={onClick}>
      <div className={styles.tagsContainer}>
        {event.tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <h4 className={styles.eventTitle}>{event.title}</h4>
      <div className={styles.eventActions}>
        <button className={styles.writeButton} onClick={handleWriteClick}>
          Написать
        </button>
        <button className={styles.detailsButton} onClick={handleDetailsClick}>
          Подробнее →
        </button>
      </div>
    </article>
  );
};

export default EventCard;
