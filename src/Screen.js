import React from 'react';
import './App.css';
import LockScreen from './LockScreen';
import wallpaper from './assets/images/wallpaper5.jpg';

function Screen(){
    return (
        <div id="ipod-screen" style={styling.frame}>
            <LockScreen/>
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