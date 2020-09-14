import React from 'react';
import './App.css';

const Games = (props) =>  {

    let menuItem = props.menuItem;
    let menuList = ['Throw the dice', 'Catch the rabbit'];
    let menuElement = [];

    for(let m=0; m < menuList.length; m++){
        menuElement.push(  m === menuItem ? <li className='list-items active'>
                            <span>{menuList[m]}</span> <span><img style={styling.icons}  src="https://www.flaticon.com/premium-icon/icons/svg/2969/2969711.svg" alt='>'/></span>
                        </li> : 
                        <li className='list-items'>
                            <span>{menuList[m]}</span> <span><img style={styling.icons}  src="https://www.flaticon.com/premium-icon/icons/svg/2969/2969711.svg" alt='>'/></span>
                        </li>   );
    }

    return (
        <ul id='games-list-items' className='list'>
           {    menuElement }
        </ul>
    )
}

let styling = {
    icons : {
        width: 15
    }
}

export default Games;