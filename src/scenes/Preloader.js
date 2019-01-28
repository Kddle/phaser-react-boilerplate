import Phaser from 'phaser';

export default class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'preloader'
        });
    }

    preload() {
        console.log('Preloader : preload() ');

        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    create() {
        console.log('Preloader : create() ');

        this.scene.start('game');
    }
}