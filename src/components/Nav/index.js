import React from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import "./index.css";

function Nav(props) {
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top" >
      <Form inline>
        <FormControl type="text" placeholder="Search Name" className="mr-sm-2" onChange={props.handleInputChange} value={props.value} />
        <Button onClick={props.handleFormSubmit} variant="outline-dark">Search</Button>
      </Form>
    </Navbar>
  );
}
export default Nav;