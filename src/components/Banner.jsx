export default function Banner({title,text,link,src}) {

  const id = "Banner";
  
  return(
    <div id={id} >
      <div></div>
      <a href={link} target="_blank" style={{backgroundImage:"url(" + src + ")"}}> <h1>{title}</h1> </a>
      <h3>{text}</h3>
    </div>   
  ); 
}