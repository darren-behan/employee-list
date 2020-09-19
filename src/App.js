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
    search: ""
  }

  componentDidMount() {
    this.setState({ employees: Employees });
  }

  handleInputChange = event => {
    console.log(event);
    this.setState({
      pending: event.target.value
    });
    console.log(this.state.pending);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(event);
    this.setState({ search: this.state.pending})
    console.log(this.state.search);
  };


  render() {
    return (
      <Wrapper >
        <Header />
        <Nav 
          value={this.state.pending}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Table employees={this.state.employees} />
      </Wrapper>
    );
  }
}

export default App;
