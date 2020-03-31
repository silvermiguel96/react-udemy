import React, { Component } from 'react';

class Contador extends Component {
  constructor () {
    super()
    this.state = { contador: 1}
    setInterval(() => { 
      this.setState({ contador: this.state.contador + 1})
    }, 1000)
  }

  render () {
    return <ContadorNumero numero={this.state.contador} />
  }
}

class ContadorNumero extends Component {
  render () {
    return <span>{this.props.numero}</span>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Primer componente con state</p>
        <Contador />
      </div>
    )
  }
}
export default App;
