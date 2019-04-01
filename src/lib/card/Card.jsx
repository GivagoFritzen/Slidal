import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

class Card extends React.Component {

    static propTypes = {
        showModal: PropTypes.func,
    }

    _openModal() {
        const { showModal } = this.props

        if (typeof (showModal) === 'function') {
            showModal()
        }
    }

    render() {
        const children = this.props.children

        return (
            <div className="slidal--card" onClick={() => this._openModal()}>
                {React.Children.map(children, (child) => {
                    return child
                })}
            </div>
        )
    }
}

export default Card;