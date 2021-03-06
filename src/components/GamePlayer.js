import React from 'react';
import '../css/App.css';
import dice from '../assets/gif/dice.gif';
import rabbit from '../assets/gif/rabbit.gif';

class GamePlayer extends React.Component {

    render() {
        const game = [dice, rabbit];
        const gameId = this.props.menuItem;

        return (
                <div style={styling.imageCont}>
                    <img src={game[gameId]} alt="Game" style={styling.image} />
                </div>
        )
    }
}


const styling = {
    imageCont : {
        width: 'inherit',
        maxHeight: 280
    },
    image : {
        width: '100%',
        height: 280
    }
}

export default GamePlayer;