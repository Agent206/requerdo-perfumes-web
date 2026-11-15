
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isOverInteractive, setIsOverInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile/touch to disable custom cursor
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setMousePos({ x: e.clientX, y: e.clientY });

      // Detect interactive elements: links, buttons, images, icons, and inputs
      const target = e.target as HTMLElement;
      const isInteractive = 
                   target.tagName.toLowerCase() === 'img' || 
                   target.tagName.toLowerCase() === 'button' || 
                   target.tagName.toLowerCase() === 'a' ||
                   target.tagName.toLowerCase() === 'svg' ||
                   target.closest('img') || 
                   target.closest('button') || 
                   target.closest('a') ||
                   target.closest('svg') ||
                   target.closest('[data-cursor-enlarge="true"]');
      
      setIsOverInteractive(!!isInteractive);
    };

    const handleMouseOut = () => setIsVisible(false);
    const handleMouseOver = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseOver);
    };
  }, [isVisible]);

  // Early return for mobile or initial state
  if (isMobile || !isVisible) return null;

  // Normal: 30px solid. Interactive: 50px hollow.
  const size = isOverInteractive ? 50 : 30;
  const offset = size / 2;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] rounded-full border-[1.5px] border-white box-border"
      animate={{
        x: mousePos.x - offset,
        y: mousePos.y - offset,
        width: size,
        height: size,
        // Invert logic: 'difference' creates the inverted look.
        // On interactive elements, we make it transparent so it becomes a ring.
        backgroundColor: isOverInteractive ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)',
        mixBlendMode: 'difference',
      }}
      transition={{
        // Coordinate follow (tween for smoothness)
        x: { type: 'tween', ease: 'circOut', duration: 0.12 },
        y: { type: 'tween', ease: 'circOut', duration: 0.12 },
        // Visual state transitions (size and transparency)
        width: { duration: 0.3, ease: 'easeOut' },
        height: { duration: 0.3, ease: 'easeOut' },
        backgroundColor: { duration: 0.3 },
      }}
    />
  );
};
