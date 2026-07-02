import React from 'react';
import { ArrowUp, Zap, HelpCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900 overflow-hidden relative">
      {/* Decorative vector background */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zinc-900 rounded-full blur-3xl -z-10 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-900">
          
          {/* Logo Brand info */}
          <div className="flex items-center space-x-3 text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-accent text-white font-mono font-bold text-base tracking-wider">
              {PERSONAL_INFO.initials}
            </div>
            <div>
              <span className="block font-display font-extrabold text-white text-base leading-none">
                John Daniel N. Nate
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </div>

          {/* Tagline or quote */}
          <p className="text-zinc-500 text-xs sm:text-sm max-w-md text-center md:text-right italic">
            "We build workflows that take repetitive work off your plate — not just connect apps together."
          </p>
        </div>

        {/* Footer bottom bar */}
        <div className="pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono font-medium text-zinc-600">
          <div>
            <span>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
          </div>

          {/* Social connections & back to top */}
          <div className="flex items-center space-x-6">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded-lg bg-zinc-900 hover:bg-brand-accent text-zinc-400 hover:text-white transition-all flex items-center gap-1.5 border border-zinc-800 cursor-pointer"
              aria-label="Back to top"
            >
              <span>Scroll up</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
