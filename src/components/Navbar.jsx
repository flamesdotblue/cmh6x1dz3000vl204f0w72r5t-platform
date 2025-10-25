import React from 'react';
import { Bot, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-amber-600 text-neutral-950">
              <Bot className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">HelloBot</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#try" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10 transition-colors">
              <Rocket className="h-4 w-4 text-orange-400" />
              <span>Launch Demo</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
