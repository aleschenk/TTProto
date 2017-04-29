import { post, postForm, get } from '../helpers/fetch.js'

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

export const fetchInitialData = ({servicios, diaDesde, diaHasta}) => async (dispatch) => {
  dispatch({ type: 'FETCH_INITIAL_DATA' })

  // Promise.all([get({}), get({}), get({})])

  try {
    dispatch({ type: 'FETCH_ACTIVE_TURNS_DATA' })
    const activeTurns = await get({
      url: 'http://api2.tomoturnos.com/api/TurnosOtorgados/GetClienteFull/' + servicios[0].clienteID,
      dispatch,
    })

    console.log("JSON: " + JSON.stringify(activeTurns))

    var formData = new FormData()
    formData.append('servicioID', 4)
    formData.append('diaDesde', diaDesde)
    formData.append('diaHasta', diaHasta)

    dispatch({ type: 'FETCH_CALENDAR_DATA' })
    const calendar = await postForm({
      url: 'http://api2.tomoturnos.com/api/Calendario',
      formData: formData,
      success: 'FETCH_CALENDAR_SUCCESS',
      failure: 'FETCH_CALENDAR_FAILURE',
      dispatch,
    })

    dispatch({ type: 'FETCH_INITIAL_DATA_SUCCESS' })
  } catch (e) {
    dispatch({ type: 'FETCH_INITIAL_DATA_FAILURE' })
  }
}

export const fetchCalendar = ({servicioID, diaDesde, diaHasta}) => (dispatch) => {
  dispatch({ type: 'CALENDAR_REQUEST' })
  var formData = new FormData()
  formData.append('servicioID', servicioID)
  formData.append('diaDesde', diaDesde)
  formData.append('diaHasta', diaHasta)
  postForm({
    url: 'http://api2.tomoturnos.com/api/Calendario',
    formData: formData,
    success: 'CALENDAR_SUCCESS',
    failure: 'CALENDAR_FAILURE',
    dispatch,
  })
}

export const book = ({clientID, servicioID, fechaHora}) => (dispatch) => {
  dispatch({ type: 'BOOKING_REQUEST' })
  var formData = new FormData()
  formData.append('clienteID', clientID)
  formData.append('servicioID', servicioID)
  formData.append('fechaHora', fechaHora)
  postForm({
    url: 'http://api2.tomoturnos.com/api/Convencional',
    formData: formData,
    success: 'BOOKING_SUCCESS',
    failure: 'BOOKING_FAILURE',
    dispatch,
  })
}

export const confirmCancelation = ({clienteID, servicioID, fechaHora, razonCancelacion, cancelacionEnum}) => (dispatch) => {
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
