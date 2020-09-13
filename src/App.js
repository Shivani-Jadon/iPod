import React from 'react';
import './App.css';
import Screen from './Screen';
import Controls from './Controls';
import ZingTouch from 'zingtouch';
// importing wallpapers
import wallpaper1 from './assets/images/wallpaper2.jpg';
import wallpaper2 from './assets/images/wallpaper1.jpg';
import wallpaper3 from './assets/images/wallpaper3.jpg';
import wallpaper4 from './assets/images/wallpaper4.jpg';
import wallpaper5 from './assets/images/wallpaper5.jpg';


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
	// the function will be called from child components
	changeMenu = (item) => {
		//console.log("In changeMenu ",item);
		this.setState({
			menuItem : item
		})
		//console.log("state change : ",this.state.menuItem);
	}


	//funtion to move over the menu items
	move = (changeMenu_State) => {
		
		if(this.state.screen >= 1)
		{
			const containerElement = document.getElementById('wheel');
			const activeRegion = ZingTouch.Region(containerElement);

			const childElement = document.getElementById('wheel');

			let list_item = document.getElementsByClassName('list-items')
			let i = 0;

			activeRegion.bind(childElement, 'rotate', function (event) {
				//Perform Operations
				// console.log(event.detail);

				if (event.detail.distanceFromLast > 3) {
					console.log(event.detail.distanceFromLast);

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
		if (this.state.screen > 0) {
			this.setState({
				screen: this.state.screen - 1,
				menuItem: 0
			})
		}
		if (this.state.screen > 0 && this.state.menu <= 2) {
			this.setState({
				menu : 0
			})
		}
	}


	// function for changing themes
	changeTheme = () => {
		if(this.state.screen === 3 && this.state.menu === 3 && this.state.menuItem === 0 ){
			
			const select_btn = document.getElementById('#okay-btn'); 

			select_btn.addEventListener('click', function(){
				let selected_theme = this.state.menuItem;

				if(selected_theme === 0)
				{
					document.getElementsByClassName('ipod-frame').style.background = 'black';
					document.getElementById('control').style.background = 'grey';
					document.getElementById('control').style.color = 'white';
				}else{
					document.getElementsByClassName('ipod-frame').style.background = 'grey';
					document.getElementById('control').style.background = 'white';
					document.getElementById('control').style.color = 'grey';
				}
			})
		}
	}

	// function for changing wallpaper
	changeWallpaper = () => {

		if(this.state.screen === 3 && this.state.menu === 3 && this.state.menuItem === 1 ){

			const select_btn = document.getElementById('#okay-btn'); 

			select_btn.addEventListener('click', function(){

				let selected_wallpaper = this.state.menuItem;

				switch(selected_wallpaper)
				{
					case 0 : document.getElementById('ipod-screen').style.backgroundImage = `url(${wallpaper1})`;
							break;
					case 1 : document.getElementById('ipod-screen').style.backgroundImage = `url(${wallpaper2})`;
							break;
					case 2 : document.getElementById('ipod-screen').style.backgroundImage = `url(${wallpaper3})`;
							break;
					case 3 : document.getElementById('ipod-screen').style.backgroundImage = `url(${wallpaper4})`;
							break;
					case 4 : document.getElementById('ipod-screen').style.backgroundImage = `url(${wallpaper5})`;
							break;
					default : document.getElementById('ipod-screen').style.backgroundImage = `url(${wallpaper1})`;
							break;
				}
			})
		}
	}


  render(){
	//const unlock = this.state.unlock;
	return (
	  <div className="App">
		<div className="ipod-frame">
			<Screen screenLock={this.state.screen} menuScreen={this.state.menu} pickMenu={this.move}
			 changeMenu_State={this.changeMenu}/>
			<Controls screenLock={this.state.screen} onUnlock={this.unlocking} onLock={this.locking}
			 enterMenu={this.inMenu} exitMenu={this.backMenu}/>
		</div>
	  </div>
	);
  }
}


export default App;
