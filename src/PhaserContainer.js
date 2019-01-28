import React from 'react';
import Phaser from 'phaser';
import Game from './scenes/Game';
import Preloader from './scenes/Preloader';

class PhaserContainer extends React.Component
{
    game = null;
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const config = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: "game-container",
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: [
                Preloader,
                Game
            ]
        };

        this.game = new Phaser.Game(config);
    }

    render() {
        return (
            <div className="phaser-container" id="game-container"></div>
        )
    }
}

export default PhaserContainer;