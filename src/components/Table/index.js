import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

function EmployeeTable(props) {
  useEffect(() => {getEmployees()}, [props.employees]);

  const getEmployees = () => {
    if (props.employees.length > 0) {
      return props.employees.sort((a, b) => {
        console.log(props.order);
        console.log(a);
        console.log(b);
        switch (props.order) {
          case "descend":
            return a.email < b.email ? 1 : -1;
          default:
            return a.email > b.email ? 1 : -1;
        }
      })
      .map((employee) => 
        employee.name.toLowerCase().includes(props.search.toLowerCase())
        ?
        (
        <tr>
          <td><img src={employee.image} alt="emp-img" /></td>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.phone}</td>
          <td>{employee.dob}</td>
        </tr>
        )
        :
        null
      )
    }
  }
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
        {getEmployees()}
      </tbody>
    </Table>
  )
}

export default EmployeeTable;