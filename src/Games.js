import React from 'react';
import './App.css';

const Games = (props) =>  {
    return (
        <ul id='games-list-items' className='list'>
            <li className='list-items active'>
                    <span>Throw the dice</span> <span>&gt;</span>
            </li>
            <li className='list-items'>
                <span>Catch the rabbit </span> <span>&gt;</span>
            </li>
        </ul>
    )
}


export default Games;