import React from 'react';
import './App.css';
import LockScreen from './LockScreen';
import MenuScreen from './MenuScreen';
import wallpaper from './assets/images/wallpaper2.jpg';
import Coverflow from './Coverflow';
import Music from './Music';
import Games from './Games';
import Settings from './Settings';
import MusicPlayer from './MusicPlayer';

const Screen = (props) => {
    const unlock = props.screenLock;
    const displayMenu = props.menuScreen;
    // console.log("unlock = ",unlock);
    // console.log("Menu = ", displayMenu );
    
    return (
        <div id="ipod-screen" style={styling.frame}>
         
            {unlock <= 1 ? (unlock > 0 ? <MenuScreen pickMenu={ props.pickMenu }  changeMenu_State={props.changeMenu_State}/> : <LockScreen/>)
                        : (displayMenu === 0 ? <Coverflow/> : (displayMenu === 1 ? <Music/>
                                : (displayMenu === 2 ? <Games/> : <Settings/>)  )
            )}

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