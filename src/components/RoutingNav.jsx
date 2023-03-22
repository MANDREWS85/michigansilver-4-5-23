import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "../Routes/About";
import Links from "../Routes/Links";

export default function RoutingNav() {
  const id="RoutingNav";
  return(
    <BrowserRouter>
      <div id={id} class={id}>
        <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
          <Link to="/"> HOME </Link>
        </div>
        <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
          <Link to="/about"> ABOUT </Link>
        </div>  
        <div id="LinkContainer" style={{border:'',display:'inline-block'}}>
          <Link to="/links"> LINKS </Link>
        </div>      
        
      <Routes>
          <Route path="about" element={<About />} />
          <Route path="links" element={<Links />} />
      </Routes>
        
      </div>
    </BrowserRouter>
    
  );

  
}