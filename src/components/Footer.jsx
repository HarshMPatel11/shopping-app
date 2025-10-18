import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 px-8 text-gray-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-2xl font-bold uppercase">Fashion</h3>
          <p className="mt-2">Complete your style with awesome clothes from us.</p>
          <div className="mt-4 flex space-x-3">
            {/* Social icons as yellow rounded buttons */}
            <button aria-label="Facebook" className="bg-yellow-400 text-black w-9 h-9 rounded-full flex items-center justify-center shadow">f</button>
            <button aria-label="Instagram" className="bg-yellow-400 text-black w-9 h-9 rounded-full flex items-center justify-center shadow">ig</button>
            <button aria-label="X" className="bg-yellow-400 text-black w-9 h-9 rounded-full flex items-center justify-center shadow">x</button>
            <button aria-label="LinkedIn" className="bg-yellow-400 text-black w-9 h-9 rounded-full flex items-center justify-center shadow">in</button>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold">Company</h4>
          <ul className="mt-2 space-y-1 list-none pl-0">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold">Quick Link</h4>
          <ul className="mt-2 space-y-1 list-none pl-0">
            <li><a href="#" className="hover:text-white">Share Location</a></li>
            <li><a href="#" className="hover:text-white">Orders Tracking</a></li>
            <li><a href="#" className="hover:text-white">Size Guide</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold">Legal</h4>
          <ul className="mt-2 space-y-1 list-none pl-0">
            <li><a href="#" className="hover:text-white">Terms & conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;