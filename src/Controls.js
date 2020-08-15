import React from 'react';
import './App.css';

function Controls(){
    return (
        <div id="control" style={styling.container}>
            <div id="menu-btn" style={styling.menuBtn}>Menu</div>
            <div id="back-btn" style={styling.backArrow}>Back</div>
            <div id="forward-btn" style={styling.forwardArrow}>Ford</div>
            <div id="play-btn" style={styling.play_pause}>Play</div>
            <div id="okay-btn" style={styling.selectBtn}></div>
        </div>
    )
}


let styling = {
    container : {
        display : 'grid',
        gridTemplateColumns : 'auto auto auto',
        gridTemplateRows : '1fr 1fr 1fr',
        height : 150,
        width : 150,
        background : 'grey',
        alignItems : 'center',
        borderRadius : '50%',
        margin : '20px auto'
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
        gridColumn : '2/3',
        borderRadius : '50%',
        background : 'silver',
        width:50,
        height : 50,
        justifySelf : 'center',

    }
}

export default Controls;