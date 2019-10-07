import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
        <div>
            <button onClick={this.props.onClick}>
                {this.props.title}
            </button>
        </div>
    );
  }
}
export default Button;



