import React, { useEffect } from 'react';
import Phaser from 'phaser';

export default function PhaserTemplate() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
      width: 800,
      height: 600,
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
    }

    function update() {
      // game logic
    }
  }, []);

  return (
    <div id="game-container" />
  );
}

