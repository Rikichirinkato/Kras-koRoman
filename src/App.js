import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import getStatistic  from './Statistic.js';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            position:[
                {
                    name:'backEndDeveloper',
                    quantity: 0,
                    key:0
                },{
                    name:'frontEndDeveloper',
                    quantity: 0,
                    key:1
                },{
                    name:'htmlDeveloper',
                    quantity: 0,
                    key:2
                },{
                    name:'nodeJsDeveloper',
                    quantity: 0,
                    key:3
                },{
                    name:'angularDeveloper',
                    quantity: 0,
                    key:4
                },{
                    name:'fullStackDeveloper',
                    quantity: 0,
                    key:5
                }
            ],
            show:{
                  
            },
            result:getStatistic()
        }
    }
    
    addition(position){
        let current=this.state.position;
        current[position.key].quantity+=1 ;
        this.setState({position : current})
        
        let currentShow=this.state.show;
        currentShow[position.name] = position.quantity; 
        
        this.setState({ result:getStatistic(this.state.show)})
    }
    
    render(){
        return(
            <section className="list">
                {this.state.position.map((position) => {
                return (
                    <article key={position.key} className='item'><p>{position.name}</p><button onClick={this.addition.bind(this, position)}>+</button></article>
                    )
            })}
            <p className="res">{this.state.result}</p>
            </section>
        )
    }
}

export default App;
