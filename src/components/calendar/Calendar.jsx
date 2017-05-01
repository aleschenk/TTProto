import 'rc-tabs/assets/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Tabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/TabContent'
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar'
import { CalendarTimeListDate } from './CalendarTimeList'

// Redux
import { connect } from 'react-redux'

const Calendar = ({calendar}) => {

  const isSameDate = (date, dateCompare) => {
    return moment(date).format('YYYYMMDD') === moment(dateCompare).format('YYYYMMDD');
  }

  const callback = ({key}) => {
  }

  const DayItems = 
    calendar ? calendar.turnos ? calendar.turnos.map((day) => 
    <TabPane tab={day.FechaStr} key={day.$id}>
      { day.Horarios.map( (horario) => 
        <CalendarTimeListDate 
                        key={horario.diaHora}
                        hour={horario.diaHora}
                        isAvailable={true}/>
      )}
    </TabPane>) : <div>Nothing to show</div> : <div>Nothing to show</div>

  return (
    <Tabs
      defaultActiveKey="2"
      onChange={callback}
      renderTabBar={()=><ScrollableInkTabBar />}
      renderTabContent={()=><TabContent />}
    >
    { calendar ?
        DayItems : <TabPane key='empty' tab='Calendar is empty'/>
    }
    </Tabs>
  )

}

Calendar.propTypes = {
   calendar: React.PropTypes.shape({}),
}

export default connect(state => ({ calendar: state.schedule.calendar }))(Calendar)

// export default Calendar
