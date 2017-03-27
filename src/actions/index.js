import { post } from '../helpers/fetch.js'

export const login = ({ username, password }) => (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' })
  post({
    url: 'http://api2.tomoturnos.com/api/Login',
    body: { username, password },
    success: 'LOGIN_SUCCESS',
    failure: 'LOGIN_FAILURE',
    dispatch,
  })
}

export const confirmBookingCancelation = ({clienteID, servicioID, fechaHora, razonCancelacion, cancelacionEnum}) => (dispatch) => {
  dispatch({ type: 'CANCEL_BOOKING_REQUEST' })
  post({
    url: 'http://api2.tomoturnos.com/api/Cancelar/Cancel',
    body: { clienteID, servicioID, fechaHora, razonCancelacion, cancelacionEnum},
    success: 'CANCEL_BOOKING_SUCCESS',
    failure: 'CANCEL_BOOKING_FAILURE',
    dispatch,
  })
}

export const openCancelBookingModal = (eventId) => (dispatch) => {
  dispatch({ type: 'OPEN_CANCEL_BOOKING_MODAL', eventId })
}

export const closeCancelBookingModal = () => (dispatch) => {
  dispatch({ type: 'CLOSE_CANCEL_BOOKING_MODAL' })
}
