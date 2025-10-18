import React from 'react';

const JoinCommunity = () => {
  return (
    <section className="join-panel">
      <div className="join-panel__inner">
        <h2 className="join-panel__title">Join Shopping Community To <br /> Get Monthly Promo</h2>
        <p className="join-panel__sub">Type your email down below and be young wild generation</p>
        <div className="join-panel__form">
          <input type="email" placeholder="Add your email here" className="join-input" />
          <button className="join-button">SEND</button>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;