import React from 'react';
import fav1 from '../assets/favourite1.png';
import fav2 from '../assets/favourite2.png';

const YoungFavourite = () => {
 
  const wrapperStyle = {
    position: 'absolute',
    left: 100,
    top: 3649,
    width: 1720,
    height: 847,
    maxWidth: 'calc(100% - 200px)'
  };

  return (
    <div style={wrapperStyle}>
      <section className="h-full w-full py-16 px-6 bg-white">
        <h2 className="section-title mb-6">Young's Favourite</h2>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 h-[calc(100%-64px)]">

        <article className="flex-1 rounded-lg overflow-hidden bg-[#f5e9df] shadow-sm">
          <div className="relative h-80 md:h-72 lg:h-80">
            <img
              src={fav1}
              alt="Trending on instagram"
              className="w-full h-full object-cover rounded-t-lg"
            />

            <div className="absolute left-0 right-0 bottom-0 bg-white/90 backdrop-blur-sm px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-semibold">Trending on instagram</p>
                <a href="#" className="text-sm text-gray-500">Explore Now!</a>
              </div>

              <a href="#" aria-label="Explore trending" className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </article>

    
        <article className="flex-1 rounded-lg overflow-hidden bg-pink-50 shadow-sm">
          <div className="relative h-80 md:h-72 lg:h-80">
            <img
              src={fav2}
              alt="All Under $40"
              className="w-full h-full object-cover rounded-t-lg"
            />

            <div className="absolute left-0 right-0 bottom-0 bg-white/90 backdrop-blur-sm px-5 py-4 flex items-center justify-between">
              <div>
                <p className="text-gray-900 font-semibold">All Under $40</p>
                <a href="#" className="text-sm text-gray-500">Explore Now!</a>
              </div>

              <a href="#" aria-label="Explore deals" className="text-gray-400 hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </article>

      </div>
      </section>
    </div>
  );
};

export default YoungFavourite;