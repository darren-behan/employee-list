import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from './components/Nav';
import Table from './components/Table';
import Employees from "./Employees.json";

class App extends Component {
  state = {
    employees: [],
    pending: "",
    search: "",
    order: "ascend"
  }

  componentDidMount() {
    this.setState({ employees: Employees });
  }

  handleSortChange = sortValue => {
    console.log(sortValue)
    this.setState({
      order: sortValue
    })
  }

  handleFormSubmit = (searchValue) => {
    this.setState({ search: searchValue})
  };

  render() {
    return (
      <Wrapper >
        <Header />
        <Nav
          handleFormSubmit={this.handleFormSubmit}
          handleSortChange={this.handleSortChange}
        />
        <Table employees={this.state.employees} search={this.state.search} order={this.state.order}/>
      </Wrapper>
    );
  }
}

export default App;