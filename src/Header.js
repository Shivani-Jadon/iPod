import React from 'react';
import './App.css';
import './lockHeader.css';

 function Header() {
    let currentDate = new Date();
    let d = currentDate.toDateString();
    let t = currentDate.getHours() + ':' + currentDate.getMinutes();

     return (
        <div className='header-cont'>
            <time>{t}</time>
            <date>{d}</date>
            <img id='battery-img' src="https://www.flaticon.com/svg/static/icons/svg/3103/3103460.svg" alt='battery'></img>
        </div>
    )
}

export default Header;