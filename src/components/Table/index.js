import React from 'react';
import { Table } from 'react-bootstrap';
import "./index.css";

function EmployeeTable(props) {
  console.log(props.employees);
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
        {props.employees.length > 0 ? 
          props.employees.map(employee => (
            employee.name.includes(props.search)
            ?
            <tr>
              <td><img src={employee.image} alt="emp-img" /></td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.dob}</td>
            </tr>
            :
            null
          ))
          :
          null
        }
      </tbody>
    </Table>
  )
}

export default EmployeeTable;