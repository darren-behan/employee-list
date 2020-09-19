import React from "react";
import { Navbar, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import "./index.css";

function Nav(props) {
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top" >
      <Form inline>
        <FormControl type="text" placeholder="Search Name" className="mr-sm-2" onChange={props.handleInputChange} value={props.value} />
        <Button onClick={props.handleFormSubmit} variant="outline-dark">Search</Button>
      </Form>
      <DropdownButton id="dropdown-basic-button" variant="outline-dark" title="Sort By" drop="left">
        <Dropdown.Item as="button" value="name" onClick={props.handleSortChange}>Name</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
}
export default Nav;