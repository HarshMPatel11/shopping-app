import React from 'react';
import paydayImg from '../assets/payday sale.png';

const PaydaySale = () => {
  return (
    <section className="payday-wrapper">
      <div className="payday-panel">
        <img src={paydayImg} alt="Payday girl" className="payday-image" />

        <div className="payday-content">
          <h2 className="payday-title"><span className="payday-flag">PAYDAY</span><br/>SALE NOW</h2>
          <p className="payday-sub">Spend minimal $100 get 30% off voucher code for your next purchase</p>
          <p className="payday-dates">1 June - 10 June 2021</p>
          <p className="text-sm">*Terms & Conditions apply</p>
          <button className="payday-button">SHOP NOW</button>
        </div>
      </div>
    </section>
  );
};

export default PaydaySale;