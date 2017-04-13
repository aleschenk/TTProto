import React from 'react'
import '../../../styles/index.scss'
import Schedule from '../schedule/Schedule'

// Redux
import { connect } from 'react-redux'

// React Router
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

// Material
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
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

const Menu = ({calendar}) => {
  return (
    <Tabs>
      <Tab label="Agenda">
        <Events/>
      </Tab>
      <Tab label="Agendar nuevo turno">
        <Schedule calenadar={calendar}/>
      </Tab>
    </Tabs>
  )
}

// const isUserLoggedIn = state => state.user.access_token !== null
//StatelessHome
/*const Home = ({ user }) => {
  return (
    user.access_token ? 
    <Menu/> : 
    <Redirect to="/login"/>
  )
}*/

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Home::componentWillMount')
    //Before rendering (no DOM yet)
    //fetchCalendar()
  }

  componentDidMount() {
    console.log('Home::componentDidMount')
    //After rendering
    if(this.props.user.access_token)
      this.props.dispatch(fetchCalendar(this.props.user.empresas[0].Servicios[0].$id))
  }

  componentWillUpdate() {
    if(this.props.user.access_token) 
      this.props.dispatch(fetchCalendar({
        /*servicioID: this.props.user.empresas[0].Servicios[0].$id,*/
        servicioID: 4,
        diaDesde:'2017-04-12T17:06:51.797Z',
        diaHasta:'2017-04-18T17:06:51.797Z'}
        ))
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('Home::RENDER')
  // }

  render() {
    return (
      this.props.user.access_token ? 
      <Menu calendar={this.props.calendar} /> : 
      <Redirect to="/login"/>
    )
  }
}


Home.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user, calendar: state.calendar }))(Home)


  /*constructor(props) {
    super(props)
    this.state = {
      value: 'a',
    }
  }*/

  /*handleChange = (value) => {
    this.setState({
      value: value,
    })
  }*/

  // componentDidMount() {
  //   console.log('COMPONENT DID MOUNT')
  //   fetchCalendar()
  // }