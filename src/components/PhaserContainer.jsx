import Phaser from 'phaser';


export default function PhaserContainer() {
const id="PhaserContainer"
const BLACK = "#1c2333"
const RED = ""
const WHITE = ""


const config = {
    type: Phaser.AUTO,
    width: 500,
    height: 400,
    scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                parent: "phaser-parent",
            },
    parent: "phaser-parent",
    backgroundColor: '',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            },
            debug: true
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);



//var sprite;

function preload() {
  this.sprite1 = this.load.image('', '');
    
}

function create() {


  //sprite = this.add.sprite(this.scene.centerX, this.scene.centerY, 'sprite1');
  //this.scene.physics.enable(sprite, Phaser.Physics.ARCADE);


  //input = this.input;

 class Player extends Phaser.GameObjects.Container {  

    constructor(scene,name,description,maxHp, x, y) {
    super(scene);    
    this.scene = scene;
    this.name = name;
    this.description = description;
    ///  SET INTERACTIVE FOR COLLISIONS
    this.avatar = this.scene.physics.add.image(x,y, 'sprite1').setInteractive();
    this.roll = Math.floor(Math.random() * 101);  // 1 through 100
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.dmg = Math.floor(Math.random() * 6);
    this.x = x;
    this.y = y;
    this.enableBody = true;
    }

    status() {
      console.log("STATUS");
      console.log(this.name + " MAX HP:" + this.maxHp);
      console.log(this.name + " CURRENT HP:" + this.hp);
    } 

    inventory() {

      this.scene.add.text((config.width / 2) +10, (config.height / 2) - 0, 'INVENTORY', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' })



     
   }

    keyBoardMovement() {
      let cursors = this.scene.input.keyboard.createCursorKeys();

      if (cursors.left.isDown)
      {
        console.log("LEFT");
        this.avatar.x -= 10;
      }
      else if (cursors.right.isDown)
      {
        console.log("RIGHT");
        this.avatar.x += 10;
      }

      if (cursors.up.isDown)
      {
        console.log("UP");
        this.avatar.y -= 10;
      }
      else if (cursors.down.isDown)
      {
      console.log("DOWN");
      this.avatar.y += 10;
      }

    }

    pointerMovement(x,y) {

      if (this.scene.input.activePointer.isDown)
      {
          this.avatar.x = x
          this.avatar.y = y
  
      }

      else
      {

      }



    }

    
  }

class GameObj extends Phaser.GameObjects.Container {  

    constructor(scene,name,description,maxHp, x, y) {
    super(scene);    
    this.scene = scene;
    this.name = name;
    this.description = description;
    ///   SET INTERACTIVE() FOR COLLISIONS
    this.avatar = this.scene.physics.add.image(x,y, 'sprite1').setInteractive();
    this.roll = Math.floor(Math.random() * 101);  // 1 through 100
    this.maxHp = maxHp;
    this.hp = maxHp;
    this.dmg = Math.floor(Math.random() * 7);
    this.x = x;
    this.y = y;
    this.enableBody = true;
    }

    status() {
      console.log("STATUS");
      console.log(this.name + " MAX HP:" + this.maxHp);
      console.log(this.name + " CURRENT HP:" + this.hp);
    } 


    goto(x,y) {

      if (this.scene.input.activePointer.isDown) {
        //this.moveToPointer()//
        //this.avatar.moveToPointer()

        //this.physics.moveToObject(clown, pointer, 240);


        //this.scene.physics.arcade.moveToPointer(object1, 100);

        //this.scene.physics.moveToObject(obect1,object2,100)
        //this.avatar.physics.moveToObject(object1,object2,100)
        this.avatar.setPosition(x , y);

        //this.avatar.scene.physics.arcade.moveToPointer(100, 400);
        
        //game.physics.arcade.moveToObject(sprite,targetSprite,speed);
        //this.scene.physics.arcade.moveToObject(object.avatar,player.avatar,100);
        //moveToPointer()
        // game.physics.arcade.moveToPointer(ball,100,cups.children[0].body.center, 1000);
      }

    }

    
}

player = new Player(this,"PLAYER","PLAYER DESC",20,100,100);

player.inventory();

  
object = new GameObj(this,"GAME OBJECT","GAME OBJECT DESC",5,100,100);
object2 = new GameObj(this,"GAME OBJECT 2","GAME OBJECT 2 DESC",200,200);

player.avatar.setScale(.15,.15)
object.avatar.setScale(.15,.15)
object2.avatar.setScale(.15,.15)

object2.avatar.setImmovable(true)
//object.this.goto(400,400)

//this.gameSprite = this.physics.add.image(60,60, 'sprite1')
//this.gameSprite.setScale(.5,.5)
//this.gameSprite.setTint(0xff0000)
//this.gameSprite.x = config.width/2
//this.gameSprite.y = config.height/2
//this.gameText = this.add.text(60,80,"HELLO WORLD" )
//this.gameText.setScale(2,2)
//this.gameText.setTint(0xff0000)
//this.gameText.x = config.width/2
//this.gameText.y = config.height/2
}

function update() {
  ///   COLLSISION PAIRS
  this.physics.collide(player.avatar,object.avatar, collide(player,object), attack(player,object), this);
  this.physics.collide(player.avatar,object2.avatar, collide, attack, this);

  const mousePosition = {
  x:this.input.activePointer.x,
  y:this.input.activePointer.y,
  }
  
  console.log(mousePosition.x);
  console.log(mousePosition.y);
  
  player.keyBoardMovement()
  //player.pointerMovement(mousePosition.x,mousePosition.y)
  //object.goto(mousePosition.x,mousePosition.y);
  ///   PLAYER SMOOTH MOUSE MOVMENT 
  this.physics.moveToObject(player.avatar, mousePosition, 400);
  ///    FOLLOW BEHAVIOR
  this.physics.moveToObject(object.avatar, player.avatar, 200);
}

function collide(p,e) {
  
}

function attack(p,e) {
  e.hp -= p.dmg;
  p.hp -= e.dmg;
  console.log(p.name + " HAS " +  p.hp);
  console.log(e.name + " HAS " +  e.hp);
}



  
return(
  <div id="phaser-parent" class=""> <h3>PHASER CONTAINER</h3>
    <canvas id="phaser-parent" class=""></canvas>
  </div>
  
);  
  
};