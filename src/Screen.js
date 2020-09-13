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
import MusicPlayer from './MusicPlayer';

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
            displayScreen = <MusicPlayer/>;
        }
    }
    
    return (
        <div id="ipod-screen" style={styling.frame}>

            {    displayScreen    }
         
            {/* {unlock <= 1 ? (unlock > 0 ? <MenuScreen pickMenu={ props.pickMenu }  changeMenu_State={props.changeMenu_State}/> : <LockScreen/>)
                        : (displayMenu === 0 ? <Coverflow/> : (displayMenu === 1 ? <Music/>
                                : (displayMenu === 2 ? <Games/> : <Settings/>)  )
            )} */}

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