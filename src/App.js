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
    employees: []
  }

  componentDidMount() {
    this.setState({ employees: Employees });
    console.log(this.state.employees);
  }


  render() {
    return (
      <Wrapper >
        <Header />
        <Nav />
        <Table employees={this.state.employees} />
      </Wrapper>
    );
  }
}

export default App;
