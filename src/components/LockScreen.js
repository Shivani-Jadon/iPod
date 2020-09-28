import React from 'react';
import '../static/css/App.css';
import '../static/css/lockHeader.css';

function LockScreen(){
    return (
        <div id='lock-container'>
            <img src="https://image.flaticon.com/icons/png/512/3178/3178312.png" style={styling.image} alt="Lock-Screen"/>
            <div className='msg'>Press Center Button to Unlock</div>
        </div>
    )
}

let styling = {
    image : {
        width : 100,
        height : 100
    }
}

export default LockScreen;