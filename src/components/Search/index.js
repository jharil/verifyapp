import React, { useState } from 'react'
import Button from 'components/Button'
import { validURL } from 'utils/utils' 
import './index.scss'

const Search = (props) => {
    const [value, setValue] = useState('')

    const renderErrorLink = () => {
      if (value.length >= 1 && !validURL(value)) return <div className="componentSearch--danger">Ingresa una URL válida</div>
    }

    return <div className="componentSearch">
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="http://google.com"/>
      {
        renderErrorLink()
      }
      <Button disabled={!validURL(value)} onClick={()=>props.submit(value)} style={{marginTop: 23}} text="VERIFICAR" />
    </div>
}
 
export default Search;