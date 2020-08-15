import React from 'react';
import './App.css';

function Controls(){
    return (
        <div id="control" style={styling.container}>
            <div id="okay-btn"></div>
        </div>
    )
}


let styling = {
    container : {
        display : 'grid',
        gridTemplateColumns : 'auto auto auto',
        gridTemplateRows : 'auto auto auto',
    },
    menuBtn : {
        gridRow : '1/2',
        gridColumn : '1/4'
    },
    backArrow : {
        gridRow : '2/3',
        gridColumn : '1/2'
    },
    forwardArrow : {
        gridRow : '2/3',
        gridColumn : '3/4'
    },
    play_pause : {
        gridRow : '3/4',
        gridColumn : '1/4'
    },
    selectBtn : {
        gridRow : '2/3',
        gridColumn : '2/3'
    }
}

export default Controls;