import React from 'react';
import './App.css';

class Coverflow extends React.Component{
    
    changeCover() {

    }

    render() {
        return (
            <ul id="coverflow-container" className='list'>
                <li className='covers list-items active'>
                    <img alt='cover1'/>
                </li>
                <li className='covers list-items'>
                    <img alt='cover2' />
                </li>
                <li className='covers list-items'>
                    <img alt='cover3' />
                </li>
                <li className='covers list-items'>
                    <img alt='cover4' />
                </li>
            </ul>
        )
    }
   
}


export default Coverflow;