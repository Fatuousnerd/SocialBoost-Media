import React, { useState, useEffect } from 'react';
import ScrollUp from './ScrollUp';

const ScrollTracker = ({ children }) => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const viewportHeight = window.innerHeight;
    if (scrollPosition > viewportHeight) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {children}
      <ScrollUp show={showScrollUp} onClick={scrollToTop} />
    </>
  );
};

export default ScrollTracker;
