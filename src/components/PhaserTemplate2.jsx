import React, { useEffect } from 'react';
import Phaser from 'phaser';
import '../App.css';

export default function PhaserTemplate2() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
      width: window.innerWidth,
      height: window.innerHeight,
      transparent: true,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
      },
      backgroundColor: '#000',
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };
    const game = new Phaser.Game(config);

    function preload() {
      // game assets loading
      this.sprite1 = this.load.image('sprite1', 'assets/repl.png');

    }

    function create() {
      // game setup
      // add text title
      this.add.text(200 ,0, 'Game Title', {
        fontSize: '48px',
        color: '#000000'
      }).setOrigin(0.5, 0);
    }

    function update() {
      // game logic
    }
  }, []);

  return (
    <div id="background"> 
      <h3>Phaser template 2</h3>
      <div id="game-container" />
    </div>
  );
}

