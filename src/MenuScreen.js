import React from 'react';
import './App.css';

function MenuScreen(){
    return (
            <ul id="menuList" style={styling.list}>
                <li style={styling.item} className='list active'>
                    <span>Cover Flow</span> <span>&gt;</span>
            </li>
            <li style={styling.item} className='list'>
                    <span>Music</span> <span>&gt;</span>
                </li>
            <li style={styling.item} className='list'>
                    <span>Games</span> <span>&gt;</span>
                </li>
            <li style={styling.item} className='list'>
                <span>Settings</span> <span>&gt;</span>
                </li>
            </ul>
    )
}

let styling = {
    list : {
        listStyle : 'none',
        padding : 0,
        textAlign : 'justify',
        background : '#a9a9a9b8',
        margin : '10% 15%'
    },
    item : {
        padding : 20,
        boxShadow: "0 0 1px 0px black",
        display : 'flex',
        justifyContent : 'space-between',
        fontWeight : 500
    }
}

export default MenuScreen;