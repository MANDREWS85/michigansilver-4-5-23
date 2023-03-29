import React, { useEffect } from 'react';
import Phaser from 'phaser';

export default function PhaserWhackAMole() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
      width: 400,
      height: 400,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 0
          },
          debug: false
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
      this.load.image('mole', 'coin.png');
    }

    function create() {
      // add moles
      this.moles = this.physics.add.group({
        key: 'mole',
        repeat: 15,
        setXY: {
          x: 50,
          y: 50,
          stepX: 80,
          stepY: 80
        }
      });
      this.moles.children.iterate(mole => {
        mole.setScale(2);
        mole.setInteractive();
        mole.on('pointerdown', () => {
          whackMole.call(this, mole);
        });
      });

      // add score text
      this.score = 0;
      this.scoreText = this.add.text(10, 10, '', {
        fontSize: '16px',
        color: '#fff'
      });

      // add timer text
      this.timeLeft = 30;
      this.timerText = this.add.text(10, 30, `Time Left: ${this.timeLeft}`, {
        fontSize: '16px',
        color: '#fff'
      });

      // add timer
      this.time.addEvent({
        delay: 1000,
        callback: () => {
          this.timeLeft--;
          this.timerText.setText(`Time Left: ${this.timeLeft}`);
          if (this.timeLeft === 0) {
            this.scene.pause();
          }
        },
        callbackScope: this,
        loop: true
      });
    }

function update() {
  // randomly enable moles
  const mole = this.moles.getChildren()[Phaser.Math.Between(0, 15)];
  if (mole && !mole.active) {
    const timeout = Phaser.Math.FloatBetween(0.5, 2.0) * 1000;
    setTimeout(() => {
      if (mole.active) {
        mole.disableBody(true, true);
      }
    }, timeout);
    mole.enableBody(true, Phaser.Math.Between(75, 325), Phaser.Math.Between(75, 325), true, true);
  }

  // update score text position
  this.scoreText.setPosition(10, 10);

  // update score text
  this.scoreText.setText(`Score: ${this.score}`);
  }

    // mole click handler
    function whackMole(mole) {
      if (mole.active) {
        this.score += 10;
        this.scoreText.setText(`Score: ${this.score}`);
        mole.disableBody(true, true);
      }
    }

    game.scene.add('PhaserWhackAMole', {
      preload,
      create,
      update,
      whackMole
    }, true);
  }, []);

  return (
    <div id="game-container" />
  );
}
