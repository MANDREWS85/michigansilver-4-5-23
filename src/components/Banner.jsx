export default function Banner({linkTitle,text,link,imageLink}) {

  const id = "Banner";
  
  return(
    <div id={id} >
      <div></div>
      <a href={link} target="_blank" style={{backgroundImage:"url(" + imageLink + ")"}}> <h1>{linkTitle}</h1> </a>
      <h3>{text}</h3>
    </div>   
  ); 
}