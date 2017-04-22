import React from 'react'
import '../../../styles/index.scss'
import Schedule from '../schedule/Schedule'

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
import { fetchCalendar } from '../../actions'

// Views
import Events from '../events/Events'

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
        <Events />
      </Tab>
      <Tab label="Agendar nuevo turno">
        <Schedule />
      </Tab>
    </Tabs>
  )
}

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    //After rendering
    if (this.props.user.access_token)
      this.props.dispatch(fetchCalendar({
        /*servicioID: this.props.user.empresas[0].Servicios[0].$id,*/
        servicioID: 4,
        diaDesde: '2017-04-12T17:06:51.797Z',
        diaHasta: '2017-04-18T17:06:51.797Z'
      }
      ))
  }

  render() {
    return (
      this.props.user.access_token ?
        <Menu calendar={this.props.calendar} /> :
        <Redirect to="/login" />
    )
  }
}


Home.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
