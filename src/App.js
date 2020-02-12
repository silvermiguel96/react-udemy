import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render() {
    const texoSegundoBool = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

    return (
      <div>
        <p>{mappedNumbers.join(', ')}</p>
        <p>{texoSegundoBool}</p>
        <p>{this.props.number}</p>
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
            />

          </div>
        </div>
      </div>
    )
  }
}

export default App;
