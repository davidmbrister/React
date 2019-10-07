import React from 'react';
import './Form.css';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        firstName: '',
        lastName: '',
        Address: '',
        Country: '',
        stateProvince: '',
        Postal: '',
        Email: '',
        Phone: ''
    }
  }
  _add = () => {
      this.props.onAddEntry(this.state);
      this._clear();
  }

  _handleTextChange = (key, value) => {
      this.setState ({
        [key]: value
      });
  }
  
  _clear = () => {
      this.setState({
        firstName: '',
        lastName: '',
        Address: '',
        Country: '',
        stateProvince: '',
        Postal: '',
        Email: '',
        Phone: '',
      });
  }
  render() {
    return(
      <div style={{marginTop:16}}>
          <Button title="Add Entry" onClick={this._add} />
          <br />
          <input type="text" 
          placeholder="First Name" 
          value={this.state.firstName}
          onChange={
            event => 
            this._handleTextChange('firstName',
            event.target.value)
          } />
          <input type="text" 
          placeholder="Last Name" 
          value={this.state.lastName}
          onChange={
            event => 
            this._handleTextChange('lastName',
            event.target.value)
          } 
          />
          <input type="text" 
          placeholder="Address" 
          value={this.state.Address}
          onChange={
            event => 
            this._handleTextChange('Address',
            event.target.value)
          } />
          <input type="text" 
          placeholder="Country" 
          value={this.state.Country}
          onChange={
            event => 
            this._handleTextChange('Country',
            event.target.value)
          } />
          <input type="text" 
          placeholder="State/Province" 
          value={this.state.stateProvince}
          onChange={
            event => 
            this._handleTextChange('stateProvince',
            event.target.value)
          } />
          <input type="text" 
          placeholder="Postal/Zip" 
          value={this.state.Postal}
          onChange={
            event => 
            this._handleTextChange('Postal',
            event.target.value)
          } />
          <input type="text" 
          placeholder="Email" 
          value={this.state.Email}
          onChange={
            event => 
            this._handleTextChange('Email',
            event.target.value)
          } />
          <input type="text" 
          placeholder="Phone" 
          value={this.state.Phone}
          onChange={
            event => 
            this._handleTextChange('Phone',
            event.target.value)
          } />
          
      </div>
    );
  }
}

export default Form;


