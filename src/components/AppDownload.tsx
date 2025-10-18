export default function AppDownload() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              DOWNLOAD APP &<br />
              GET THE VOUCHER!
            </h2>
            <p className="text-gray-600 mb-8">
              Get 30% off for first transaction using Rondovision mobile app for now.
            </p>
            <div className="flex gap-4">
              <img
                src="/src/assets/appstore.png"
                alt="Download on App Store"
                className="h-12 cursor-pointer hover:opacity-80"
              />
              <img
                src="/src/assets/playstore.png"
                alt="Get it on Google Play"
                className="h-12 cursor-pointer hover:opacity-80"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/src/assets/mobile-app.png"
              alt="Mobile app preview"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
