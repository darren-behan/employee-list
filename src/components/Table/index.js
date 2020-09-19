import React from 'react';
import { Table } from 'react-bootstrap';
import EmployeeTableBody from '../TableBody';
import "./index.css";

function EmployeeTable() {
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
      <EmployeeTableBody />
    </Table>
  )
}

export default EmployeeTable;