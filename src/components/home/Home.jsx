import React from 'react'
import '../../../styles/index.scss'

// Redux
import { connect } from 'react-redux'

// React Router
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

// Material
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import { Tabs, Tab } from 'material-ui/Tabs'
import DatePicker from 'material-ui/DatePicker'

// Actions
import { fetchCalendar, fetchInitialData } from '../../actions'

// Views
import Schedule from '../schedule/Schedule'
import Calendar from '../calendar/Calendar'

import moment from 'moment'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

const Menu = () => {
  return (
    <Tabs>
      <Tab label="Agenda">
        <Schedule />
      </Tab>
      <Tab label="Agendar nuevo turno">
        <Calendar />
      </Tab>
    </Tabs>
  )
}

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    let diaDesde = moment().toISOString()
    let diaHasta = moment().add(7, 'days').toISOString()
    //After rendering
    if (this.props.user.access_token) {
      this.props.dispatch(fetchInitialData({
        servicios: this.props.user.empresas[0].Servicios,
        diaDesde,
        diaHasta
        /*servicioID: 4, esto para el fetch calendar*/
        /*diaDesde: '2017-05-05T17:06:51.797Z',
        diaHasta: '2017-04-18T17:06:51.797Z'*/
      }))
    }
  }

  render() {
    return (
      this.props.user.access_token ?
        <Menu/> :
        <Redirect to="/login" />
    )
  }
}


Home.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
