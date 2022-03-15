import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import './App.css'
import { SearchBox } from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super()
    this.state = { usersList: [], searchValue: '' }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ usersList: users }))
  }

  handleChange = (e) => {
    this.setState({ searchValue: e.target.value })
  }
  render() {
    const { usersList, searchValue } = this.state

    const filterValues = usersList.filter((users) =>
      users.name.toLowerCase().includes(searchValue.toLocaleLowerCase()),
    )
    return (
      <div className="App">
        <div className="title">
          <h1>Search User</h1>
          <SearchBox
            placeholder="search user"
            handleChange={(e) => this.setState({ searchValue: e.target.value })}
          />
        </div>
        <CardList usersList={filterValues}></CardList>
      </div>
    )
  }
}

export default App
