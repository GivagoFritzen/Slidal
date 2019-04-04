### Installation

**npm**

```bash
npm install slidal --save
```

### [PlayGround](https://google.com.br)

### Example

```js
import React, { Component } from 'react';
import Slidal from './slidal/Slidal'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slidal showButton title="Title" amountCardMobile={3} amountCardTablet={4} amountCardDesktop={5}>
          <Slidal.Card>
            <h2>TITLE</h2>
            <img src="https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Test" />
          </Slidal.Card>
        </Slidal>
      </div>
    );
  }
}

export default App;
```

## Licença
[Mit](https://opensource.org/licenses/MIT)
