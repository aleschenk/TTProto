import React from 'react'
import '../styles/index.scss'

// Redux
import { connect } from 'react-redux'

// React Router
import {Route, Redirect} from 'react-router-dom'

// Material
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

// Views
import Login from './components/login/Login'
import Home from './components/home/Home'

const Header = () => (
  <AppBar title="Tomo Turnos" iconClassNameRight="muidocs-icon-navigation-expand-more" />
)

const App = ({ user }) => (
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <div>
      <Header/>
      {user.access_token ? <Route path="/" component={Home} /> : <Redirect to="/login" />}
      <Route path="/login" component={Login}/>
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(App)
