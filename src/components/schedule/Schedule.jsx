// Schedule
import React from 'react'

// Material
// import MobileTearSheet from './MobileTearSheet'
import {List, ListItem} from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import {grey400} from 'material-ui/styles/colors'

// Redux
import { connect } from 'react-redux'

import moment from 'moment'

import CancelBookingModal from './CancelBookingModal'

// Local
import { openCancelBookingModal } from '../../actions'

const Schedule = ({user, schedule, isCancelBookingModalOpen, openCancelBookingModal}) => {

  const formatDate = (date) => 
    moment(date).format('LLLL').toString()

  const prefix = (date) =>
    moment().isBefore(date) ? 'Comienza ' : 'Evento finalizado '

  const fromNow = (date) => 
    prefix(date) + moment(date).fromNow().toString()

  const handleCancelClick = (eventId) => 
    openCancelBookingModal(eventId)

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltip="more"
      tooltipPosition="bottom-left">
      <MoreVertIcon color={grey400} />
    </IconButton>
  )

  const rightIconMenu = (item) => (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem onClick={() => handleCancelClick(item.$id)}>Cancelar turno {item.$id.toString()}</MenuItem>
      <MenuItem>Cambiar de turno</MenuItem>
    </IconMenu>
  )

  //const itemsEl = user.proximosTurnos[0].proximosTurnos.map(item => {
  const itemsEl = schedule ? schedule.map(item => {
    return (
      <div>
        <ListItem key={item.$id.toString()}
          // leftIcon={<CommunicationCall color={indigo500} />}
          // insetChildren={true}
          rightIcon={rightIconMenu(item)}
          primaryText = {formatDate(item.fechahora)}
          secondaryText = {fromNow(item.fechahora)}
        />
      </div>
    )
  }) : <div>No hay turnos asignado</div>

  return (
    <div>
      <List>
        {schedule ?
          itemsEl
        : <div>No hay turnos asignados</div>}
      </List>
      <CancelBookingModal/>
    </div>
  )
}

Schedule.propTypes = {
  user: React.PropTypes.shape({}).isRequired,
  isCancelBookingModalOpen: React.PropTypes.bool,
  openCancelBookingModal: React.PropTypes.func.isRequired
}

export default connect(state => ({
  user: state.user, 
  schedule: state.schedule.activeTurns,
  isCancelBookingModalOpen: state.events.view.isCancelBookingModalOpen
}), {openCancelBookingModal} )(Schedule)
