class AppTest extends React.Component {

  constructor(props) {
    super(props);

    this.onSelectDate = this.onSelectDate.bind(this);
    this.onChangeNextMonth = this.onChangeNextMonth.bind(this);
    this.onSelectedPreviousMonth = this.onSelectedPreviousMonth.bind(this);

    // take from Object Tree of redux
    this.state = {
      dateSelected: '2017-04-04T13:58:30-03:00',
      daysOfMonths
    };
  }

  onSelectDate(date) {
    this.setState({dateSelected: date})
  }

  onChangeNextMonth() {

  }

  onSelectedPreviousMonth() {

  }

  render() {

    const {
      dateSelected,
      availableHours
    } = this.state;

    return (
      <Schedule 
         onSelectedDate={this.onSelectDate}
         onChangeNextMonth={this.onChangeNextMonth}
         onSelectedPreviousMonth={this.onSelectedPreviousMonth}
         dateSelected={dateSelected} 
         availableHours={availableHours}
        />
    )
  }

}

// ----------------------------------------
//          SCHEDULE
// ----------------------------------------
const Schedule = ({
  dateSelected,
  availableHours,
  onSelectedDate,
  onChangeNextMonth,
  onSelectedPreviousMonth
}) => {
  return (
    <div className="schedule">
        <ScheduleHeader date={dateSelected} />
        <ScheduleWeekDays onSelectedDate={onSelectedDate} date={dateSelected} daysOfMonths={daysOfMonths}/>
        <ScheduleTimeList date={dateSelected} daysOfMonths={daysOfMonths}/>
      </div>
  )
}

// ----------------------------------------
//        SCHEDULE HEADER
// ----------------------------------------
const ScheduleHeader = ({
  date,
  disabled
}) => {
  //Parsear fecha con moment
  return (<div className="shedule-header card-shadow font-light">{moment(date).format('MMMM, YYYY').toString()}</div>)
}

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


// ----------------------------------------
//        HELPER FUNCTIONS
// ----------------------------------------
const getDaysOfMonths = (customMonth, daysInformation) => {
  // is not defined custom month, just return days of current month
  const startDate = customMonth ? moment(customMonth).startOf('month') : moment().startOf('month');
  const amountDays = startDate.daysInMonth();
  let monthDayNumbers = [];

  // load all days of given date
  for (let indexDay = 0; amountDays > indexDay; indexDay++) {

    const indexDate = moment(startDate.toDate()).add(indexDay, 'days');
    // search if exist some date information in order to know if are disabled or not
    const existingInformationOfdate = daysInformation.find(dayInformation => isSameDate(dayInformation.date, indexDate.format()));

    let isAvailable = true;

    if (existingInformationOfdate) {
      isAvailable = existingInformationOfdate.isAvailable;
    }

    monthDayNumbers.push({
      date: indexDate.format(),
      name: indexDate.format('dd'),
      number: indexDate.format('D'),
      isAvailable
    })
  }
  return monthDayNumbers;
}

const isSameDate = (date, dateCompare) => {
  return moment(date).format('YYYYMMDD') === moment(dateCompare).format('YYYYMMDD');
}

// Object Tree fetch dates from API.
const maxTurnPerDay = [1, 2, 3, 4, 5, 6, 7, 8];

const getTurnsDummys = (customDate) => {
  return maxTurnPerDay.map(date => {
    const isAvailable = Math.random() >= 0.5; // random turn availability 
    return {
      date: moment(customDate).add(date, 'hours'),
      hour: moment(customDate).add(date, 'hours').format('HH:MM'),
      isAvailable
    }
  })
}

// fixture day of months
const daysOfMonths = [{
  date: '2017-04-02T13:00:30-03:00',
  isAvailable: false,
  turns: getTurnsDummys('2017-04-02T13:00:30-03:00')
}, {
  date: '2017-04-03T14:58:30-03:00',
  isAvailable: true,
  turns: getTurnsDummys('2017-04-03T14:58:30-03:00')
}, {
  date: '2017-04-04T15:58:30-03:00',
  isAvailable: true,
  turns: getTurnsDummys('2017-04-04T15:58:30-03:00')
}, {
  date: '2017-04-02T16:58:30-03:00',
  isAvailable: true,
  turns: getTurnsDummys('2017-04-05T16:58:30-03:00')
}];

ReactDOM.render(
  <AppTest/>,
  document.getElementById('root')
)