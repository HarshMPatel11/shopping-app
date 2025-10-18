import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="font-bold text-xl">FASHION</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">CATALOGUE</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">FASHION</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">FAVOURITE</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">LIFESTYLE</a>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
