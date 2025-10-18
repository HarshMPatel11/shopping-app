// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-black py-4 px-8 flex justify-end items-center space-x-8 text-gray-400 uppercase text-sm">
//       <nav className="flex space-x-8">
//         <a href="#" className="hover:text-white">Catalogue</a>
//         <a href="#" className="hover:text-white">Fashion</a>
//         <a href="#" className="hover:text-white">Favourite</a>
//         <a href="#" className="hover:text-white">Lifestyle</a>
//       </nav>
//       <button className="bg-white text-black px-4 py-1 uppercase font-bold hover:bg-gray-200">
//         Sign Up
//       </button>
//     </header>
//   );
// };

// export default Header;


import React from 'react';
import reactLogo from '../assets/react.svg';

const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-brand">
          <a href="/" aria-label="Homepage">
            <img src={reactLogo} alt="Brand logo" className="site-brand__logo" />
          </a>
        </div>

        <nav className="site-nav" aria-label="Primary">
          <a href="#" className="site-nav__link">CATALOGUE</a>
          <a href="#" className="site-nav__link">FASHION</a>
          <a href="#" className="site-nav__link">FAVOURITE</a>
          <a href="#" className="site-nav__link">LIFESTYLE</a>
        </nav>

        <div>
          <button className="btn-signup">SIGN UP</button>
        </div>
      </div>
    </header>
  );
};

export default Header;