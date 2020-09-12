import React from 'react';
import './App.css';
import cover1 from './assets/images/cover1.jpg';
import cover2 from './assets/images/cover2.jpg';
import cover3 from './assets/images/cover3.jpg';
import cover4 from './assets/images/cover4.jpg';

class Coverflow extends React.Component{
    
    changeCover() {

    }

    render() {
        return (
            <ul id="coverflow-container" style={styling.container} className='list' >
                <li className='covers list-items active' style={styling.cover} >
                    <img src={cover1} alt='cover1' style={styling.image} />
                </li>
                <li className='covers list-items' style={styling.cover} >
                    <img src={cover2} alt='cover2' style={styling.image} />
                </li>
                <li className='covers list-items' style={styling.cover} >
                    <img src={cover3} alt='cover3' style={styling.image} />
                </li>
                <li className='covers list-items' style={styling.cover} >
                    <img src={cover4} alt='cover4' style={styling.image} />
                </li>
            </ul>
        )
    }
   
}

const styling = {
    container : {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 22
    },
    cover : {
        height: 120,
        width: 120,
        padding: 0
    },
    image : {
        height: 'inherit',
        width: 'inherit',
    }
}


export default Coverflow;