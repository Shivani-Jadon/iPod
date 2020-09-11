import React from 'react';
import './App.css';


function Controls(props) {
    const screen = props.screenLock;
    //the wheel div comprises of the outer buttuns of the controller
    return (
        <section id="control" style={styling.controlSection}>
        <div id="wheel" style={styling.container}>
            <div id="menu-btn" style={styling.menuBtn} onClick={() => { 
                if(screen === 1)
                    return props.onLock()
                else
                    return props.exitMenu()
            } }>Menu</div>
            <div id="back-btn" style={styling.backArrow}><i className="fas fa-fast-backward"></i></div>
            <div id="forward-btn" style={styling.forwardArrow}><i className="fas fa-fast-forward"></i></div>
            <div id="play-btn" style={styling.play_pause}>
               <i className="fas fa-play"></i>  <i className="fas fa-pause"></i> 
            </div>            
        </div>
            <div id="okay-btn" style={styling.selectBtn} onClick={() => { 
                if(screen < 1)
                    return props.onUnlock()
                else
                    return props.enterMenu()
                } }>
            </div>
        </section>
    )
}


let styling = {
    container : {
        display : 'grid',
        gridTemplateColumns : 'auto auto auto',
        gridTemplateRows : '1fr 1fr 1fr',
        height : 150,
        width : 150,
        background : 'ivory',
        alignItems : 'center',
        borderRadius : '50%',
        margin : '20px auto',
        color : '#9E9E9E',
    },
    menuBtn : {
        gridRow : '1/2',
        gridColumn : '1/4',
        fontWeight : 900
    },
    backArrow : {
        gridRow : '2/3',
        gridColumn : '1/2'
    },
    forwardArrow : {
        gridRow : '2/3',
        gridColumn : '3/4'
    },
    play_pause : {
        gridRow : '3/4',
        gridColumn : '1/4',
        fontSize : 12
    },
    selectBtn : {
        borderRadius : '50%',
        background : 'silver',
        width:60,
        height : 60,
        position: 'absolute',
        boxShadow: '0 0 4px 0px black'
    },
    controlSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems : 'center'
    }
}


export default Controls;