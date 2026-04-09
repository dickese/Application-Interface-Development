const HeroSection = () => {
  return (
    <section className="relative h-[500px] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Recipe Card Overlay */}
      <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2">
        <div className="bg-white rounded-2xl p-6 w-64 shadow-lg">
          {/* Badge */}
          <div className="flex justify-center mb-4">
            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-4 py-1 rounded-full">
              Recipe of the day
            </span>
          </div>

          {/* Title */}
          <h2 className="text-pink-500 text-xl font-bold mb-3">Salad Caprese</h2>

          {/* Description */}
          <p className="text-gray-600 text-xs leading-relaxed mb-4">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and balsamic vinegar create a refreshing dish for lunch or appetizer.
          </p>

          {/* Icon */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-lg">🥗</span>
            </div>
            <span className="text-xs text-gray-600">Salad Caprese</span>
          </div>

          {/* Button */}
          <button className="bg-pink-500 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-pink-600 transition-colors flex items-center gap-2">
            View now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;