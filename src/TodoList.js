import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.items = props.items.map(
      (item) =>
      <TodoItem name={ item.name } />
    );
  }

  render() {
    return (
      <ul>
        { this.items }
      </ul>
    )
  }
}

export default TodoList;
