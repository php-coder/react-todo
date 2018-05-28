import React, { Component } from 'react';

import TodoList from './TodoList';

import './App.css';

const todos = [
  { id: 1, name: 'Create simple todo application' },
  { id: 2, name: 'Make it work' },
  { id: 3, name: 'Make it usable to me' },
  { id: 4, name: 'Make it looks good' },
  { id: 5, name: 'Ask for feedback' },
];

class App extends Component {
  render() {
    return (
      <TodoList items={todos} />
    );
  }
}

export default App;
