import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Redux
import { connect } from 'react-redux'

import { closeCancelBookingModal, confirmCancelation } from '../../actions'

const CancelBookingModal = ({isCancelBookingModalOpen, closeCancelBookingModal, cancelBook, confirmCancelation}) => {

  const handleClose = () => {
    closeCancelBookingModal()
  }

  const handleCancelTurn = () => {
    // alert('ClienteID: ' + cancelBook.clienteID);
    confirmCancelation({  clienteID: cancelBook.clienteID
                        , servicioID: cancelBook.servicioID
                        , fechaHora: cancelBook.fechaHora
                        , razonCancelacion: ''
                        , cancelacionEnum: 'c'});
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
      onTouchTap={handleCancelTurn}
    />,
  ]

  return (
    <Dialog
      title="Cancelar turno"
      actions={actions}
      modal={false}
      open={isCancelBookingModalOpen}
      onRequestClose={handleClose}
    >
      ¿Esta seguro que desea cancelar este turno?
    </Dialog>
  )

}

CancelBookingModal.propTypes = {
  closeCancelBookingModal: React.PropTypes.func.isRequired,
  confirmCancelation: React.PropTypes.func.isRequired,
  cancelBook: React.PropTypes.func.isRequired,
  isCancelBookingModalOpen: React.PropTypes.bool.isRequired
}

export default connect(state => ({ 
  isCancelBookingModalOpen: state.events.view.isCancelBookingModalOpen,
  cancelBook: state.events.view.cancelBook
}), 
  { closeCancelBookingModal, confirmCancelation } )(CancelBookingModal)
