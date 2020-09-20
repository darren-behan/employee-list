import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <Wrapper >
        <Header />
        <Table />
      </Wrapper>
    );
  }
}

export default App;
