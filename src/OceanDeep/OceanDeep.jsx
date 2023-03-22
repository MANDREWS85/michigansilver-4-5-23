import Banner from '../components/Banner.jsx';
import BackgroundImage from '../components/BackgroundImage.jsx';
import NavOceanDeep from '../components/NavOceanDeep.jsx';
import ScrollingText from '../components/ScrollingText.jsx';
import NavCharacters from '../components/NavCharacters.jsx';
import Footer from '../components/Footer.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import AudioPlayer2 from '../components/AudioPlayer2.jsx';

export default function OceanDeep() {
  const id="OceanDeep";
  return (
    <div id={id} class="ocean-deep-location">
      <AudioPlayer2 
        src="https://empirefable.magwebdesigns.net/audio/Ocean-Deep-Intro-Compressed.mp3"
      />
      <Banner 
        text=""
        linkTitle="Ocean Deep"
        link="#"
        image=""
      />
      <BackgroundImage 
        src="https://empirefable.magwebdesigns.net/images/OceanDeep.png"
      />
      <ScrollingText 
        text="The great human city is situated at the mouth of the Misty Wine River, with its suburbs stretching out along its banks to the north. The river flows into the Sea of Storms, a vast body of water that stretches out to the horizon in all directions.

From above, the city looks like a maze of streets and buildings, with the largest structures standing tall above the rest. The grandest of these structures is the Great Citadel, a massive fortress that stands on a hill overlooking the city. The Citadel's walls are high and thick, with towers and battlements at regular intervals. The flag of the Human Empire flies from its highest tower, indicating that this is the seat of power for the entire region.

To the east of the Citadel lies the Market District, a sprawling collection of stalls and shops selling all manner of goods. The district is packed with people at all times of day, with merchants shouting out their prices and customers haggling for the best deals. The Market District is surrounded by the bustling streets of the Inner City, where the city's wealthier citizens reside in opulent homes and palaces.

To the west of the Citadel lies the Wharf Slums, a seedy district where the city's less fortunate residents live in squalor. The streets here are narrow and winding, with ramshackle buildings leaning precariously against one another. Despite the poverty and desperation that pervades the area, the Wharf Slums are home to a thriving criminal underworld, with thieves and cutthroats operating openly in the shadows.

Beyond the Wharf Slums lies the expansive port, with dozens of ships of all shapes and sizes docked at its many piers. The sea itself is a churning mass of waves and foam, with ships battling against the wind and the tides to make their way in and out of the harbor"
      />
    </div>
    
  )
}