/* 
READY FOR SUBMISSION

Using the in-class Form/Table example as a guide,
build a registration form that collects a user's name
(first, last), address, country, state/province, postal code/zip,
email and phone number. The table should display the user's
first and last names and their email. */

import React from 'react';

import Table from './components/Table';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        entries: []
    }
  }
  _addEntry = entry => {
    console.log("changing entries");
    this.setState({
        entries: [...this.state.entries, entry]
    });
  }
  render() {
    return(
      <div>
        <Form onAddEntry={this._addEntry} />
        <Table entries={this.state.entries} />
      </div>
    );
  }
}
 
export default App;