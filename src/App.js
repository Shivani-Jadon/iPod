import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';

function App() {
  return (
    <div className="App">
      <div className="ipod-frame">
        <Screen/>
        <Controls/>
      </div>
    </div>
  );
}

export default App;
