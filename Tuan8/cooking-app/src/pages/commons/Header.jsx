import { Search } from "lucide-react";
import { useState } from "react";
import AuthDialog from "./auth-page";

const Header = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authView, setAuthView] = useState("login");
  const navLinks = ["What to cook", "Recipes", "Ingredients", "Occasions", "About Us"];

    const openLogin = () => {
    setAuthView("login");
    setIsAuthOpen(true);
  };

  const openRegister = () => {
    setAuthView("register");
    setIsAuthOpen(true);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2C9.5 2 7.5 4 7.5 6.5V7H6.5C5.67 7 5 7.67 5 8.5V9.5C5 10.33 5.67 11 6.5 11H17.5C18.33 11 19 10.33 19 9.5V8.5C19 7.67 18.33 7 17.5 7H16.5V6.5C16.5 4 14.5 2 12 2ZM9.5 6.5C9.5 5.12 10.62 4 12 4C13.38 4 14.5 5.12 14.5 6.5V7H9.5V6.5ZM4 13V19C4 20.1 4.9 21 6 21H18C19.1 21 20 20.1 20 19V13H4Z" />
          </svg>
        </div>
        <span className="text-xl font-bold text-pink-500">Chefify</span>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-64">
        <Search className="w-4 h-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="What would you like to cook?"
          className="bg-transparent text-sm outline-none w-full text-gray-600 placeholder-gray-400"
        />
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm text-gray-600 hover:text-pink-500 transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        <button 
          onClick={openLogin}
          className="text-sm text-pink-500 font-medium hover:underline"
        >
          Login
        </button>
        <button 
          onClick={openRegister}
          className="bg-pink-500 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-pink-600 transition-colors"
        >
          Subscribe
        </button>
      </div>

      {/* Auth Dialog */}
      <AuthDialog
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialView={authView}
      />
    </header>
  );
};

export default Header;
