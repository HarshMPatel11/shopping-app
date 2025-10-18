export default function PaydaySale() {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src="/src/assets/girl-yellow.jpg"
              alt="Girl in yellow jersey"
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute top-8 right-8">
              <div className="bg-white rounded-full w-24 h-24 flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-5xl font-bold mb-6">
              PAYDAY<br />
              SALE NOW
            </h2>
            <p className="text-lg mb-4">
              Spend minimal $100 get 30% off voucher code for your next purchase
            </p>
            <p className="font-bold text-xl mb-2">1 June - 10 June 2021</p>
            <p className="text-sm mb-6">*Terms & Conditions apply</p>
            <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
