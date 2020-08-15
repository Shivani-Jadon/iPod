import React from 'react';
import './App.css';

function Screen(){
    return (
        <div id="ipod-screen" style={styling.frame}>
            <img src="https://image.flaticon.com/icons/svg/3064/3064211.svg" style={styling.image} alt="Lock-Screen"/>
        </div>
    )
}

let styling = {
    frame : {
        minHeight : 300,
        background : 'black'
    },
    image : {
        width : 100,
        height : 100
    }
}

export default Screen;