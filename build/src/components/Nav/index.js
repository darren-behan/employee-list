import React from "react";
import { Navbar, Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import "./index.css";

function Nav(props) {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <Navbar className="navbar" bg="light" expand="lg" sticky="top" >
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearchValue(e.target.value)} />
        <Button onClick={() => props.handleFormSubmit(searchValue)} variant="outline-dark">Search</Button>
      </Form>
      <DropdownButton id="dropdown-basic-button" variant="outline-dark" title="Sort By" drop="left">
        <Dropdown.Item as="button" value="ascend" onClick={(e) => props.handleSortChange(e.target.value)}>Ascend By Name</Dropdown.Item>
        <Dropdown.Item as="button" value="descend" onClick={(e) => props.handleSortChange(e.target.value)}>Descend By Name</Dropdown.Item>
      </DropdownButton>
    </Navbar>
  );
}
export default Nav;