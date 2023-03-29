import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const TopDownShooter = () => {
  const gameContainerRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: gameContainerRef.current,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    let player;
    let bullets;
    let enemies;
    let score = 0;
    let scoreText;

    function preload() {
      this.load.image('player', 'assets/player.png');
      this.load.image('bullet', 'assets/bullet.png');
      this.load.image('enemy', 'assets/enemy.png');
    }

    function create() {
      // Create the player
      player = this.physics.add.sprite(400, 500, 'player');
      player.setCollideWorldBounds(true);

      // Create the bullets
      bullets = this.physics.add.group({
        defaultKey: 'bullet',
        maxSize: 10,
      });

      // Create the enemies
      enemies = this.physics.add.group({
        defaultKey: 'enemy',
        maxSize: 20,
      });

      // Create the score text
      scoreText = this.add.text(10, 10, `Score: ${score}`, {
        fontSize: '20px',
        fill: '#fff',
      });
    }

    function update() {
      // Handle player movement
      const cursors = this.input.keyboard.createCursorKeys();
      if (cursors.left.isDown) {
        player.setVelocityX(-200);
      } else if (cursors.right.isDown) {
        player.setVelocityX(200);
      } else {
        player.setVelocityX(0);
      }
      if (cursors.up.isDown) {
        player.setVelocityY(-200);
      } else if (cursors.down.isDown) {
        player.setVelocityY(200);
      } else {
        player.setVelocityY(0);
      }

      // Handle shooting
      if (this.input.activePointer.isDown) {
        const bullet = bullets.get(player.x, player.y);
        if (bullet) {
          bullet.setActive(true);
          bullet.setVisible(true);
          bullet.body.setVelocityY(-500);
        }
      }

      // Spawn enemies
      if (enemies.countActive(true) < 20) {
        const enemy = enemies.create(
          Phaser.Math.Between(0, 800),
          Phaser.Math.Between(0, 100),
          'enemy'
        );
        enemy.body.setVelocityY(100);
      }

      // Handle collisions
      this.physics.add.overlap(bullets, enemies, (bullet, enemy) => {
        bullet.setActive(false);
        bullet.setVisible(false);
        enemy.setActive(false);
        enemy.setVisible(false);
        score += 10;
        scoreText.setText(`Score: ${score}`);
      });

      this.physics.add.overlap(player, enemies, () => {
        player.setActive(false);
        player.setVisible(false);
        this.physics.pause();
        this.add.text(400, 300, `Game Over\nScore: ${score}`, {
          fontSize: '32px',
          fill: '#fff',
          align: 'center',
        }).setOrigin(0.5);
      });
    }
  }, []);

  return <div ref={gameContainerRef} />;
};

export default TopDownShooter;