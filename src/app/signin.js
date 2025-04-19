'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import CursorTrail from '@/components/CursorTrail';

export default function Home() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cloudEffect, setCloudEffect] = useState(false);

  const toggleForm = () => setShowLogin(!showLogin);
  
  // Toggle cloud effect when login becomes visible/hidden
  useEffect(() => {
    if (isLoginVisible) {
      setCloudEffect(true);
    } else {
      // Delay hiding cloud effect to allow for transition
      const timer = setTimeout(() => {
        setCloudEffect(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoginVisible]);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      <CursorTrail />

      {/* Background Image */}
      <Image
        src="/dhimu.jpeg"
        alt="Hogwarts"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-50 z-0"
        priority
      />
      
      {/* Cloud effect overlay */}
      <div 
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 backdrop-blur-sm z-10 pointer-events-none transition-opacity duration-1000 
        ${cloudEffect ? 'opacity-100' : 'opacity-0'}`} 
      />

      {/* Title Left */}
      <div className="absolute top-4 left-6 z-20">
        <div className="bg-sky-900 text-cyan-300 px-4 py-2 rounded-full font-bold">
          Potterverse University
        </div>
      </div>

      {/* Navigation + Login */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6 bg-black/70 px-6 py-2 rounded-full text-white">
        {['Home', 'Class', 'Quiz', 'Shop', 'Housemate', 'Contact'].map((item) => (
          <Link key={item} href="#" className="hover:text-cyan-300 transition">
            {item}
          </Link>
        ))}
      </nav>

      {/* Login Button & Form */}
      <div className="absolute top-6 right-10 z-30">
        {!isLoginVisible ? (
          <button 
            onClick={() => setIsLoginVisible(true)} 
            className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-amber-900/30"
          >
            Enter the Magic Portal
          </button>
        ) : (
          <div className={`w-[350px] bg-black/80 border border-yellow-600/30 rounded-lg shadow-xl shadow-yellow-900/20 backdrop-blur-lg absolute right-0 mt-2 overflow-hidden
                           transition-all duration-700 transform ${isLoginVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Cloud effect on login card */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-500/5 to-yellow-300/10 pointer-events-none" />
            
            {/* Card Header */}
            <div className="p-4 border-b border-yellow-600/20 relative">
              <h3 className="text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500 font-medium">
                {showLogin ? 'Welcome, Wizard' : 'Join the Wizarding World'}
              </h3>
              <p className="text-center text-gray-400 text-sm mt-1">
                {showLogin ? 'Enter your magical credentials' : 'Create your wizarding account'}
              </p>
            </div>
            
            {/* Card Content */}
            <div className="p-4 space-y-4 relative">
              <div>
                <input
                  type="email"
                  placeholder="Wizard Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Secret Spell"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black/50 border border-yellow-600/30 rounded-md px-3 py-2 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500/50"
                />
              </div>
            </div>
            
            {/* Card Footer */}
            <div className="p-4 border-t border-yellow-600/20 flex flex-col space-y-2 relative">
              <button 
                className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white py-2 rounded-md hover:from-amber-600 hover:to-yellow-700 transition-all duration-300 shadow-md"
              >
                {showLogin ? 'Enter Hogwarts' : 'Register Wand'}
              </button>
              <button 
                className="text-gray-400 hover:text-white text-sm"
                onClick={toggleForm}
              >
                {showLogin ? "Don't have a wand? Register now" : 'Already enrolled? Sign in'}
              </button>
              <button 
                className="text-xs text-yellow-500 mt-2"
                onClick={() => setIsLoginVisible(false)}
              >
                ✨ Close Portal
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Title */}
      <div className={`absolute bottom-20 w-full text-center z-20 transition-all duration-700 ${isLoginVisible ? 'opacity-50' : 'opacity-100'}`}>
        <h1 className="text-5xl text-white drop-shadow-lg font-bold tracking-widest">
          <span className="text-cyan-300 font-harry">Happy</span> Birthday
        </h1>
      </div>
    </div>
  )
}