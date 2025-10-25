export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center text-center py-32 px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-6">Original Surf / Skate Graphics</h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          Limited drops. Subtle labels. Designed by William Morris — made to move.
        </p>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
          Shop Drop 01
        </button>
      </section>

      {/* Placeholder for Product Grid */}
      <section className="w-full max-w-6xl py-20 px-6 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-8 text-center">Latest Drop</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {/* Product cards will go here */}
          <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
            Product 1
          </div>
          <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
            Product 2
          </div>
          <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
            Product 3
          </div>
          <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400">
            Product 4
          </div>
        </div>
      </section>
    </main>
  );
}
