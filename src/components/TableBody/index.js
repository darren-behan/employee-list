import React, { useState } from 'react';
import Employees from "../../Employees.json";
import "./index.css";

function EmployeeTableBody() {
  // Setting this.state.friends to the friends json array
  const [state, setState] = useState(Employees);

  return (
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
  )
}

export default EmployeeTableBody;