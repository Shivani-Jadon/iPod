import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';

class App extends React.Component{
  constructor(){
	super();

	this.state = {
		screen: 0,
		menu: -1
	}
  }

  //function for unlocking the ipod if select-btn is pressed on lock screen
	unlocking = () => {
		if (this.state.screen === 0) {
			this.setState({
				screen: this.state.screen + 1
			})
        }	  
	}

  //function for locking the ipod if menu-btn is pressed on main menu
	locking = () => {
		if (this.state.screen === 1) {
			this.setState({
				screen: this.state.screen - 1
			})
		}
	}


  render(){
	//const unlock = this.state.unlock;
	return (
	  <div className="App">
		<div className="ipod-frame">
			<Screen screenLock={this.state.screen} />
			<Controls onUnlock={this.unlocking} onLock={this.locking} />
		</div>
	  </div>
	);
  }
}


export default App;
