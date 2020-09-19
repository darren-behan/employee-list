import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Nav from './components/Nav';
import Table from './components/Table';

function App() {
  return (
    <Wrapper >
      <Header />
      <Nav />
      <Table />
    </Wrapper>
  );
}

export default App;
