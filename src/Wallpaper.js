import React from 'react';
import './App.css';


class Wallpaper extends React.Component {

    render() {
        return (
            <ul id="WallpaperList" className='list'>
                <li className='list-items active'>
                    <span>Space</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>Metal</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>Nature</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>Sunset</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>Spritual</span> <span>&gt;</span>
                </li>
            </ul>
        )
    }
}


export default Wallpaper;