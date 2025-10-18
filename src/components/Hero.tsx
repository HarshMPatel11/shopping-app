export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              LET'S<br />
              EXPLORE<br />
              <span className="bg-yellow-400 px-2">UNIQUE</span><br />
              CLOTHES.
            </h1>
            <p className="text-gray-600 mb-8">
              Live for influential and innovative fashion!
            </p>
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
              Shop Now
            </button>
          </div>

          <div className="relative">
            <img
              src="/src/assets/girl-pink.jpg"
              alt="Fashion model in pink"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
