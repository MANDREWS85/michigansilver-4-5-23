import React, { useEffect } from 'react';
import Phaser from 'phaser';
import '../App.css';

export default function PhaserGame3() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
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
      this.load.image('ship', 'assets/ship.png');
      this.load.image('obstacle', 'assets/obstacle.png');
    }

    function create() {
      player = this.physics.add.sprite(200, 550, 'ship').setScale(0.3);
      player.setCollideWorldBounds(true);
      cursors = this.input.keyboard.createCursorKeys();

      obstacles = this.physics.add.group();
      coins = this.physics.add.group();

      scoreText = this.add.text(16, 16, 'score: 0', {
        fontSize: '32px',
        fill: '#fff',
      });

      this.time.addEvent({
        delay: 250,
        callback: addObstacle,
        callbackScope: this,
        loop: true,
      });

      this.physics.add.overlap(player, obstacles, hitObstacle, null, this);
    }

    function update() {
      // get pointer object
      const pointer = this.input.activePointer;

      // calculate the pointer position relative to the player
      const relativeX = pointer.worldX - player.x;

      // set player velocity based on the relative position
      if (relativeX < 0) {
        player.setVelocityX(-300);
      } else if (relativeX > 0) {
        player.setVelocityX(300);
      } else {
        player.setVelocityX(0);
      }

      obstacles.getChildren().forEach((obstacle) => {
        obstacle.y += 5;
        if (obstacle.y > 600) {
          obstacle.destroy();
          //score += 10;
          scoreText.setText(`Score: ${score}`);
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

    function hitObstacle() {
      console.log("HIT OBSTACLE");
    }
  }, []);

  return (
    <div id='background'>
      <h3>Space Escape</h3>
      <div id='game-container'></div>
      <div id='status'> </div>
    </div>
  );
}
