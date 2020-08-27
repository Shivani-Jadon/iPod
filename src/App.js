import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      unlock : false
    }
  }

  unlocking = () => {
    this.setState({
      unlock : true
    })
  }

  render(){
    const unlock = this.state.unlock;
    return (
      <div className="App">
        <div className="ipod-frame">
          <Screen screenLock={unlock}/>
          <Controls  onUnlock={this.unlocking}/>
        </div>
      </div>
    );
  }
}


export default App;
