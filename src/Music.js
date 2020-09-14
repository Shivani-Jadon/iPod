import React from 'react';
import './App.css';

class Music extends React.Component {

    render() {

        let menuItem = this.props.menuItem;
        let menuList = ['Andhadhun', 'Quafirana', 'Laila-Laila'];
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
            <ul id="MusicList" className='list'>
                {   menuElement }
            </ul>
        )
    }
}


export default Music;