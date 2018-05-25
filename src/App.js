import React, { Component } from 'react';

import TodoList from './TodoList';

import './App.css';

const todos = [
  { name: 'Create simple todo application' },
  { name: 'Make it work' },
  { name: 'Make it usable to me' },
  { name: 'Make it looks good' },
  { name: 'Ask for feedback' },
];

class App extends Component {
  render() {
    return (
      <TodoList items={todos} />
    );
  }
}

export default App;
