import IframeContainer from "../components/IframeContainer.jsx";
import MichiganSilverRoutingNav from "../components/MichiganSilverRoutingNav.jsx";
import BackgroundImage from "../components/BackgroundImage.jsx";

export default function WebsiteTemplate() {
  const id="WebsiteTemplate";
  return(
    <div id={id} class={id}>

      <MichiganSilverRoutingNav />

      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/LFMAAOSwvPJglBdL/s-l1600.jpg"
            title="Ten 1 Gram Lot .999 Silver | Valcambi Suisse CombiBar | X 10 Barter Silver Bars"
            description="VALCAMBI SILVER BARS"
            link="https://www.ebay.com/itm/224591781336"
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/QvgAAOSwr~1hQ4kF/s-l500.jpg"
            title="X 25 1 Gram Lot .999 Silver | Valcambi Suisse | Twenty Five Silver Bars Mint BU"
            link="https://www.ebay.com/itm/224612277326"
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/krkAAOSw4J5hSeIx/s-l1600.jpg"
            title="X5 1 Gram Lot .999 Silver | Valcambi Suisse CombiBar | Five Silver Bars Mint BU"
            link="https://www.ebay.com/itm/224617954887"
            />
        </div>

      </div> 

      
      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/Sq4AAOSwQLJjSgeq/s-l500.jpg"
            title="10 Grams Total 1g .999 Bagged Silver Random Bars and Coins Nice Variety BU !!"
            link="https://ebay.com/itm/225206207869"
          />
          
        </div>
      </div>

      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
            <BackgroundImage 
            src="https://i.ebayimg.com/images/g/wqIAAOSwkcFjxWNT/s-l1600.png"
            title="Lot of Ten ( 10 ) 90% Silver Mercury Dimes Collectible Old U.S. American Coins"
            link="https://www.ebay.com/itm/225505521915"
            />
          
        
        </div>
      </div>
      
      <div id="TwoColumnContainer" class="TwoColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/Sq4AAOSwQLJjSgeq/s-l500.jpg"
            title="20 Grams Total 1g .999 Bagged Silver Random Bars and Coins Nice Variety BU !!"
            link="https://www.ebay.com/itm/225206204790?hash=item346f55f976:g:Sq4AAOSwQLJjSgeq"
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src=""
            title=""
            link=""
            />
        </div>
      </div>

      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src=""
            title=""
            link=""
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src=""
            title=""
            link=""
            />
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src=""
            title=""
            link=""
            />
        </div>

      </div>      
    </div>
    
  );

  
}