//import {initialState} from './events'

const events = (state = { view: {isCancelBookingModalOpen: false} }, action) => {

  switch (action.type) {
    case 'OPEN_CANCEL_BOOKING_MODAL':
      return Object.assign({}, state, {
        view: { isCancelBookingModalOpen: true, eventId: action.eventId }
      })

    case 'CLOSE_CANCEL_BOOKING_MODAL':
      return Object.assign({}, state, {
        view: { isCancelBookingModalOpen: false }
      })

    default:
      return state;
  }
}

export default events
