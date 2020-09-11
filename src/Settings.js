import React from 'react';
import './App.css';


class Settings extends React.Component {

    render() {
        return (
            <ul id="settingsList" style={styling.list}>
                <li style={styling.item} className='list active'>
                    <span>Wallpaper</span> <span>&gt;</span>
                </li>
                <li style={styling.item} className='list'>
                    <span>Themes</span> <span>&gt;</span>
                </li>
            </ul>
        )
    }
}

let styling = {
    list: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'justify',
        background: '#a9a9a9b8',
        margin: '10% 15%'
    },
    item: {
        padding: 20,
        boxShadow: "0 0 1px 0px black",
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: 500
    }
}


export default Settings;