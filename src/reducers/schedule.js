const schedule = (state = {}, action) => {

  switch (action.type) {
    case 'CALENDAR_REQUEST':
      console.log('CALENDAR_REQUEST')
      return state

    case 'CALENDAR_SUCCESS':
      return Object.assign({}, state, action.data )

    case 'CALENDAR_FAILURE':
      return {}

    case 'FETCH_INITIAL_DATA_SUCCESS':
      return Object.assign({}, state, {activeTurns: action.activeTurns}, {calendar: action.calendar} )

    default:
      return state;
  }
}

export default schedule
