import { Skill, Service, ExperienceItem, Project, Certificate } from './types';

export const PERSONAL_INFO = {
  name: 'John Daniel N. Nate',
  firstName: 'John Daniel',
  lastName: 'Nate',
  initials: 'JDN',
  title: 'AI Automation Specialist',
  tagline: 'I build workflows that take repetitive work off your plate — not just connect apps together.',
  email: 'jd.nate1@gmail.com',
  phone: '+63 929 522 4049',
  location: 'San Pedro City, Laguna, Philippines',
  linkedin: 'https://linkedin.com/in/john-daniel-nate-596082321',
  aboutText: "I don't just connect apps—I architect reliable, autonomous systems that eliminate repetitive, error-prone manual tasks. As an AI Automation Specialist trained across n8n, Make.com, and Zapier, I build production-ready workflows with hands-on expertise in APIs, secure webhooks, and advanced LLM integrations. By utilizing precision-grade prompt engineering, I deliver systems that run quietly and flawlessly in the background. Backed by solid administrative and logistics operations experience, I convert complex SOPs into predictable, self-healing automations that scale your business while keeping execution costs to an absolute minimum.",
  profileImage: '/images/profile/profile.jpg'
};

export const SKILLS: Skill[] = [
  { name: 'n8n Workflow Automation', category: 'tools' },
  { name: 'Make.com Scenario Building', category: 'tools' },
  { name: 'Zapier Automation', category: 'tools' },
  { name: 'AI Agents & AI Workflows', category: 'core' },
  { name: 'MCP (Model Context Protocol)', category: 'core' },
  { name: 'API Integrations & Webhooks', category: 'core' },
  { name: 'HTTP Requests', category: 'core' },
  { name: 'Data Filtering/Branching/Looping', category: 'core' },
  { name: 'Claude Prompt Engineering', category: 'concepts' },
  { name: 'ChatGPT Prompt Optimization & Agentic Cues', category: 'concepts' },
  { name: 'Process Bottleneck & Cost Audits', category: 'concepts' },
  { name: 'SOP Translation & Flow Mapping', category: 'concepts' },
  { name: 'Cross-Platform Workflow Design', category: 'core' }
];

export const SERVICES: Service[] = [
  {
    id: 'ai-workflow',
    title: 'AI Workflow Automation Setup',
    description: 'n8n, Make.com, and Zapier builds tailored perfectly to your business\'s existing tools.',
    details: [
      'Multi-step integrations with advanced error handling',
      'Custom webhook triggers & HTTP request wiring',
      'Complex data mapping, parsing, and formatting',
      'Quiet background sync that saves 10-20+ hours weekly'
    ]
  },
  {
    id: 'ai-agents',
    title: 'AI Agent & Chatbot Development',
    description: 'Intelligent support agents and internal knowledge-base assistants with persistent memory.',
    details: [
      'Customer support chatbots with auto-escalation routing',
      'Knowledge-base bots synced directly to Google Drive/Notion',
      'Context-aware agents trained on custom company SOPs',
      'Integration with voice assistants and communication channels'
    ]
  },
  {
    id: 'crm-lead',
    title: 'CRM & Lead Automation',
    description: 'Fully automated pipelines for lead capture, enrichment, scoring, and smart routing.',
    details: [
      'Auto-capture from webforms, ads, or inbound emails',
      'Instant enrichment using clear AI-based scoring metrics',
      'Dynamic distribution to sales reps based on tier or region',
      'Personalized follow-up sequences across SMS, email, & WhatsApp'
    ]
  },
  {
    id: 'content-repurpose',
    title: 'Content Repurposing & Distribution',
    description: 'One single file input transformed automatically into high-quality multi-platform output.',
    details: [
      'Automatic transcription of audio or video files',
      'AI-powered extraction of key takeaways, quotes, and highlights',
      'Auto-generation of blog posts, newsletters, and social snippets',
      'Scheduled distribution and auto-publishing to major platforms'
    ]
  },
  {
    id: 'workflow-audit',
    title: 'Workflow Audit & Optimization',
    description: 'Detailed review of your existing automations to spot errors, improve efficiency, and cut API costs.',
    details: [
      'In-depth review of existing n8n/Make/Zapier setups',
      'Identifying redundant tasks to reduce execution costs',
      'Optimizing branching, error logs, and speed',
      'Documenting and delivering clean automation blueprints/SOPs'
    ]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'exp1',
    role: 'Operations & Marketing Intern (OJT – 600 Hours)',
    company: 'T.R.I.P.S. Inc.',
    period: '2025',
    duration: '600 Hours',
    responsibilities: [
      'Managed 50+ daily client and internal emails with speed and precision, organizing schedules and follow-up chains.',
      'Handled 10+ professional client calls per day, ensuring timely communication and pristine records.',
      'Supported marketing coordination, content planning across digital platforms, and client relationship management to improve total workflow efficiency.'
    ]
  },
  {
    id: 'exp2',
    role: 'Operations Assistant',
    company: 'Amaflores Logistics Services',
    period: '2022',
    responsibilities: [
      'Coordinated complex logistics operations, scheduling drivers, and tracking documentation processes to ensure smooth everyday execution.',
      'Maintained organized databases, updated cargo manifests, and supported administrative workflow processes.',
      'Substantially reduced task turnaround times by proactively resolving shipping, database, and dispatch discrepancies.'
    ]
  },
  {
    id: 'exp3',
    role: 'Manager / All-Around Staff',
    company: 'Chicken Point',
    period: '2021–2022',
    responsibilities: [
      'Handled all daily business operations, including customer support, kitchen prep, order management, and financial reporting.',
      'Managed live inventory records, ordered materials, and supervised supplier deliveries with detailed precision.',
      'Led the training, scheduling, and active supervision of staff, boosting general team coordination and service standard ratings.'
    ]
  }
];

