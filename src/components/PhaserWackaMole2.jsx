import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const Frogger = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: gameContainerRef.current,
      width: 640,
      height: 480,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: false
        }
      },
      scene: {
        preload: preload,
        create: create,
        update: update
      }
    };

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image('background', 'assets/background.png');
      this.load.image('car', 'assets/car.png');
      this.load.image('log', 'assets/log.png');
      this.load.spritesheet('frog', 'assets/frog.png', {
        frameWidth: 32,
        frameHeight: 32
      });
    }

    function create() {
      // Create the background
      this.add.image(320, 240, 'background');

      // Create the frog
      this.player = this.physics.add.sprite(320, 400, 'frog');
      this.player.setCollideWorldBounds(true);

      // Create the cars
      this.cars = this.physics.add.group();
      this.cars.create(0, 320, 'car');
      this.cars.create(640, 256, 'car');
      this.cars.setVelocityX(-150);

      // Create the logs
      this.logs = this.physics.add.group();
      this.logs.create(0, 128, 'log');
      this.logs.create(640, 64, 'log');
      this.logs.setVelocityX(100);
    }

    function update() {
      // Move the logs
      this.logs.children.iterate((log) => {
        if (log.x < -log.width) {
          log.x = 640;
        }
      });

      // Move the cars
      this.cars.children.iterate((car) => {
        if (car.x < -car.width) {
          car.x = 640;
        }
      });

      // Handle player movement
      const cursors = this.input.keyboard.createCursorKeys();
      if (cursors.left.isDown) {
        this.player.setVelocityX(-150);
      } else if (cursors.right.isDown) {
        this.player.setVelocityX(150);
      } else if (cursors.up.isDown) {
        this.player.setVelocityY(-150);
      } else if (cursors.down.isDown) {
        this.player.setVelocityY(150);
      } else {
        this.player.setVelocity(0);
      }
    }
  }, []);

  return <div ref={gameContainerRef} />;
};

export default Frogger;