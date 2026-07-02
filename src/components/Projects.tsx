import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Filter, ArrowUpRight, CheckSquare, Sparkles, Image, Settings, Play, Database, FileText, Calendar, MessageSquare, Video, PhoneCall, Mail, AlertTriangle, Layers, X, Award, ShieldCheck } from 'lucide-react';
import { PROJECTS, CERTIFICATES } from '../data';
import { Project, Certificate } from '../types';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'n8n' | 'Make.com' | 'Zapier'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectImages, setProjectImages] = useState<{ [key: string]: string }>({});
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [certificateImages, setCertificateImages] = useState<{ [key: string]: string }>({});
  const [failedImages, setFailedImages] = useState<{ [key: string]: boolean }>({});

  const markImageFailed = (key: string) => {
    setFailedImages(prev => ({ ...prev, [key]: true }));
  };

  const getProjectImage = (project: Project) => {
    const previewImage = projectImages[project.id];
    if (previewImage) return previewImage;
    return failedImages[`project:${project.id}`] ? undefined : project.imageUrl;
  };

  const getCertificateImage = (certificate: Certificate) => {
    const previewImage = certificateImages[certificate.id];
    if (previewImage) return previewImage;
    return failedImages[`certificate:${certificate.id}`] ? undefined : certificate.imageUrl;
  };

  const handleCertificateImageUpload = (certId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCertificateImages(prev => ({
          ...prev,
          [certId]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertificateImageUrlPaste = (certId: string) => {
    const url = prompt("Please enter the direct URL of your certificate image:");
    if (url) {
      setCertificateImages(prev => ({
        ...prev,
        [certId]: url
      }));
    }
  };

  const getThemeClasses = (color: string) => {
    switch (color) {
      case 'amber':
        return {
          border: 'border-amber-500/30 dark:border-amber-500/20',
          text: 'text-amber-600 dark:text-amber-400',
          bg: 'bg-amber-50 dark:bg-amber-950/20',
          accent: 'bg-amber-500',
          badge: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
        };
      case 'purple':
        return {
          border: 'border-purple-500/30 dark:border-purple-500/20',
          text: 'text-purple-600 dark:text-purple-400',
          bg: 'bg-purple-50 dark:bg-purple-950/20',
          accent: 'bg-purple-500',
          badge: 'bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20'
        };
      case 'orange':
        return {
          border: 'border-orange-500/30 dark:border-orange-500/20',
          text: 'text-orange-600 dark:text-orange-400',
          bg: 'bg-orange-50 dark:bg-orange-950/20',
          accent: 'bg-orange-500',
          badge: 'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20'
        };
      case 'indigo':
      default:
        return {
          border: 'border-indigo-500/30 dark:border-indigo-500/20',
          text: 'text-indigo-600 dark:text-indigo-400',
          bg: 'bg-indigo-50 dark:bg-indigo-950/20',
          accent: 'bg-indigo-500',
          badge: 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20'
        };
    }
  };

  const filteredProjects = PROJECTS.filter(p => {
    if (activeFilter === 'All') return true;
    return p.platform === activeFilter;
  });

  const handleImageUpload = (projectId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProjectImages(prev => ({
          ...prev,
          [projectId]: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageUrlPaste = (projectId: string) => {
    const url = prompt("Please enter the direct URL of your workflow screenshot image:");
    if (url) {
      setProjectImages(prev => ({
        ...prev,
        [projectId]: url
      }));
    }
  };

  // Helper to render interactive CSS flow diagram for projects
  const renderWorkflowVisualizer = (type: string) => {
    switch (type) {
      case 'voice':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-brand-accent-dark font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-dark animate-ping" />
                Vapi Call Inbound
              </span>
              <span className="text-zinc-500 text-[9px]">Trigger</span>
            </div>
            <div className="flex items-center justify-between gap-1.5">
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700 w-1/3 text-center">
                <span className="text-zinc-400 block text-[8px]">n8n Router</span>
                <span className="text-white font-bold">Checking</span>
              </div>
              <span className="text-zinc-600 animate-pulse">→</span>
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700 w-1/3 text-center">
                <span className="text-zinc-400 block text-[8px]">GCal API</span>
                <span className="text-white font-bold">Slot Check</span>
              </div>
              <span className="text-zinc-600 animate-pulse">→</span>
              <div className="p-1.5 rounded bg-brand-accent/40 border border-brand-accent/60 w-1/3 text-center">
                <span className="text-brand-accent-dark block text-[8px]">Airtable</span>
                <span className="text-brand-accent-light font-bold">Auto Log</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Status: Checking Availability</span>
              <span className="text-brand-accent-dark">SUCCESS (200)</span>
            </div>
          </div>
        );
      case 'rag':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-indigo-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                Google Drive Hook
              </span>
              <span className="text-zinc-500 text-[9px]">Change Trigger</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700 text-center w-[28%]">
                <span className="text-zinc-400 block text-[8px]">Chunking</span>
                <span className="text-white font-bold">Text Split</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700 text-center w-[36%]">
                <span className="text-zinc-400 block text-[8px]">Vector Store</span>
                <span className="text-white font-bold">Supabase Embed</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1.5 rounded bg-brand-accent/40 border border-brand-accent/60 text-center w-[28%]">
                <span className="text-brand-accent-dark block text-[8px]">AI Query</span>
                <span className="text-brand-accent-light font-bold">Gemini RAG</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Sync Status: Vector Database Up-to-date</span>
              <span className="text-brand-accent-dark">100% OK</span>
            </div>
          </div>
        );
      case 'support':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-purple-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                Customer Message
              </span>
              <span className="text-zinc-500 text-[9px]">Webhook</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center text-[9px]">
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700">
                <span className="text-zinc-500 block text-[7px]">Standard Support</span>
                <span className="text-white font-semibold">Gemini Chatbot</span>
              </div>
              <div className="p-1.5 rounded bg-red-950/30 border border-red-900/40 text-red-300">
                <span className="text-red-400 block text-[7px]">Urgent Escalation</span>
                <span className="font-semibold">Slack/Notify</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Auto Routing Flag: Tier 1 Auto, Tier 2 Human</span>
            </div>
          </div>
        );
      case 'video':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-brand-accent-dark font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent-dark animate-pulse" />
                Daily Cron Scheduler
              </span>
              <span className="text-zinc-500 text-[9px]">Trigger</span>
            </div>
            <div className="flex items-center justify-between gap-1.5">
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700 w-1/4 text-center">
                <span className="text-[8px] text-zinc-400 block">Vertex AI</span>
                <span className="text-white font-bold">Script</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700 w-1/4 text-center">
                <span className="text-[8px] text-zinc-400 block">Asset Merge</span>
                <span className="text-white font-bold">Video</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1 rounded bg-brand-accent/40 border border-brand-accent/60 w-1/3 text-center">
                <span className="text-[8px] text-brand-accent-dark block">Facebook/YT</span>
                <span className="text-brand-accent-light font-bold">Auto Publish</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Last Run: Video compiled & uploaded</span>
            </div>
          </div>
        );
      case 'financial':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[#a855f7] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
                Asana Task Done
              </span>
              <span className="text-zinc-500 text-[9px]">Webhook</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700 text-center w-1/3">
                <span className="text-zinc-400 block text-[8px]">Xero Fetch</span>
                <span className="text-white font-bold">Invoice API</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1.5 rounded bg-brand-accent/40 border border-brand-accent/60 text-center w-1/2">
                <span className="text-brand-accent-dark block text-[8px]">Google Sheets Log</span>
                <span className="text-brand-accent-light font-bold">Audit Line Entry</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Financial reconciliation: Live</span>
            </div>
          </div>
        );
      case 'gmail':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[#a855f7] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a855f7] animate-pulse" />
                Gmail Attachment
              </span>
              <span className="text-zinc-500 text-[9px]">Trigger</span>
            </div>
            <div className="flex items-center justify-between gap-1.5">
              <div className="p-1.5 rounded bg-zinc-800 border border-zinc-700 text-center w-[40%]">
                <span className="text-zinc-400 block text-[8px]">AI Classifier</span>
                <span className="text-white font-bold">Rename File</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1.5 rounded bg-brand-accent/40 border border-brand-accent/60 text-center w-[40%]">
                <span className="text-brand-accent-dark block text-[8px]">Google Drive</span>
                <span className="text-brand-accent-light font-bold">File Organized</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Organized: YYYY_MM_Vendor_Type.pdf</span>
            </div>
          </div>
        );
      case 'lead':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[#ff4f00] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f00] animate-pulse" />
                Lead Captured
              </span>
              <span className="text-zinc-500 text-[9px]">Zap Trigger</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700">
                <span className="text-zinc-400 block text-[7px]">Enrichment</span>
                <span className="text-white font-bold text-[9px]">Data fetch</span>
              </div>
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700">
                <span className="text-zinc-400 block text-[7px]">Lead Score</span>
                <span className="text-white font-bold text-[9px]">AI Filter</span>
              </div>
              <div className="p-1 rounded bg-brand-accent/30 border border-brand-accent/50 text-brand-accent-light">
                <span className="text-brand-accent-dark block text-[7px]">Notify Rep</span>
                <span className="font-bold text-[9px]">Slack Alert</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Status: Lead classified & routing finished</span>
            </div>
          </div>
        );
      case 'crm':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[#ff4f00] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f00] animate-pulse" />
                Asana Board Move
              </span>
              <span className="text-zinc-500 text-[9px]">Hook</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700 text-center w-[45%]">
                <span className="text-zinc-400 block text-[8px]">Stage Router</span>
                <span className="text-white font-bold">1 of 5 Match</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1 rounded bg-brand-accent/40 border border-brand-accent/60 text-center w-[45%]">
                <span className="text-brand-accent-dark block text-[8px]">Custom Followup</span>
                <span className="text-brand-accent-light font-bold">Email Merge</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Status: Follow-ups automated</span>
            </div>
          </div>
        );
      case 'repurpose':
        return (
          <div className="flex flex-col h-full justify-between p-4 bg-zinc-900 text-zinc-300 font-mono text-[10px] space-y-3 rounded-xl border border-zinc-800">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="text-[#ff4f00] font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff4f00] animate-pulse" />
                Dropbox Video Dropped
              </span>
              <span className="text-zinc-500 text-[9px]">Trigger</span>
            </div>
            <div className="flex items-center justify-between gap-1">
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700 text-center w-1/3">
                <span className="text-zinc-400 block text-[8px]">Transcribe</span>
                <span className="text-white font-bold">Whisper AI</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1 rounded bg-zinc-800 border border-zinc-700 text-center w-1/3">
                <span className="text-zinc-400 block text-[8px]">LLM Write</span>
                <span className="text-white font-bold">Blog/Social</span>
              </div>
              <span className="text-zinc-600">→</span>
              <div className="p-1 rounded bg-brand-accent/40 border border-brand-accent/60 text-center w-[30%]">
                <span className="text-brand-accent-dark block text-[8px]">Buffer Queue</span>
                <span className="text-brand-accent-light font-bold">Scheduled</span>
              </div>
            </div>
            <div className="text-[9px] text-zinc-500 bg-zinc-950 p-1.5 rounded border border-zinc-800/80 flex justify-between">
              <span>Outputs: Transcription + Post drafts complete</span>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex items-center justify-center h-full bg-zinc-100 dark:bg-dark-card p-6 text-zinc-500 font-mono text-xs rounded-xl border border-dashed border-zinc-300 text-center">
            Interactive Logic Engine Active
          </div>
        );
    }
  };

  const getPlatformClass = (platform: 'n8n' | 'Make.com' | 'Zapier') => {
    switch (platform) {
      case 'n8n':
        return 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/40';
      case 'Make.com':
        return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/20 dark:text-purple-400 dark:border-purple-900/40';
      case 'Zapier':
        return 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/20 dark:text-orange-400 dark:border-orange-900/40';
    }
  };

  const getPlatformIcon = (platform: 'n8n' | 'Make.com' | 'Zapier') => {
    switch (platform) {
      case 'n8n':
        return <span className="w-2 h-2 rounded-full bg-[#ff6d5a] mr-1.5" />;
      case 'Make.com':
        return <span className="w-2 h-2 rounded-full bg-[#a855f7] mr-1.5" />;
      case 'Zapier':
        return <span className="w-2 h-2 rounded-full bg-[#ff4f00] mr-1.5" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-zinc-50 dark:bg-dark-bg/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-xs font-bold tracking-widest text-brand-accent dark:text-brand-accent-dark uppercase flex items-center justify-center gap-1.5">
            <Layers className="w-4 h-4" /> Previous Works
          </h2>
          <p className="mt-3 font-display font-extrabold text-3xl sm:text-4xl text-zinc-900 dark:text-white tracking-tight">
            Featured Workflow Automation Projects
          </p>
          <div className="mt-4 w-12 h-1 bg-brand-accent dark:bg-brand-accent-dark mx-auto rounded-full" />
          
          <div className="mt-8 p-3.5 bg-zinc-100 dark:bg-dark-card rounded-xl border border-zinc-200 dark:border-dark-border text-xs text-zinc-600 dark:text-zinc-300 text-center max-w-xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-accent dark:text-brand-accent-dark shrink-0" />
            <span>Interactive Node View enabled! You can also paste direct screenshot URLs or upload files below to customize.</span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {(['All', 'n8n', 'Make.com', 'Zapier'] as const).map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg border transition-all duration-200 flex items-center gap-1.5 cursor-pointer hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-brand-accent border-brand-accent text-white shadow-sm'
                  : 'bg-white dark:bg-dark-card border-zinc-200 dark:border-dark-border text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-500'
              }`}
            >
              {filter === 'All' && <Filter className="w-3.5 h-3.5" />}
              {filter !== 'All' && getPlatformIcon(filter as any)}
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const projectImage = getProjectImage(project);

              return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-dark-card rounded-2xl border border-zinc-200 dark:border-dark-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:scale-[1.03]"
              >
                {/* Visual Header / Mockup Visual Area */}
                <div className="h-56 bg-zinc-950 p-4 border-b border-zinc-200 dark:border-dark-border relative group/mockup flex flex-col justify-between">
                  {/* Render deployed or preview image if present */}
                  {projectImage ? (
                    <img
                      src={projectImage}
                      onError={() => markImageFailed(`project:${project.id}`)}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover z-10"
                    />
                  ) : (
                    /* Render CSS Node Flow Map by default */
                    <div className="absolute inset-0 z-0 p-4 opacity-90 group-hover:opacity-100 transition-opacity">
                      {renderWorkflowVisualizer(project.mockupType)}
                    </div>
                  )}

                  {/* Upload Controls Layer (Overlayed elegantly) */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity z-25 flex flex-col items-center justify-center p-4 space-y-3">
                    <p className="text-white font-mono text-[10px] text-center max-w-xs font-medium">
                      Preview a workflow screenshot on this device. Add permanent images in public/images/projects.
                    </p>
                    <div className="flex gap-2.5">
                      <button
                        onClick={() => handleImageUrlPaste(project.id)}
                        className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                      >
                        <Image className="w-3.5 h-3.5" /> Direct URL
                      </button>
                      <label className="px-3 py-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1">
                        <Settings className="w-3.5 h-3.5" /> Upload File
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(project.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                    {projectImages[project.id] && (
                      <button
                        onClick={() => setProjectImages(prev => {
                          const updated = { ...prev };
                          delete updated[project.id];
                          return updated;
                        })}
                        className="text-[10px] text-red-400 hover:text-red-300 underline font-mono font-bold cursor-pointer"
                      >
                        Reset Preview
                      </button>
                    )}
                  </div>

                  {/* Platform Indicator on top */}
                  <div className="z-10 self-start">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border shadow-sm ${getPlatformClass(project.platform)}`}>
                      {getPlatformIcon(project.platform)}
                      {project.platform}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white leading-snug group-hover:text-brand-accent dark:group-hover:text-brand-accent-dark transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                      {project.description}
                    </p>
                  </div>

                  {/* Quick Expand Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="mt-6 inline-flex items-center justify-center w-full py-2.5 bg-zinc-50 dark:bg-dark-bg hover:bg-zinc-100 dark:hover:bg-dark-border border border-zinc-200 dark:border-dark-border text-zinc-700 dark:text-zinc-300 rounded-xl text-xs font-bold tracking-wide transition-colors cursor-pointer hover:scale-[1.02]"
                  >
                    View Workflow Details
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 text-zinc-500" />
                  </button>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Certificates Divider & Header */}
        <div className="mt-24 pt-16 border-t border-zinc-200 dark:border-dark-border">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="font-mono text-xs font-bold tracking-widest text-brand-accent dark:text-brand-accent-dark uppercase flex items-center justify-center gap-1.5">
              <Award className="w-4 h-4" /> Credentials
            </h3>
            <p className="mt-3 font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white tracking-tight">
              Certifications
            </p>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm max-w-xl mx-auto font-sans font-light">
              Verified badges and academic completions validating mastery over industry-leading integration platforms.
            </p>
            <div className="mt-4 w-12 h-1 bg-brand-accent dark:bg-brand-accent-dark mx-auto rounded-full" />
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CERTIFICATES.map((cert) => {
              const theme = getThemeClasses(cert.themeColor);
              const certificateImage = getCertificateImage(cert);
              return (
                <div
                  key={cert.id}
                  className="bg-white dark:bg-dark-card rounded-2xl border border-zinc-200 dark:border-dark-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group/cert hover:scale-[1.03] relative"
                >
                  {/* Certificate Mockup Visual Area */}
                  <div className="h-52 bg-zinc-950 border-b border-zinc-200 dark:border-dark-border relative group/mockup flex flex-col justify-between overflow-hidden">
                    {/* Render deployed or preview certificate image if present */}
                    {certificateImage ? (
                      <img
                        src={certificateImage}
                        onError={() => markImageFailed(`certificate:${cert.id}`)}
                        alt={cert.title}
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover z-10"
                      />
                    ) : (
                      /* Render elegant SVG/CSS vector certificate badge directly inside the grid slot */
                      <div className="absolute inset-0 z-0 p-5 bg-gradient-to-br from-zinc-900 to-zinc-950 text-zinc-100 flex flex-col justify-between text-center relative font-serif border-4 border-double border-zinc-800">
                        <div className="absolute top-1 left-1 right-1 bottom-1 border border-zinc-800/60 pointer-events-none" />
                        
                        {/* Logo Header */}
                        <div className="flex flex-col items-center mt-1">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${theme.bg} ${theme.text} mb-0.5 shadow-sm`}>
                            <Award className="w-4 h-4" />
                          </div>
                          <span className="text-[7px] uppercase tracking-[0.25em] font-mono text-zinc-500">Certificate of Completion</span>
                        </div>

                        {/* Recipient */}
                        <div className="my-1.5">
                          <p className="text-[8px] font-sans italic text-zinc-500">Presented to</p>
                          <h4 className="text-sm font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-400 mt-0.5">
                            John Daniel N. Nate
                          </h4>
                          <div className="w-12 h-0.5 bg-zinc-800 mx-auto mt-1" />
                        </div>

                        {/* Title */}
                        <div className="px-2">
                          <p className="text-[7px] text-zinc-500 font-sans font-light">for successfully completing</p>
                          <h5 className="text-[10px] font-bold font-sans tracking-wide text-white leading-tight mt-0.5 line-clamp-2">
                            {cert.title}
                          </h5>
                        </div>

                        {/* Footer info */}
                        <div className="flex justify-between items-end border-t border-zinc-900/80 pt-2 text-[7px] font-sans text-left mt-2 text-zinc-500">
                          <div>
                            <span className="block font-semibold text-zinc-400">{cert.issuer}</span>
                            <span>Class of {cert.date}</span>
                          </div>
                          <div className="text-right">
                            <span className="block font-mono text-zinc-600">{cert.credentialId}</span>
                            <span className="text-emerald-500/80 font-semibold font-mono">● Active</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Elegant Upload Overlays (matching workflows style exactly) */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-200 z-20 flex flex-col items-center justify-center p-4 space-y-2.5">
                      <p className="text-white font-mono text-[9px] text-center max-w-xs font-medium">
                        Preview a certificate image on this device. Add permanent images in public/images/certificates.
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleCertificateImageUrlPaste(cert.id)}
                          className="px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg text-[10px] font-bold transition-all flex items-center gap-1 cursor-pointer"
                        >
                          <Image className="w-3 h-3" /> Direct URL
                        </button>
                        <label className="px-2.5 py-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg text-[10px] font-bold transition-all cursor-pointer flex items-center gap-1">
                          <Settings className="w-3 h-3" /> Upload File
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleCertificateImageUpload(cert.id, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                      {certificateImages[cert.id] && (
                        <button
                          onClick={() => setCertificateImages(prev => {
                            const updated = { ...prev };
                            delete updated[cert.id];
                            return updated;
                          })}
                          className="text-[9px] text-red-400 hover:text-red-300 underline font-mono font-bold cursor-pointer"
                        >
                          Reset Preview
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Card Info Details Area */}
                  <div className="p-4 bg-white dark:bg-dark-card">
                    {/* Dynamic View Button */}
                    <button
                      onClick={() => setSelectedCertificate(cert)}
                      className="w-full py-2.5 bg-zinc-50 dark:bg-dark-bg/60 hover:bg-zinc-100 dark:hover:bg-dark-border border border-zinc-200 dark:border-dark-border text-zinc-700 dark:text-zinc-300 rounded-lg text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.01]"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-zinc-500" />
                      View Large Certificate
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Details Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-dark-card rounded-2xl border border-zinc-200 dark:border-dark-border shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="p-6 sm:p-8 border-b border-zinc-100 dark:border-dark-border flex items-center justify-between">
                <div>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${getPlatformClass(selectedProject.platform)}`}>
                    {getPlatformIcon(selectedProject.platform)}
                    {selectedProject.platform}
                  </span>
                  <h3 className="mt-2 font-display font-extrabold text-xl sm:text-2xl text-zinc-900 dark:text-white leading-tight">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-dark-border transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-2">High-level Description</h4>
                  <p className="text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed font-sans font-light">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">Core Workflow Logic & Integrations</h4>
                  <ul className="space-y-4">
                    {selectedProject.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start bg-zinc-50 dark:bg-dark-bg rounded-xl p-4 border border-zinc-200/60 dark:border-dark-border">
                        <CheckSquare className="w-5 h-5 text-brand-accent dark:text-brand-accent-dark mr-3 shrink-0 mt-0.5" />
                        <span className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-sans leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 sm:p-8 border-t border-zinc-100 dark:border-dark-border flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-brand-accent dark:bg-brand-accent-dark hover:bg-brand-accent-hover dark:hover:bg-white text-white dark:text-zinc-950 rounded-xl text-xs font-bold shadow transition-all hover:scale-105 cursor-pointer"
                >
                  Close Blueprint
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-dark-card rounded-2xl border border-zinc-200 dark:border-dark-border shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-zinc-100 dark:border-dark-border flex items-center justify-between">
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-zinc-900 dark:text-white leading-tight">
                    Credential Verification
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono mt-0.5">
                    {selectedCertificate.issuer}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 rounded-lg hover:bg-zinc-100 dark:hover:bg-dark-border transition-colors cursor-pointer"
                  aria-label="Close certificate"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Beautiful certificate display */}
              <div className="p-6 sm:p-8 space-y-6 flex flex-col items-center">
                {getCertificateImage(selectedCertificate) ? (
                  /* Deployed or preview certificate image */
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 dark:border-dark-border relative shadow bg-zinc-900 flex items-center justify-center">
                    <img
                      src={getCertificateImage(selectedCertificate)}
                      onError={() => markImageFailed(`certificate:${selectedCertificate.id}`)}
                      alt={selectedCertificate.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  /* High fidelity vector fallback mockup */
                  <div className="w-full aspect-[1.414/1] bg-gradient-to-br from-zinc-900 to-zinc-950 text-zinc-100 border-8 border-double border-amber-500/30 dark:border-amber-500/20 rounded-xl p-6 sm:p-8 relative flex flex-col justify-between overflow-hidden shadow-inner text-center font-serif">
                    {/* Corner Borders */}
                    <div className="absolute top-2 left-2 right-2 bottom-2 border border-zinc-800 pointer-events-none" />
                    
                    {/* Header Seal */}
                    <div className="flex flex-col items-center mt-2 relative z-10">
                      <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center bg-zinc-950/60 mb-1 shadow-inner">
                        <Award className="w-5 h-5 text-amber-500" />
                      </div>
                      <span className="text-[9px] uppercase tracking-[0.2em] font-mono text-zinc-400">Certificate of Completion</span>
                    </div>

                    {/* Recipient */}
                    <div className="my-3 sm:my-4 relative z-10">
                      <p className="text-[10px] sm:text-xs font-sans italic text-zinc-400">This is proudly presented to</p>
                      <h4 className="text-lg sm:text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-zinc-200 to-amber-500 tracking-wide mt-1">
                        John Daniel N. Nate
                      </h4>
                      <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent mx-auto mt-2" />
                    </div>

                    {/* Achievement details */}
                    <div className="px-4 relative z-10">
                      <p className="text-[10px] sm:text-xs text-zinc-300 max-w-md mx-auto leading-relaxed font-sans font-light">
                        for successfully mastering the advanced curricula, workflow principles, and deployment methodologies of
                      </p>
                      <h5 className="text-sm sm:text-lg font-bold font-sans tracking-wide text-white mt-1.5">
                        {selectedCertificate.title}
                      </h5>
                    </div>

                    {/* Footer / Signatures */}
                    <div className="grid grid-cols-2 gap-4 text-left border-t border-zinc-800/80 pt-4 mt-4 font-sans relative z-10">
                      <div>
                        <span className="text-[8px] uppercase font-mono tracking-widest text-zinc-500 block">AUTHORIZED ISSUER</span>
                        <span className="text-[10px] sm:text-xs font-semibold text-zinc-300 font-display block mt-1">{selectedCertificate.issuer}</span>
                        <span className="text-[8px] font-mono text-zinc-500 block">Class of {selectedCertificate.date}</span>
                      </div>
                      <div className="text-right flex flex-col justify-end">
                        <span className="text-[8px] uppercase font-mono tracking-widest text-zinc-500 block">VERIFIED CREDENTIAL</span>
                        <span className="text-[9px] font-mono text-zinc-400 block mt-1">{selectedCertificate.credentialId || 'VERIFIED-ONLINE'}</span>
                        <span className="text-[8px] font-mono text-emerald-400 block">● Active Status</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Direct action to change image */}
                <div className="w-full flex flex-col items-center gap-2 text-center p-3.5 bg-zinc-50 dark:bg-dark-bg rounded-xl border border-zinc-200 dark:border-dark-border">
                  <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">Preview a certificate image here, or add it permanently in public/images/certificates.</span>
                  <div className="flex gap-2.5 mt-1">
                    <button
                      onClick={() => handleCertificateImageUrlPaste(selectedCertificate.id)}
                      className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <Image className="w-3.5 h-3.5" /> Direct URL
                    </button>
                    <label className="px-3 py-1.5 bg-brand-accent hover:bg-brand-accent-hover text-white rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1">
                      <Settings className="w-3.5 h-3.5" /> Upload File
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleCertificateImageUpload(selectedCertificate.id, e)}
                        className="hidden"
                      />
                    </label>
                  </div>
                  {certificateImages[selectedCertificate.id] && (
                    <button
                      onClick={() => setCertificateImages(prev => {
                        const updated = { ...prev };
                        delete updated[selectedCertificate.id];
                        return updated;
                      })}
                      className="text-[10px] text-red-500 hover:text-red-400 underline font-mono font-bold mt-1.5 cursor-pointer"
                    >
                      Reset Preview
                    </button>
                  )}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-zinc-100 dark:border-dark-border flex justify-end">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-6 py-2.5 bg-brand-accent dark:bg-brand-accent-dark hover:bg-brand-accent-hover dark:hover:bg-white text-white dark:text-zinc-950 rounded-xl text-xs font-bold shadow transition-all hover:scale-105 cursor-pointer"
                >
                  Close Certificate Viewer
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
