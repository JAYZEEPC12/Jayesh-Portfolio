export interface Experience {
  role: string;
  company: string;
  duration: string;
  location?: string;
  description: string[];
  skills?: string[];
  impactMetric?: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  field?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  category?: string;
  badge?: string;
}

export interface Project {
  title: string;
  category: 'Growth & Retention' | 'Metrics & OKRs' | 'Market Expansion' | 'Product Strategy';
  impactBadge?: string;
  description: string;
  problemStatement?: string;
  solutionOverview?: string;
  keyOutcomes?: string[];
  technologies: string[];
  keywords?: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  prototypeLinks?: { label: string; url: string }[];
}