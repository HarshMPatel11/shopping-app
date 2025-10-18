// src/components/ProductCard.jsx
import React from 'react';

const placeholderImage = "https://via.placeholder.com/300x400?text=New+Arrival";

const ProductCard = ({ name, price, imageUrl, isNew }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02] cursor-pointer">
      {/* Product Image */}
      <div className="relative">
        <img 
          src={imageUrl || placeholderImage} 
          alt={name} 
          className="w-full h-96 object-cover"
        />
        {/* 'New' Tag */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            New
          </span>
        )}
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="mt-1 text-xl font-bold text-gray-800">${price}</p>
        <button 
          className="mt-3 w-full py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;