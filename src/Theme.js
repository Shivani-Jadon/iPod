import React from 'react';
import './App.css';


class Theme extends React.Component {

    componentDidMount(){
        this.props.changeTheme(this.props.screen, this.props.menu, this.props.menuItem);
    }

    componentDidUpdate(){
        this.props.changeTheme(this.props.screen, this.props.menu, this.props.menuItem);
    }

    render() {
        let menuItem = this.props.menuItem;
        let menuList = ['Dark', 'Light'];
        let menuElement = [];

        for(let m=0; m < menuList.length; m++){
            menuElement.push(  m === menuItem ? <li className='list-items active'>
                                {menuList[m]}
                            </li> : 
                            <li className='list-items'>
                                {menuList[m]}
                            </li>   );
        }

        return (
            <ul id="MusicList" className='list'>
                {   menuElement }
            </ul>
        )
    }
}


export default Theme;