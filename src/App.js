import React, { Component } from 'react';
import './App.css';
//importing the person.js file so we can use the methods within person class. 
import Person from './Person/Person';

//Since we are within App.js we need to create a class "App" with the same name. 
//We need to extend to component because we need to use the features/methods built in from Component
class App extends Component {

  //state is used to contain our data. 
  //within state we have an array persons, this is an array with a list of data. 
  //otherState is a string variable
  //showPersons is a boolean variable
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  //this method(function) takes in an event, and id
  nameChangedHandler = ( event, id ) => {
    //create a constant (can not later be changed) that stores the person index 
    //find the index of persons where, 
    // if the index within person (p) is equal to id in the nameChangedHandler then return true, other wise false
    // if true, findIndex will return the index.
    // this index is then assigned to personIndex
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //new constant person is defined 
    // ... is refered to as the spread, where it expands the action to zero or more arguments
    // in this case, we are adding persons value at personIndex Index. 
    // We need to do it as a spread because javascript is reference arrays, so we need to create a new array.
    const person = {
      ...this.state.persons[personIndex]
    };
    // below is another way to create/assign a value to person
    // const person = Object.assign({}, this.state.persons[personIndex]);
    // let person.name equal to the even value
    person.name = event.target.value;
    // overide the previous persons with the new persons
    const persons = [...this.state.persons];
    // persons new value at personIndex index will refer to person
    persons[personIndex] = person;
    //update persons to equal new equals. 
    this.setState( {persons: persons} );
  }

  //deleting a person from persons array
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    //created a new persons array with the spread operator
    const persons = [...this.state.persons];
    //removed the person from persons array
    persons.splice(personIndex, 1);
    //update the persons with the new persons array
    this.setState({persons: persons});
  }

  //turns true to false and false into true
  togglePersonsHandler = () => {
    // create new Boolean constant called doesShow from showPersons
    const doesShow = this.state.showPersons;
    // update showPersons with true if doesShow is false, and vise versa.
    this.setState( { showPersons: !doesShow } );
  }

  // render is needed to show outputs on the web browser
  render () {
    //inline style. other way is to use App.css but this will update all styles instead. not just what is rendered
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    //define new variable with null. This variable can be changed later
    let persons = null;

    // if statement to check if showPersons is true.
    if ( this.state.showPersons ) {
      //if showPersons is true, update persons to be
      persons = (
        //map function takes the person (from persons) with it's index updates it.
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            //on click delete the handler
              click={() => this.deletePersonHandler(index)}
              //name is the person's name and so on
              name={person.name}
              age={person.age}
              key={person.id}
              //when value change in the textbox an event happends and it gets put within nameChangedHandler
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
    }
    
    //values actually returned on the screen
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
