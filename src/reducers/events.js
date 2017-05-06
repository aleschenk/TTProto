//import {initialState} from './events'

const events = (state = { view: {isCancelBookingModalOpen: false, isBookModalOpen: false} }, action) => {

  switch (action.type) {
    case 'OPEN_CANCEL_BOOKING_MODAL':
      return Object.assign({}, state, {
        view: { isCancelBookingModalOpen: true, eventId: action.eventId }
      })

    case 'CLOSE_CANCEL_BOOKING_MODAL':
      return Object.assign({}, state, {
        view: { isCancelBookingModalOpen: false }
      })

    case 'OPEN_BOOK_MODAL':
      return Object.assign({}, state.view, {
        view: { isCancelBookingModalOpen: false, isBookModalOpen: true, book: {servicioID: action.servicioID, clienteID:action.clienteID, fechaHora:action.fechaHora} }
      })

    case 'CLOSE_BOOK_MODAL':
      return Object.assign({}, state, {
        view: { isCancelBookingModalOpen: false, isBookModalOpen: false }
      })



    default:
      return state;
  }
}

export default events
