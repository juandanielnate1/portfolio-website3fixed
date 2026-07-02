import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-dark-bg text-zinc-900 dark:text-zinc-100 transition-colors duration-300 flex flex-col selection:bg-brand-accent selection:text-white">
      {/* Top sticky responsive Navbar */}
      <Navbar />

      {/* Main sections layout */}
      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <Hero />

        {/* 2. ABOUT SECTION */}
        <About />

        {/* 3. SERVICES SECTION */}
        <Services />

        {/* 4. WORK EXPERIENCE SECTION */}
        <Experience />

        {/* 5. PREVIOUS WORKS / PROJECTS SECTION */}
        <Projects />

        {/* 6. CONTACT SECTION */}
        <Contact />
      </main>

      {/* Unified Footer */}
      <Footer />
    </div>
  );
}