// Permanent project screenshots live in public/images/projects.
export const PROJECTS: Project[] = [
  {
    id: 'proj1',
    title: 'Atlas — AI Voice Receptionist',
    imageUrl: '/images/projects/Atlas -- AI Voice Receptionist.png',
    platform: 'n8n',
    description: 'Full voice-AI booking system (n8n + Vapi + Google Calendar + Airtable) with auto-check and logging.',
    mockupType: 'voice',
    details: [
      'Integrated Vapi voice engine with n8n webhooks for real-time customer calling interaction.',
      'Automated check for Google Calendar slot availability, dynamic booking, editing, and cancellation.',
      'Logged full call transcripts, AI call-outcome summaries, and caller details into Airtable instantly.'
    ]
  },
  {
    id: 'proj2',
    title: 'Automated Knowledge Base RAG Workflow',
    imageUrl: '/images/projects/Automated Knowledge Base RAG.png',
    platform: 'n8n',
    description: 'Self-updating RAG system (n8n + Supabase + Gemini) syncing vectors with Google Drive files.',
    mockupType: 'rag',
    details: [
      'Configured Google Drive trigger to detect any modified, added, or deleted files automatically.',
      'Wired text-extraction, chunking, and metadata processing workflows to optimize retrieval.',
      'Generated and saved semantic vector embeddings into Supabase Vector Store, queried by Gemini.'
    ]
  },
  {
    id: 'proj3',
    title: 'AI Customer Support Agent — KB & Routing',
    imageUrl: '/images/projects/AI Customer Support.png',
    platform: 'n8n',
    description: 'Webhook-triggered support agent with persistent memory and smart auto-escalation logic.',
    mockupType: 'support',
    details: [
      'Built a webhook-driven chat agent with session memory to ensure high-fidelity customer context.',
      'Wired an index lookup tool to let the agent answer complex client inquiries using custom business documents.',
      'Designed fallback escalation logic that automatically notifies human support via Slack or Email on urgent queries.'
    ]
  },
  {
    id: 'proj4',
    title: 'ASMR Video Generation & Publishing',
    imageUrl: '/images/projects/ASMR Video Generation.png',
    platform: 'n8n',
    description: 'End-to-end AI video pipeline (n8n + Google Vertex AI) auto-publishing to Facebook & YouTube.',
    mockupType: 'video',
    details: [
      'Designed scheduler triggers to prompt Vertex AI for trending video concepts and scripting.',
      'Wired automated asset merging, audio synching, and thumbnail creation logic in the background.',
      'Configured API integration to auto-upload and schedule posts on Facebook and YouTube.'
    ]
  },
  {
    id: 'proj5',
    title: 'Asana–Xero Financial Reporting Automation',
    imageUrl: '/images/projects/Asana-Xero.png',
    platform: 'Make.com',
    description: 'Syncs completed Asana tasks with Xero data and auto-logs reports to Google Sheets.',
    mockupType: 'financial',
    details: [
      'Designed Make.com scenario triggered by Asana task completion markers.',
      'Fetched financial invoice metrics and status logs from Xero via API.',
      'Aggregated data points and logged pristine audit trials automatically to Google Sheets.'
    ]
  },
  {
    id: 'proj6',
    title: 'Smart Gmail Attachment Processor',
    imageUrl: '/images/projects/Smart Gmail.png',
    platform: 'Make.com',
    description: 'AI-renames and organizes Gmail attachments into Google Drive folders automatically.',
    mockupType: 'gmail',
    details: [
      'Monitors incoming Gmail threads for targeted attachment types (Invoices, Receipts, NDAs).',
      'Runs file content analysis via light AI vision/text API to classify the document type.',
      'Renames files professionally (e.g., YYYY_MM_Vendor_Type.pdf) and deposits them in the correct Drive folder.'
    ]
  },
  {
    id: 'proj7',
    title: 'AI-Powered Lead Qualification & Outreach',
    imageUrl: '/images/projects/AI-Powered Lead Qualification & Outreach System.png',
    platform: 'Zapier',
    description: 'Captures, enriches, scores, and routes leads with custom AI-drafted outreach drafts.',
    mockupType: 'lead',
    details: [
      'Captures inbound leads from Facebook Leads or webforms instantly.',
      'Enriches lead contact details using external public data integrations.',
      'Scores leads using an AI classifier, alerts sales reps via Slack, and drafts custom emails in Gmail drafts.'
    ]
  },
  {
    id: 'proj8',
    title: 'Asana CRM Lead Engagement Automation',
    imageUrl: '/images/projects/Asana CRM Lead Engagement Automation Workflow.png',
    platform: 'Zapier',
    description: '5-stage CRM pipeline automating follow-ups and personalized emails by deal stage.',
    mockupType: 'crm',
    details: [
      'Synchronizes lead card movements on Asana boards with real-time Zapier hooks.',
      'Launches stage-specific email cadences (Discovery, Proposal, Contract, Onboarding) automatically.',
      'Tracks email opens/responses to update lead temperature scores and trigger internal sales reminders.'
    ]
  },
  {
    id: 'proj9',
    title: 'AI Content Repurposing & Distribution',
    imageUrl: '/images/projects/AI Content Repurposing & Distribution Automation.png',
    platform: 'Zapier',
    description: 'Turns one file into transcriptions, blog posts, and multi-platform social posts.',
    mockupType: 'repurpose',
    details: [
      'Triggers when a new audio/video file is dropped into a dedicated Dropbox/Drive folder.',
      'Transcribes raw audio and prompts AI to draft a detailed blog post and newsletter.',
      'Generates 5 distinct social media text variations and queues them in Buffer/Hootsuite automatically.'
    ]
  }
];

