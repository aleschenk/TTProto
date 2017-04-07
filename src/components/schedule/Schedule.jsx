import React from 'react'

const Header = () => {
  return (<div>header</div>)
}

const WeekDays = () => {
  return (<div>week days</div>)
}

const TimeList = () => {
  return (<div>time list</div>)
}

const Schedule = () => {

  const weeks = () => (
    longNames => ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo' ],
    shortNames => ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa', 'Do' ]
  )

  renderWeekDays = () => {
    let weekdays = [];
    for (let i = 0; i < 7; i++) {
      weekdays.push(this.renderWeekday(i));
    }

    return (
    <div className="DayPicker-Month">
      <div className="DayPicker-Weekdays">
        <div>
          {weekdays}
        </div>
      </div>
    </div>
  )}

  return (
    <div class="row">
    </div>
  )

}


export default WeekdayPicker;