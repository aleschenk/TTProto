// ----------------------------------------
//        SCHEDULE TIME LIST
// ----------------------------------------
const ScheduleTimeList = ({
  daysOfMonths,
  date
}) => {
  // filter the turns of current day
  const dayFiltered = daysOfMonths.find(dateCompare => isSameDate(date, dateCompare.date));
  const turns = dayFiltered.turns;
  return (
    <div className="schedule-time-list">
      {turns.map(turn => <ScheduleTimeListDate isAvailable={turn.isAvailable} hour={turn.date}/>)}
    </div>
  )
}

const ScheduleTimeListDate = ({
  hour,
  isAvailable
}) => {
  let className = 'schedule-time-list__hour card-shadow font-lighter';

  if (!isAvailable) {
    className += ' is-disabled';
  }

  return (
    <div className={className}>{moment(hour).format('HH:MM')}</div>
  )
}

export default ScheduleTimeList

