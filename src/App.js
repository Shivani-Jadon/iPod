import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';
import ZingTouch from 'zingtouch';


class App extends React.Component{
  constructor(){
	super();

	this.state = {
		screen: 0,
		menu: 0
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


	//funtion to move over the menu items
	move = () => {
		
			const containerElement = document.getElementById('wheel');
			const activeRegion = ZingTouch.Region(containerElement);

			const childElement = document.getElementById('wheel');

			let list_item = document.getElementsByClassName('list')
			let i = 0;

			activeRegion.bind(childElement, 'rotate', function (event) {
				//Perform Operations
				console.log(event.detail);

				if (event.detail.distanceFromLast > 4) {
					//console.log(event.detail.distanceFromLast);

					if (i >= list_item.length)
						i = 0;

					let current = document.getElementsByClassName("active");
					current[0].className = current[0].className.replace(" active", "");
					list_item[i].className += " active";

					i++;
				}

			});

    }
	


  render(){
	//const unlock = this.state.unlock;
	return (
	  <div className="App">
		<div className="ipod-frame">
			<Screen screenLock={this.state.screen} pickMenu={this.move} />
			<Controls onUnlock={this.unlocking} onLock={this.locking} />
		</div>
	  </div>
	);
  }
}


export default App;
