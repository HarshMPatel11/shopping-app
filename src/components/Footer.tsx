import { ShoppingBag, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6" />
              <span className="font-bold text-xl">FASHION</span>
            </div>
            <p className="text-gray-400 mb-4">
              Complete your style with awesome clothes from us.
            </p>
            <div className="flex gap-3">
              <div className="bg-yellow-400 p-2 rounded-full cursor-pointer hover:bg-yellow-500">
                <Facebook className="w-5 h-5 text-black" />
              </div>
              <div className="bg-yellow-400 p-2 rounded-full cursor-pointer hover:bg-yellow-500">
                <Instagram className="w-5 h-5 text-black" />
              </div>
              <div className="bg-yellow-400 p-2 rounded-full cursor-pointer hover:bg-yellow-500">
                <Twitter className="w-5 h-5 text-black" />
              </div>
              <div className="bg-yellow-400 p-2 rounded-full cursor-pointer hover:bg-yellow-500">
                <Linkedin className="w-5 h-5 text-black" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Share Location</a></li>
              <li><a href="#" className="hover:text-white">Orders Tracking</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms & conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
