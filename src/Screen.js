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
        background : 'azure',
        border : '4px black solid',
        borderRadius : 5
    },
    image : {
        width : 100,
        height : 100,
        position : 'relative',
        top : 100
    }
}

export default Screen;