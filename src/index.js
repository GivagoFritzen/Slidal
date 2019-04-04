import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import LeftArrow from './images/left-arrow.svg'
import RightArrow from './images/right-arrow.svg'
import CloseButton from './images/cancel.svg'

import './styles.css'

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
        <button className='slidal--button' onClick={onClick}>
          {text}
        </button>
      )
    }

    return component
  }
}

class Card extends Component {
  static propTypes = {
    children: PropTypes.node,
    showModal: PropTypes.func
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
      <div className='slidal--card' onClick={() => this._openModal()}>
        {React.Children.map(children, (child) => {
          return child
        })}
      </div>
    )
  }
}

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    closeModal: PropTypes.func.isRequired,
    item: PropTypes.element,
    openSubModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool
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
    } else {
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
        <div className='slidal--modal' onClick={event => this._handleClickOverlayHide(event)}>
          <div className='content'>
            <img src={CloseButton} className='close--button' alt='close button' onClick={() => this._closeModal()} />
            {this.renderContent()}
          </div>
        </div>,
        document.body
      )
    } else {
      return null
    }
  }

  renderContent() {
    const { subItem } = this.state
    const { children, item, openSubModal } = this.props

    if ((item !== null && item !== undefined) ||
      subItem !== null) {
      return subItem ? React.cloneElement(subItem) : React.cloneElement(item)
    } else {
      return React.Children.map(children, child => {
        if (child.type === Card) {
          return React.cloneElement(child, { showModal: () => { openSubModal(); this.setState(() => ({ subItem: child })) } })
        }

        return child
      })
    }
  }
}

class Slidal extends Component {
  static propTypes = {
    amountCardMobile: PropTypes.number.isRequired,
    amountCardTablet: PropTypes.number.isRequired,
    amountCardDesktop: PropTypes.number.isRequired,
    children: PropTypes.node,
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
    } else {
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
    } else if (x <= 768) {
      currentAmount = amountCardTablet
    }

    return currentAmount
  }

  _getResolution() {
    // eslint-disable-next-line one-var
    const w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight

    return [x, y]
  }

  _getSlideDirection() {
    const { animationDirection } = this.state

    if (animationDirection === 'left') {
      return 'slide--transition--right'
    } else {
      return 'slide--transition--left'
    }
  }

  _goToPrevSlide = () => {
    if (this.props.children !== undefined && this.props.children !== null) {
      const size = this.props.children.length || this.props.children.props.children.length
      const { currentIndex } = this.state
      const currentAmount = this._getAmountCard()

      if (((currentIndex + 1) * currentAmount) > currentAmount) {
        this.setState(() => ({ currentIndex: currentIndex - 1, animationDirection: 'left' }))
      } else {
        const lastCard = Math.ceil(size / ((currentIndex + 1) * currentAmount))
        this.setState(() => ({ currentIndex: (lastCard - 1), animationDirection: 'left' }))
      }
    }
  }

  _goToNextSlide = () => {
    if (this.props.children !== undefined && this.props.children !== null) {
      const size = this.props.children.length || this.props.children.props.children.length
      const { currentIndex } = this.state
      const currentAmount = this._getAmountCard()

      if (((currentIndex + 1) * currentAmount) < size) {
        this.setState(() => ({ currentIndex: currentIndex + 1, animationDirection: 'right' }))
      } else {
        this.setState(() => ({ currentIndex: 0, animationDirection: 'right' }))
      }
    }
  }

  render() {
    const { title, showButton } = this.props

    return (
      <div className='slidal'>
        {this.renderModal()}

        {title ? <h1>{title}</h1> : null}

        <div className='slider'>
          {this.renderSlider()}
        </div>

        <div className='arrows'>
          <img src={LeftArrow} className='arrow' alt='Leaft Arrow' onClick={this._goToPrevSlide} />
          {showButton ? <Button text='Ver mais' onClick={() => this.setState(() => ({ showModal: true }))} /> : null}
          <img src={RightArrow} className='arrow' alt='Right Arrow' onClick={this._goToNextSlide} />
        </div>
      </div>
    )
  }

  renderModal() {
    const { item, showModal, subModal } = this.state
    const { children } = this.props

    let component = null

    if (showModal || subModal) {
      component = <Modal showModal
        item={item}
        children={children}
        openSubModal={() => this.setState(() => ({ subModal: true }))}
        closeModal={() => this.closeModal()} />
    }

    return component
  }

  renderSlider() {
    const children = this.props.children
    const { currentIndex } = this.state
    const currentAmount = this._getAmountCard()

    let component = null

    if (currentAmount) {
      component = (
        <TransitionGroup>

          {React.Children.map(children, (child, i) => {
            if (i < ((currentIndex + 1) * currentAmount) &&
              i >= ((currentIndex) * currentAmount)) {
              if (child.type === Card) {
                return (
                  <CSSTransition
                    classNames={this._getSlideDirection()}
                    timeout={{ enter: 500, exit: 300 }}
                  >
                    {React.cloneElement(child, { showModal: () => this.setState(() => ({ item: child, subModal: true })) })}
                  </CSSTransition>
                )
              }

              return (
                <CSSTransition
                  classNames={this._getSlideDirection()}
                  timeout={{ enter: 500, exit: 300 }}
                >
                  {child}
                </CSSTransition>
              )
            }
          })}
        </TransitionGroup>
      )
    }

    return component
  }
}

Slidal.Button = Button
Slidal.Card = Card
Slidal.Modal = Modal
export default Slidal
