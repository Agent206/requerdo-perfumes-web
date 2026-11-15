
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [isOverInteractive, setIsOverInteractive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(prev => (prev ? prev : true));

      const target = e.target as HTMLElement | null;
      if (!target || typeof target.closest !== 'function') return;

      const tag = target.tagName.toLowerCase();
      const isInteractive = 
        tag === 'img' || 
        tag === 'button' || 
        tag === 'a' ||
        tag === 'svg' ||
        !!target.closest('img, button, a, svg, [data-cursor-enlarge="true"]');
      
      setIsOverInteractive(prev => (prev === isInteractive ? prev : isInteractive));
    };

    const handleMouseOut = () => setIsVisible(false);
    const handleMouseOver = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mouseleave', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile || !isVisible) return null;

  const size = isOverInteractive ? 50 : 30;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-[1.5px] border-white box-border -translate-x-1/2 -translate-y-1/2"
      style={{
        x: smoothX,
        y: smoothY,
        mixBlendMode: 'difference',
      }}
      animate={{
        width: size,
        height: size,
        backgroundColor: isOverInteractive ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)',
      }}
      transition={{
        width: { duration: 0.25, ease: 'easeOut' },
        height: { duration: 0.25, ease: 'easeOut' },
        backgroundColor: { duration: 0.25 },
      }}
    />
  );
};
