/* (first, last), address, country, state/province, postal code/zip,
email and phone number */
import React from 'react';
import './Table.css';

class Table extends React.Component {
  render() {
    console.log("table loaded");
    return(
      <div>
        <table style={{marginTop:16}} border="1">
            <thead>
              <tr>
                  <th></th>
                  <th>First Name</th>
                  <th>Last Name</th>
                 
                  <th>Email</th>
                
              </tr>
            </thead>
            <tbody>
              {this.props.entries.map(
                  (entry, index) => (
                  <tr key={index}>
                      <td>{index +1}</td>
                      <td>{entry.firstName}</td>
                      <td>{entry.lastName}</td>
                     
                      <td>{entry.Email}</td>
                     
                  </tr>)
              )}              
            </tbody>
        </table>
      </div>
    );
  }
}
export default Table;