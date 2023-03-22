export default function BackgroundImage({src}){
  const id="BackgroundImage";
  return(
    <div id={id} class={id} style={{
      backgroundImage:"url(" + src + ")",
      
    }}> </div>
    
  );
  
}
