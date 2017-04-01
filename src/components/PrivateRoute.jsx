import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    // setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    // setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => (
    props.user.access_token ? 
      React.createElement(component, props)
     : 
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
  )}/>
)

// PrivateRoute.propTypes = {
  // user: React.PropTypes.shape({}).isRequired
// }

export default connect(state => ({ user: state.user }), { } )(PrivateRoute)

// export default PrivateRoute