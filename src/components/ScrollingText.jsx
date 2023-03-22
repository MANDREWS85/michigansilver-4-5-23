export default function ScrollingText({text}) {
  const id="ScrollingText";
  return(
    <div id={id} class={id}>
      <marquee id="marquee" class="marquee" behavior="scroll" direction="up" scrollamount="2">
      <p>
        {text}
      </p>
      </marquee>
    </div>
  );

  
};