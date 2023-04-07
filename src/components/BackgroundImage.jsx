export default function BackgroundImage({ src, title, description, link, width, height }) {
  const id = "BackgroundImage";
  return (
    <div
      id={id}
      className={id}
      onClick={() => {
        window.open(link, "_blank", "noopener noreferrer");
      }}
      style={{
        backgroundImage: "url(" + src + ")",
        width: "100%",
        height: "100%",
        margin: "auto",
        overflow: "hidden",
        backgroundSize: "contain",
      }}
    >
      <div id="title-container" className="title-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3>{title}</h3>
        </a>
      </div>
    </div>
  );
}







