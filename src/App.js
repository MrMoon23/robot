import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";
import { CardList } from "./components/card_list/card_list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((e) => this.setState({ monsters: e }));
  }
  handlechange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filter = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App ">
        <SearchBox onChange={this.handlechange} />
        <CardList monsters={filter}></CardList>
      </div>
    );
  }
}

export default App;
