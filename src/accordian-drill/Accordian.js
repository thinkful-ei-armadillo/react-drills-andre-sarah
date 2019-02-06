import React, { Component } from 'react';

class Accordian extends Component{
    state ={
        paragraph: <p /> ,
        selected: -1
    }
    
    handleButtonClicked = (index) => {
        console.log(`button clicked`)
        this.setState({selected: index})
        console.log(index);
        console.log({selected: index})
        
    }

    render() {
        return (
            <div><ul>
        {this.props.sections.map((item, index) => <li key={index}><button type="button" onClick={() => this.handleButtonClicked(index)}>{item.title} </button> {this.state.selected === index ? this.props.sections[index].content : ''} </li>)}
        
            </ul>
            </div>
        )
    }
}

export default Accordian;