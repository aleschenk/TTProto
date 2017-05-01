import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Redux
import { connect } from 'react-redux'

import { closeCancelBookingModal } from '../../actions'

const BookModal = ({isCancelBookingModalOpen, closeCancelBookingModal}) => {

  const handleClose = () => {
    // closeBookModal()
  }

  const actions = [
    <FlatButton
      label="Cancelar"
      primary={true}
      onTouchTap={handleClose}
    />,
    <FlatButton
      label="Aceptar"
      primary={true}
      keyboardFocused={true}
      onTouchTap={handleClose}
    />,
  ]

  return (
    <Dialog
      title="Reservar turno"
      actions={actions}
      modal={false}
      open={isCancelBookingModalOpen}
      onRequestClose={handleClose}
    >
      ¿Esta seguro que desea reservar este turno?
    </Dialog>
  )

}

BookModal.propTypes = {
  closeCancelBookingModal: React.PropTypes.func.isRequired,
  isCancelBookingModalOpen: React.PropTypes.bool.isRequired
}

export default connect(state => ({ isCancelBookingModalOpen: state.events.view.isCancelBookingModalOpen }), 
  { closeCancelBookingModal } )(BookModal)
