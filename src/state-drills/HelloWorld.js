import React, { Component } from 'react';

class HelloWorld extends Component {
  state = {
    who: 'World'
  }

  handleButton = (name) => {
    console.log(name);
    this.setState({who: name});
  }

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button type="button" onClick={() => this.handleButton('friend')}>Friend</button>
        <button type="button" onClick={() => this.handleButton('React')}>React</button>
        <button type="button" onClick={() => this.handleButton('World')}>World</button>
      </div>
    );
  }
}

export default HelloWorld;