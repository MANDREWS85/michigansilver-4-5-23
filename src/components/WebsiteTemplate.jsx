import IframeContainer from "../components/IframeContainer.jsx";

export default function WebsiteTemplate() {
  const id="WebsiteTemplate";
  return(
    <div id={id} class={id}>

      <div id="OneColumnContainer" class="OneColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <h1>SPACE and BASS</h1>
        </div>
      </div>
      
      <div id="TwoColumnContainer" class="TwoColumnContainer">
        <div id="ChildContainer" class="ChildContainer">
          <a href="https://www.youtube.com/embed/q6d7f9d0_30"><h3>Behringer Neutron and System 100 Modules</h3></a>

<iframe width="100%" height="600" src="https://www.youtube.com/embed/q6d7f9d0_30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        </div>
        <div id="ChildContainer" class="ChildContainer">
          <a href="https://www.youtube.com/embed/q6d7f9d0_30"><h3>Behringer Neutrons Shake the House</h3></a>

<iframe width="100%" height="600" src="https://www.youtube.com/embed/-MbETVgnsck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          
        </div>
      </div>

      <div id="ThreeColumnContainer" class="ThreeColumnContainer">
        <div id="ChildContainer" class="ChildContainer"><a href="https://spaceandbass.magwebdesigns.net/wp/?p=18"><h3> SPACANDBASS Synth Wall Power Distribution Set Up</h3></a>
          <IframeContainer 
            title=""
            src="https://spaceandbass.magwebdesigns.net/wp/?p=18"
            height="600px"
            width="100%"            
          />
        </div>

        <div id="ChildContainer" class="ChildContainer"><a href="https://spaceandbass.magwebdesigns.net/wp/?p=1"><h3> SPACE AND BASS 40HZ Therapy</h3></a>
          <IframeContainer 
            title=""
            src="https://spaceandbass.magwebdesigns.net/wp/?p=1"
            height="600px"
            width="100%"            
          />
        </div>
        
        <div id="ChildContainer" class="ChildContainer"><a href="https://spaceandbass.magwebdesigns.net/wp/?p=9"><h3> Space and Bass Gold Edition Akai MPC One Work Flow</h3></a>
          <IframeContainer 
            title=""
            src="https://spaceandbass.magwebdesigns.net/wp/?p=9"
            height="600px"
            width="100%"            
          />
        </div>

      </div>      
    </div>
    
  );

  
}