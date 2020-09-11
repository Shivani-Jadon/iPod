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
			menu: 0,
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


	

	// change menu item list
	menuItem = 3;


	//funtion to move over the menu items
	move = () => {
		
			const containerElement = document.getElementById('wheel');
			const activeRegion = ZingTouch.Region(containerElement);

			const childElement = document.getElementById('wheel');

			let list_item = document.getElementsByClassName('list-items')
			let i = 0;

			activeRegion.bind(childElement, 'rotate', function (event) {
				//Perform Operations
				console.log(event.detail);

				if (event.detail.distanceFromLast > 4) {
					//console.log(event.detail.distanceFromLast);

					if (i >= list_item.length){
						i = 0;
						this.menuItem = i;
					}			

			
					let current = document.getElementsByClassName("active");
					current[0].className = current[0].className.replace(" active", "");
					list_item[i].className += " active";
					
					//console.log(this.menuItem);
					i++;
				}
				this.menuItem = i;
			});

			//this.changeItem(i);
    }
	
	// function to go into sub-menus
	inMenu = () => {
		if (this.state.screen >= 1 && this.state.screen < 2) {
			this.setState({
				screen: this.state.screen + 1,
				menu: this.menuItem
			})
		}
	}

	// function to come back from sub-menus
	backMenu = () => {
		if (this.state.screen >= 1) {
			this.setState({
				screen: this.state.screen - 1,
				menu: 0
			})
		}
	}



  render(){
	//const unlock = this.state.unlock;
	return (
	  <div className="App">
		<div className="ipod-frame">
			<Screen screenLock={this.state.screen} menuScreen={this.state.menu} pickMenu={this.move} />
			<Controls screenLock={this.state.screen} onUnlock={this.unlocking} onLock={this.locking} enterMenu={this.inMenu} exitMenu={this.backMenu}/>
		</div>
	  </div>
	);
  }
}


export default App;
