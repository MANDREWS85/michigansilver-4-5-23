import Banner from '../components/Banner.jsx';
import BackgroundImage from '../components/BackgroundImage.jsx';
import NavOceanDeep from '../components/NavOceanDeep.jsx';
import ScrollingText from '../components/ScrollingText.jsx';
import NavCharacters from '../components/NavCharacters.jsx';
import Footer from '../components/Footer.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import AudioPlayer2 from '../components/AudioPlayer2.jsx';

export default function Docks() {
  const id="Docks";
  return (
    <div id={id} class="ocean-deep-location">
      <AudioPlayer2 
        src="https://empirefable.magwebdesigns.net/audio/Docks-intro-Compressed.mp3"
      />
      <Banner 
        text=""
        linkTitle="Docks"
        link="#"
        image=""
      />
      <BackgroundImage 
        src="https://cdn.midjourney.com/7e900a90-2a45-4360-9e1f-f3e64b47be51/grid_0.png"
      />
      <ScrollingText 
        text="The docks of Ocean Deep are a sprawling, bustling network of piers and quays that jut out into the Sea of Storms. The scent of salt water and fish hangs heavy in the air, and the constant bustle of activity creates a palpable energy that fills the air.

As far as the eye can see, ships of all shapes and sizes are docked or anchored offshore, their masts stretching up towards the sky like a forest of wooden spires. Sailors and merchants bustle about the docks, loading and unloading cargo, repairing sails and rigging, and haggling over prices.

The sound of creaking timbers and clanging metal echoes through the air, along with the raucous calls of gulls and the occasional shout or curse from a sailor. The docks are a place where fortunes are made and lost, where the risks are high but the rewards can be even higher."
      />
    </div>
  )
}