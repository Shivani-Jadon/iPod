import React from 'react';
import './App.css';


class Theme extends React.Component {

    render() {
        return (
            <ul id="theme-List" className='list'>
                <li className='list-items active'>
                    <span>iPod Classic Dark</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>iPod Classic Light</span> <span>&gt;</span>
                </li>
            </ul>
        )
    }
}


export default Theme;