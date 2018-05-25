import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <TodoList />
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        <TodoItem />
      </ul>
    )
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li>do something</li>
    )
  }
}

export default App;
