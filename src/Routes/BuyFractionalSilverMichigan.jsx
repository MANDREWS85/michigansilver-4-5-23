
import BackgroundImage from "../components/BackgroundImage.jsx";
import BuySilverBarsMichigan from "./BuySilverBarsMichigan.jsx";




export default function BuyFractionalSilverMichigan() {
  const id="BuyFractionalSilverMichigan";
  const product_1_title = ""
  const product_1_image = "https://cdn.silverbene.com/media/catalog/product/cache/2dcc9e11cc18dd2938982cb3233783bd/lky/2022_3_10_18_18/651099277545/651099277545_4.jpg"
  const product_1_link = "http://michigansilver.com" 

  
  return(

    <div id="text-container" class="text-container">

      <div style={{ maxHeight: "50px",align:"center",width:"100%",margin:"auto" }}>
        <BackgroundImage 
          link = "http://michigansilver.com"
          title="BUY FRACTIONAL SILVER ON EBAY" 
          />
      </div>

      
      <div id="Container" class="Container">       
        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/VLIAAOSwN5NlwoS6/s-l1600.jpg"
            title="Roll of 20 - 1 Troy oz Sunshine Mint Walking Liberty .999 Silver Round "
            description=""
            link="https://ebay.us/F7qT4q"
          />
          
        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/G28AAOSwiX9lwo~N/s-l1600.jpg"
            title="Lot of 5 - 2024 $1 American Silver Eagle 1 oz BU"
            description=""
            link="https://ebay.us/AksnT9"
          />
        </div>
       
      </div>

      <div id="Container" class="Container">


        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/gQIAAOSwebVlwpMq/s-l1600.jpg"
            title="2 Troy oz Scottsdale Stacker .999 Fine Silver Round"
            description=""
            link="https://ebay.us/XBWq04"
          />

        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/gswAAOSwDNllwpaQ/s-l1600.jpg"
            title="Lot of 10 - 1 Troy oz Saint Gaudens Design .999 Fine Silver Round"
            description=""
            link="https://ebay.us/UzNrVD"
          />

        </div>

        <div id="ChildContainer" class="ChildContainer">
          <BackgroundImage 
            src="https://i.ebayimg.com/images/g/BFgAAOSwJg5lwpKL/s-l1600.jpg"
            title="1 Troy oz Genghis Khan Design .999 Fine Silver Round"
            description=""
            link="https://ebay.us/l23RTA"
          />

        </div>
        
      </div>

      <BuySilverBarsMichigan />
      
      
    </div>

    
  );

  
}