import React, { useEffect } from 'react';
import Phaser from 'phaser';
import '../App.css';

export default function PhaserGame3c() {

  useEffect(() => {

    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
      transparent: true,
      width: 400,
      height: 400,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    let player;
    let cursors;
    let obstacles;
    let coins;
    let score = 0;
    let scoreText;

    function preload() {
      this.load.image('ship', './deathcap.png');
      this.load.image('obstacle', './obstacle.png');
      this.load.image('coin', 'coin.png');
    }

    function create() {
      player = this.physics.add.sprite(200, 550, 'ship').setScale(0.3);
      player.setCollideWorldBounds(true);
      cursors = this.input.keyboard.createCursorKeys();
      obstacles = this.physics.add.group();
      coins = this.physics.add.group();
      scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#fff' });

      this.time.addEvent({
        delay: 250,
        callback: addObstacle,
        callbackScope: this,
        loop: true,
      });

      this.time.addEvent({
        delay: 250,
        callback: addCoin,
        callbackScope: this,
        loop: true,
      });

      this.physics.add.overlap(player, obstacles, hitObstacle, null, this);
      this.physics.add.overlap(player, coins, hitCoin, null, this);
    }

    function update() {
      const pointer = this.input.activePointer;
      const relativeX = pointer.worldX - player.x;

      if (relativeX < 0) {
        player.setVelocityX(-300);
      } else if (relativeX > 0) {
        player.setVelocityX(300);
      } else {
        player.setVelocityX(0);
      }

      obstacles.getChildren().forEach((obstacle) => {
        obstacle.y += 1;

        if (obstacle.y > 600) {
          obstacle.destroy();
          //scoreText.setText(`Score: ${score}`);
        }
      });

      coins.getChildren().forEach((coin) => {
        coin.y += 1;

        if (coin.y > 600) {
          coin.destroy();
          //scoreText.setText(`Score: ${score}`);
        }
      });
    }

    function addObstacle() {
      const obstacle = obstacles.create(
        Phaser.Math.Between(50, 350),
        0,
        'obstacle'
      );

      obstacle.setVelocityY(Phaser.Math.Between(50, 250));
    }

    function addCoin() {
      const coin = coins.create(Phaser.Math.Between(50, 350), 0, 'coin');
      coin.setVelocityY(Phaser.Math.Between(50, 50));
    }

    function hitObstacle() {
      console.log('HIT OBSTACLE');
      score -= 10;
      scoreText.setText(`Score: ${score}`);
    }

    function hitCoin() {
      console.log('HIT COIN');
      score += 10;
      scoreText.setText(`Score: ${score}`);
    }

  }, []);

  return (
    <div id='background'>
      <h3>Space Escape</h3>
      <div id='game-container'></div>
      <div id='status'></div>
    </div>
  );
}