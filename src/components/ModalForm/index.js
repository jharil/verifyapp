import React from 'react';
import Form from 'components/Form'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-responsive-modal'
import actions from 'actions'

const ModalForm = () => {
  const modal = useSelector(state => state.modal.active)
  const form_data = useSelector(state => state.modal.data)
  const dispatch = useDispatch()
  const closeModal = () => dispatch(actions.modalActions.setActive(false))

  const onSave = (data) => {
    const isEdit = !!data.id // verificamos si es editable o no - también: data.id ? true : false
    if (isEdit) {
      dispatch(actions.linksActions.edit(data))
    } else {
      data.id = Math.random() * (50000 - 4000) + 4000
      dispatch(actions.linksActions.add(data))
    }
    closeModal()
  }

  return ( 
    <Modal
      open={modal}
      onClose={closeModal}
    >
      <p>{form_data.id ? 'Editar' : 'Agregar'} link</p>
      <Form
        data={form_data}
        onSave={onSave}
      />
    </Modal>
   );
}

ModalForm.defaultProps = {
  form_data: {
    link: ''
  }
}

export default ModalForm;