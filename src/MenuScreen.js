import React from 'react';
import './App.css';

function MenuScreen(){
    return (
        <div>
            <ul style={styling.list}>
                <li style={styling.item}>Cover Flow</li>
                <li style={styling.item}>Music</li>
                <li style={styling.item}>Games</li>
                <li style={styling.item}>Settings</li>
            </ul>
        </div>
    )
}

let styling = {
    list : {
        listStyle : 'none',
        padding : 0,
        textAlign : 'justify',
        background : 'darkgrey',
        maxWidth : '50%'
    },
    item : {
        padding : 20,
    }
}

export default MenuScreen;