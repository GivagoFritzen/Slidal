### Installation

**npm**

```bash
npm install ####### --save
```

**yarn**

```bash
yarn add #######
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
            <h2>1</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>2</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>3</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>4</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>5</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>6</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>7</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>8</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>9</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>10</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>11</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>12</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>13</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
          </Slidal.Card>
          <Slidal.Card>
            <h2>14</h2>
            <img src="https://udemy-images.udemy.com/course/750x422/1362070_b9a1_2.jpg" alt="teste" />
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

