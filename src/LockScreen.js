import React from 'react';
import './App.css';

function LockScreen(){
    return (
        <div>
            <img src="https://image.flaticon.com/icons/png/512/3178/3178312.png" style={styling.image} alt="Lock-Screen"/>
        </div>
    )
}

let styling = {
    image : {
        width : 100,
        height : 100,
        position : 'relative',
        top : 100
    }
}

export default LockScreen;
