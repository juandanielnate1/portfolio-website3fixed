import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Award, CheckSquare, Sparkles, Code, Hammer, Phone, Mail, MapPin, Linkedin, ArrowUpRight, Cpu, X, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS } from '../data';

export default function About() {
  const platformSkills = SKILLS.filter(s => s.category === 'tools');
  const coreSkills = SKILLS.filter(s => s.category === 'core');
  const conceptSkills = SKILLS.filter(s => s.category === 'concepts');

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Static profile image from data.ts, with graceful fallback if it fails to load
  const [imageFailed, setImageFailed] = React.useState(false);
  const profileImage = !imageFailed ? (PERSONAL_INFO.profileImage || '') : '';

  // Large photo viewer modal
  const [showLargePhoto, setShowLargePhoto] = React.useState(false);

  // Skill percentages matching the look and feel of progress bars in the reference image
  const skillPercentages: { [key: string]: number } = {
    'n8n': 99,
    'Make.com': 98,
    'Zapier': 95,
    'API Integrations & Webhooks': 97,
    'HTTP Requests': 96,
    'Data Filtering/Branching/Looping': 95,
    'Claude Prompt Engineering': 98,
    'ChatGPT Prompt Optimization & Agentic Cues': 94,
    'Process Bottleneck & Cost Audits': 92,
    'SOP Translation & Flow Mapping': 95,
    'Cross-Platform Workflow Design': 97,
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-bg border-y border-zinc-200/50 dark:border-dark-border/50 relative overflow-hidden transition-colors duration-300">
      {/* Dynamic ambient background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-accent/5 dark:bg-brand-accent/5 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-accent-dark/5 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Side-by-Side About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Stylized Portrait Frame with Floating Spheres */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start relative">
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 flex items-center justify-center">
              
              {/* Floating Decorative Sphere (Top-Left) */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-14 sm:h-14 bg-brand-accent dark:bg-brand-accent rounded-full shadow-lg z-20 animate-bounce" style={{ animationDuration: '6s' }} />
              
              {/* Floating Decorative Sphere (Bottom-Right) */}
              <div className="absolute bottom-6 right-6 w-8 h-8 sm:w-10 sm:h-10 bg-amber-400 rounded-full shadow-md z-20 animate-pulse" />

              {/* Glowing outer aura */}
              <div className="absolute inset-0 bg-brand-accent/10 dark:bg-brand-accent/10 rounded-full blur-2xl -z-10 animate-pulse" />

              {/* The Double Circular Frame */}
              <div className="w-64 h-64 sm:w-76 sm:h-76 rounded-full p-2.5 border-4 border-brand-accent/40 dark:border-brand-accent/30 relative flex items-center justify-center group/profile">
                <div className="w-full h-full rounded-full p-1 border-2 border-dashed border-brand-accent dark:border-brand-accent-dark flex items-center justify-center overflow-hidden bg-zinc-50 dark:bg-dark-card relative">
                  
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      onError={() => setImageFailed(true)}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    /* High-fidelity custom modern vector profile image placeholder */
                    <svg viewBox="0 0 100 100" className="w-11/12 h-11/12 text-brand-accent dark:text-brand-accent-dark opacity-90 transition-transform duration-500 hover:scale-110">
                      <defs>
                        <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#ff5c35" stopOpacity="0.1" />
                          <stop offset="50%" stopColor="#1f213c" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#ff5c35" stopOpacity="0.15" />
                        </linearGradient>
                      </defs>
                      <circle cx="50" cy="50" r="46" fill="url(#avatarGrad)" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 2" />
                      <path d="M50,4 Q50,96 50,96 M4,50 Q96,50 96,50" stroke="currentColor" strokeWidth="0.25" strokeOpacity="0.3" />
                      <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.5" />
                      <path d="M30,85 C30,70 38,62 50,62 C62,62 70,70 70,85" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <circle cx="50" cy="42" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
                      <circle cx="28" cy="30" r="2.5" fill="currentColor" />
                      <line x1="28" y1="30" x2="38" y2="35" stroke="currentColor" strokeWidth="0.75" />
                      <circle cx="72" cy="34" r="2" fill="currentColor" />
                      <line x1="72" y1="34" x2="62" y2="38" stroke="currentColor" strokeWidth="0.75" />
                      <rect x="47" y="10" width="6" height="3" rx="1.5" fill="currentColor" />
                    </svg>
                  )}

                  {/* View Large Photo overlay (only shown when a real photo is set) */}
                  {profileImage && (
                    <button
                      onClick={() => setShowLargePhoto(true)}
                      className="absolute inset-0 bg-black/70 opacity-0 group-hover/profile:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 z-30 cursor-pointer"
                      aria-label="View large profile photo"
                    >
                      <Maximize2 className="w-6 h-6 text-white" />
                      <span className="text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                        View Large Photo
                      </span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Table Info */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-brand-accent-light dark:bg-brand-accent/10 border border-brand-accent/20 dark:border-brand-accent-dark/30 text-brand-accent dark:text-brand-accent-dark mb-4">
                About Me
              </span>
              
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight leading-tight">
                Get robust, bulletproof systems that do the heavy lifting for you
              </h2>
              
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed font-sans font-light">
                {PERSONAL_INFO.aboutText}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200/80 dark:border-dark-border">
              
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">Name:</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-white font-sans block">{PERSONAL_INFO.name}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">WhatsApp/Viber:</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-white font-sans block">{PERSONAL_INFO.phone}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">Email:</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-white font-sans block break-all">{PERSONAL_INFO.email}</span>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">Location:</span>
                <span className="text-sm font-semibold text-zinc-800 dark:text-white font-sans block">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-bold text-white bg-brand-accent hover:bg-brand-accent-hover rounded-full shadow-md hover:shadow-lg transition-all hover:scale-105 duration-200 cursor-pointer"
              >
                Contact Me
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </button>

              <button
                onClick={() => handleScrollTo('experience')}
                className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-dark-card hover:bg-zinc-100 dark:hover:bg-dark-border border border-zinc-200 dark:border-dark-border rounded-full shadow-sm transition-all hover:scale-105 duration-200 cursor-pointer"
              >
                Review Career Experience
              </button>
            </div>
          </div>

        </div>

        {/* "My Work Skills" Executive Dashboard section */}
        <div className="mt-24 pt-16 border-t border-zinc-200/50 dark:border-dark-border/50">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
              My Work Skills
            </h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-sans">
              Rigorous, hands-on operational competence backed by production-level logic benchmarks.
            </p>
            <div className="mt-4 w-12 h-0.5 bg-brand-accent dark:bg-brand-accent-dark mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {platformSkills.map(skill => {
              const pct = skillPercentages[skill.name] || 95;
              return (
                <div key={skill.name} className="p-5 bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200/70 dark:border-dark-border shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300 relative group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-extrabold text-sm sm:text-base text-zinc-800 dark:text-white flex items-center gap-1.5">
                      {skill.name.includes('n8n') && <span className="w-2.5 h-2.5 rounded-full bg-[#ff6d5a] shrink-0" />}
                      {skill.name.includes('Make.com') && <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7] shrink-0" />}
                      {skill.name.includes('Zapier') && <span className="w-2.5 h-2.5 rounded-full bg-[#ff4f00] shrink-0" />}
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-accent dark:text-brand-accent-dark">
                      {pct}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-dark rounded-full transition-all duration-1000" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {coreSkills.slice(0, 4).map(skill => {
              const pct = skillPercentages[skill.name] || 95;
              return (
                <div key={skill.name} className="p-5 bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200/70 dark:border-dark-border shadow-sm flex flex-col justify-between hover:scale-105 transition-transform duration-300 relative group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-extrabold text-sm text-zinc-800 dark:text-white truncate pr-2">
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono font-bold text-brand-accent dark:text-brand-accent-dark">
                      {pct}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-zinc-200 dark:bg-zinc-900 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-dark rounded-full transition-all duration-1000" 
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>

      {/* Large Profile Photo Viewer Modal */}
      <AnimatePresence>
        {showLargePhoto && profileImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-dark-card rounded-2xl border border-zinc-200 dark:border-dark-border shadow-xl max-w-lg w-full overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-5 border-b border-zinc-100 dark:border-dark-border flex items-center justify-between">
                <h3 className="font-display font-extrabold text-base sm:text-lg text-zinc-900 dark:text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <button
                  onClick={() => setShowLargePhoto(false)}
                  className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-dark-border transition-colors cursor-pointer"
                  aria-label="Close photo viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Large Photo */}
              <div className="w-full aspect-square bg-zinc-950 flex items-center justify-center">
                <img
                  src={profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  onError={() => setImageFailed(true)}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-zinc-100 dark:border-dark-border flex justify-end">
                <button
                  onClick={() => setShowLargePhoto(false)}
                  className="px-6 py-2.5 bg-brand-accent dark:bg-brand-accent-dark hover:bg-brand-accent-hover dark:hover:bg-white text-white dark:text-zinc-950 rounded-xl text-xs font-bold shadow transition-all hover:scale-105 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
