
import { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const MysticalLogin = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white animate-float`}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.1,
              animation: `float ${Math.random() * 5 + 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mist layers */}
      <div
        className={`absolute inset-0 z-30 bg-white/30 backdrop-blur-3xl transition-opacity duration-1500 ${
          showForm ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <div
        className={`absolute inset-0 z-20 bg-white/10 backdrop-blur-xl transition-all duration-[2000ms] ${
          showForm ? "-translate-x-full opacity-0" : "translate-x-0 opacity-90"
        }`}
      />
      <div
        className={`absolute inset-0 z-20 bg-white/10 backdrop-blur-xl transition-all duration-[2000ms] ${
          showForm ? "translate-x-full opacity-0" : "translate-x-0 opacity-90"
        }`}
      />

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl z-10 animate-pulse" />

      {/* Login/Signup container */}
      <div className="flex items-center justify-center min-h-screen w-full">
        <div
          className={`w-full max-w-md z-40 transition-all duration-800 ${
            showForm
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5"
          }`}
        >
          <div className="backdrop-blur-xl bg-white/10 rounded-xl overflow-hidden border border-white/20 shadow-xl">
            {/* Shimmer effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
            
            {/* Tabs */}
            <div className="relative">
              <div className="flex">
                <button
                  className={`w-1/2 py-4 text-center relative ${
                    !isSignUp ? "text-white" : "text-white/60"
                  }`}
                  onClick={() => setIsSignUp(false)}
                >
                  Login
                  {!isSignUp && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  )}
                </button>
                <button
                  className={`w-1/2 py-4 text-center relative ${
                    isSignUp ? "text-white" : "text-white/60"
                  }`}
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                  {isSignUp && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                {isSignUp ? "Create Your Account" : "Welcome Back"}
              </h2>
              <div
                className={`transition-all duration-300 ${
                  isSignUp ? "opacity-100" : "opacity-0 absolute"
                }`}
                style={{ transform: isSignUp ? "none" : "translateX(-100%)" }}
              >
                {isSignUp && <SignUpForm />}
              </div>
              <div
                className={`transition-all duration-300 ${
                  !isSignUp ? "opacity-100" : "opacity-0 absolute"
                }`}
                style={{ transform: !isSignUp ? "none" : "translateX(100%)" }}
              >
                {!isSignUp && <LoginForm />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MysticalLogin;
