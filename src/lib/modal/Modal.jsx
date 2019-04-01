import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import CloseButton from '../images/cancel.svg'

import Card from '../card/Card'

import './Modal.css'

class Modal extends React.Component {

    static propTypes = {
        closeModal: PropTypes.func.isRequired,
        item: PropTypes.element,
        openSubModal: PropTypes.func.isRequired
    }

    state = {
        subItem: null
    }

    _handleKeyEventHideRef = this._handleKeyEventModalHide.bind(this)

    componentDidMount() {
        document.addEventListener('keyup', this._handleKeyEventHideRef)
        document.onkeydown = e => e.preventDefault()
    }

    _closeModal() {
        const { subItem } = this.state
        const { closeModal } = this.props

        if (!subItem) {
            document.removeEventListener('keyup', this._handleKeyEventHideRef)
            document.onkeydown = null
        }
        else {
            this.setState(() => ({ subItem: null }))
        }

        if (typeof (closeModal) === 'function') {
            closeModal()
        }
    }

    _handleClickOverlayHide(event) {
        if (event.target === event.currentTarget) {
            this._closeModal()
        }
    }

    _handleKeyEventModalHide(e) {
        const keyCode = e.keyCode

        if (keyCode === 27) {
            this._closeModal()
        }
    }

    render() {
        const { showModal } = this.props

        if (showModal) {
            return ReactDOM.createPortal(
                <div className="slidal--modal" onClick={event => this._handleClickOverlayHide(event)}>
                    <div className="content">
                        <img src={CloseButton} className="close--button" alt="close button" onClick={() => this._closeModal()} />
                        {this.renderContent()}
                    </div>
                </div>,
                document.body
            );
        }
        else {
            return null;
        }
    }

    renderContent() {
        const { subItem } = this.state
        const { children, item, openSubModal } = this.props

        if ((item !== null && item !== undefined) ||
            subItem !== null) {
            return subItem ? React.cloneElement(subItem) : React.cloneElement(item)
        }
        else {
            return React.Children.map(children, child => {
                if (child.type === Card) {
                    return React.cloneElement(child, { showModal: () => { openSubModal(); this.setState(() => ({ subItem: child })) } })
                }

                return child
            })
        }
    }
}

export default Modal;
