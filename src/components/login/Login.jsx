// React
import React from 'react';

// Redux
import { connect } from 'react-redux'

// Material-Ui
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// React Router
import { Redirect } from 'react-router-dom'

// Local
import { login } from '../../actions'

const style = {
  margin: 12,
}

const Login = ({ user, login }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username: { value: username }, password: { value: password } } = e.target
    login({ username, password })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField name="username" type="text" floatingLabelText="Email" value="angeles@a"/><br />
      <TextField name="password" type="password" floatingLabelText="Password" value="1"/><br />
      <RaisedButton type="submit" label="Log In" primary={true} style={style}/>
      {user.access_token &&  <Redirect to="/" />}
    </form>
  )
}

Login.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  login: React.PropTypes.func.isRequired
}

// const mapStateToProps = state => ({ user: state.user })

export default connect(state => ({ user: state.user }), { login } )(Login)


/*
const mapDispatchToProps = dispatch => ({
   // onLoginClick: () => { dispatch(loginAction('angeles@a', '1')) }
   onLoginClick: () => { login('angeles@a', '1') }
})*/
