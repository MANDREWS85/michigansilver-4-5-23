import React, { useEffect } from 'react';
import Phaser from 'phaser';
import '../App.css';

export default function PhaserGame2() {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: 'game-container',
      width: 800,
      height: 600,
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
    let score = 0;
    let scoreText;

    function preload() {
      this.load.image('ship', 'assets/ship.png');
      this.load.image('obstacle', 'assets/obstacle.png');
    }

function create() {
  // game setup
  // add text title
  this.add.text(200 ,0, 'Game Title', {
    fontSize: '48px',
    color: '#000000'
  }).setOrigin(0.5, 0);

  // create pointer object
  const pointer = this.input.activePointer;

  // add circle that follows pointer
  const circle = this.add.circle(pointer.x, pointer.y, 5, 0x000000);

  // create hot spot area
  const hotSpot = this.add.rectangle(400, 300, 50, 50, 0xff0000).setInteractive().setAlpha(0.25);
  // create hot spot area
  const hotSpot2 = this.add.rectangle(200, 300, 50, 50, 0xff0000).setInteractive().setAlpha(0.25);

  // add collision detection
  this.input.on('pointermove', function (pointer) {
    if (Phaser.Geom.Intersects.RectangleToRectangle(circle.getBounds(), hotSpot.getBounds())) {
      console.log('Pointer object collides with hot spot');
      document.getElementById("status").innerHTML = "COLLISION";

    }
    else
    {
      document.getElementById("status").innerHTML = "NO COLLISION";

    }
  });

  // update circle position to follow pointer
  this.input.on('pointermove', function (pointer) {
    circle.x = pointer.x;
    circle.y = pointer.y;
    //document.getElementById("status").innerHTML = pointer.x + pointer.y;
  });

  // add obstacles
  const obstacles = this.physics.add.group();
  const numObstacles = 30;

  for (let i = 0; i < numObstacles; i++) {
    const obstacleX = Phaser.Math.Between(0, config.width);
    const obstacleY = Phaser.Math.Between(0, config.height);
    const obstacle = this.add.rectangle(obstacleX, obstacleY, 50, 50, 0xff0000);
    obstacles.add(obstacle);
  }

  // add coins
  const coins = this.physics.add.group();
  const numCoins = 10;

  for (let i = 0; i < numCoins; i++) {
    const coinX = Phaser.Math.Between(0, config.width);
    const coinY = Phaser.Math.Between(0, config.height);
    const coin = this.add.image(coinX, coinY, 'coin');
    coins.add(coin);
  }

  // add collision detection between player and obstacles/coins
  this.physics.add.collider(circle, obstacles, function () {
    console.log('Player collides with obstacle');
    document.getElementById("status").innerHTML = "COLLISION";
  });

  this.physics.add.overlap(circle, coins, function (player, coin) {
    console.log('Player collides with coin');
    document.getElementById("status").innerHTML = "Coin collected";
    coin.disableBody(true, true);
  });
}


    function update() {
      if (cursors.left.isDown) {
        player.setVelocityX(-300);
      } else if (cursors.right.isDown) {
        player.setVelocityX(300);
      } else {
        player.setVelocityX(0);
      }

      obstacles.getChildren().forEach((obstacle) => {
        obstacle.y += 5;
        if (obstacle.y > 600) {
          obstacle.destroy();
          score += 10;
          scoreText.setText(`Score: ${score}`);
        }
      });
    }

    function addObstacle() {
      const obstacle = obstacles.create(
        Phaser.Math.Between(50, 750),
        0,
        'obstacle'
      );
      obstacle.setVelocityY(Phaser.Math.Between(150, 250));
    }

    function hitObstacle() {
      this.physics.pause();
      player.setTint(0xff0000);
      player.anims.play('turn');
      gameOver = true;
    }
  }, []);

  return (
    <div id='background'>
      <h3>Space Escape</h3>
      <div id='game-container' />
      <div id='status' />
    </div>
  );
}
