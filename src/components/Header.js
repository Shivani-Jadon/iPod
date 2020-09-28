import React from 'react';
import '../static/css/App.css';
import '../static/css/lockHeader.css';

 function Header() {
    let currentDate = new Date();
    let d = currentDate.toDateString();
    let t = currentDate.getHours() + ':' + currentDate.getMinutes();

     return (
        <div className='header-cont'>
            <time>{t}</time>
            <span>{d}</span>
            <img id='battery-img' src="https://www.flaticon.com/svg/static/icons/svg/3103/3103460.svg" alt='battery'></img>
        </div>
    )
}

export default Header;