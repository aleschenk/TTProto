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

export const fetchActiveTurns = ({}) => (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' })
  get({
    url: 'http://api2.tomoturnos.com/api/EditarPerfil/Pendientes/167',
    body: { username, password },
    success: 'LOGIN_SUCCESS',
    failure: 'LOGIN_FAILURE',
    dispatch,
  })

// RESPONSE:
// {"$id":"1","clienteID":167,"turnosRecupero":0,"turnosFijosConsumidos":0,"turnosFijosRestantes":10,
// "turnosLibresTomados":0,"turnosLibresATomar":0,"turnosLibresConsumidos":0,"turnosPerdidos":0,
// "turnosRecuperadosTomados":0,"turnosRecuperadosATomar":5,"turnosRecuperadosConsumidos":0,
// "turnosARecuperar":5,"turnosLibresTomadosFoto":0,"turnosRecuperadosTomadosFoto":0,
// "turnosCanceladosFoto":0,"importePago":650.0,"pagoFuturo_importePago":null,
// "pagoFuturo_inicioActividades":null,"pagoFuturo_finActividades":null,"turnosConsumidos":0,
// "turnosTomadosRestantes":10,"turnosPorTomar":5,"turnosProximosAVencer":5,"creditoRetenidoProxPeriodo":0,
// "turnosACreditoProxPeriodo":0,"proximoPago":"2017-03-31T00:00:00"}
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
