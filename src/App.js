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
			menuItem: 0
		}

		this.changeMenu = this.changeMenu.bind(this);
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
	changeMenu = (item) => {
		//console.log("In changeMenu ",item);
		this.setState({
			menuItem : item
		})
		//console.log("state change : ",this.state.menuItem);
	}


	//funtion to move over the menu items
	move = (changeMenu_State) => {
		
			const containerElement = document.getElementById('wheel');
			const activeRegion = ZingTouch.Region(containerElement);

			const childElement = document.getElementById('wheel');

			let list_item = document.getElementsByClassName('list-items')
			let i = 0;

			activeRegion.bind(childElement, 'rotate', function (event) {
				//Perform Operations
				// console.log(event.detail);

				if (event.detail.distanceFromLast > 4) {
					//console.log(event.detail.distanceFromLast);

					if (i >= list_item.length){
						i = 0;
						changeMenu_State(i);
					}			

			
					let current = document.getElementsByClassName("active");
					current[0].className = current[0].className.replace(" active", "");
					list_item[i].className += " active";
					changeMenu_State(i);
					i++;
				}
				
			});

    }
	
	// function to go into sub-menus
	inMenu = () => {
		if (this.state.screen >= 1 && this.state.screen < 2) {
			this.setState({
				screen: this.state.screen + 1,
				menu: this.state.menuItem
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
			<Screen screenLock={this.state.screen} menuScreen={this.state.menu} pickMenu={this.move} menu_item={this.menuItem}
			 changeMenu_State={this.changeMenu}/>
			<Controls screenLock={this.state.screen} onUnlock={this.unlocking} onLock={this.locking} enterMenu={this.inMenu} exitMenu={this.backMenu}/>
		</div>
	  </div>
	);
  }
}


export default App;
