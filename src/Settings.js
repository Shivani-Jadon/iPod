import React from 'react';
import './App.css';


class Settings extends React.Component {

    render() {
        let menuItem = this.props.menuItem;
        let menuList = ['Themes', 'Wallpaper'];
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
            <ul id="settingsList" className='list'>
                {   menuElement }
            </ul>
        )
    }
}


export default Settings;