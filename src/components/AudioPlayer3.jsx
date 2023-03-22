import React, { useState, useRef, useEffect } from 'react';

export default function AudioPlayer3({ src }) {
  const id="AudioPlayer3";
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, []);

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