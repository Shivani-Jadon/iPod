import React from 'react';
import './App.css';
import LockScreen from './LockScreen';
import MenuScreen from './MenuScreen';
import wallpaper from './assets/images/wallpaper2.jpg';

function Screen(){
    return (
        <div id="ipod-screen" style={styling.frame}>
            <LockScreen/>
            <MenuScreen/>
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