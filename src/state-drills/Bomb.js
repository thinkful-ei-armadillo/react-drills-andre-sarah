import React, { Component } from 'react';

class Bomb extends React.Component{
    state = {
        bomb: "tick",
        count: 0,
    };
    componentDidMount(){
        console.log(this.state);
    const counter= setInterval(() => {
    this.setState({count: this.state.count +1}); 
    this.readCounter();} , 1000);
    
    }

    componentDidUnmount(){
        clearInterval(this.counter)
    }

    readCounter(){
        if (this.state.count >= 8){
            this.setState({bomb: 'Boom!'});
            clearInterval(this.counter);
        }

        else if(this.state.count % 2=== 0 ){
            this.setState({bomb: "tick" });
        } 
        else if( this.state.count % 2 !==0){
            this.setState({bomb: 'tock'});
        }
        
    }

    render() {
    return (
        <div>
            <p>{this.state.bomb} </p>
        </div>
    )
}
}


export default Bomb