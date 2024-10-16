import React, { useState, useEffect } from 'react';
import './css/controls.css';

function Controls({ onOk, onMenu, onRotate }) {
  const [startAngle, setStartAngle] = useState(null);

  const calculateAngle = (x, y) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = x - centerX;
    const deltaY = y - centerY;
    const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    return angle >= 0 ? angle : 360 + angle;
  };

  const handleMouseDown = (e) => {
    const angle = calculateAngle(e.clientX, e.clientY);
    setStartAngle(angle);
  };

  const handleMouseMove = (e) => {
    if (startAngle === null) return;
    const currentAngle = calculateAngle(e.clientX, e.clientY);
    const angleDiff = currentAngle - startAngle;
    if (Math.abs(angleDiff) > 15) {
      const direction = angleDiff > 0 ? 1 : -1;
      onRotate(direction);
      setStartAngle(currentAngle);
    }
  };

  const handleMouseUp = () => {
    setStartAngle(null);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <section id="controls">
      <div
        id="wheel"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
      >
        <span
          id="menu-button"
          className="buttons"
          onClick={onMenu}>
          Menu
        </span>
        <div id="ok-button" onClick={onOk}>
          <b>OK</b>
        </div>
      </div>
    </section>
  );
}

export default Controls;
