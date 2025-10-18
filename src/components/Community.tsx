export default function Community() {
  return (
    <section className="bg-yellow-400 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          JOIN SHOPPING COMMUNITY TO<br />
          GET MONTHLY PROMO
        </h2>
        <p className="text-gray-700 mb-8">
          Type your email down below and be young wild generation
        </p>

        <div className="flex max-w-md mx-auto gap-2">
          <input
            type="email"
            placeholder="Add your email here"
            className="flex-1 px-4 py-3 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button className="bg-black text-white px-8 py-3 rounded hover:bg-gray-800">
            SEND
          </button>
        </div>
      </div>
    </section>
  );
}
