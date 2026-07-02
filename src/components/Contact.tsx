import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'An email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please write a brief description of your automation needs.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xeebzney', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or email jd.nate1@gmail.com directly.');
      }
    } catch {
      alert('Network error. Please try again or email jd.nate1@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-dark-bg border-t border-zinc-200/50 dark:border-dark-border relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-zinc-50 dark:bg-dark-card/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold tracking-widest text-brand-accent dark:text-brand-accent-dark uppercase flex items-center justify-center gap-1.5">
            <Send className="w-4 h-4" /> Let's Connect
          </h2>
          <p className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Initiate Your Automation Journey
          </p>
          <div className="mt-4 w-12 h-1 bg-brand-accent dark:bg-brand-accent-dark mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="prose prose-zinc max-w-none text-zinc-600 dark:text-zinc-300 font-sans font-light leading-relaxed">
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white mb-4">
                Have repetitive work holding you back?
              </h3>
              <p>
                Drop a message describing your manual process, spreadsheet setup, or app mismatch. I specialize in mapping these pathways out and building scripts that execute perfectly in the background.
              </p>
            </div>

            <div className="space-y-4">
              
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-dark-card hover:bg-zinc-100 dark:hover:bg-dark-border border border-zinc-200/80 dark:border-dark-border hover:border-brand-accent dark:hover:border-brand-accent-dark transition-all group hover:scale-[1.02] duration-300"
              >
                <div className="p-3 rounded bg-zinc-900 dark:bg-dark-bg text-white group-hover:bg-brand-accent dark:group-hover:bg-brand-accent-dark transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">EMAIL DIRECT</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-sans break-all">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-dark-card hover:bg-zinc-100 dark:hover:bg-dark-border border border-zinc-200/80 dark:border-dark-border hover:border-brand-accent dark:hover:border-brand-accent-dark transition-all group hover:scale-[1.02] duration-300"
              >
                <div className="p-3 rounded bg-zinc-900 dark:bg-dark-bg text-white group-hover:bg-brand-accent dark:group-hover:bg-brand-accent-dark transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">WhatsApp / Viber</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-sans">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-dark-card border border-zinc-200/80 dark:border-dark-border">
                <div className="p-3 rounded bg-zinc-900 dark:bg-dark-bg text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">LOCATION</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-sans">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-50 dark:bg-dark-card hover:bg-zinc-100 dark:hover:bg-dark-border border border-zinc-200/80 dark:border-dark-border hover:border-brand-accent dark:hover:border-brand-accent-dark transition-all group hover:scale-[1.02] duration-300"
              >
                <div className="p-3 rounded bg-zinc-900 dark:bg-dark-bg text-white group-hover:bg-brand-accent dark:group-hover:bg-brand-accent-dark transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">LINKEDIN PROFILE</h4>
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 font-sans">Connect with me</p>
                </div>
              </a>

            </div>
          </div>

          <div className="lg:col-span-7 bg-zinc-50 dark:bg-dark-card rounded-2xl border border-zinc-200 dark:border-dark-border p-6 sm:p-8 shadow-sm relative overflow-hidden transition-colors duration-300">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">
                    Send a Message
                  </h3>

                  <div>
                    <label htmlFor="name" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-bg text-zinc-900 dark:text-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent/15 focus:border-brand-accent transition-all ${
                        errors.name ? 'border-red-400 focus:ring-red-500/10 focus:border-red-500' : 'border-zinc-300 dark:border-dark-border'
                      }`}
                      placeholder="e.g. John Doe"
                    />
                    {errors.name && (
                      <span className="flex items-center gap-1.5 text-xs text-red-500 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-bg text-zinc-900 dark:text-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent/15 focus:border-brand-accent transition-all ${
                        errors.email ? 'border-red-400 focus:ring-red-500/10 focus:border-red-500' : 'border-zinc-300 dark:border-dark-border'
                      }`}
                      placeholder="e.g. jdoe@company.com"
                    />
                    {errors.email && (
                      <span className="flex items-center gap-1.5 text-xs text-red-500 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1.5">
                      Project Details / Manual Steps To Automate
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-dark-bg text-zinc-900 dark:text-white text-sm font-sans focus:outline-none focus:ring-2 focus:ring-brand-accent/15 focus:border-brand-accent transition-all resize-y ${
                        errors.message ? 'border-red-400 focus:ring-red-500/10 focus:border-red-500' : 'border-zinc-300 dark:border-dark-border'
                      }`}
                      placeholder="e.g. We have a daily lead intake sheet where someone manually qualifies leads and copies columns to our CRM. We would love to trigger a n8n workflow instead..."
                    />
                    {errors.message && (
                      <span className="flex items-center gap-1.5 text-xs text-red-500 mt-1.5 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-brand-accent dark:bg-brand-accent-dark hover:bg-brand-accent-hover dark:hover:bg-white text-white dark:text-zinc-950 font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-1.5">
                        Submit Blueprint Inquiry
                        <ArrowRight className="w-4 h-4 text-brand-accent-light dark:text-zinc-950" />
                      </span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-zinc-900 dark:text-white">
                      Inquiry Logged Successfully!
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-md mx-auto leading-relaxed">
                      Thank you for your request. Your automation requirements have been processed. John Daniel Nate will review the specs and reach back within 24 business hours.
                    </p>
                  </div>

                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-brand-accent dark:bg-brand-accent-dark hover:bg-brand-accent-hover dark:hover:bg-white text-white dark:text-zinc-950 text-xs font-bold rounded-xl transition-all cursor-pointer hover:scale-105"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
}
