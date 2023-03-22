import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export default function PhaserContainer2() {
    // Component centralized reference to the phaser instance if needed.
    const [phaser, setPhaser] = useState(); 

    // Create a new Phaser.Game instance after the initial render. 
    useEffect(() => {
        let _phaser = new Phaser.Game({
            type: Phaser.AUTO,
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                parent: "phaser-parent",
                width: 1920,
                height: 1080
            },
            parent: "phaser-parent",
            backgroundColor: '#ffd13b',
            scene: [playGame],
        });
        setPhaser(_phaser);
    }, []);

    return(
      <div id="phaser-parent">
        <h3>PHASER 2</h3>
      </div>
          );
}