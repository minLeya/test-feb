import React, { useMemo } from "react";
import type { CalendarProps, CalendarDay } from "./types";
import styles from "./Calendar.module.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Calendar: React.FC<CalendarProps> = ({
  selectedDate,
  events,
  onDateSelect,
  className,
}) => {
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const monthNames = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
    });
  };

  const calendarDays = useMemo((): CalendarDay[] => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDay = firstDay.getDay();
    startDay = startDay === 0 ? 6 : startDay - 1;

    const totalDays = lastDay.getDate();

    const days: CalendarDay[] = [];

    for (let i = 0; i < startDay; i++) {
      days.push({
        type: "empty",
        date: new Date(),
        day: 0,
        isSelected: false,
        isToday: false,
        hasEvents: false,
      });
    }

    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const hasEvents = events.some(
        (event) => new Date(event.date).toDateString() === date.toDateString(),
      );
      const isSelected = date.toDateString() === selectedDate.toDateString();
      const isToday = date.toDateString() === new Date().toDateString();

      days.push({
        type: "day",
        date,
        day,
        hasEvents,
        isSelected,
        isToday,
      });
    }

    return days;
  }, [selectedDate, events]);

  return (
    <div className={`${styles.calendar} ${className || ""}`}>
      <div className={styles.eventsHeader}>
        <h3 className={styles.eventsTitle}>
          Мероприятия на {" "}
          <span className={styles.highlightedDate}>
            {formatDate(selectedDate)}
          </span>
        </h3>
      </div>

      <div className={styles.calendarInner}>
        <div className={styles.monthBar}>
          <button
            className={`${styles.navButton} ${styles.desktopOnly}`}
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setMonth(selectedDate.getMonth() - 1);
              onDateSelect(newDate);
            }}
            aria-label="Предыдущий месяц"
          >
            <ChevronLeftIcon />
          </button>

          <div className={styles.iconMonth}>
            <div className={styles.calendarIcon}>
              <img src="/images/calendar-icon.png" alt="calendar-icon" />
            </div>
            <span className={styles.monthText}>
              {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </span>
          </div>

          <button
            className={styles.navButton}
            onClick={() => {
              const newDate = new Date(selectedDate);
              newDate.setMonth(selectedDate.getMonth() + 1);
              onDateSelect(newDate);
            }}
            aria-label="Следующий месяц"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div className={styles.calendarGrid}>
          <div className={styles.weekDays}>
            {weekDays.map((day) => (
              <div key={day} className={styles.weekDay}>
                {day}
              </div>
            ))}
          </div>

          <div className={styles.days}>
            {calendarDays.map((item, index) => {
              if (item.type === "empty") {
                return (
                  <div key={`empty-${index}`} className={styles.emptyDay} />
                );
              }

              return (
                <button
                  key={item.date.toISOString()}
                  className={`
                    ${styles.day} 
                    ${item.isSelected ? styles.selected : ""}
                    ${item.isToday ? styles.today : ""}
                    ${item.hasEvents ? styles.hasEvents : ""}
                  `}
                  onClick={() => onDateSelect(item.date)}
                >
                  <span className={styles.dayNumber}>{item.day}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;