import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "../Routes/About";
import Links from "../Routes/Links";
import MercuryDime from "../Routes/MercuryDime";
import Walkingliberty from "../Routes/WalkingLiberty";
import BuySilverFlint from "../Routes/BuySilverFlint";
import BuySilverJewelryMichigan from "../Routes/BuySilverJewelryMichigan";


export default function MichiganSilverRoutingNav() {
  const id="MichiganSilverRoutingNav";
  return(
    <BrowserRouter>
      <div id={id} class={id}>
        <div id="top-nav" class="top-nav">
          <div id="button" class="button"> <Link to="/"> HOME </Link> </div>
          <div id="button" class="button"> <Link to="/"> SILVER BULLION </Link>  </div>
          <div id="button" class="button"> <Link to="/buy-silver-jewelry-michigan"> SILVER JEWELRY </Link> </div>
          <div id="button" class="button"> <Link to="/"> FRACTIONAL SILVER </Link> </div>
        </div>
        
        {/*
        <div class="dropdown">
          <button class="dropbtn">US SILVER COINS</button>
          <div class="dropdown-content">
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/"> HOME </Link>
            </div>
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/walking-liberty-half"> Walking liberty </Link>
            </div>
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/mercury-dime"> Mercury Dimes </Link>
            </div> 
          </div>
        </div>


                <div class="dropdown">
          <button class="dropbtn">CAD SILVER COINS</button>
          <div class="dropdown-content">
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/"> HOME </Link>
            </div>
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/walking-liberty-half"> Walking liberty </Link>
            </div>
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/mercury-dime"> Mercury Dimes </Link>
            </div> 
          </div>
        </div>


                <div class="dropdown">
          <button class="dropbtn">SILVER BULLION</button>
          <div class="dropdown-content">
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/"> HOME </Link>
            </div>
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/walking-liberty-half"> Walking liberty </Link>
            </div>
            <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
              <Link to="/mercury-dime"> Mercury Dimes </Link>
            </div> 
          </div>
        </div>
        */}
        
        
        
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="links" element={<Links />} />
        <Route path="mercury-dime" element={<MercuryDime />} />
        <Route path="walking-liberty-half" element={<Walkingliberty />} />
        <Route path="morgan-silver-dollar" element={<Links />} />
        <Route path="standing-liberty-quarter" element={<Links />} />
        <Route path="valcambi-combibar" element={<Links />} />


        <Route path="buy-silver-jewelry-michigan" element={<BuySilverJewelryMichigan />} />
        
        <Route path="buy-silver-michigan" element={<BuySilverFlint />} />
        <Route path="buy-silver-flint" element={<BuySilverFlint />} />
        <Route path="buy-silver-detroit" element={<About />} />
        <Route path="buy-silver-burton" element={<About />} />
        <Route path="buy-silver-davison" element={<About />} />
        <Route path="buy-silver-bars-michigan" element={<About />} />
        <Route path="buy-silver-coins-michigan" element={<About />} />
        <Route path="sell-silver-coins-michigan" element={<About />} />
        <Route path="sell-silver-bars-michigan" element={<About />} />
        <Route path="sell-silver-flint" element={<BuySilverFlint />} />
        <Route path="sell-silver-detroit" element={<About />} />
        <Route path="sell-silver-burton" element={<About />} />
        <Route path="sell-silver-davison" element={<About />} />

      </Routes>
        
      </div>
    </BrowserRouter>
    
  );

  
}