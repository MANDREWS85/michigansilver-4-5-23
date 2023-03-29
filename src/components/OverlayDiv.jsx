import { useState, useRef, useEffect } from 'react';

export default function OverlayDiv() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const overlayDivRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { left, top } = overlayDivRef.current.getBoundingClientRect();
      setPosition({ x: event.clientX - left, y: event.clientY - top });
    };

    overlayDivRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      overlayDivRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  console.log(position.x, position.y);

  return (
    <div ref={overlayDivRef}>
      <h3>OVER LAY DIV</h3>
      {position.x}
      {position.y}
      {/* Your content here */}
    </div>
  );
}