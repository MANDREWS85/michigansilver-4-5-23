import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "../Routes/About";
import Links from "../Routes/Links";
import MercuryDime from "../Routes/MercuryDime";
import Walkingliberty from "../Routes/WalkingLiberty";

export default function MichiganSilverRoutingNav() {
  const id="MichiganSilverRoutingNav";
  return(
    <BrowserRouter>
      <div id={id} class={id}>


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
        
        
        
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="links" element={<Links />} />
        <Route path="mercury-dime" element={<MercuryDime />} />
        <Route path="walking-liberty-half" element={<Walkingliberty />} />
        <Route path="morgan-silver-dollar" element={<Links />} />
        <Route path="standing-liberty-quarter" element={<Links />} />
        <Route path="valcambi-combibar" element={<Links />} />
      </Routes>
        
      </div>
    </BrowserRouter>
    
  );

  
}