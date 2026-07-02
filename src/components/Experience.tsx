import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckSquare, Clock } from 'lucide-react';
import { EXPERIENCE } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Visual background decorations */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-zinc-50 dark:bg-dark-card/20 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-bold tracking-widest text-brand-accent dark:text-brand-accent-dark uppercase flex items-center justify-center gap-1.5">
            <Briefcase className="w-4 h-4" /> Career Journey
          </h2>
          <p className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Work Experience & Background
          </p>
          <div className="mt-4 w-12 h-1 bg-brand-accent dark:bg-brand-accent-dark mx-auto rounded-full" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical center line (hidden on mobile, left-aligned) */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-zinc-200 dark:bg-dark-border -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {EXPERIENCE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon (Anchor circle) */}
                  <div className="absolute left-4 md:left-1/2 top-2 w-8 h-8 rounded-full bg-zinc-900 dark:bg-dark-card border-4 border-white dark:border-dark-bg text-white flex items-center justify-center -translate-x-1/2 z-20 shadow-md">
                    <Briefcase className="w-3 h-3 text-brand-accent dark:text-brand-accent-dark" />
                  </div>

                  {/* Date Badge (Displays opposite to content card on desktop) */}
                  <div className="pl-12 md:pl-0 md:w-1/2 flex items-center md:justify-end md:px-8 mb-2 md:mb-0">
                    <div className={`flex items-center space-x-2 text-sm font-semibold text-zinc-500 dark:text-zinc-400 font-mono ${
                       isEven ? 'md:justify-start w-full md:pl-8' : 'md:justify-end w-full md:pr-8'
                    }`}>
                      <Calendar className="w-4 h-4 text-zinc-400" />
                      <span>{item.period}</span>
                      {item.duration && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-zinc-100 dark:bg-dark-card text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-dark-border">
                          <Clock className="w-2.5 h-2.5 mr-1" /> {item.duration}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Timeline Content Card */}
                  <div className="pl-12 md:pl-0 md:w-1/2 md:px-8">
                    <div className="bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200/80 dark:border-dark-border p-6 sm:p-8 hover:border-brand-accent dark:hover:border-brand-accent-dark transition-all shadow-sm hover:shadow-md relative group hover:scale-[1.03] duration-300">
                      {/* Accent color tab */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-zinc-900 dark:bg-dark-border group-hover:bg-brand-accent group-hover:dark:bg-brand-accent-dark transition-colors" />

                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white">
                        {item.role}
                      </h3>
                      
                      <div className="mt-2 flex items-center space-x-2 text-sm font-semibold text-brand-accent dark:text-brand-accent-dark">
                        <span>{item.company}</span>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="mt-4 space-y-3">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                            <CheckSquare className="w-4 h-4 text-brand-accent dark:text-brand-accent-dark mr-2.5 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Dynamic callout for additional consulting capabilities */}
        <div className="mt-20 max-w-2xl mx-auto p-6 bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200/60 dark:border-dark-border text-center hover:scale-105 transition-transform duration-300">
          <p className="text-zinc-600 dark:text-zinc-300 text-sm font-sans leading-relaxed">
            🎓 Backed by a strong administrative foundation, rigorous operational experience, and hundreds of hours of hands-on OJT executing SOPs, client calls, and database logs with absolute accuracy.
          </p>
        </div>
      </div>
    </section>
  );
}
