import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, canvas, [role="button"], .cta-button, .card, .tech-card');
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth lerp follower
  useEffect(() => {
    let animationFrameId;
    const lerp = (start, end, factor) => start + (end - start) * factor;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary pinpoint dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isClicked ? '6px' : '8px',
          height: isClicked ? '6px' : '8px',
          boxShadow: '0 0 10px #38bdf8, 0 0 20px #0284c7',
        }}
      />

      {/* Trailing expanding ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-cyan-400/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out ${
          isHovered ? 'scale-150 bg-cyan-500/10 border-cyan-300' : 'scale-100 bg-transparent'
        }`}
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: '36px',
          height: '36px',
          boxShadow: isHovered ? '0 0 15px rgba(56, 189, 248, 0.3)' : 'none',
        }}
      />
    </>
  );
};

export default CustomCursor;
