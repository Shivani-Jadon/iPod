import React from 'react';
import './App.css';


class Music extends React.Component {

    render() {
        return (
            <ul id="MusicList" className='list'>
                <li className='list-items active'>
                    <span>Song 1</span> <span>&gt;</span>
                </li>
                <li className='list-items'>
                    <span>Song 2</span> <span>&gt;</span>
                </li>
            </ul>
        )
    }
}


export default Music;