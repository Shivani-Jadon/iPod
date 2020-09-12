import React from 'react';
import './App.css';

class MusicPlayer extends React.Component{

    render() {
        return (
            <div>
                <div style={styling.imageCont}>
                    <img src="" alt="Song1" style={styling.image} />
                </div>
                <audio style={styling.audioControl}>
                    <source src="" type="audio/mp3" controls/>
                </audio>
            </div>
        )
    }
}

const styling = {
    imageCont : {
        width: 'inherit'
    },
    image : {
        width: 'inherit'
    },
    audioControl : {
        marginTop : -20
    }
}

export default MusicPlayer;