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