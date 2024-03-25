export default function TagCloud({title,text,link,src}) {

  const id = "TagCloud";
  
  return(
    <div id={id} >
      <div></div>
      <a href={link} target="_blank" style={{backgroundImage:"url(" + src + ")"}}> <h1>{title}</h1> </a>
      <h3>{text}</h3>
      <p> <a href="#">Buy Silver in Flint</a>,
        <a href="#">Buy Silver in Detroit</a>,
        <a href="#">Buy Silver in Burton</a>,
        <a href="#">Buy Silver in Davison</a>,
        <a href="#">Buy Silver Rounds in Michigan</a>,
        <a href="#">Buy Silver Bars in Michigan</a>,
        <a href="#">Buy Morgans in Michigan</a>,
        <a href="#">Buy Silver Eagles in Michigan</a>,
        <a href="#">Buy Silver Ebay</a>,
        <a href="#">Buy Silver Michigan</a>,
      
      
      
      </p>
     
      
    </div>   
  ); 
}