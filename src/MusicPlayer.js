import React from 'react';
import './App.css';
import song1 from './assets/audio/Andhadhun.mp3';
import song2 from './assets/audio/Qaafirana.mp3';
import song3 from './assets/audio/Laila_Laila.mp3';
import image1 from './assets/images/song_cover1.jpg';
import image2 from './assets/images/song_cover3.jpg';
import image3 from './assets/images/song_cover2.jpg';



class MusicPlayer extends React.Component{

    componentDidMount(){
        this.props.playPauseAudio(this.props.screen, this.props.menu);
    }

    componentWillUnmount(){
        document.getElementById('player').classList.remove('active-song');
    }

    render() {

        let song = [song1, song2, song3];
        let cover = [image1, image2, image3];

        return (
            <div>
                <div style={styling.imageCont}>
                    <img src={cover[this.props.menuItem]} alt="Song1" style={styling.image} />
                </div>
                <audio id='player' className='active-song'   style={styling.audioControl} controls>
                    <source src={song[this.props.menuItem]} type="audio/mp3"   />
                </audio>
            </div>
        )
    }
}

const styling = {
    imageCont : {
        width: 'inherit',
        minHeight: 50
    },
    image : {
        width: '100%'
    },
    audioControl : {
        marginTop : -100,
        width: '100%',
        overflowY: 'hidden',
    }
}

export default MusicPlayer;