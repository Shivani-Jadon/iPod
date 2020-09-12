import React from 'react';
import './App.css';

class MenuScreen extends React.Component {
    constructor(props){
        super(props);
        
        // this.state = {
        //     item_No : 0
        // }
    }


    render() {
        return (
            <ul id="menuList" className="list" onLoad={this.props.pickMenu(this.props.changeMenu_State)}>
                    <li className='list-items active'>
                        <span>Cover Flow</span> <span>&gt;</span>
                    </li>
                    <li className='list-items'>
                            <span>Music</span> <span>&gt;</span>
                        </li>
                    <li className='list-items'>
                            <span>Games</span> <span>&gt;</span>
                        </li>
                    <li className='list-items'>
                        <span>Settings</span> <span>&gt;</span>
                    </li>
            </ul>
        )
    }
}


export default MenuScreen;