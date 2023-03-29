import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import OceanDeep from "../OceanDeep/OceanDeep";
import WharfSlums from "../OceanDeep/WharfSlums";
import Citadel from "../OceanDeep/Citadel";
import AirshipPort from "../OceanDeep/AirshipPort";
import Docks from "../OceanDeep/Docks";
import MerchantDistrict from "../OceanDeep/MerchantDistrict";
import AudioPlayer2 from "../components/AudioPlayer2";



export default function NavOceanDeep() {
  const id="NavOceanDeep";
  return(
    <BrowserRouter>
      <div id={id} class={id}>
        <div id="LinkContainer" style={{}}>
          <Link to="/"><h3>REGION MAP</h3></Link>
        </div>
        <div id="LinkContainer" style={{}}>
          <Link to="/oceandeep"><h3>OCEAN DEEP</h3></Link>
        </div>
        <div id="LinkContainer" style={{}}>
          <Link to="/airshipport">Air Ship Port</Link>
        </div>
        <div id="LinkContainer" style={{}}>
          <Link to="/merchantdistrict">Merchants District</Link>
        </div>
        <div id="LinkContainer" style={{}}>
          <Link to="/wharfslums">Wharf Slums</Link>
        </div>
        <div id="LinkContainer" style={{}}>
          <Link to="/citadel">The Citadel</Link>
        </div>  
        <div id="LinkContainer" style={{}}>
          <Link to="/docks">The Docks</Link>
        </div>      
        
      <Routes>
          <Route path="oceandeep" element={<OceanDeep />} />
          <Route path="wharfslums" element={<WharfSlums />} />
          <Route path="citadel" element={<Citadel />} />
        <Route path="airshipport" element={<AirshipPort />} />
        <Route path="MerchantDistrict" element={<MerchantDistrict />} />
        <Route path="docks" element={<Docks />} />
      </Routes>
        
      </div>
    </BrowserRouter>
    
  );

  
}