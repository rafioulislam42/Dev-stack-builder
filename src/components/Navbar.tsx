import { useState } from 'react';
import logoImg from '../assets/logo-text.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-slate-100 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
        
        {/* Logo Image */}
        <div className="flex items-center cursor-pointer">
          <img src={logoImg} alt="Dev Stack Logo" className="h-8 object-contain" />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="text-slate-900 font-semibold hover:text-pink-600 transition-colors">Home</a>
          <a href="#technologies" className="hover:text-pink-600 transition-colors">Technologies</a>
          <a href="#projects" className="hover:text-pink-600 transition-colors">Projects</a>
          <a href="#about" className="hover:text-pink-600 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">
            Sign In
          </button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-pink-600/25 transition-all">
            Sign Up
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-5 shadow-lg flex flex-col gap-4 animate-fadeIn">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-semibold text-slate-900 hover:text-pink-600 transition-colors"
          >
            Home
          </a>
          <a 
            href="#technologies" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors"
          >
            Technologies
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors"
          >
            Projects
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors"
          >
            About
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors"
          >
            Contact
          </a>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button className="w-full text-center text-sm font-semibold text-slate-700 py-2 hover:text-slate-900 transition-colors">
              Sign In
            </button>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold py-2.5 rounded-xl shadow-md transition-all">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}