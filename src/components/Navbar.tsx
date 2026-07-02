import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        let savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
          const match = document.cookie.match(/(^|;)\s*theme\s*=\s*([^;]+)/);
          if (match) savedTheme = match[2];
        }
        if (savedTheme === 'dark') return true;
        if (savedTheme === 'light') return false;
      } catch (e) {
        console.warn('Failed to read theme from storage/cookies, trying fallback:', e);
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section on scroll
      const sections = ['hero', 'about', 'services', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        try {
          localStorage.setItem('theme', 'dark');
        } catch (_) {}
        try {
          const expires = new Date();
          expires.setFullYear(expires.getFullYear() + 1);
          document.cookie = `theme=dark;path=/;expires=${expires.toUTCString()};SameSite=Lax`;
        } catch (_) {}
      } else {
        document.documentElement.classList.remove('dark');
        try {
          localStorage.setItem('theme', 'light');
        } catch (_) {}
        try {
          const expires = new Date();
          expires.setFullYear(expires.getFullYear() + 1);
          document.cookie = `theme=light;path=/;expires=${expires.toUTCString()};SameSite=Lax`;
        } catch (_) {}
      }
    } catch (e) {
      console.warn('Failed to apply theme or write to storage:', e);
    }
  }, [isDarkMode]);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Experience', id: 'experience' },
    { label: 'Portfolio', id: 'projects' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-zinc-200/50 dark:border-dark-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center space-x-2 text-left group cursor-pointer"
          >
            <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-mono font-bold text-base tracking-wider transition-transform duration-300 group-hover:scale-105 shadow-sm">
              {PERSONAL_INFO.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg text-zinc-900 dark:text-white leading-none">
                John Daniel Nate
              </span>
              <span className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-mono tracking-wide">
                AI AUTOMATION
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-sans text-sm font-medium tracking-wide transition-all relative py-2 cursor-pointer duration-200 hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-brand-accent dark:text-brand-accent-dark font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-accent dark:bg-brand-accent-dark rounded-full" />
                )}
              </button>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-dark-card transition-all duration-200 cursor-pointer hover:scale-110"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-zinc-700" />}
            </button>
            
            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center px-4.5 py-2 text-sm font-bold text-white dark:text-zinc-950 bg-brand-accent dark:bg-brand-accent-dark hover:bg-brand-accent-hover dark:hover:bg-white rounded-lg shadow-sm transition-all hover:shadow hover:scale-105 hover:-translate-y-0.5 duration-200 cursor-pointer"
            >
              Let's Talk
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-dark-card transition-all"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-dark-card focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible border-b border-zinc-200 dark:border-dark-border bg-white dark:bg-dark-bg shadow-lg'
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-sans text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'bg-zinc-100 dark:bg-dark-card text-brand-accent dark:text-brand-accent-dark font-bold'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-dark-card/50 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-4 px-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center px-5 py-3 text-base font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-lg shadow transition-transform hover:scale-[1.02]"
            >
              Let's Talk
              <ArrowUpRight className="ml-1.5 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
