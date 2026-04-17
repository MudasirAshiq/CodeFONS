import { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useSpring(0, { stiffness: 600, damping: 35, mass: 0.5 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 35, mass: 0.5 });
  const ringX = useSpring(0, { stiffness: 300, damping: 30, mass: 0.8 });
  const ringY = useSpring(0, { stiffness: 300, damping: 30, mass: 0.8 });

  const onMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX - 6);
    cursorY.set(e.clientY - 6);
    ringX.set(e.clientX - 20);
    ringY.set(e.clientY - 20);
    if (!isVisible) setIsVisible(true);
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [onMouseMove]);

  useEffect(() => {
    const handleOver = () => setIsHover(true);
    const handleOut = () => setIsHover(false);

    const addListeners = () => {
      const interactiveEls = document.querySelectorAll('a, button, input:not([type="hidden"]), textarea, select, [data-hover]');
      interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', handleOver);
        el.addEventListener('mouseleave', handleOut);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot cursor - Dark theme for bright background */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-slate-900 pointer-events-none z-[9999] hidden md:block"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHover ? 0.3 : 1,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Ring cursor */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-slate-900/10 pointer-events-none z-[9999] hidden md:block"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHover ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
          borderColor: isHover ? 'rgba(99, 102, 241, 0.4)' : 'rgba(15, 23, 42, 0.1)',
        }}
      />
    </>
  );
};
