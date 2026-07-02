import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Zap, Play, CheckCircle, Network, Settings, Bot, Sparkles, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-radial from-zinc-50 via-zinc-50 to-zinc-100/50 dark:from-dark-bg dark:via-dark-bg dark:to-dark-card/30 transition-colors duration-300"
    >
      {/* Visual Dot Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#223047_1px,transparent_1px),linear-gradient(to_bottom,#223047_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 dark:opacity-25" />

      {/* Modern Gradient Orbs for Visual Premium Touch */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-brand-accent/10 dark:bg-brand-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/10 dark:bg-brand-accent-dark/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 flex flex-col items-center text-center">
        {/* Available Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-accent/5 dark:bg-brand-accent/5 border border-brand-accent/20 dark:border-brand-accent-dark/20 text-brand-accent dark:text-brand-accent font-mono text-xs font-semibold mb-6 sm:mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent dark:bg-brand-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent dark:bg-brand-accent"></span>
          </span>
          <span>Open for Projects & Consulting</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-white tracking-tight leading-tight max-w-5xl"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Professional Designation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-zinc-900 via-zinc-850 to-zinc-900 dark:from-dark-card dark:via-dark-bg dark:to-dark-card text-white border border-zinc-800 dark:border-dark-border shadow-sm animate-fade-in"
        >
          <span className="font-mono text-sm sm:text-base font-bold uppercase tracking-widest flex items-center gap-2">
            <Bot className="w-5 h-5 text-brand-accent-dark animate-pulse" />
            {PERSONAL_INFO.title}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-zinc-600 dark:text-zinc-300 font-sans max-w-3xl leading-relaxed font-light"
        >
          "I build workflows that take <strong className="font-semibold text-zinc-900 dark:text-white underline decoration-brand-accent dark:decoration-brand-accent-dark decoration-2 underline-offset-4">repetitive work off your plate</strong> — not just connect apps together."
        </motion.p>

        {/* Core Value Quick Bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400"
        >
          <span className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-brand-accent dark:text-brand-accent-dark" />
            <span>n8n, Make & Zapier Expert</span>
          </span>
          <span className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-brand-accent dark:text-brand-accent-dark" />
            <span>API & Webhook Specialist</span>
          </span>
          <span className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-brand-accent dark:text-brand-accent-dark" />
            <span>Robust Error-Handled Loops</span>
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-zinc-950 bg-brand-accent hover:bg-brand-accent-hover rounded-full shadow-lg shadow-brand-accent/15 hover:shadow-xl hover:shadow-brand-accent/25 transition-all hover:scale-105 hover:-translate-y-0.5 duration-200 group cursor-pointer"
          >
            Automate Your Business
            <Zap className="ml-2 w-5 h-5 text-zinc-950 group-hover:scale-110 transition-transform" />
          </button>
          
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-zinc-700 dark:text-zinc-200 bg-white/50 dark:bg-white/5 hover:bg-zinc-100 dark:hover:bg-white/10 border border-zinc-300/60 dark:border-dark-border rounded-full shadow-sm hover:scale-105 transition-all duration-200 cursor-pointer backdrop-blur-sm"
          >
            View Workflows
          </button>
        </motion.div>

        {/* Animated Workflow Visual Hint (Sleek minimalist flowchart mockup) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 sm:mt-20 w-full max-w-4xl p-1 bg-zinc-200/60 dark:bg-dark-border/40 rounded-2xl border border-zinc-300/30 dark:border-dark-border/20 shadow-xl overflow-hidden backdrop-blur-sm"
        >
          <div className="bg-white dark:bg-dark-card rounded-xl p-4 sm:p-6 text-left">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-dark-border pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 block" />
                </div>
                <span className="text-xs font-mono text-zinc-400 pl-2">jdn_system_blueprint.json</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-brand-accent/10 dark:bg-brand-accent/10 text-brand-accent border border-brand-accent/20 dark:border-brand-accent/20 font-bold">
                ● ACTIVE & RUNNING
              </span>
            </div>

            {/* Simulated automation nodes visually */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center relative py-2">
              <div className="p-3.5 bg-zinc-50 dark:bg-dark-bg rounded-xl border border-zinc-200/60 dark:border-dark-border flex items-center space-x-3 hover:border-zinc-300 dark:hover:border-zinc-500 transition-all shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">n8n, Make & Zapier</div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Workflow Engines</div>
                </div>
              </div>

              <div className="hidden md:flex justify-center text-zinc-400 dark:text-zinc-600">
                <span className="text-lg">→</span>
              </div>

              <div className="p-3.5 bg-brand-accent/5 dark:bg-brand-accent/10 rounded-xl border border-brand-accent/20 dark:border-brand-accent/20 flex items-center space-x-3 hover:border-brand-accent/40 transition-all shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-brand-accent dark:bg-brand-accent text-zinc-950 flex items-center justify-center font-mono font-extrabold text-xs">
                  AI
                </div>
                <div>
                  <div className="text-xs font-extrabold text-brand-accent">ChatGPT & OpenAI</div>
                  <div className="text-[10px] font-mono text-brand-accent">Cognitive Processing</div>
                </div>
              </div>

              <div className="hidden md:flex justify-center text-zinc-400 dark:text-zinc-600">
                <span className="text-lg">→</span>
              </div>

              <div className="p-3.5 bg-zinc-50 dark:bg-dark-bg rounded-xl border border-zinc-200/60 dark:border-dark-border flex items-center space-x-3 hover:border-zinc-300 dark:hover:border-zinc-500 transition-all shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-zinc-700 dark:bg-zinc-300 text-white dark:text-zinc-900 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-brand-accent" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-900 dark:text-white">Claude & Anthropic</div>
                  <div className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400">Structured Intelligence</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <button
            onClick={() => handleScrollTo('about')}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
