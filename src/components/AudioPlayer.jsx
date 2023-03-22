import React, { useState, useRef } from 'react';

export default function AudioPlayer({ src }) {
  const id="AudioPlayer";
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handleStop = () => {
    setIsPlaying(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div id={id} class={id} >
      <h3>AUDIO</h3>
      <audio ref={audioRef} src={src} />
      <button onClick={handlePlay} disabled={isPlaying}>
        Play
      </button>
      <button onClick={handleStop} disabled={!isPlaying}>
        Stop
      </button>
    </div>
  );
}

