import React, { Component } from 'react';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.name = props.name;
    this.state = {
      active: true
    }
  }

  render() {
    return (
      <li>
        <label>
          <input type="checkbox" onClick={ this.markItemAsDone } disabled={ !this.state.active } />
          {
            this.state.active
            ? this.name
            : <del>{ this.name }</del>
          }
        </label>
      </li>
    )
  }

  markItemAsDone = () => {
    this.setState({ active: false });
  }

}

export default TodoItem;
