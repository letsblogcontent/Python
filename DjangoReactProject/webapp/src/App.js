import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent.js'

function App() {

  return (
    <div className="App">
      <h1>React App - Served from Django</h1>
      <MyComponent/>
    </div>
  );
}

export default App;
