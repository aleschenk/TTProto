const user = (state = {}, action) => {

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state

    case 'LOGIN_SUCCESS':
      console.log('LOGIN_SUCCESS')
      localStorage.setItem('auth_token', action.data.access_token)
      return Object.assign({}, state, action.data )
      //return action.data

    case 'LOGIN_FAILURE':
      return {}

    default:
      return state;
  }
}

export default user
