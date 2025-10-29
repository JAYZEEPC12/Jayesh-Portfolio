
import React from 'react';
import type { Project } from '../types';
import Section from './Section';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

const projects: Project[] = [
  {
    title: 'The Good Bug - The Retention Loop',
    description: 'This project aimed to boost customer retention for a health supplement by 150% in 90 days. Through user research, we identified early-stage user doubt as a key drop-off point. The solution included a guided onboarding experience, a habit-coaching app, and a "Progress Proof" feature to build trust and transform the product into a daily ritual.',
    technologies: ['User Research', 'Product Strategy', 'Retention', 'A/B Testing', 'GTM Strategy'],
    keywords: [
      'Vision: Revolutionize gut health',
      'Goal: ↑ Repeat Purchase 20% → 50%',
      'Problem: Trust–habit loop broken',
      'Challenge: Daily habit formation',
      'Retention Challenge',
      'Customer Trust & Engagement',
      'Market Research (India)',
      'TAM/SAM/SOM: Tier-1 Cities',
      'Primary & Secondary Research',
      'User Pain Points'
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot2025-10-29at2_1761685104263.26_1761685104263.11AM_1761685104263.png',
  },
  {
    title: 'Zomato - OKR Playbook: Driving User Retention and Delivery Excellence',
    description: "project outlines Zomato’s use of the OKR framework to boost user engagement, delivery efficiency, and retention. Key goals included raising Monthly Active Users by 15% and repeat orders to 30%, supported by initiatives like personalized recommendations and faster deliveries. Through funnel and cohort analysis of KPIs such as AOV and cart abandonment, Zomato identified drop-off points and implemented solutions like menu redesigns and transparent pricing to improve conversion and satisfaction.",
    technologies: ['OKR Framework', 'KPI Tracking', 'Funnel & Cohort Analysis', 'User Retention Strategy', 'Data-Driven Decisions'],
    keywords: [
      'OKRs (Objectives and Key Results)',
      'KPI (Key Performance Indicator)',
      'Funnel Analysis',
      'Cohort Analysis',
      'MAU (Monthly Active Users)',
      'CSAT (Customer Satisfaction Score)',
      'AOV (Average Order Value)',
      'Add-to-Cart Rate',
      'Cart Abandonment Rate',
      'Retention Rate',
      'Conversion Rate',
      'Order Success Rate'
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot2025-10-29at2_1761685779826.39_1761685779826.12AM_1761685779826.png',
  },
  {
    title: 'VitaFit: Reigniting Fitness Motivation',
    description: 'VitaFit, a health-tech brand, addresses declining user motivation in its fitness app by applying the AARRR framework. Faced with issues like goal fatigue and a weak user-trainer bond, the strategy introduces features like Smart Motivation Nudges and a Social Leaderboard. To foster a stronger personal connection, new "Trainer Profiles" and a "My Kind of Coach" matching feature were designed to enhance user engagement and long-term retention.',
    technologies: ['JTBD Framework', 'AARRR Metrics', 'RICE Prioritization', 'Gamification', 'Personalization'],
    keywords: [
        'JTBD (Jobs To Be Done)',
        'AARRR Framework',
        'RICE Prioritization',
        'Value vs Effort Matrix',
        'Smart Motivation Nudges',
        'Social Leaderboard & Badges',
        'Achievement Sharing',
        'Trainer Profiles',
        'My Kind of Coach'
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot2025-10-29at11_1761760768648.29_1761760768648.06PM_1761760768648.png',
  },
    {
    title: 'Prime Video India: Rebuilding Trust and a Strategy for Retention',
    description: 'Amazon Prime Video India is facing major user dissatisfaction due to recent policy and content changes. Users are upset about the introduction of ads, which now require an extra payment to remove — seen as a breach of trust. The shift toward pay-per-view (PPV) content has reduced the value of the Prime subscription. Device limitations and regional restrictions frustrate users who face streaming errors or limited access. These issues have caused a loss of trust and the perception that Prime Video is downgrading its service quality. A renewed focus on regional diversity, user transparency, and fair pricing is proposed to rebuild loyalty and enhance the overall Prime Video India experience.',
    technologies: ['User Research', 'Competitive Analysis', 'Retention Strategy', 'Monetization Models', 'Product Roadmap'],
    keywords: [
      'Skippable Ads',
      'Clear Content Labeling',
      'Content Bundles',
      'Exclusive Originals',
      'Regional Dubbed Content',
      'Device Limit Increase',
      'Quality Curation',
      'Pay-to-View Content (PPV)',
      'Subscription Model',
      'User Experience (UX)',
      'Regional Restrictions',
      'Device Limits',
      'Content Updates',
      'Viewer Trust',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot%202025-07-01%20at%2010_1751387851786.06_1751387851786.26PM_1751387851786.png',
  },
  {
    title: 'NoBroker: Consumer Services-Expanding Beyond Real Estate',
    description: 'NoBroker.com, a leading real estate platform, is strategically expanding into consumer home services like cleaning, plumbing, painting, and electrical repairs. The goal is to leverage its existing property user base to cross-sell essential services while eliminating brokerage fees. Market research revealed that 66.67% of users prioritize cost and cleaning services, showing high price sensitivity and demand for affordability. Customer sentiment shows 76.47% neutral or negative feedback, citing issues with availability, timing, and inconsistent service quality. Competitors such as Urban Company, Housejoy, and Sulekha dominate the market through aggressive pricing and broad service portfolios. Key opportunities lie in reliability, quality assurance, and transparent pricing, as existing platforms struggle with trust and consistency. Phase 1 rollout will focus on house cleaning, deep cleaning, and electrical repairs due to high ROI and customer demand. Differentiation strategies include no visit fees, clear cost breakdowns, tiered pricing, and coverage across Tier 1–3 cities. The prototype introduces tools like a transparent pricing module, availability dashboard, and quality assurance interface for real-time tracking. Success will be measured by cross-sell rate, CAC, CLV, NPS, and service completion rate, aiming to build a trustworthy and scalable home services ecosystem.',
    technologies: ['Market Expansion Strategy', 'User Research', 'Competitive Analysis', 'Service Design', 'Product Roadmap'],
    keywords: [
      'Market Research',
      'Customer Insights',
      'Sentiment Analysis (76.47% Neutral/Negative)',
      'Total Addressable Market (TAM), SAM, SOM',
      'Competitive Landscape (Urban Company, Housejoy, Sulekha)',
      'Service Availability',
      'Pricing Transparency',
      'Quality Inconsistency',
      'Limited Coverage',
      'Negative User Sentiment',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/Screenshot%202025-06-28%20at%201_1751055401245.44_1751055401245.59AM_1751055401245.png',
  },
  {
    title: 'Threads App: Growth Loops-The Viral Engine Behind User Expansion',
    description: 'The Threads App growth strategy is built around three core growth loops — Viral, Content, and Paid — to drive sustainable user acquisition and engagement. The Viral Growth Loop relies on users inviting others through built-in social sharing features (Instagram, WhatsApp, X/Twitter), creating a self-sustaining referral cycle. The Content Loop focuses on user-generated content—as more users post, the platform attracts new users who, in turn, create more content, driving organic visibility. The Paid Loop targets monetization by converting free users to paying subscribers, leveraging the freemium model and value-driven upgrades. Key Epics were designed to enhance sharing and referral velocity, like Smart Preview Cards and Share Streak Rewards. The strategy aligns with Meta’s ecosystem strengths (Instagram + WhatsApp), using low-friction social sharing to 10x reach and reduce customer acquisition cost (CAC).',
    technologies: ['Growth Strategy', 'Viral Marketing', 'User Acquisition Models', 'Gamification', 'Product Analytics'],
    keywords: [
      'Growth Loops (Viral, Content, Paid)',
      'User Acquisition',
      'User Engagement',
      'Conversion Rate',
      'Freemium Model',
      'Referral System',
      'DAU (Daily Active Users)',
      'CAC (Customer Acquisition Cost)',
      'Flywheel Effect',
      'Conversion Rate Optimization (CRO)',
      'Sharing Mechanics',
      'Network Effects',
      'Gamification',
      'Social Referral Flow',
    ],
    imageUrl: 'https://assets.experience.com/campaigns/15933/neue-app-threads-100-1920x1080_1761761726447.jpg',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-light-navy rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors duration-300"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div>
          <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-lightest-slate group-hover:text-green transition-colors duration-300">{project.title}</h3>
              <div className="flex items-center space-x-4">
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green"><GitHubIcon /></a>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green"><ExternalLinkIcon /></a>}
              </div>
          </div>
          <p className="text-slate mb-4 text-sm">{project.description}</p>
          {project.keywords && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.keywords.map((keyword, i) => (
                <span key={i} className="bg-navy text-light-slate text-xs font-mono px-2 py-1 rounded">
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span key={i} className="text-green text-xs font-mono">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Things I've Built">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
