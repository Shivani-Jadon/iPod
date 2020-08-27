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


// const containerElement = document.getElementById('control');
// const activeRegion = ZingTouch.Region(containerElement);

// const childElement = document.getElementById('menuList');
// activeRegion.bind(childElement, 'rotate', function(event){
// 	//Perform Operations
// });

// new ZingTouch.Rotate({
//   // angle : ,
//   // distanceFromOrigin : ,
//   distanceFromLast : -15,
// })

export default App;
