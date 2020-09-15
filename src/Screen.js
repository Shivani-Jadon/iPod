import React from 'react';
import './App.css';
import LockScreen from './LockScreen';
import MenuScreen from './MenuScreen';
import wallpaper from './assets/images/wallpaper2.jpg';
// importing main menu screens
import Coverflow from './Coverflow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
// importing sub menu screens
import Cover from './Cover';
import MusicPlayer from './MusicPlayer';
import GamePlayer from './GamePlayer';
import Theme from './Theme';
import Wallpaper from './Wallpaper';

const Screen = (props) => {
    const screen = props.screenLock;
    const displayMenu = props.menuScreen;
    // console.log("unlock = ",unlock);
    // console.log("Menu = ", displayMenu );
    let displayScreen;

    if(screen <= 1)
    {
        if(screen === 1){
            displayScreen = <MenuScreen pickMenu={ props.pickMenu }  changeMenu_State={props.changeMenu_State} 
                            lock={props.lock}   menuItem={props.menuItem}   />;
        }else{
            displayScreen = <LockScreen/>;
        }
    }else if(screen === 2){
        if(displayMenu === 0){
            displayScreen = <Coverflow  menuItem={props.menuItem}  />;
        }else if(displayMenu === 1){
            displayScreen = <Music  menuItem={props.menuItem}  />;
        }else if(displayMenu === 2){
            displayScreen = <Games   menuItem={props.menuItem}  />;
        }else{
            displayScreen = <Settings    menuItem={props.menuItem}  />;
        }
    }else if( screen === 3 ){
        if(displayMenu === 0){
            displayScreen = <Cover menuItem={props.menuItem}/>;
        }else if(displayMenu === 1){
            displayScreen = <MusicPlayer menuItem={props.menuItem} playPauseAudio={props.playPauseAudio}
                            screen={screen} menu={displayMenu} />;
        }else if(displayMenu === 2){
            displayScreen = <GamePlayer menuItem={props.menuItem}/>;
        }
        else{
            if(props.option === 0){
                displayScreen = <Theme menuItem={props.menuItem} changeTheme={props.changeTheme}
                            screen={screen} menu={displayMenu} />;
            }else if(props.option === 1){
                displayScreen = <Wallpaper menuItem={props.menuItem} changeWallpaper={props.changeWallpaper}
                            screen={screen} menu={displayMenu} />;
            }
        }
    }
    
    return (
        <div id="ipod-screen" style={styling.frame}>

            {    displayScreen    }

        </div>
    )
}

let styling = {
    frame : {
        minHeight : 300,
        backgroundImage : `url(${wallpaper})`,
        backgroundSize : 'cover',
        backgroundPosition : 'center',
        border : '4px black solid',
        borderRadius : 5
    },
}

export default Screen;