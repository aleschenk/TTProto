import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// Redux
import { connect } from 'react-redux'

import { closeBookModal, bookTurn } from '../../actions'

const BookModal = ({ isBookModalOpen, closeBookModal, bookTurn, book}) => {

  const handleClose = () => {
    closeBookModal()
  }

  const handleBook = () => {
    bookTurn({clienteID: book.clienteID, servicioID: book.servicioID, fechaHora: book.fechaHora})
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
  isBookModalOpen: state.events.view.isBookModalOpen,
  book: state.events.view.book }), 
  { closeBookModal, bookTurn } )(BookModal)
