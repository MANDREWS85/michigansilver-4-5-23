import Banner from '../components/Banner.jsx';
import BackgroundImage from '../components/BackgroundImage.jsx';
import NavOceanDeep from '../components/NavOceanDeep.jsx';
import ScrollingText from '../components/ScrollingText.jsx';
import NavCharacters from '../components/NavCharacters.jsx';
import Footer from '../components/Footer.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import AudioPlayer2 from '../components/AudioPlayer2.jsx';

export default function AirshipPort() {
  const id="AirshipPort";
  return (
    <div id={id} class="ocean-deep-location">
      <AudioPlayer2 
        src="https://empirefable.magwebdesigns.net/audio/Airship-Port-intro-Compressed.mp3"
      />
      
      <Banner 
        text=""
        linkTitle="Air Ship Port"
        link="#"
        
      />
      <BackgroundImage 
        src="https://cdn.midjourney.com/0e88e1d4-e700-4d12-96be-77e22b3fbcb6/grid_0.png"
      />
      <ScrollingText 
        text="As visitors approach the airship port, a sense of wonder and excitement takes hold of them. The port, situated in the heart of a bustling city, is surrounded by towering buildings made of brass and steel. As they draw closer, they begin to see the magnificent airships moored to the port's giant docking towers. The airships are massive and awe-inspiring, their gleaming hulls crafted from a combination of brass, steel, and glass.

The airship port itself is a marvel of engineering, sprawling across several city blocks with towering hangars and towering docks that can accommodate dozens of airships at once. The port's entrance is marked by a massive wrought iron gate, flanked by two towering clock towers. The gate is adorned with intricate brass filigree, and a pair of brass automatons stand guard on either side.

Upon entering the gate, visitors find themselves in a wide, bustling plaza that serves as the heart of the airship port. The plaza is surrounded by towering hangars and warehouses, each adorned with ornate brass and steel architecture. The ground is paved with a mosaic of brass and stone, and dozens of airship crews can be seen scurrying about, loading and unloading cargo from the various vessels.

In the center of the plaza stands a towering statue of a legendary airship captain, his hand outstretched as if greeting visitors to the port. The statue is made of brass and bronze, gleaming in the sunlight as a testament to the port's proud history.

The sheer scale of the port is staggering, with towering docks, massive hangars, and bustling warehouses at every turn. The airship crews bustle about, loading and unloading cargo, while merchants and travelers bustle about, eager to get a glimpse of the wondrous vessels moored at the port.

The airships themselves are a sight to behold, crafted from a combination of brass, steel, and glass, with intricate engines that hum and glow with otherworldly power. The ships come in all shapes and sizes, from sleek, fast-moving vessels designed for speed and agility to massive, lumbering behemoths built to haul massive amounts of cargo across vast distances.

Visitors can't help but feel a sense of wonder and awe as they explore the bustling port, where fantasy and steam punk collide in a glorious explosion of technology and imagination. The airship port is a place where anything is possible, whether travelers are looking to explore the world or merchants are seeking to trade goods across the continent."
      />
    </div>
  )
}