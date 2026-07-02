import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Bot, Target, Share2, Activity, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: { [key: string]: React.ReactNode } = {
  'ai-workflow': <Cpu className="w-6 h-6" />,
  'ai-agents': <Bot className="w-6 h-6" />,
  'crm-lead': <Target className="w-6 h-6" />,
  'content-repurpose': <Share2 className="w-6 h-6" />,
  'workflow-audit': <Activity className="w-6 h-6" />,
};

export default function Services() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 bg-zinc-50 dark:bg-dark-bg/40 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-mono text-xs font-bold tracking-widest text-brand-accent dark:text-brand-accent-dark uppercase flex items-center justify-center gap-1.5">
            <Cpu className="w-4 h-4" /> Professional Services
          </h2>
          <p className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            How I Save You Hours & Scale Operations
          </p>
          <div className="mt-4 w-12 h-1 bg-brand-accent dark:bg-brand-accent-dark mx-auto rounded-full" />
        </div>

        {/* Services Grid (Sleek bento layout or uniform premium cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-white dark:bg-dark-card rounded-2xl border border-zinc-200/80 dark:border-dark-border p-6 sm:p-8 hover:border-brand-accent dark:hover:border-brand-accent-dark shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer hover:scale-105 ${
                idx === 0 || idx === 1 ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Decorative hover gradient corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-brand-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white flex items-center justify-center mb-6 group-hover:bg-brand-accent dark:group-hover:bg-brand-accent-dark group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {iconMap[service.id] || <Cpu className="w-6 h-6" />}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white group-hover:text-brand-accent dark:group-hover:text-brand-accent-dark transition-colors">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-sans">
                  {service.description}
                </p>

                {/* Service Bullet Details */}
                <ul className="mt-5 space-y-2.5 pt-5 border-t border-zinc-100 dark:border-dark-border">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-xs text-zinc-600 dark:text-zinc-300 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-accent dark:text-brand-accent-dark mr-2 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical / Workflow Mockup Visualization Block (Aesthetic touch matching laptop mockups from reference image) */}
              <div className="mt-5 p-3 rounded-xl bg-zinc-50 dark:bg-dark-bg/60 border border-zinc-100 dark:border-dark-border/60 font-mono text-[10px] text-zinc-400 dark:text-zinc-500 space-y-1 relative group-hover:border-brand-accent/30 dark:group-hover:border-brand-accent-dark/30 transition-all">
                <div className="flex items-center justify-between border-b border-zinc-100 dark:border-dark-border/40 pb-1 mb-1 text-[9px] uppercase tracking-wider text-zinc-500">
                  <span>Pipeline Monitor</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping inline-block" />
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 pt-1">
                  <span className="truncate">GET /api/v1/trigger/{service.id}</span>
                  <span className="text-brand-accent dark:text-brand-accent-dark font-semibold">200 OK</span>
                </div>
              </div>

              {/* Action Trigger - Circular Coral Button exactly matching the visual style in the reference image */}
              <div className="mt-5 pt-3 flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                  Inquire details
                </span>
                
                <div className="w-10 h-10 rounded-full bg-brand-accent hover:bg-brand-accent-hover text-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:rotate-45">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Special Custom "Ready to Automate" interactive card in the grid to balance layout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-zinc-900 dark:bg-dark-card/90 text-white rounded-2xl border border-zinc-800 dark:border-dark-border p-6 sm:p-8 flex flex-col justify-between lg:col-span-1 relative overflow-hidden shadow-lg group hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-brand-accent/25 rounded-full blur-2xl" />
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-indigo-500/15 rounded-full blur-2xl" />

            <div>
              <span className="font-mono text-[10px] tracking-widest uppercase text-zinc-400 dark:text-zinc-500">CUSTOM SOLUTION</span>
              <h3 className="mt-4 font-display font-extrabold text-2xl tracking-tight leading-snug">
                Have a unique flow or proprietary software?
              </h3>
              <p className="mt-4 text-zinc-400 text-sm leading-relaxed font-light">
                I can wire custom API gateways, handle proprietary databases, write webhook integrations, or build full bespoke n8n dashboards for your specific operations.
              </p>
            </div>

            <button
              onClick={handleScrollToContact}
              className="mt-8 w-full inline-flex items-center justify-center px-4 py-3 bg-white dark:bg-zinc-100 hover:bg-zinc-100 dark:hover:bg-white text-zinc-900 font-bold text-sm rounded-xl transition-all shadow-md hover:scale-105 cursor-pointer"
            >
              Request Custom Automation
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
