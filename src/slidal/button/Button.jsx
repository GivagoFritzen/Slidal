import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Button.css'

class Button extends Component {

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired
    }

    render() {
        const { onClick, text } = this.props

        let component = null

        if (text) {
            component = (
                <button className="slidal--button" onClick={onClick}>
                    {text}
                </button>
            )
        }

        return component
    }
}

export default Button;