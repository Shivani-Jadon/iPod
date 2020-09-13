import React from 'react';
import './App.css';

class MenuScreen extends React.Component {
    constructor(props){
        super(props);
       // this.listRef = React.createRef();
    }

    componentDidMount(){
        
        this.props.pickMenu(this.props.changeMenu_State);
       
    }

    render() {

        // rendering the list dynamically
        let menuItem = this.props.menuItem;
        let menuList = ['Cover Flow', 'Music', 'Games', 'Settings'];

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
            <ul id="menuList" className="list">
                {  menuElement       } 
            </ul>
         )
    }
}


export default MenuScreen;