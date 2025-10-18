export default function BrandLogos() {
  return (
    <section className="bg-yellow-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          <img src="/src/assets/hm-logo.png" alt="H&M" className="h-8 object-contain" />
          <img src="/src/assets/obey-logo.png" alt="OBEY" className="h-8 object-contain" />
          <img src="/src/assets/shopify-logo.png" alt="Shopify" className="h-8 object-contain" />
          <img src="/src/assets/lacoste-logo.png" alt="LACOSTE" className="h-8 object-contain" />
          <img src="/src/assets/levis-logo.png" alt="Levi's" className="h-8 object-contain" />
          <img src="/src/assets/amazon-logo.png" alt="Amazon" className="h-8 object-contain" />
        </div>
      </div>
    </section>
  );
}
