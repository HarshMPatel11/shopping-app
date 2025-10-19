import { ArrowRight } from 'lucide-react';

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      title: "Hoodies & Sweatshirt",
      subtitle: "Explore Now!",
      image: "/src/assets/Rectangle 20.png"
    },
    {
      id: 2,
      title: "Coats & Parkas",
      subtitle: "Explore Now!",
      image: "/src/assets/Rectangle 21.png"
    },
    {
      id: 3,
      title: "Tees & T-Shirt",
      subtitle: "Explore Now!",
      image: "/src/assets/Frame 17.png"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">NEW ARRIVALS</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{product.title}</h3>
                  <p className="text-gray-600 text-sm">{product.subtitle}</p>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
