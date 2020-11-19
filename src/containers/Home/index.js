import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-responsive-modal'
import Search from 'components/Search'
import Item from 'components/Item'
import Button from 'components/Button'
import ModalForm from 'components/ModalForm'
import actions from 'actions'
import { converToDomain } from 'utils/utils'
import './index.scss'

export default () => {
  const list = useSelector(state => state.links.list)
  const dispatch = useDispatch()

  const [form, setForm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [modalSuccess, setmodalSuccess] = useState(false)
  const [modalDanger, setmodalDanger] = useState(false)
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)

    /**
     * fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
          posts: json,
          posts_loading: false
        })
      })
     */
  }, [])

  const sendToVerify = (value) => {
    const findByLink = list.find(e => converToDomain(e.link) === converToDomain(value))
    if(findByLink){
      if(findByLink.danger){
        setmodalDanger(true)
      } else {
        setmodalSuccess(true)
      }
    } else {
      setForm(true)
    }
  }

  const renderList = () => {
    if (loading) {
      return 'Cargando links'
    }
    if(list.length === 0) {
      return 'No hay links disponibles :('
    }
    return list.map(e => (
      <Item 
        key={e.id} 
        item={e} 
        onEdit={() => {
          dispatch(actions.modalActions.setData(e))
        }}
        onDelete={() => {
          dispatch(actions.linksActions.del(e.id))
        }}
       />
    ))
  }

  const addLink = () => {
    dispatch(actions.modalActions.setActive(true))
    dispatch(actions.modalActions.setDefault())
  }

  return (
    <div className="main">
      <div className="main-container">
        <div className="main-container-header">
          <h1>#QuedateEnCasa</h1>
          <p>Debido a la cantidad de sitios web fraudes que han surgido en el contexto actual de Covid-19, queremos 
            ayudarte a que tu información no llegue a las manos equivocadas. <br />
            Ingresa el enlace y nos encargaremos de verificar por ti:
          </p>

          <Search submit={sendToVerify} />
        </div>

        <div className="main-container-block">
          <div className="main-container-block-left">
            {
              renderList()
            }
          </div>
          <div className="main-container-block-right">
            <Button text="Añadir link" onClick={addLink} />
          </div>
        </div>
      </div>
      
      <Modal
        open={form}
        onClose={() => setForm(false)}
      >
        <p className="modal--success">¡Solicitud enviada!</p>
        <p>Vuelve a visitarnos en <b>10 minutos</b> mientras hacemos el seguimiento del enlace.</p>
      </Modal>
      
      <Modal
        open={modalSuccess}
        onClose={() => setmodalSuccess(false)}
      >
        <p className="modal--success">¡Link confiable!</p>
        <p>El link ingresado es confiable.</p>
      </Modal>
      
      <Modal
        open={modalDanger}
        onClose={() => setmodalDanger(false)}
      >
        <p className="modal--danger">¡Link <b>NO</b> confiable!</p>
        <p>El link ingresado NO es confiable.</p>
      </Modal>

      <ModalForm />
    </div>
  );
}