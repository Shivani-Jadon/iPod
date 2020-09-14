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
			locked: true,
			screen: 0,
			menu: 0,
			menuItem: 0,
			options: 0
		}

		this.changeMenu = this.changeMenu.bind(this);
		console.log(this.state);
	}

  //function for unlocking the ipod if select-btn is pressed on lock screen
	unlocking = () => {
		if (this.state.locked === true) {
			this.setState({
				locked: false,
				screen: this.state.screen + 1
			})
		}	
		 
	}

  //function for locking the ipod if menu-btn is pressed on main menu
	locking = () => {
		if (this.state.locked === false) {
			this.setState({
				locked: true,
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
	}


	//funtion to move over the menu items
	move = (changeMenu_State) => {
		
			const containerElement = document.getElementById('wheel');
			const activeRegion = ZingTouch.Region(containerElement);

			const childElement = document.getElementById('wheel');

			let list_item = document.getElementsByClassName('list-items');
			let len = list_item.length;
			let i = 0;
			let j = len;

			activeRegion.bind(childElement, 'rotate', function (event) {
				//Perform Operations
				// console.log(event.detail);
				
				// rotation function for clockwise direction
				if (event.detail.distanceFromLast > 4) {
					// console.log(event.detail.distanceFromLast);
				
					if (i >= list_item.length){
						i = 0;
						changeMenu_State(i);
					}			

					changeMenu_State(i);
					i++;
					
				}

				// rotation function for anti-clockwise direction
				if (event.detail.distanceFromLast < -4) {
					// console.log(event.detail.distanceFromLast);
				
					if (j <= 0){
						j = len - 1;
						changeMenu_State(j);
					}			

					changeMenu_State(j);
					j--;
					
				}
				
			})
    }
	
	// function to go into sub-menus
	inMenu = () => {
		if(this.state.screen < 3){
			this.setState({
				screen: this.state.screen + 1
			})
		}
		if (this.state.screen >= 1 && this.state.screen < 2) {
			this.setState({
				menu: this.state.menuItem
			})
		}
		if(this.state.screen === 2 && this.state.menu === 3){
			this.setState({
				options: this.state.menuItem
			}, () => console.log("state change : ",this.state.menuItem))
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
		if (this.state.screen > 0 && this.state.screen <= 1) {
			this.setState({
				menu : 0
			})
		}
		// if(this.state.screen >0 && this.state.screen < 2){
		// 	this.setState({
				
		// 	})
		// }
	}


	// function for changing themes
	changeTheme = (screen, menu, menuItem) => {
		if(screen === 3 && menu === 3){
			
			const select_btn = document.getElementById('okay-btn'); 

			select_btn.addEventListener('click', function(){
				let selected_theme = menuItem;

				if(selected_theme === 0)
				{
					document.getElementsByClassName('ipod-frame')[0].style.background = 'rgb(74 72 72)';
					document.getElementById('wheel').style.background = 'black';
					document.getElementById('wheel').style.color = 'rgb(74 72 72)';
					select_btn.style.background = 'rgb(74 72 72)';
				}else{
					document.getElementsByClassName('ipod-frame')[0].style.background = 'silver';
					document.getElementById('wheel').style.background = 'ivory';
					document.getElementById('wheel').style.color = 'rgb(158 158 158)';
					select_btn.style.background = 'silver';
				}
			})
		}
	}

	// function for changing wallpaper
	changeWallpaper = (screen, menu, menuItem) => {

		console.log("wallpaper");

		if(screen === 3 && menu === 3){

			console.log("In change wallpaper");

			const select_btn = document.getElementById('okay-btn'); 

			select_btn.addEventListener('click', function(){

				let selected_wallpaper = menuItem;

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
			<Screen lock={this.state.locked} screenLock={this.state.screen} menuScreen={this.state.menu} pickMenu={this.move}
			 		menuItem={this.state.menuItem} changeMenu_State={this.changeMenu} option={this.state.options}
			 		changeWallpaper={this.changeWallpaper}	changeTheme={this.changeTheme}/>
			<Controls lock={this.state.locked} screenLock={this.state.screen} onUnlock={this.unlocking} onLock={this.locking}
			 enterMenu={this.inMenu} exitMenu={this.backMenu}/>
		</div>
	  </div>
	);
  }
}


export default App;
