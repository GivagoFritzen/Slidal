import React, { Component } from 'react'

import Slidal from 'slidal'
import 'slidal/src/styles.css'

export default class App extends Component {
  render() {
    return (
      <Slidal showButton={true} title="Title" amountCardMobile={3}
        amountCardTablet={4} amountCardDesktop={5} />
    )
  }
}
