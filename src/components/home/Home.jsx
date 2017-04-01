import React from 'react'
import '../../../styles/index.scss'

// Redux
import { connect } from 'react-redux'

// React Router
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'

// Material
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import DatePicker from 'material-ui/DatePicker'

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

class Menu extends React.Component {
/*
  constructor(props) {
    super(props)
    this.state = {
      value: 'a',
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }
*/
  render() {
    return (
      <Tabs>
        <Tab label="Agenda" value="a" >
          <div>
            <Events/>
          </div>
        </Tab>
        <Tab label="Agendar nuevo turno" value="b">
          <div>
            <p>
              Información importante: CLASE DE STRETCHING Martes y Jueves 14hs Por favor al momento de cancelar una clase tené en cuenta hacerlo con tres horas de anticipación o más para poder recuperar. En caso de que no puedas hacerlo ahora hay una opción de aviso de ausencia para que puedas ceder tu turno a otra persona. Las clases de la mañana comienzan 08:10, 09:10, 10:10 y 11.10hs Gracias UP
            </p>
          </div>
        </Tab>
      </Tabs>
    )
  }
}

const Home = ({ user }) => (
  user.access_token ? 
    <Menu/> : 
    <Redirect to="/login"/>
)

Home.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
