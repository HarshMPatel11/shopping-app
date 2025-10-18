import React from 'react';
import mobileMock from '../assets/Mobile app.png';
import appStoreBadge from '../assets/download app store.png';
import googlePlayBadge from '../assets/getit on google play.png';

const DownloadApp = () => {
  return (
    <section className="download-panel py-16">
      <div className="site-container" style={{display:'flex',alignItems:'center',gap:'2rem'}}>
        <div style={{flex:'1 1 50%'}}>
          <h2 className="text-4xl font-bold uppercase">Download App & <br /> Get The Voucher!</h2>
          <p className="mt-4 text-gray-600">Get 30% off for first transaction using Rondovision mobile app for now.</p>
          <div className="mt-6 flex space-x-4">
            <img src={appStoreBadge} alt="Download on the App Store" className="h-12 md:h-14 rounded-lg shadow-sm" />
            <img src={googlePlayBadge} alt="Get it on Google Play" className="h-12 md:h-14 rounded-lg shadow-sm" />
          </div>
        </div>
        <div style={{flex:'0 0 320px'}} className="hidden sm:block">
          <img src={mobileMock} alt="App Mockup" className="w-full max-w-xs mx-auto shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;