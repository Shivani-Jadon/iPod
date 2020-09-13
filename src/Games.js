import React from 'react';
import './App.css';

const Games = (props) =>  {

    let menuItem = props.menuItem;
    let menuList = ['Throw the dice', 'Catch the rabbit'];
    let menuElement = [];

    for(let m=0; m < menuList.length; m++){
        menuElement.push(  m === menuItem ? <li className='list-items active'>
                            <span>{menuList[m]}</span> <span>&gt;</span>
                        </li> : 
                        <li className='list-items'>
                            <span>{menuList[m]}</span> <span>&gt;</span>
                        </li>   );
    }

    return (
        <ul id='games-list-items' className='list'>
           {    menuElement }
        </ul>
    )
}


export default Games;