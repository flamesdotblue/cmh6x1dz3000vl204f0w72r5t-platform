import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/5 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-neutral-400">© {new Date().getFullYear()} HelloBot. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#try" className="hover:text-white transition-colors">Try Demo</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
