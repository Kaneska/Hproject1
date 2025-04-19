'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CursorTrail from '../components/CursorTrail';

export default function Home() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleForm = () => setShowLogin(!showLogin);

  return (
    <div className="relative h-screen w-screen bg-black overflow-hidden">
      <CursorTrail />
{/* bgimage */}
      <Image
        src="/dhimu.jpeg"
        alt="Hogwarts"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-50 z-0"
        priority
      />

      {/* Title */}
      <div className="absolute top-4 left-6 z-20">
        <div className="bg-[#004e6b] text-[#00e5ff] px-4 py-2 rounded-full font-bold">
          KraftedX!
        </div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-6 bg-black/70 px-6 py-2 rounded-full text-white">
        {['Home', 'Class', 'Quiz', 'Shop', 'Housemate', 'Contact'].map((item) => (
          <Link key={item} href="#" className="hover:text-[#00e5ff] transition">
            {item}
          </Link>
        ))}
      </nav>

      {/* Login Button & Form */}
      <div className="absolute top-6 right-10 z-20">
        {!isLoginVisible ? (
          <button
            onClick={() => setIsLoginVisible(true)}
            className="bg-[#004e6b] text-[#00e5ff] px-4 py-2 rounded-md hover:bg-[#005f84] transition-all duration-300 shadow-lg shadow-cyan-800/30"
          >
            Enter the Magic Portal
          </button>
        ) : (
          <div className="w-[350px] bg-[#002f3d]/90 border border-cyan-500/30 rounded-lg shadow-xl shadow-cyan-800/30 backdrop-blur-lg absolute right-0 mt-2 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-cyan-500/20">
              <h3 className="text-2xl text-center text-[#00e5ff] font-semibold">
                {showLogin ? 'Welcome, Wizard' : 'Join the Wizarding World'}
              </h3>
              <p className="text-center text-cyan-200 text-sm mt-1">
                {showLogin ? 'Enter your magical credentials' : 'Create your wizarding account'}
              </p>
            </div>

            {/* Inputs */}
            <div className="p-4 space-y-4">
              <input
                type="email"
                placeholder="Wizard Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#00394e] border border-cyan-400/20 rounded-md px-3 py-2 text-white placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
              <input
                type="password"
                placeholder="Secret Spell"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#00394e] border border-cyan-400/20 rounded-md px-3 py-2 text-white placeholder:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-cyan-500/20 flex flex-col space-y-2">
              <button className="w-full bg-[#004e6b] text-[#00e5ff] py-2 rounded-md hover:bg-[#005f84] transition duration-300 shadow-md">
                {showLogin ? 'Enter Hogwarts' : 'Register Wand'}
              </button>
              <button
                className="text-cyan-300 hover:text-white text-sm"
                onClick={toggleForm}
              >
                {showLogin ? "Don't have a wand? Register now" : 'Already enrolled? Sign in'}
              </button>
              <button
                className="text-xs text-[#00e5ff] mt-2"
                onClick={() => setIsLoginVisible(false)}
              >
                ✨ Close Portal
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="absolute bottom-20 w-full text-center z-20">
        <h1 className="text-5xl text-white drop-shadow-lg font-bold tracking-widest">
          <span className="text-[#00e5ff] font-harry">Welcome to My </span> Auth Playground 🚀
        </h1>
      </div>
    </div>
  );
}
