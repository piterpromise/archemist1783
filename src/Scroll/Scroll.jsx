import React, { useState, useEffect } from 'react';
import './Scroll.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour gérer le défilement
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut de la page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
            <i className='fa fa-arrow-up'></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
