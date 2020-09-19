import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import Employees from "../../Employees.json";
import "./index.css";

function EmployeeTable() {
  // Setting this.state.employees to the employees json array
  const [state, setState] = useState(Employees);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>DOB</th>
        </tr>
      </thead>
      <tbody>
      {state.map(employee => (
        <tr>
          <td><img src={employee.image} alt="emp-img" /></td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.dob}</td>
        </tr>
      ))}
      </tbody>
    </Table>
  )
}

export default EmployeeTable;