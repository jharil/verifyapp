import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const Item = ({ onEdit, onDelete, item: { link, danger, provider } }) => {
  return (
    <div className={`componentItem componentItem-identify ${danger && ('componentItem-identify--red')}`}>
      <span className="title">{danger ? 'ENLACE NO CONFIABLE' : 'ENLACE CONFIABLE'}</span>
      {
        danger ? (
          <span className="link">{link}</span>
        ) : (
            <>
              <a className="link" href={link} target="_blank">{link}</a>
              <span className="provider"><b>Ofrecido por:</b> {provider}</span>
            </>
          )
      }
      <div className="componentItem-actions">
        <span className="componentItem-actions--edit" onClick={onEdit}>Editar</span>
        <span className="componentItem-actions--delete" onClick={onDelete}>Eliminar</span>
      </div>
    </div>
  )
}

Item.defaultProps = {
  item: {
    link: '',
    danger: false,
    provider: ''
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
}
export default Item;