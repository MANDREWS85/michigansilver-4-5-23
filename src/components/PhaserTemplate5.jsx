import React, { useEffect } from 'react';
import Phaser from 'phaser';
import '../App.css';

export default function PhaserTemplate5() {
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
      this.sprite1 = this.load.image('', '');

    }

    function create() {
  // game setup
  //this.add.image(400, 300, '');

  // add text title
  this.add.text(400, 100, 'My Game Title', {
    fontSize: '48px',
    color: '#ffffff'
  }).setOrigin(0.5, 0);

  // create pointer object
  const pointer = this.input.activePointer;

  // add circle that follows pointer
  const circle = this.add.circle(pointer.x, pointer.y, 5, 0xffffff);

  // create hotspots array
  const hotSpots = [
    { name: 'hotSpot1', x: 400, y: 300, width: 200, height: 100 },
    { name: 'hotSpot2', x: 100, y: 200, width: 150, height: 75 },
    { name: 'hotSpot3', x: 600, y: 400, width: 100, height: 50 }
  ];

  // create hotspot objects and add collision detection
  hotSpots.forEach(hotSpot => {
    const rectangle = this.add.rectangle(hotSpot.x, hotSpot.y, hotSpot.width, hotSpot.height, 0xff0000)
      .setInteractive()
      .setAlpha(0.25)
      .setName(hotSpot.name);
      
    this.input.on('pointermove', function (pointer) {
      if (Phaser.Geom.Intersects.RectangleToRectangle(circle.getBounds(), rectangle.getBounds())) {
        console.log(`Pointer object collides with ${rectangle.name}`);
        displayCollision(rectangle.name);
      }
    });
  });

  // update circle position to follow pointer
  this.input.on('pointermove', function (pointer) {
    circle.x = pointer.x;
    circle.y = pointer.y;
    updateStatusDiv(pointer.x, pointer.y);
  });

  // function to display collision message and update status div
  function displayCollision(hotSpotName) {
    console.log(`Collision with ${hotSpotName}`);
    const message = this.add.text(400, 200, `Collision with ${hotSpotName}!`, {
      fontSize: '24px',
      color: '#ffffff'
    }).setOrigin(0.5);
    setTimeout(() => message.destroy(), 1000);
    updateStatusDiv(null, null, hotSpotName);
  }

  // function to update status div with pointer position and hotSpotName
  function updateStatusDiv(x, y, hotSpotName) {
    const statusDiv = document.getElementById('status');
    let statusText = `Pointer position: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
    if (hotSpotName) {
      statusText += ` | Collision with ${hotSpotName}`;
    }
    statusDiv.innerText = statusText;
  }
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

