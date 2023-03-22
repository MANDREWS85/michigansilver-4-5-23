import Banner from '../components/Banner.jsx';
import BackgroundImage from '../components/BackgroundImage.jsx';
import NavOceanDeep from '../components/NavOceanDeep.jsx';
import ScrollingText from '../components/ScrollingText.jsx';
import NavCharacters from '../components/NavCharacters.jsx';
import Footer from '../components/Footer.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import AudioPlayer2 from '../components/AudioPlayer2.jsx';

export default function WharfSlums() {
  const id="WharfSlums";
  return (
    <div id={id} class="ocean-deep-location">
      <AudioPlayer2 
        src="https://empirefable.magwebdesigns.net/audio/Wharf-Slums-Intro-Compressed.mp3"
      />
      <Banner 
        text=""
        linkTitle="Wharf Slums"
        link="#"
        image=""
      />
      <BackgroundImage 
        src="https://cdn.midjourney.com/e8cca8cc-2a53-461b-9e12-af615dbcafb8/grid_0.png"
      />
      <ScrollingText 
        text="The Wharf Slums of Ocean Deep are a sprawling and labyrinthine neighborhood where the destitute and impoverished take refuge. The area is a maze of ramshackle buildings, narrow alleys, and winding streets that seem to be in a perpetual state of decay. The neighborhood is situated in the shadow of the city's towering spires, serving as a stark contrast to the gleaming structures of prosperity that loom above.

The structures within the Wharf Slums are precarious at best. The buildings are constructed from wood and stone, and they appear as if they could collapse at any moment. Most of the structures are two or three stories tall, with cramped living quarters on the upper floors and shops and stalls on the ground level. The roofs are made of rusted and pitted corrugated metal that sags under the weight of discarded furniture, tools, and other detritus.

The streets within the Wharf Slums are narrow and twisting, lined with makeshift stalls selling cheap trinkets, stolen goods, and other wares. The stalls are occupied by people hawking their wares or begging for spare change. The stench of sewage and decaying garbage permeates the air, and the sounds of barking dogs, shouting, and laughter echo through the alleyways.

Despite the squalor and poverty that permeates the Wharf Slums, there is a strong sense of community here. People look out for each other and are willing to lend a helping hand when times are tough. However, there is also danger lurking in the shadows. Thieves, cutthroats, and other unsavory characters prey on the weak and vulnerable."
      />
    </div>
    
  )
}