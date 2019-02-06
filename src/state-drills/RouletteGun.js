import React, { Component } from 'react';

class RouletteGun extends Component {
  static defaultProps = {
    bulletInChamber: 8
  };

  state = {
    chamber: null,
    spinningTheChamber: false,
    result: ''
  }

  pullTrigger = () => {
    this.setState({
      spinningTheChamber: true,
      result: 'spinning the chamber and pulling the trigger! ...'
    });
    const timeout = setTimeout(() => {
      const randomNum = Math.ceil(Math.random() * 8);
      this.setState({
        chamber: randomNum,
        spinningTheChamber: false,
        result: (this.props.bulletInChamber === randomNum) ? 'BANG!!!!':'you\'re safe'
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        <p>{this.state.result}</p>
        <button onClick={() => this.pullTrigger()}>Pull the trigger!</button>
      </div>
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }
}

export default RouletteGun;