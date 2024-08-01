import React, { useEffect } from 'react';

const CustomHooks = () => {
  // Handles smooth scroll
  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  // Initialization and cleanup logic
  useEffect(() => {
    const initAnimations = () => {
      // Initialize animations or any other DOM manipulations
      document.querySelectorAll(".progress-bar").forEach(bar => {
        bar.style.width = bar.getAttribute("aria-valuenow") + '%';
      });
    };

    window.addEventListener('load', initAnimations);
    return () => window.removeEventListener('load', initAnimations);
  }, []);

  return { smoothScroll, scrollToTop };
};

export default CustomHooks;
