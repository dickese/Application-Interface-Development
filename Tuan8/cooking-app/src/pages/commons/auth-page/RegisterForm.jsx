const RegisterForm = ({ onSwitchToLogin, onClose }) => {
  return (
    <div className="flex w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl">
      {/* Left Panel - Form */}
      <div className="w-full md:w-1/2 p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 transition-colors md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-pink-500 mb-6">Create an account</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter at least 8+ characters"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors mt-2"
          >
            Sign up
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="flex-1 border-t border-gray-200" />
          <span className="px-3 text-gray-400 text-sm">Or sign up with</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>

        <div className="flex justify-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button>

          <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          <button className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
            </svg>
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-pink-500 hover:underline font-medium"
          >
            Log in
          </button>
        </p>
      </div>

      {/* Right Panel - Illustration */}
      <div className="hidden md:flex w-1/2 bg-pink-500 flex-col items-center justify-center p-8 relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Decorative illustration */}
        <div className="relative">
          <svg viewBox="0 0 300 300" className="w-64 h-64">
            {/* Background circles */}
            <circle cx="250" cy="50" r="30" fill="rgba(255,255,255,0.2)" />
            <circle cx="40" cy="250" r="20" fill="rgba(255,255,255,0.15)" />
            
            {/* Person on skateboard */}
            <g transform="translate(80, 100)">
              {/* Skateboard */}
              <ellipse cx="60" cy="150" rx="50" ry="8" fill="#FFD700" />
              <circle cx="30" cy="155" r="8" fill="#333" />
              <circle cx="90" cy="155" r="8" fill="#333" />
              
              {/* Body */}
              <ellipse cx="60" cy="100" rx="25" ry="35" fill="#4DD4E8" />
              
              {/* Head */}
              <circle cx="60" cy="50" r="25" fill="#FFE4C4" />
              
              {/* Hair */}
              <ellipse cx="60" cy="35" rx="28" ry="20" fill="#FFD700" />
              
              {/* Face */}
              <circle cx="52" cy="50" r="3" fill="#333" />
              <circle cx="68" cy="50" r="3" fill="#333" />
              <path d="M 55 60 Q 60 65 65 60" stroke="#333" strokeWidth="2" fill="none" />
              
              {/* Arms */}
              <line x1="35" y1="90" x2="10" y2="70" stroke="#FFE4C4" strokeWidth="8" strokeLinecap="round" />
              <line x1="85" y1="90" x2="110" y2="70" stroke="#FFE4C4" strokeWidth="8" strokeLinecap="round" />
              
              {/* Legs */}
              <line x1="45" y1="130" x2="35" y2="150" stroke="#4DD4E8" strokeWidth="10" strokeLinecap="round" />
              <line x1="75" y1="130" x2="85" y2="150" stroke="#4DD4E8" strokeWidth="10" strokeLinecap="round" />
            </g>
            
            {/* Decorative stars */}
            <path d="M 230 120 L 235 130 L 245 130 L 237 138 L 240 148 L 230 142 L 220 148 L 223 138 L 215 130 L 225 130 Z" fill="white" />
            <path d="M 50 80 L 53 87 L 60 87 L 55 92 L 57 99 L 50 95 L 43 99 L 45 92 L 40 87 L 47 87 Z" fill="white" opacity="0.8" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;