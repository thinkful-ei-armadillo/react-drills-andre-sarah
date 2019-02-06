import React, { Component } from 'react';

class Accordian extends Component{
    state ={
        sections: [
            {
              title: 'Section 1',
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            },
            {
              title: 'Section 2',
              content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
            },
            {
              title: 'Section 3',
              content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
            },
          ],
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
        {this.state.sections.map((item, index) => <li key={index}><button type="button" onClick={() => this.handleButtonClicked(index)}>{item.title} </button> {this.state.selected === index ? this.state.sections[index].content : ''} </li>)}
        
            </ul>
            </div>
        )
    }
}

export default Accordian;