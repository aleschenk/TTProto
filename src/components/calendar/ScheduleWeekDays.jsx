// ----------------------------------------
//        SCHEDULE WEEK DAYS
// ----------------------------------------
const ScheduleWeekDays = ({
  onSelectedDate,
  date,
  daysOfMonths
}) => {

  const monthDayNumbers = getDaysOfMonths(date, daysOfMonths);

  const scheduleWeekDaysDates = monthDayNumbers.map(day =>
    <ScheduleWeekDaysDate 
      onSelectedDate={onSelectedDate}
      date={day.date} 
      dayName={day.name}
      dayNumber={day.number} 
      isAvailable={day.isAvailable} 
      isActive={isSameDate(date, day.date)}
      />
  );

  return (
    <div className="schedule-week-days">{scheduleWeekDaysDates}</div>
  )
}

const ScheduleWeekDaysDate = ({
  dayNumber,
  dayName,
  isActive,
  isAvailable,
  date,
  onSelectedDate
}) => {

  let className = "schedule-week-days__date";

  if (isActive) {
    className += ' is-active';
  }

  if (!isAvailable) {
    className += ' is-disabled';
  }

  const el = isAvailable ? (
  
    <div onClick={onSelectedDate.bind(this, date)} className={className}>
    <div className="schedule-week-days__date-name font-normal">{dayName}</div>
    <div className="schedule-week-days__date-number font-lighter">{dayNumber}</div>
  </div>) : (
  
    <div className={className}>
    <div className="schedule-week-days__date-name font-normal">{dayName}</div>
    <div className="schedule-week-days__date-number font-lighter">{dayNumber}</div>
  </div>);
  
  return el
}

export default ScheduleWeekDays

