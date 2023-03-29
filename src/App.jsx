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
import OverlayDiv from './components/OverlayDiv.jsx';
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

import PhaserGame1 from './components/PhaserGame1.jsx';
import PhaserGame2 from './components/PhaserGame2.jsx';
import PhaserGame3 from './components/PhaserGame3.jsx';
import PhaserGame4 from './components/PhaserGame4.jsx';
import PhaserGame3b from './components/PhaserGame3b.jsx';
import PhaserWackaMole from './components/PhaserWackaMole.jsx';
import PhaserWackaMole2 from './components/PhaserWackaMole2.jsx';
import Frogger1 from './components/Frogger1.jsx';
import TopDownShooter from './components/TopDownShooter.jsx';


///LOCATION ROUTES
import WharfSlums from './OceanDeep/WharfSlums.jsx';
import OceanDeep from './OceanDeep/OceanDeep.jsx';

import WebsiteTemplate from './components/WebsiteTemplate.jsx';



export default function App() {
  const id="App";

  
  return (
    <main id={id}>
      <WebsiteTemplate />
      
    </main>
  )
}
