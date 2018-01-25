import React, { Component } from 'react';
import Person from './Person/Person.js';
import './App.css';

class App extends Component {

  state = {
    person: [
      { name: "Jenny"},
      { name: "Tian"}
    ]
  }

  switchNameHandler = () => {
    this.setState ({
      person: [
        { name: "Jenny Yuan"},
        { name: "Tian Hu"}
      ]
    } )
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <p>Hi</p>
        <button style={style} onClick={this.switchNameHandler}>Switch to full name</button>
        <Person name={this.state.person[0].name}/>
        <Person name={this.state.person[1].name}/>
      </div>
    );
  }
}

export default App;
