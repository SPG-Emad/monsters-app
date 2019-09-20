import React, { Component } from 'react';
import './App.css';
import { CardList } from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component'

// METHOD 1 ::::::::::::: it gives less control
// function App() { 
//   return (
//     <h1>something</h1>
//   );
//  }

// METHOD 2 ::::::::::::: it gives more control, we get access to state (js object with properties)
// class App extends Component {
//   render() {
//     return (
//     <h1>something</h1>
//     );
//   }
// }

/*
  onClick= 
  {() => { 
      this.setState(
      { 
        name: 'Danish', 
        age: 30 
      }) 
  }}

  onClick = {()=> {
    // anything
  }}
*/

// this.setState() changes the state object inside Component class


/*
      {this.state.monsters.map(monster => monster.name)}
      {this.state.monsters.map(monster => <h1>{monster.name}</h1>)}
      {this.state.monsters.map(monster => <h1>{monster.name}</h1>)}
      {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
*/

class App extends Component {

  constructor() {
    super(); // gets all the properties of extended class which is Component at the moment

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // This is a lifecycle method which calls the inside coding after a component is called on screen UI
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ monsters: data }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    const { monsters, searchField } = this.state;

    const filteredMonsters =
      monsters.filter(monster =>
        monster.name
          .toLowerCase()
          .includes(searchField.toLowerCase()));


    return (
      <div className="App">

        {/* <CardList>
          {this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)}
        </CardList> */}
  <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Here"
          event={this.handleChange}
        />

        {/* <CardList monsters={this.state.monsters} /> */}
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;