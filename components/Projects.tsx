import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import Section from './Section';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const projects: Project[] = [
  {
    title: 'The Good Bug - The Retention Loop',
    category: 'Growth & Retention',
    impactBadge: '↑ Repeat Purchase 20% → 50%',
    description: 'Spearheaded a comprehensive retention overhaul for a gut-health supplement brand, engineered to increase repeat purchases from 20% to 50% in 90 days. Pinpointed early-stage user doubt through qualitative user research and architected a habit-forming coaching companion.',
    problemStatement: 'Health supplements suffer from high early churn because tangible gut health results take 30+ days to manifest. Without visible proof, consumers abandon the daily regimen within the first 14 days, breaking the trust-habit loop.',
    solutionOverview: 'Architected a two-fold retention engine: 1) "Bug Buddy", a gamified habit-coaching companion with progressive daily check-ins; and 2) A guided onboarding ritual offering "Progress Proof" biometric tracking to reinforce continuous product efficacy.',
    keyOutcomes: [
      'Targeted 150% boost in 90-day cohort retention.',
      'Designed guided onboarding ritual to reduce day-1 to day-7 dropout.',
      'Developed and tested interactive live prototypes with prospective users.',
    ],
    technologies: ['User Research', 'Product Strategy', 'Retention Loops', 'A/B Testing', 'GTM Strategy', 'Lovable.app'],
    keywords: [
      'Vision: Revolutionize gut health',
      'Goal: ↑ Repeat Purchase 20% → 50%',
      'Problem: Trust–habit loop broken',
      'Challenge: Daily habit formation',
      'Retention Challenge',
      'TAM/SAM/SOM: Tier-1 Cities',
      'Primary & Secondary Research',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot2025-10-29at2_1761685104263.26_1761685104263.11AM_1761685104263.png',
    prototypeLinks: [
      { label: 'Guided Onboarding Experience', url: 'https://goodbug-welcome-waggle.lovable.app/' },
      { label: 'Habit-Coaching App "Bug Buddy"', url: 'https://bug-buddy-progress.lovable.app/' },
    ],
  },
  {
    title: 'Zomato - OKR Playbook: Retention & Delivery Excellence',
    category: 'Metrics & OKRs',
    impactBadge: '+15% MAU & 30% Repeat Orders',
    description: 'Developed an actionable OKR Playbook for Zomato to optimize delivery velocity, boost monthly active users (MAU), and drive repeat order frequency using deep cohort and funnel analytics.',
    problemStatement: 'Cart abandonment and customer drop-offs during high-traffic delivery windows threatened repeat frequency and customer lifetime value (LTV).',
    solutionOverview: 'Formulated high-impact OKRs balancing operational speed with customer delight. Deployed funnel analytics to isolate friction points, resulting in recommendations for upfront transparent pricing, dynamic delivery SLAs, and personalized recommender widgets.',
    keyOutcomes: [
      'Constructed OKR hierarchy tying engineering metrics to company-level GMV & MAU.',
      'Isolated drop-off triggers across cart abandonment and payment steps.',
      'Proposed transparent fee architecture to maximize checkout conversion rate.',
    ],
    technologies: ['OKR Framework', 'KPI Tracking', 'Funnel & Cohort Analysis', 'User Retention Strategy', 'Data-Driven Decisions'],
    keywords: [
      'OKRs (Objectives and Key Results)',
      'KPI (Key Performance Indicator)',
      'Funnel Analysis',
      'Cohort Analysis',
      'MAU (Monthly Active Users)',
      'CSAT (Customer Satisfaction Score)',
      'AOV (Average Order Value)',
      'Cart Abandonment Rate',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot2025-10-29at2_1761685779826.39_1761685779826.12AM_1761685779826.png',
  },
  {
    title: 'VitaFit: Reigniting Fitness Motivation',
    category: 'Growth & Retention',
    impactBadge: 'AARRR & Gamified Retention',
    description: 'Engineered a full-funnel retention strategy applying the AARRR Pirate Metrics framework and Jobs-To-Be-Done (JTBD) to resolve post-onboarding user drop-off in a digital fitness ecosystem.',
    problemStatement: 'App engagement suffered from "goal fatigue" and weak personal attachment between users and digital trainers, leading to sharp 30-day subscription cancellations.',
    solutionOverview: 'Implemented Smart Motivation Nudges, social leaderboards, and an AI-driven "My Kind of Coach" matching algorithm that pairs fitness enthusiasts with trainers matching their psychology and schedule.',
    keyOutcomes: [
      'RICE prioritization of engagement epics to maximize ROI.',
      'Designed interactive prototype for the trainer matching algorithm.',
      'Built social validation loops to convert solo workouts into community rituals.',
    ],
    technologies: ['JTBD Framework', 'AARRR Metrics', 'RICE Prioritization', 'Gamification', 'Personalization', 'Lovable.app'],
    keywords: [
      'JTBD (Jobs To Be Done)',
      'AARRR Framework',
      'RICE Prioritization',
      'Value vs Effort Matrix',
      'Smart Motivation Nudges',
      'Social Leaderboard & Badges',
      'My Kind of Coach',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot2025-10-29at11_1761760768648.29_1761760768648.06PM_1761760768648.png',
    prototypeLinks: [
      { label: 'Trainer Matching Prototype', url: 'https://vitafit-heart-connect.lovable.app' },
    ],
  },
  {
    title: 'Prime Video India: Rebuilding Trust & Retention',
    category: 'Product Strategy',
    impactBadge: 'Viewer Trust & Fair Monetization',
    description: 'Formulated a comprehensive product strategy to overcome customer backlash surrounding unskippable ads, pay-per-view (PPV) clutter, and device restrictions in the Indian streaming market.',
    problemStatement: 'Users perceived the addition of forced ads and extra PPV charges as a breach of Prime subscription value, generating negative social sentiment and churn risks to competitors.',
    solutionOverview: 'Proposed a regionalized value tiering: clear content labeling, skippable ad allowances, localized dubbing curation, and custom content bundles to restore customer trust without hurting ARPU.',
    keyOutcomes: [
      'Designed user-friendly ad-break experience prototype ("Ad-Break Balm").',
      'Synthesized pricing and monetization models for Tier 1 vs Tier 2 subscribers.',
      'Defined transparency roadmaps to protect customer brand equity.',
    ],
    technologies: ['User Research', 'Competitive Analysis', 'Retention Strategy', 'Monetization Models', 'Product Roadmap', 'Lovable.app'],
    keywords: [
      'Skippable Ads',
      'Clear Content Labeling',
      'Content Bundles',
      'Regional Dubbed Content',
      'Device Limit Increase',
      'Viewer Trust',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot%202025-07-01%20at%2010_1751387851786.06_1751387851786.26PM_1751387851786.png',
    prototypeLinks: [
      { label: 'Ad-Break Experience Prototype', url: 'https://ad-break-balm.lovable.app' },
    ],
  },
  {
    title: 'NoBroker: Consumer Services Expansion',
    category: 'Market Expansion',
    impactBadge: 'TAM/SAM/SOM & Service Design',
    description: 'Designed a product roadmap for NoBroker to cross-sell verified home maintenance services (deep cleaning, electrical, painting) leveraging its existing real estate user base with zero brokerage fees.',
    problemStatement: 'High customer dissatisfaction (76.47% neutral/negative sentiment) in the home service market caused by inconsistent technician arrival times and arbitrary hidden pricing.',
    solutionOverview: 'Created a transparent service-design module featuring upfront standardized rate cards, real-time technician GPS tracking, and quality assurance checkpoints for Tier 1–3 cities.',
    keyOutcomes: [
      'Modeled multi-tier TAM/SAM/SOM across high-density urban clusters.',
      'Identified house cleaning and electrical repairs as high-margin Phase 1 pilots.',
      'Structured unit economics to achieve positive CLV-to-CAC ratios.',
    ],
    technologies: ['Market Expansion Strategy', 'User Research', 'Competitive Analysis', 'Service Design', 'Product Roadmap'],
    keywords: [
      'Market Research',
      'Customer Insights',
      'Sentiment Analysis (76.47% Neutral/Negative)',
      'TAM, SAM, SOM Analysis',
      'Pricing Transparency',
      'Quality Assurance',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot%202025-06-28%20at%201_1751055401245.44_1751055401245.59AM_1751055401245.png',
  },
  {
    title: 'Threads App: Growth Loops & Viral Expansion',
    category: 'Growth & Retention',
    impactBadge: 'Viral & Content Flywheels',
    description: 'Analyzed Meta’s Threads ecosystem to unpack the viral mechanics and growth loops driving rapid user acquisition, content generation, and long-term daily active user (DAU) retention.',
    problemStatement: 'Sustaining user engagement after the initial hype spike required low-friction sharing mechanics and sustainable user-generated content (UGC) incentives.',
    solutionOverview: 'Mapped the tripartite growth loop engine (Viral, Content, Paid) leveraging Instagram network graph integration, Smart Preview sharing cards, and creator streak gamification.',
    keyOutcomes: [
      'Modeled CAC reduction via cross-app social referral flows (IG + WhatsApp).',
      'Designed flywheel mechanics for converting passive lurkers into active creators.',
      'Formulated roadmap epics for share velocity and conversion rate optimization (CRO).',
    ],
    technologies: ['Growth Strategy', 'Viral Marketing', 'User Acquisition Models', 'Gamification', 'Product Analytics'],
    keywords: [
      'Growth Loops (Viral, Content, Paid)',
      'User Acquisition & DAU',
      'Flywheel Mechanics',
      'Network Effects',
      'Sharing Velocity',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/neue-app-threads-100-1920x1080_1761761726447.jpg',
  },
];

const CaseStudyModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-card bg-dark-card border border-white/[0.12] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-slate hover:text-white flex items-center justify-center transition-colors text-lg"
          aria-label="Close Case Study"
        >
          ✕
        </button>

        {/* Modal Header */}
        <div className="pr-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-accent/10 text-emerald-accent border border-emerald-accent/30 font-medium">
              {project.category}
            </span>
            {project.impactBadge && (
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30">
                🎯 {project.impactBadge}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-lightest-slate">
            {project.title}
          </h2>
        </div>

        {/* Hero Image */}
        <div className="mt-6 rounded-2xl overflow-hidden border border-white/[0.08] relative max-h-72">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        </div>

        {/* Case Study Details */}
        <div className="mt-8 space-y-6">
          {/* Problem Statement */}
          {project.problemStatement && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-accent mb-2">
                The Problem & Friction Point
              </h4>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          )}

          {/* Solution & Architecture */}
          {project.solutionOverview && (
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-accent mb-2">
                Proposed Product Solution & Strategy
              </h4>
              <p className="text-sm sm:text-base text-slate leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          )}

          {/* Key Outcomes / Deliverables */}
          {project.keyOutcomes && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-lightest-slate mb-3">
                Key Strategic Outcomes & Deliverables
              </h4>
              <ul className="space-y-2">
                {project.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate">
                    <span className="text-emerald-accent mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Prototype Links */}
          {project.prototypeLinks && project.prototypeLinks.length > 0 && (
            <div className="pt-4 border-t border-white/[0.08]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-accent mb-3">
                Live Interactive Prototypes
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.prototypeLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-accent text-dark-base font-mono text-xs font-semibold hover:bg-emerald-accent/90 transition-all shadow-glow-emerald"
                  >
                    <span>Launch {link.label}</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Framework Tags */}
          <div className="pt-4 border-t border-white/[0.08] flex flex-wrap gap-2">
            {project.technologies.map((t, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-dark-surface text-light-slate border border-white/[0.08]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project; onSelect: (p: Project) => void }> = ({ project, onSelect }) => {
  const [showPrototypes, setShowPrototypes] = useState(false);

  return (
    <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-emerald-accent/50 hover:shadow-glow-card flex flex-col h-full group">
      {/* Card Image Banner */}
      <div className="relative overflow-hidden h-52 bg-dark-surface">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-black/30"></div>
        
        {/* Impact Ribbon */}
        {project.impactBadge && (
          <div className="absolute top-3 left-3 bg-dark-base/85 backdrop-blur-md border border-emerald-accent/40 text-emerald-accent font-mono text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            {project.impactBadge}
          </div>
        )}

        <div className="absolute top-3 right-3 bg-dark-base/80 backdrop-blur-md border border-white/[0.1] text-slate font-mono text-[11px] px-2.5 py-1 rounded-full">
          {project.category}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl font-bold font-heading text-lightest-slate group-hover:text-emerald-accent transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>

          <p className="text-slate text-sm leading-relaxed mt-2.5 mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Quick Prototype Dropdown */}
          {project.prototypeLinks && project.prototypeLinks.length > 0 && (
            <div className="mb-4">
              <button 
                onClick={() => setShowPrototypes(!showPrototypes)}
                className="w-full inline-flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-mono text-emerald-accent bg-emerald-accent/5 hover:bg-emerald-accent/10 border border-emerald-accent/30 transition-colors"
                aria-expanded={showPrototypes}
              >
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-pulse"></span>
                  <span>Interactive Prototypes ({project.prototypeLinks.length})</span>
                </span>
                <span className={`transform transition-transform text-xs ${showPrototypes ? 'rotate-180' : 'rotate-0'}`}>▼</span>
              </button>

              {showPrototypes && (
                <div className="mt-2 pl-3 border-l-2 border-emerald-accent/30 space-y-1.5 py-1 animate-fadeIn">
                  {project.prototypeLinks.map((link, i) => (
                    <a 
                      key={i}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center text-xs font-mono text-slate hover:text-emerald-accent transition-colors group/link py-0.5"
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5 mr-2 text-emerald-accent" />
                      <span className="group-hover/link:underline">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Keywords / Frameworks */}
          {project.keywords && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.keywords.slice(0, 4).map((kw, i) => (
                <span key={i} className="bg-white/[0.03] text-slate text-[11px] font-mono px-2 py-0.5 rounded border border-white/[0.06]">
                  {kw}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5 max-w-[65%]">
            {project.technologies.slice(0, 2).map((tech, i) => (
              <span key={i} className="text-emerald-accent text-[11px] font-mono">
                #{tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center text-xs font-mono font-medium text-lightest-slate hover:text-emerald-accent transition-colors space-x-1 group/btn"
          >
            <span>Case Study</span>
            <span className="transform group-hover/btn:translate-x-0.5 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | string>('All');
  const [searchFilter, setSearchFilter] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Growth & Retention', 'Metrics & OKRs', 'Market Expansion', 'Product Strategy'];

  const filteredProjects = projects.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = !searchFilter.trim() || 
      p.title.toLowerCase().includes(searchFilter.toLowerCase().trim()) ||
      p.description.toLowerCase().includes(searchFilter.toLowerCase().trim()) ||
      p.technologies.some(t => t.toLowerCase().includes(searchFilter.toLowerCase().trim())) ||
      (p.keywords && p.keywords.some(k => k.toLowerCase().includes(searchFilter.toLowerCase().trim())));

    return matchesCategory && matchesSearch;
  });

  return (
    <Section 
      id="projects" 
      badge="Portfolio Case Studies"
      title="Featured Product Case Studies" 
      subtitle="In-depth explorations applying customer research, quantitative retention loops, OKRs, and market expansion strategies."
    >
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-accent text-dark-base font-semibold shadow-glow-emerald'
                  : 'bg-dark-surface text-slate border border-white/[0.08] hover:text-lightest-slate hover:border-white/[0.2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Live Filter Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Search case studies (e.g. AARRR)..."
            className="w-full bg-dark-surface/80 border border-white/[0.1] rounded-xl px-4 py-2 text-xs font-mono text-lightest-slate placeholder-slate/50 focus:outline-none focus:border-emerald-accent/60 transition-colors"
          />
          {searchFilter && (
            <button
              onClick={() => setSearchFilter('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 glass-card rounded-2xl">
          <p className="text-slate font-mono text-sm">No case studies found matching your criteria.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); setSearchFilter(''); }}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-mono bg-emerald-accent text-dark-base font-semibold"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Case Study Full Modal Dialog */}
      <CaseStudyModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />
    </Section>
  );
};

export default Projects;