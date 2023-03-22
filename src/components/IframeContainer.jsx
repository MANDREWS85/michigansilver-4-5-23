export default function IframeContainer({title,src,height,width}) {
  const id="IframeContainer";
  return(
    <div id={id} class="">
    <iframe  height={height} width={width}src={src} title={title}></iframe> 
    </div>  
  );
  
};