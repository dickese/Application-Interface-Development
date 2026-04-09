const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-white pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-sm mb-4">About Us</h3>
            <p className="text-gray-400 text-xs mb-4">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-800 text-xs px-3 py-2 rounded outline-none flex-1"
              />
              <button className="bg-pink-500 text-white text-xs px-4 py-2 rounded hover:bg-pink-600 transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* Learn More */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Learn More</h3>
            <ul className="space-y-2">
              {["Our Cooks", "See Our Features", "FAQ"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-xs hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <h3 className="font-semibold text-sm mt-6 mb-4">Shop</h3>
            <ul className="space-y-2">
              {["Gift Subscription", "Send Us Feedback"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-xs hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recipes Column */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Recipes</h3>
            <ul className="space-y-2">
              {["What to Cook This Week", "Pasta", "Dinner", "Healthy", "Vegetarian", "Vegan", "Christmas"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 text-xs hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empty column for spacing or additional content */}
          <div></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C9.5 2 7.5 4 7.5 6.5V7H6.5C5.67 7 5 7.67 5 8.5V9.5C5 10.33 5.67 11 6.5 11H17.5C18.33 11 19 10.33 19 9.5V8.5C19 7.67 18.33 7 17.5 7H16.5V6.5C16.5 4 14.5 2 12 2ZM9.5 6.5C9.5 5.12 10.62 4 12 4C13.38 4 14.5 5.12 14.5 6.5V7H9.5V6.5ZM4 13V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V13H4Z" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-pink-500">Chefify</span>
          </div>
          <div className="text-gray-400 text-xs">
            <span>2023 Chefify Company</span>
            <span className="mx-3">|</span>
            <a href="#" className="hover:text-pink-400 transition-colors">Terms of Service</a>
            <span className="mx-1">|</span>
            <a href="#" className="hover:text-pink-400 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;