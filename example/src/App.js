import React, { Component } from 'react'

import Slidal from 'slidal'
import 'slidal/src/styles.css'

export default class App extends Component {
  render() {
    return (
      <Slidal showButton={true} title="Title" amountCardMobile={3}
        amountCardTablet={4} amountCardDesktop={5}>
        <Slidal.Card>
          <h2>1</h2>
          <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="teste" />
        </Slidal.Card>
        <Slidal.Card>
          <h2>2</h2>
          <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="teste" />
        </Slidal.Card>
        <Slidal.Card>
          <h2>3</h2>
          <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="teste" />
        </Slidal.Card>
        <Slidal.Card>
          <h2>4</h2>
          <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="teste" />
        </Slidal.Card>
        <Slidal.Card>
          <h2>5</h2>
          <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="teste" />
        </Slidal.Card>
      </Slidal>
    )
  }
}
