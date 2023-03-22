import Banner from '../components/Banner.jsx';
import BackgroundImage from '../components/BackgroundImage.jsx';
import NavOceanDeep from '../components/NavOceanDeep.jsx';
import ScrollingText from '../components/ScrollingText.jsx';
import NavCharacters from '../components/NavCharacters.jsx';
import Footer from '../components/Footer.jsx';
import AudioPlayer from '../components/AudioPlayer.jsx';
import AudioPlayer2 from '../components/AudioPlayer2.jsx';

export default function MerchantDistrict() {
  const id="MerchantDistrict";
  return (
    <div id={id} class="ocean-deep-location">
      <AudioPlayer2 
        src="https://empirefable.magwebdesigns.net/audio/Merchant-District-Intro-Compressed.mp3"
      />
      <Banner 
        text=""
        linkTitle="Merchant District"
        link="#"
        image=""
      />
      <BackgroundImage 
        src="https://cdn.midjourney.com/334ca6e3-0d13-4e8d-8f5e-944266a36710/grid_0.png"
      />
      <ScrollingText 
        text="The Merchant District of Ocean Deep is a bustling hive of activity and commerce, filled with the sights and sounds of traders and merchants from all corners of the continent. The buildings here are tall and grand, made of polished stone and marble, with ornate carvings and towering arches that speak of wealth and power.

The streets are wide and well-paved, lined with neatly arranged stalls and storefronts selling everything from exotic spices and fabrics to fine jewelry and works of art. The air is filled with the heady scent of incense, perfume, and spices, and the sound of haggling and bargaining fills the ears.

The people here are a mix of races and cultures, all gathered to buy and sell goods in this great trading hub. Human merchants in fine clothes rub shoulders with Orc traders in rugged leathers, and Elven artisans in flowing robes display their wares alongside Dwarven craftsmen in sturdy aprons.

Despite the frenzied activity of the Merchant District, there is a sense of order and civility here. The traders and merchants have a code of conduct that they follow, and there are guards posted at every entrance to ensure that no troublemakers or thieves slip in unnoticed."
      />
    </div>
  )
}