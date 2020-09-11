import React from 'react';
import './App.css';


function MenuScreen(props){
    return (
        <ul id="menuList" className="list" onLoad={props.pickMenu()}>
                <li className='list-items active'>
                    <span>Cover Flow</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                        <span>Music</span> <span>&gt;</span>
                    </li>
                <li className='list-items'>
                        <span>Games</span> <span>&gt;</span>
                    </li>
                <li className='list-items'>
                    <span>Settings</span> <span>&gt;</span>
                </li>
        </ul>
    )
}


export default MenuScreen;