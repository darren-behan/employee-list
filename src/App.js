import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <Wrapper >
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
