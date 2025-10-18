import { ArrowRight } from 'lucide-react';

export default function YoungFavourite() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Young's Favourite</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4 bg-orange-100">
              <img
                src="/src/assets/girls-trending.jpg"
                alt="Trending on Instagram"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Trending on Instagram</h3>
                <p className="text-gray-600 text-sm">Explore Now!</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4 bg-pink-100">
              <img
                src="/src/assets/girl-under-40.jpg"
                alt="All Under $40"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">All Under $40</h3>
                <p className="text-gray-600 text-sm">Explore Now!</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
