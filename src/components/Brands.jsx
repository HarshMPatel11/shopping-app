import React from 'react';
import hmLogo from '../assets/H&M.png';
import obeyLogo from '../assets/obey.png';
import shopifyLogo from '../assets/shopify.png';
import lacosteLogo from '../assets/lacoste.png';
import levisLogo from '../assets/levis.png';
import amazonLogo from '../assets/amazon.png';



const Brands = () => {
  return (
    <section className="brand-bar">
      <div className="site-container">
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
          <img src={hmLogo} alt="H&M" className="brand-logo" />
          <img src={obeyLogo} alt="OBEY" className="brand-logo" />
          <img src={shopifyLogo} alt="Shopify" className="brand-logo" />
          <img src={lacosteLogo} alt="Lacoste" className="brand-logo" />
          <img src={levisLogo} alt="Levi's" className="brand-logo" />
          <img src={amazonLogo} alt="Amazon" className="brand-logo" />
        </div>
      </div>
    </section>
  );
};

export default Brands;