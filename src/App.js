//import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  handler = (e) => {
    this.setState({ searchString: e.target.value });
  };
  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search-box" handler={this.handler.bind(this)} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