// Permanent certificate images live in public/images/certificates.
export const CERTIFICATES: Certificate[] = [
  {
    id: 'cert1',
    title: 'n8n Advanced Workflow Automation',
    imageUrl: '/images/certificates/Certificate of Completion on n8n instance.png',
    issuer: 'n8n Academy',
    date: '2025',
    credentialId: 'N8N-ADV-29841',
    skills: ['Advanced Loops & Branching', 'Custom Webhooks', 'Self-Healing Workflows', 'Error Routing'],
    themeColor: 'amber'
  },
  {
    id: 'cert2',
    title: 'Make.com Custom Integration Specialist',
    imageUrl: '/images/certificates/Certificate of Completion with Make.com.png',
    issuer: 'Make Academy (Level 3)',
    date: '2025',
    credentialId: 'MAKE-L3-99482',
    skills: ['Custom App Construction', 'Complex Data Mapping', 'Rate Limit Handling', 'JSON/XML Parsing'],
    themeColor: 'purple'
  },
  {
    id: 'cert3',
    title: 'Zapier Automation Expert',
    imageUrl: '/images/certificates/Certificate of Completion with Zapier.png',
    issuer: 'Zapier University',
    date: '2024',
    credentialId: 'ZAP-EXP-77319',
    skills: ['Webhooks by Zapier', 'Formatter Utilities', 'Sub-Zaps Multi-Step', 'Lead Enrichment'],
    themeColor: 'orange'
  }
];

