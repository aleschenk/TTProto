import 'rc-tabs/assets/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Tabs, { TabPane } from 'rc-tabs'
import TabContent from 'rc-tabs/lib/TabContent'
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar'
import { CalendarTimeListDate } from './CalendarTimeList'
import BookModal from './BookModal'

// Redux
import { connect } from 'react-redux'

import { openBookModal } from '../../actions'

const Calendar = ({calendar, openBookModal}) => {

  const isSameDate = (date, dateCompare) => {
    return moment(date).format('YYYYMMDD') === moment(dateCompare).format('YYYYMMDD');
  }

  const callback = ({key}) => {
  }

  const handleBookClick = ({servicioID, clienteID, fechaHora }) =>
    openBookModal({servicioID, clienteID, fechaHora })

  const DayItems = 
    calendar ? calendar.turnos ? calendar.turnos.map((day) => 
    <TabPane tab={day.FechaStr} key={day.$id}>
      { day.Horarios.map( (horario) => 
        <CalendarTimeListDate 
                        onBook={ () => handleBookClick({servicioID: calendar.servicioID, clienteID: calendar.clienteID, fechaHora: horario.diaHora }) }
                        key={horario.diaHora}
                        hour={horario.diaHora}
                        isAvailable={true}/>
      )}
    </TabPane>) : <div>Nothing to show</div> : <div>Nothing to show</div>

  return (
    <div>
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
      <BookModal />
    </div>
  )

}

Calendar.propTypes = {
   calendar: React.PropTypes.shape({}),
}

export default connect(
    state => ({ calendar: state.schedule.calendar }), {openBookModal})
  (Calendar)

// export default Calendar
