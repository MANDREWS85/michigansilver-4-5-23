import Banner from '../components/Banner.jsx';
import BackgroundImage from '../components/BackgroundImage.jsx';
import NavOceanDeep from '../components/NavOceanDeep.jsx';
import ScrollingText from '../components/ScrollingText.jsx';
import NavCharacters from '../components/NavCharacters.jsx';
import Footer from '../components/Footer.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import AudioPlayer2 from '../components/AudioPlayer2.jsx';

export default function Citadel() {
  const id="Citadel";
  return (
    <div id={id} class="ocean-deep-location">
      <AudioPlayer2 
        src="https://empirefable.magwebdesigns.net/audio/Citadel-Intro-Compressed.mp3"
      />
      <Banner 
        text=""
        linkTitle="Citadel"
        link="#"
        image=""
      />
      <BackgroundImage 
        src="https://cdn.midjourney.com/4c983503-45ac-4878-9220-c07ee6096841/grid_0.png"
      />
      <ScrollingText 
        text="The Great Citadel of Ocean Deep stands at the heart of the city, a magnificent fortress of stone and iron that has withstood countless assaults and sieges over the centuries. From its high walls and soaring towers, one can see for miles in all directions, taking in the sprawling metropolis of Ocean Deep and the vast expanse of the Sea of Storms beyond.

The Citadel is a marvel of engineering, with thick walls and deep moats that make it virtually impregnable. The gates are made of solid iron, and can only be opened with the permission of the ruling council. The towers are filled with archers and ballistae, ready to rain death upon any who would dare to challenge the might of Ocean Deep.

Inside the Citadel, the halls are lined with tapestries and frescoes depicting the heroic deeds of past rulers and defenders of the city. The throne room is a vast chamber, with high ceilings and intricate carvings adorning the walls. The throne itself is a massive seat of ornately carved stone, set upon a dais and surrounded by guards in gleaming armor.

The Great Citadel is not just a symbol of the city's strength, but also a hub of political and military power. The council chambers are located here, where the leaders of the city gather to make decisions and plot strategy. The armories are stocked with the finest weapons and armor, ready to equip the city's defenders in times of war.

Despite its imposing presence and fearsome reputation, the Great Citadel is also a place of beauty and culture. There are gardens and courtyards filled with exotic plants and sculptures, and the Great Hall is home to a renowned orchestra that performs concerts for the city's elite."
      />
    </div>
  )
}