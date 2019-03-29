import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransitionGroup } from 'react-transition-group'
import LeftArrow from './images/left-arrow.svg'
import RightArrow from './images/right-arrow.svg'


import Button from './button/Button'
import Card from './card/Card'
import Modal from './modal/Modal'

import './Slidal.css'

class Slidal extends Component {

    static propTypes = {
        amountCardMobile: PropTypes.number.isRequired,
        amountCardTablet: PropTypes.number.isRequired,
        amountCardDesktop: PropTypes.number.isRequired,

        showButton: PropTypes.bool,
        title: PropTypes.string
    }

    state = {
        currentIndex: 0,
        animationDirection: 'left',
        item: null,
        showModal: false,
        subModal: false
    }

    closeModal() {
        const { item, subModal } = this.state

        if ((item !== null && item !== undefined) || subModal) {
            this.setState(() => ({ item: null, subModal: false }))
        }
        else {
            this.setState(() => ({ item: null, showModal: false }))
        }
    }

    _getAmountCard() {
        const { amountCardMobile, amountCardTablet, amountCardDesktop } = this.props

        const resolution = this._getResolution()
        const x = resolution[0]

        let currentAmount = amountCardDesktop
        if (x <= 425) {
            currentAmount = amountCardMobile
        }
        else if (x <= 768) {
            currentAmount = amountCardTablet
        }

        return currentAmount
    }

    _getResolution() {
        const w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth,
            y = w.innerHeight || e.clientHeight || g.clientHeight;

        return [x, y]
    }

    _getSlideDirection() {
        const { animationDirection } = this.state
        
        if (animationDirection === 'left') {
            return "slide--transition--right"
        }
        else {
            return "slide--transition--left"
        }
    }

    _goToPrevSlide = () => {
        const size = this.props.children.length
        const { currentIndex } = this.state
        const currentAmount = this._getAmountCard();

        if (((currentIndex + 1) * currentAmount) > currentAmount) {
            this.setState(() => ({ currentIndex: currentIndex - 1, animationDirection: 'left' }))
        }
        else {
            const lastCard = Math.ceil(size / ((currentIndex + 1) * currentAmount));
            this.setState(() => ({ currentIndex: (lastCard - 1), animationDirection: 'left' }))
        }
    }

    _goToNextSlide = () => {
        const size = this.props.children.length
        const { currentIndex } = this.state
        const currentAmount = this._getAmountCard();

        if (((currentIndex + 1) * currentAmount) < size) {
            this.setState(() => ({ currentIndex: currentIndex + 1, animationDirection: 'right' }))
        }
        else {
            this.setState(() => ({ currentIndex: 0, animationDirection: 'right' }))
        }
    }

    render() {
        const { item, showModal, subModal } = this.state
        const { children, title, showButton } = this.props

        return (
            <div className="slidal">
                {(showModal || subModal) ?
                    <Modal showModal
                        item={item}
                        children={children}
                        openSubModal={() => this.setState(() => ({ subModal: true }))}
                        closeModal={() => this.closeModal()} />
                    : null}

                {title ? <h1>{title}</h1> : null}

                <div className="slider">
                    {this.renderSlider()}
                </div>

                <div className="arrows">
                    <img src={LeftArrow} className="arrow" alt="Leaft Arrow" onClick={this._goToPrevSlide} />
                    {showButton ? <Button text="Ver mais" onClick={() => this.setState(() => ({ showModal: true }))} /> : null}
                    <img src={RightArrow} className="arrow" alt="Right Arrow" onClick={this._goToNextSlide} />
                </div>
            </div>
        );
    }

    renderSlider() {
        const children = this.props.children
        const { currentIndex } = this.state
        const currentAmount = this._getAmountCard();

        let component = null

        if (currentAmount) {
            component = (
                <CSSTransitionGroup
                    transitionName={this._getSlideDirection()}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>

                    {React.Children.map(children, (child, i) => {
                        if (i < ((currentIndex + 1) * currentAmount) &&
                            i >= ((currentIndex) * currentAmount)) {
                            if (child.type === Card) {
                                return React.cloneElement(child, { showModal: () => this.setState(() => ({ item: child, subModal: true })) })
                            }

                            return child
                        }
                    })}
                </CSSTransitionGroup>
            )
        }

        return component
    }
}

Slidal.Card = Card;
export default Slidal;