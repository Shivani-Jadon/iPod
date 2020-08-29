import React from 'react';
import './App.css';
import ZingTouch from 'zingtouch';



function Controls(props) {
    //the wheel div comprises of the outer buttuns of the controller
    return (
        <section id="control" style={styling.controlSection}>
        <div id="wheel" style={styling.container}>
            <div id="menu-btn" style={styling.menuBtn} onClick={() => { props.onLock() } }>Menu</div>
            <div id="back-btn" style={styling.backArrow}><i className="fas fa-fast-backward"></i></div>
            <div id="forward-btn" style={styling.forwardArrow}><i className="fas fa-fast-forward"></i></div>
            <div id="play-btn" style={styling.play_pause}>
               <i className="fas fa-play"></i>  <i className="fas fa-pause"></i> 
            </div>            
        </div>
            <div id="okay-btn" style={styling.selectBtn} onClick={() => { props.onUnlock()} }></div>
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


window.onload = () => {
    const containerElement = document.getElementById('wheel');
    const activeRegion = ZingTouch.Region(containerElement);

    const childElement = document.getElementById('wheel');

    let list_item = document.getElementsByClassName('list')
    let i = 0;

    activeRegion.bind(childElement, 'rotate', function(event){
        //Perform Operations
        //console.log(event.detail);
        
        if (event.detail.distanceFromLast > 3) {
            console.log(event.detail.distanceFromLast);

            if (i >= list_item.length)
                i = 0;
          
            list_item[i].style.background = 'grey';

            i++;
        }
        
        //list_item.style.background = "black";
    });


}

export default Controls;