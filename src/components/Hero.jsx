

import React from 'react';
import heroImage from '../assets/pinkdress.png';

const Hero = () => {
  return (
    <section className="hero-wrapper">
      {/* Panel (uses Figma measurements on large screens) */}
      <div className="hero-panel">
        {/* Absolute positioned left text block */}
        <div className="hero-text">
          <h1 className="hero-title">
            LET'S<br />
            EXPLORE<br />
            <span className="hero-highlight">UNIQUE</span><br />
            CLOTHES.
          </h1>
          <p className="hero-sub">Live for Influential and Innovative fashion!</p>
          <button className="hero-button">Shop Now</button>
        </div>

        {/* Absolute positioned hero image */}
        <img src={heroImage} alt="Girl in pink fur coat" className="hero-image" />
      </div>
      {/* Decorative stars - Adjust positions as needed */}
    </section>
  );
};

export default Hero;