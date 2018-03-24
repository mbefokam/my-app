import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      {id: 'wer', name:'Tony', age: 30},
      {id: 'weer',name:'Christelle', age: 30},
      {id: 'werewt',name:'Elijah', age:1}
    ],
    otherState:'some other value',
    showPersons: false
  }

 
  nameChangedHandler = (event, id)=> {
    const personIndex = this.state.person.findIndex(p => {
      return p.id ===id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]= person;

    this.setState({ persons: persons})
  }

    deletePersonHandler= (personIndex)=> {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }
    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
    }

  render() {
    const style ={
      backgroundColor:'white',
      font:'inherit',
      border:'1p solid blue',
      padding: '8px',
      cursor:'pointer'
    };
    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
          {this.state.persons.map((person, index) => {
                return <Person
                   click={() => this.deletePersonHandler(index)}
                   name={person.name}
                   age={person.age}
                   key={person.id}
                   changed={(event)=>this.nameChangedHandler(event, person.id)}/>
              }
            )
          } 
         </div>  
      );

    }

    return (
      <div className="App">
       <h1>Hi, I am the React App</h1>
       <p>I am working on this app</p>
       <button 
       style={style}
       onClick={(event) => this.togglePersonsHandler }>Toggle Persons</button>      
       {persons}       
      </div>
    );
  //  return  React.createElement('div',null, React.createElement('h1',{className :"App"}, 'I\'m a React App !!!'))
  }
}

export default App;
