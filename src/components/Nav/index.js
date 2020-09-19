import React from "react";
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import "./index.css";

function Nav() {
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top" >
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </Navbar>
  );
}
export default Nav;