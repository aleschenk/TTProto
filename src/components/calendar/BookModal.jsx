import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Redux
import { connect } from 'react-redux'

import { closeBookgModal } from '../../actions'

const BookModal = ({ isBookModalOpen, closeBookgModal, book}) => {

  const handleClose = () => {
    // closeBookModal()
  }

  const handleBook = () => {
    console.log('XXXXXXXXXXX')
    // book({clientID, servicioID, fechaHora})
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
      onTouchTap={handleBook}
    />,
  ]

  return (
    <Dialog
      title="Reservar turno"
      actions={actions}
      modal={false}
      open={isBookModalOpen}
      onRequestClose={handleClose}
    >
      ¿Esta seguro que desea reservar este turno?
    </Dialog>
  )

}

BookModal.propTypes = {
  closeBookModal: React.PropTypes.func.isRequired,
  isBookModalOpen: React.PropTypes.bool.isRequired
}

export default connect(state => ({ 
  isCancelBookingModalOpen: state.events.view.isCancelBookingModalOpen,
  book: state.events.view.book }), 
  { closeBookgModal } )(BookModal)
