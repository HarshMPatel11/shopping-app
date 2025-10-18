import React from 'react';
import rect20 from '../assets/Rectangle 20.png';
import frame17 from '../assets/Frame 17.png';
import rect21 from '../assets/Rectangle 21.png';

const NewArrivals = () => {
  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title mb-8">NEW ARRIVALS</h2>

        {/* Horizontal row: scrollable on small screens, 3 columns on lg */}
        <div className="flex gap-8 overflow-x-auto pb-4 lg:overflow-visible lg:justify-between lg:items-start">
          <article className="card new-card flex-shrink-0 w-80 lg:w-1/3">
            <img src={rect20} alt="Hoodies & Sweatshirt" className="new-card__img" />
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-black font-semibold">Hoodies & Sweatshirt</p>
                <a href="#" className="text-sm text-gray-500">Explore Now!</a>
              </div>
              <div className="text-gray-400">→</div>
            </div>
          </article>

          <article className="card new-card flex-shrink-0 w-80 lg:w-1/3">
            <img src={frame17} alt="Coats & Parkas" className="new-card__img" />
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-black font-semibold">Coats & Parkas</p>
                <a href="#" className="text-sm text-gray-500">Explore Now!</a>
              </div>
              <div className="text-gray-400">→</div>
            </div>
          </article>

          <article className="card new-card flex-shrink-0 w-80 lg:w-1/3">
            <img src={rect21} alt="Tees & T-Shirt" className="new-card__img" />
            <div className="p-4 flex justify-between items-center">
              <div>
                <p className="text-black font-semibold">Tees & T-Shirt</p>
                <a href="#" className="text-sm text-gray-500">Explore Now!</a>
              </div>
              <div className="text-gray-400">→</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;