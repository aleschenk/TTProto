const user = (state = {}, action) => {

  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('LOGIN_SUCCESS')
      return action.data

    case 'LOGIN_FAILURE':
      return {}

    default:
      return state;
  }
}

export default user
