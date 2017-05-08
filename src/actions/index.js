import { post, postForm, postForm2, get } from '../helpers/fetch.js'

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
    // dispatch({ type: 'FETCH_ACTIVE_TURNS_DATA' })

    // Obtener los turnos activos del cliente.
    // No es necesario iterar por los servicios del cliente (servicios[..]). Todos los servicios devuelven
    // el mismo resultado.
    const activeTurns = await get({
      url: 'http://api2.tomoturnos.com/api/TurnosOtorgados/GetClienteFull/' + servicios[0].clienteID,
      dispatch,
    })

    // console.log("ACTIVE_TURNS: " + JSON.stringify(activeTurns))
    console.log('DIA_DESDE:   ' + diaDesde)
    console.log('DIA_HASTA:   ' + diaHasta)

    var formData = new FormData()
    formData.append('servicioID', 4)
    formData.append('diaDesde', diaDesde)
    formData.append('diaHasta', diaHasta)

    // dispatch({ type: 'FETCH_CALENDAR_DATA' })
    const calendar = await postForm2({
      url: 'http://api2.tomoturnos.com/api/Calendario',
      formData: formData,
      dispatch,
    })

    // Ugly Hack:
    calendar.servicioID = 4
    calendar.clienteID = servicios[0].clienteID

    dispatch({ type: 'FETCH_INITIAL_DATA_SUCCESS', activeTurns, calendar })
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

export const bookTurn = ({clienteID, servicioID, fechaHora}) => (dispatch) => {
  //dispatch({ type: 'BOOKING_REQUEST' })
  var formData = new FormData()
  formData.append('clienteID', clienteID)
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

export const openCancelBookingModal = ({clienteID, servicioID, fechaHora}) => (dispatch) => {
  dispatch({ type: 'OPEN_CANCEL_BOOKING_MODAL', clienteID, servicioID, fechaHora })
}

export const closeCancelBookingModal = () => (dispatch) => {
  dispatch({ type: 'CLOSE_CANCEL_BOOKING_MODAL' })
}

export const openBookModal = ({servicioID, clienteID, fechaHora }) => (dispatch) => {
  dispatch({ type: 'OPEN_BOOK_MODAL', servicioID, clienteID, fechaHora})
}

export const closeBookModal = () => (dispatch) => {
  dispatch({ type: 'CLOSE_BOOK_MODAL' })
}
