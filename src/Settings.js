import React from 'react';
import './App.css';


class Settings extends React.Component {

    render() {
        return (
            <ul id="settingsList" className='list'>
                <li className='list-items active'>
                    <span>Wallpaper</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>Themes</span> <span>&gt;</span>
                </li>
            </ul>
        )
    }
}


export default Settings;