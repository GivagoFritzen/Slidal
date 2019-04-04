# slidal

> slider + modal

[![NPM](https://img.shields.io/npm/v/slidal.svg)](https://www.npmjs.com/package/slidal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save slidal
```

## Usage

```jsx
import React, { Component } from 'react'

import Slidal from 'slidal'
import 'slidal/src/styles.css'

class Example extends Component {
  render () {
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
```

## License

MIT (https://opensource.org/licenses/MIT)
