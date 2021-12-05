import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

export default class App extends React.Component 
{
  constructor()
  {
    super();
    this.state =
    {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = (e) => 
  {
    this.setState({searchField: e.target.value},() => console.log(this.state))
  }
  
  render()
  {
    const {monsters,searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
     return (
      <div className="App">
        <h1>Monster Family</h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange}/>
        <Container fluid>
            <CardList monsters ={filterMonsters}/>
        </Container>
      </div>
    );
  }
}

