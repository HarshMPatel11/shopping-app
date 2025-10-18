// src/components/Navbar.jsx
import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

// You will eventually add your logo image here
// import logo from '../assets/logos/your-logo.svg';

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'New Arrivals', id: 'new-arrivals' },
  { name: 'Young Favourite', id: 'young-favourite' }, 
  { name: 'Voucher', id: 'voucher' },
  { name: 'Community', id: 'community' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo/Brand Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-900">
              Your App Logo
            </a>
            {/* Replace the text above with an <img> tag for your logo */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`} // Standard href for accessibility/fallback
                onClick={(e) => {
                  e.preventDefault(); // Prevent default hash scrolling
                  scrollToSection(item.id);
                }}
                // Styling for the link text: black text
                className="text-base font-medium text-gray-900 hover:text-indigo-600 transition duration-150 ease-in-out"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Call to Action Buttons (e.g., Sign In/Sign Up) */}
          <div className="flex items-center space-x-4">
            {/* The example image suggests two buttons or a search/cart icon */}
            <button
              // Button Text Color: The primary button text looks **white** against a background.
              // We'll use a primary color of 'indigo-600' for the button background.
              className="px-4 py-2 text-white text-sm font-medium bg-indigo-600 rounded-full hover:bg-indigo-700 transition duration-150"
            >
              Sign In
            </button>
            {/* A secondary button could have primary text color */}
            {/* <button className="text-gray-900 text-sm font-medium hover:text-indigo-600">
              Sign Up
            </button> */}
          </div>
          
          {/* Mobile Menu Button (you'll need to add logic for this) */}
          <div className="md:hidden">
            {/* Hamburger icon goes here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;