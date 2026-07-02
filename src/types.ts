export interface Skill {
  name: string;
  category: 'core' | 'tools' | 'concepts';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration?: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  title: string;
  platform: 'n8n' | 'Make.com' | 'Zapier';
  description: string;
  details: string[];
  mockupType: 'voice' | 'rag' | 'support' | 'video' | 'financial' | 'gmail' | 'lead' | 'crm' | 'repurpose';
  imageUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skills: string[];
  themeColor: string; // Tailwind class prefix, e.g., 'amber' or 'purple' or 'orange'
  imageUrl?: string;
}

