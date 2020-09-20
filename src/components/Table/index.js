import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import employees from "../../Employees.json";

class Table extends Component {
  state = {
    employee: [],
    columns: [
      {
        dataField: "name",
        text: "Name",
        sort: true,
        filter: textFilter()
      },
      {
        dataField: "email",
        text: "Email",
        sort: true,
      },
      {
        dataField: "phone",
        text: "Phone",
        sort: true,
      },
      {
        dataField: "dob",
        text: "DOB",
        sort: true,
      }
    ],
  };
  render() {
    return (
      <BootstrapTable
        striped
        hover
        keyField="id"
        data={employees}
        columns={this.state.columns}
        filter={ filterFactory() }
      />
    );
  }
}

export default Table;
