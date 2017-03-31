import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// import throttle from 'lodash/throttle'
import { routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'
// import { loginWithToken } from './actions'
// import { saveState, loadState } from './helpers'


const initialStateOnlyForTest = {
    user:{
    "$id": "1",
    "versionNumber": 106,
    "access_token": "01eJu1Kl8biBPge8rk6-FmkE7JFS9Dm0kQI5WPhsOI6D1M1PQusolmrCi5gkLknWIPETRK-5FuIMFPhFFq0sLAfy9-ND4QdSYABc5P--K_a3rKV6AUvw3cUDYg205hSuZFy2pA5jktaZf0AxzpA49yolQZfWb9l40Y4csE-2v5dwHJlV7fTgZZeQPgOhCwpedkwWuC8fwOxnQ9Gzu6UtT2QaiZ2IBhcNFucvsm7M4IaOJuyP8cF-P54FlMoCDwKFhbylsoIBEAml4lY7dFz3A5qn9QjtBfuP-RfClMkLKxizSIfvDh_GzG9rJHu73lmK3y8eHT1_TpgEa88YbBE4h1gNE4OxcyWYT3pow963VcQMVBXNQqwOEV-15OlT2_rXL9Pk0N29b45s6q2xrYlMqATgFNoqJqx9OP8ZMdnSvikDzfy7Za2auQEgiNgGqN97",
    "permisos": [
        "tomar_y_cancelar_turnos",
        "turnos",
        "notificaciones",
        "ver_listas_full"
    ],
    "persona": {
        "$id": "2",
        "ID": 1194,
        "nombre": "Angeles White",
        "email": "angalaa@a",
        "emailAlternativo": null,
        "telefono": null,
        "celular": "1160390770",
        "alias": null,
        "dni": null,
        "fechaNacimiento": null,
        "acercaDe": null,
        "direccion": null,
        "website": null,
        "emailActivado": false,
        "sch_frecuencia": 0,
        "sch_diasprevios": 0,
        "sch_diasadelante": 7,
        "profesion": null,
        "telefonoTrabajo": null,
        "fechaCreacion": "2016-08-19T00:00:00",
        "grupoSanguineo": null,
        "alergias": null,
        "alertaMedica": null,
        "esHombre": null,
        "telefonoEmergenciaContacto": null
    },
    "empresas": [
        {
            "$id": "3",
            "accion_minprevturno": 10,
            "accion_horasatrasasistencia": 72,
            "accion_horasatrascancelar8": 1,
            "accion_horasatrascancelar9": 2,
            "accion_horasatrascancelar10": 3,
            "ui_calendarioFechaMin": "2017-03-05T12:25:17.0608712Z",
            "ui_calendarioFechaMax": "2017-04-02T12:25:17.0608712Z",
            "ID": 1,
            "persona": {
                "$id": "4",
                "ID": 5,
                "nombre": "Universo Pilates",
                "email": "aava@universo-pilates.com.ar",
                "emailAlternativo": null,
                "telefono": "011-3220-6643",
                "celular": null,
                "alias": "universopilates",
                "dni": null,
                "fechaNacimiento": null,
                "acercaDe": "Universo Pilates es una empresa dedicada al bienestar corporal. \nDictamos clases de pilates reformer con profesores capacitados en el área de educación física y área de danza y yoga.\nNuestro objetivo es lograr que cada alumno incorpore como rutina diaria esta técnica para mejorar su calidad de vida.\nTambién complementamos el método pilates con técnicas de masajes descontracturantes, relajantes, piedras calientes, reflexología, y tratamientos de estética( Electrodos, drenanje linfático, masaje reductor).",
                "direccion": "Boulevard de todos los santos 100 1° piso Local 13 Villa Nueva Nuevo Delta Tigre",
                "website": "www.universo-pilates.com.ar",
                "emailActivado": false,
                "sch_frecuencia": null,
                "sch_diasprevios": null,
                "sch_diasadelante": null,
                "profesion": null,
                "telefonoTrabajo": null,
                "fechaCreacion": null,
                "grupoSanguineo": null,
                "alergias": null,
                "alertaMedica": null,
                "esHombre": null,
                "telefonoEmergenciaContacto": null
            },
            "rubro": "Actividades Físicas",
            "subRubro": "Pilates",
            "subRubro_esMultiple": false,
            "cantMaximaCancelaciones": 30,
            "cantMaxSemanasFuturosTurnoLibre": 2,
            "diasPreviosParaPagar": 0,
            "diasDePerdon": 7,
            "permiteCancelarTurnosRecuperados": true,
            "TieneMercadoPago": false,
            "MP_clientID": null,
            "MP_clientSecret": null,
            "pagoPorAnticipado": true,
            "envioemails": true,
            "traspasoTurnosPeriodoSiguiente": false,
            "Servicios": [
                {
                    "$id": "5",
                    "clienteID": 167,
                    "ID": 4,
                    "Descripcion": "Pilates Reformer",
                    "paseLibreServID": 0,
                    "Detalle": "Dictamos clases de pilates reformer en grupos reducidos de 5 personas.\nPodrán tomar clases de pilates, personas de todas las edades, ambos sexos y embarazadas que hayan cumplido las primeras 12 semanas de embarazo, así como también personas con diferentes patologías.\nEl método Pilates te permitirá trabajar el cuerpo de manera integral, fortaleciendo todas las cadenas musculares combinando cada ejercicio con la respiración. Como resultado de esta práctica constante notarás cambios a nivel físico como mejor postura, mayor flexibilidad y tonicidad en los músculos. Al liberar tensiones sentirás que tu humor mejorará positivamente y te acompañará un estado de bienestar corporal.",
                    "InfoUsuarios": "CLASE DE STRETCHING Martes y Jueves 14hs \nPor favor al momento de cancelar una clase tené en cuenta hacerlo con tres horas de anticipación o más para poder recuperar. En caso de que no puedas hacerlo ahora hay una opción de aviso de ausencia para que puedas ceder tu turno a otra persona. \nLas clases de la mañana comienzan 08:10, 09:10, 10:10 y 11.10hs\nGracias UP",
                    "imagenFondo": "mariana@a/fondo.jpg",
                    "imagenLogo": "mariana@a/logo.jpg",
                    "precio": null,
                    "imagenServicioGenerico": "genericos/servicios/Pilates_Reformer.png",
                    "imagenServicioCustom": "mariana@a/Pilates_Reformer/foto.png",
                    "imagenServicioCustomFixed": "mariana@a/pilates_reformer/foto_fix.jpg",
                    "imagenServicioGenericoFixed": "genericos/servicios/pilates_reformer_fix.jpg",
                    "imagenEmpresaServicioFixed": "mariana@a/logo_fix.jpg",
                    "tipoServicio": "Pilates Reformer",
                    "duracionMinutos": 60,
                    "turnosSimultaneos": 5,
                    "diasAtencionLegible": "Lunes a Viernes de 8 a 12hs y 18 a 21hs / Lunes y Viernes 14 a 16hs  / Martes 14, 15 hs / Miércoles 14 y 15 hs / Jueves  14 y 15hs / Sábado de 9 a 12hs",
                    "verTurnosFueradeHorario": true,
                    "reservarTurnoMovilConLugarMinimo": null,
                    "permitirAutogestion": true,
                    "duracionPrestacionDeServicioMin": 60,
                    "noticias": []
                }
            ],
            "noticias": []
        }
    ],
    "usuarioID": 1190,
    "ahora": "2017-03-19T12:25:17.0608712Z",
    "rubros": null,
    "config": {
        "$id": "6",
        "usuario": null,
        "idUsuario": 1190,
        "verHoy": false,
        "fechaInicio": "2017-03-19T12:25:17.0764968Z",
        "fechaFin": "2017-04-02T12:25:17.0764968Z",
        "verServicioActual": false,
        "verFiltroEstados": true,
        "filtroEstadoActivo": true,
        "filtroEstadoCancelado": true,
        "filtroEstadoAtendido": true,
        "filtroEstadoAusente": true,
        "filtroEstadoAnulado": true,
        "sendSchedule": 0,
        "lastTimeSendSchedule": null,
        "diasAtrasSendSchedule": 0,
        "diasAdelanteSendSchedule": 7,
        "calendarioHorariosAlineados": false,
        "verTodosLosClientes": null
    },
    "proximosTurnos": [
        {
            "$id": "7",
            "servicioID": 4,
            "proximosTurnos": [
                {
                    "$id": "8",
                    "turnoID": 148764,
                    "fecha": "2017-03-21T00:00:00",
                    "hora": "09:00:00",
                    "fechahora": "2017-03-21T09:00:00",
                    "clienteID": 167,
                    "nombreCliente": "Angeles White",
                    "conFrecuencia": true,
                    "estadoTurno": "activo",
                    "esRecupero": false,
                    "esVip": false,
                    "puedeCancelar": true,
                    "empresaNombre": "Universo Pilates",
                    "servicioNombre": "Pilates Reformer",
                    "servicioID": 4,
                    "motivoCancelacion": null,
                    "motivoTurno": null,
                    "fechahoraCreacion": "2017-02-16T14:37:00",
                    "nombreAdmin": "Mariana",
                    "tiporeserva": 2,
                    "autogestion": false
                },
                {
                    "$id": "9",
                    "turnoID": 148767,
                    "fecha": "2017-03-24T00:00:00",
                    "hora": "09:00:00",
                    "fechahora": "2017-03-24T09:00:00",
                    "clienteID": 167,
                    "nombreCliente": "Angeles White",
                    "conFrecuencia": true,
                    "estadoTurno": "activo",
                    "esRecupero": false,
                    "esVip": false,
                    "puedeCancelar": true,
                    "empresaNombre": "Universo Pilates",
                    "servicioNombre": "Pilates Reformer",
                    "servicioID": 4,
                    "motivoCancelacion": null,
                    "motivoTurno": null,
                    "fechahoraCreacion": "2017-02-16T14:37:00",
                    "nombreAdmin": "Mariana",
                    "tiporeserva": 2,
                    "autogestion": false
                },
                {
                    "$id": "10",
                    "turnoID": 148766,
                    "fecha": "2017-03-28T00:00:00",
                    "hora": "09:00:00",
                    "fechahora": "2017-03-28T09:00:00",
                    "clienteID": 167,
                    "nombreCliente": "Angeles White",
                    "conFrecuencia": true,
                    "estadoTurno": "activo",
                    "esRecupero": false,
                    "esVip": false,
                    "puedeCancelar": true,
                    "empresaNombre": "Universo Pilates",
                    "servicioNombre": "Pilates Reformer",
                    "servicioID": 4,
                    "motivoCancelacion": null,
                    "motivoTurno": null,
                    "fechahoraCreacion": "2017-02-16T14:37:00",
                    "nombreAdmin": "Mariana",
                    "tiporeserva": 2,
                    "autogestion": false
                }
            ]
        }
    ]
}}

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const emptyInitialState = {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware()

export const store = createStore(rootReducer, emptyInitialState,
    composeEnhancers(
        applyMiddleware(thunk, logger, middleware)
    )
)

// store.subscribe(throttle(() => saveState(store.getState()), 1000))
// store.dispatch(loginWithToken())
