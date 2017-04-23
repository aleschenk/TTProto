import 'rc-tabs/assets/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Tabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/TabContent'
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar'
import ScheduleWeekDays from './ScheduleWeekDays'
import { ScheduleTimeListDate } from './ScheduleTimeList'

// Redux
import { connect } from 'react-redux'

const Schedule = ({schedule}) => {

  const isSameDate = (date, dateCompare) => {
    return moment(date).format('YYYYMMDD') === moment(dateCompare).format('YYYYMMDD');
  }

  const callback = ({key}) => {
  }

  const DayItems = 
    schedule ? schedule.turnos ? schedule.turnos.map((day) => 
    <TabPane tab={day.FechaStr} key={day.$id}>
      { day.Horarios.map( (horario) => 
      <ScheduleTimeListDate 
                        key={horario.diaHora}
                        hour={horario.diaHora}
                        isAvailable={true}
      /> )}
      {/*{ day.Horarios.map( (horario) => <li>{horario.diaHora}</li> ) }*/}
    </TabPane>) : <div>Nothing to show</div> : <div>Nothing to show</div>

  return (
    <Tabs
      defaultActiveKey="2"
      onChange={callback}
      renderTabBar={()=><ScrollableInkTabBar />}
      renderTabContent={()=><TabContent />}
    >
    {DayItems}
    </Tabs>
  )

}

Schedule.propTypes = {
   schedule: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ schedule: state.schedule }))(Schedule)

// export default Schedule
