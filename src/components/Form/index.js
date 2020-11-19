import React from 'react';

import Button from 'components/Button'
import { validURL } from 'utils/utils' 
import './index.scss'

class Form extends React.Component {
    state = { 
        link: this.props.data.link,
        id: this.props.data.id,
        danger: this.props.data.danger,
        provider: this.props.data.provider
    }

    updateState = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    render() { 
        const {
            link,
            danger,
            provider,
            id
        } = this.state

        return (<div className="formComponent">
            <div>
                <input
                    value={link}
                    onChange={(e) => this.updateState('link', e.target.value)}
                    placeholder="Link" />
                {
                    link.length >= 1 && !validURL(link) && (
                        <div className="componentSearch--danger">Ingresa una URL válida</div>
                    )
                }
            </div>

            <input
                value={provider}
                onChange={(e) => this.updateState('provider', e.target.value)}
                placeholder="Fuente" />

            <div>
                <input 
                    id="checkboxDanger"
                    type="checkbox" 
                    checked={danger} 
                    onChange={(e) => this.updateState('danger', !danger)} 
                    />
                <label htmlFor="checkboxDanger">Potencialmente peligroso</label>
            </div>

            <Button 
                disabled={!validURL(link)}
                text={id ? 'Editar' : 'Agregar'} 
                onClick={() => this.props.onSave(this.state)} />
        </div>);
    }
}


export default Form;