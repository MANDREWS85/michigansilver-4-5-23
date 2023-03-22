


export default function LeftNav() {
  const id="LeftNav";
  return(
    <div id={id} class={id}>
      <div style={{textAlign:"left",}}><h3>{id}</h3></div>
      <div id="LinkContainer" class="LinkContainer">
        <div> <a href=""> LINK 1 </a> </div>
      </div> 
      <div id="LinkContainer" class="LinkContainer">
        <div> <a href=""> LINK 2 </a> </div>
      </div>
      <div id="LinkContainer" class="LinkContainer">
        <div> <a href=""> LINK 3 </a> </div>
      </div> 
    </div>
    
  );

  
}