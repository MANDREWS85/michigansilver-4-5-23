import IframeContainer from "../components/IframeContainer.jsx";
import MichiganSilverRoutingNav from "../components/MichiganSilverRoutingNav.jsx";
import BackgroundImage from "../components/BackgroundImage.jsx";
import Banner from "../components/Banner.jsx";

export default function WebsiteTemplate2() {
  const id="WebsiteTemplate2";
  return(
    <div id={id} class={id}>

      {/*<MichiganSilverRoutingNav />*/}
      {/* https://bullion.magwebdesigns.net/wp/wp-content/uploads/2023/04/michigansilvercom-low-resolution-logo-black-on-transparent-background.png */}

      <div id="Container" class="Container">
        <div id="BannerContainer" class="BannerContainer">
          <img
            src="https://bullion.magwebdesigns.net/wp/wp-content/uploads/2023/04/michigansilvercom-low-resolution-logo-black-on-transparent-background.png"
            alt=""
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              position: 'relative',
              top: 0,
              left: 0,
            }}
          />
          
        </div>
      </div>
      
      <div id="Container" class="Container">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://www.valcambi.com/uploads/tx_isunicproductdatabase/CombiBar_Ag_1x100_Retro_800_new_01.jpg"
            title="Ten 1 Gram Lot .999 Silver | Valcambi Suisse CombiBar | X 10 Barter Silver Bars"
            description="VALCAMBI SILVER BARS"
            link="https://www.ebay.com/itm/224591781336"
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://www.valcambi.com/uploads/tx_isunicproductdatabase/CombiBar_Ag_1x100_Retro_800_new_01.jpg"
            title="X 25 1 Gram Lot .999 Silver | Valcambi Suisse | Twenty Five Silver Bars Mint BU"
            link="https://www.ebay.com/itm/224612277326"
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/BNQAAOSwR9ZjSgeq/s-l500.jpg"
            title="Buy 20 Grams Total 1g .999 Bagged Silver Random Bars and Coins Nice Variety BU !!"
            link="https://www.ebay.com/itm/225206204790"
            />
        </div>

      </div>

      <div id="Container" class="Container">
                <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/qKMAAOSwH5lhFF6P/s-l1600.jpg"
            title=" Buy 20 Grams Lot .999 Silver Bullion Bars and Coins Nice Variety BU Uncirculated!!"
            link="https://www.ebay.com/itm/225259226411"
            />
        </div>



        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/Sq4AAOSwQLJjSgeq/s-l500.jpg"
            title="Buy 10 Grams Total 1g .999 Bagged Silver Random Bars and Coins Nice Variety BU !!"
            link="https://www.ebay.com/itm/225206207869"
            />
        </div>
      
      
      </div>
    
    </div>
    
  );

  
}