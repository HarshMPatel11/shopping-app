import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import NewArrivals from './components/NewArrivals';
import PaydaySale from './components/PaydaySale';
import YoungFavourite from './components/YoungFavourite';
import DownloadApp from './components/DownloadApp';
import JoinCommunity from './components/JoinCommunity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <div className="site-container">
          <Hero />
        </div>

        <Brands />

        <div className="site-container">
          <NewArrivals />
        </div>

        <div className="site-container">
          <PaydaySale />
        </div>

        <div className="site-container">
          <YoungFavourite />
        </div>

        <div className="site-container">
          <DownloadApp />
        </div>

        <JoinCommunity />
      </main>
      <Footer />
    </div>
  );
}

export default App;