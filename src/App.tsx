import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandLogos from './components/BrandLogos';
import NewArrivals from './components/NewArrivals';
import PaydaySale from './components/PaydaySale';
import YoungFavourite from './components/YoungFavourite';
import AppDownload from './components/AppDownload';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <BrandLogos />
      <NewArrivals />
      <PaydaySale />
      <YoungFavourite />
      <AppDownload />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
