import React, { useEffect } from 'react';
import Phaser from 'phaser';
import '../App.css';

export default function PhaserTemplate3() {
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

      // create pointer object
      const pointer = this.input.activePointer;

      // add circle that follows pointer
      const circle = this.add.circle(pointer.x, pointer.y, 5, 0x000000);

      // create hot spot area
      const hotSpot = this.add.rectangle(400, 300, 200, 100, 0xff0000).setInteractive().setAlpha(0.25);

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
      });

    // update status div with pointer coordinates
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = `Pointer X: ${pointer.x.toFixed(2)}, Y: ${pointer.y.toFixed(2)}`;



    
      
    }

    function update() {
      // game logic
    }
  }, []);

  return (
    <div id="background"> 
      <h3>BACKGROUND DIV</h3>
      <div id="game-container" />
      <div id="status"><h3>STATUS</h3></div>
    </div>
  );
}

