import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render() {

    const {
      arrayOfNumbers,
      objectWithInfo,
      isActivated,
      number,
      title
    } = this.props

    const texoSegundoBool = isActivated ? 'On' : 'Off'
    const mappedNumbers = arrayOfNumbers.map(n => n * 2)

    return (
      <div>
        {title}
        <p>{mappedNumbers.join(', ')}</p>
        <p>{texoSegundoBool}</p>
        <p>{number}</p>
        <p>{objectWithInfo.key2}</p>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" />
          <div>
            <Text
              arrayOfNumbers={[2, 3, 10]}
              objectWithInfo={{ key: "fistValue", key2: "otherValue" }}
              isActivated
              number={2}
              title={<h2>Este es un titulo</h2>}
            />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
