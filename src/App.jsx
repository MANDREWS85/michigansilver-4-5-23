import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from 'react';


import Phaser from 'phaser';
import './App.css';
import Banner from './components/Banner.jsx';
import LeftNav from './components/LeftNav.jsx';
import NavOceanDeep from './components/NavOceanDeep.jsx';

import RoutingNav from './components/RoutingNav.jsx';
import BackgroundImage from './components/BackgroundImage.jsx';
import ScrollingText from './components/ScrollingText.jsx';
import CanvasContainer from './components/CanvasContainer.jsx';
import Footer from './components/Footer.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import AudioPlayer2 from './components/AudioPlayer2.jsx';
import AudioPlayer3 from './components/AudioPlayer3.jsx';

import GPT3API from './components/GPT3API.jsx';
import GoJS from './components/GoJS.jsx';
import GoJS3 from './components/GoJS3.jsx';

//import InteractiveFictionOne from './components/InteractiveFictionOne.jsx';
import Pacman from './components/Pacman.jsx';
import ChatGPTContainer from './components/ChatGPTContainer.jsx';
import Discord from './components/Discord.jsx';
import IframeContainer from './components/IframeContainer.jsx';
import PhaserContainer from './components/PhaserContainer.jsx';
import PhaserContainer2 from './components/PhaserContainer2.jsx';
import PhaserTemplate from './components/PhaserTemplate.jsx';
import PhaserTemplate2 from './components/PhaserTemplate2.jsx';
import PhaserTemplate3 from './components/PhaserTemplate3.jsx';
import PhaserTemplate4 from './components/PhaserTemplate4.jsx';
import PhaserTemplate5 from './components/PhaserTemplate5.jsx';

///LOCATION ROUTES
import WharfSlums from './OceanDeep/WharfSlums.jsx';
import OceanDeep from './OceanDeep/OceanDeep.jsx';




export default function App() {
  const id="App";

  
  return (
    <main id={id}>
      <NavOceanDeep />
      <IframeContainer 
        src="https://PhaserDemo1.mandrews85.repl.co"
        height="1200px"
        width="80%"
      />
      
      <Footer />
    </main>
  )
}
