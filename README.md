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

class Example extends Component {
  render () {
    return (
            <Slidal showButton={true} title="Title" amountCardMobile={3}
        amountCardTablet={4} amountCardDesktop={5} />
    )
  }
}
```

## License

MIT (https://opensource.org/licenses/MIT)
