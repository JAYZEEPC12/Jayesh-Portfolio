import React, { useState } from 'react';
import type { Experience } from '../types';
import Section from './Section';

const experiences: Experience[] = [
  {
    role: 'Customer Support Team Lead (Partnering with Product Teams)',
    company: 'Experience.com',
    duration: 'November 2022 – Present',
    location: 'Remote / Hybrid',
    impactMetric: '+25% CSAT & -20% Resolution Time',
    description: [
      'Lead a global high-performance support organization across multi-channel environments — driving a 25% increase in CSAT and a 20% reduction in average ticket resolution time through rigorous workflow optimization.',
      'Serve as the Voice of the Customer (VoC), collaborating directly with Product Managers, Designers, and Engineers to uncover feature friction points, define user stories, and prioritize roadmap items.',
      'Partnered closely with the core Product team on the successful launch of customer feedback & analytics features, generating a 15% surge in platform adoption and engagement.',
      'Designed executive data dashboards to analyze customer churn indicators and telemetry trends, directly feeding quarterly product discovery and planning cycles.',
      'Facilitate structured user interview sessions, synthesizing raw customer pain points into concise PRD inputs and actionable engineering tickets.',
      'Spearhead internal enablement, training cross-functional support teams on newly released platform capabilities to ensure zero-defect rollouts.',
    ],
    skills: ['Voice of Customer (VoC)', 'Product Roadmapping', 'CSAT Optimization', 'Cross-Functional Leadership', 'Analytics & Reporting'],
  },
  {
    role: 'Senior Engineer – Hitachi Vantara',
    company: 'Movate (formerly CSS Corp)',
    duration: 'September 2019 – February 2022',
    location: 'Chennai, India',
    impactMetric: '95% SLA Adherence Across Enterprise Storage',
    description: [
      'Managed mission-critical enterprise tier-1 data storage, disaster recovery, and backup infrastructure for global Fortune 500 accounts.',
      'Delivered consistent 95%+ SLA adherence under rigorous high-severity enterprise environments.',
      'Collaborated closely with systems engineering and product architects to diagnose complex edge cases and provide feedback for subsequent firmware/software releases.',
    ],
    skills: ['Enterprise Infrastructure', 'SLA Management', 'Root Cause Analysis', 'Engineering Collaboration'],
  },
  {
    role: 'Subject Matter Expert (VoIP Systems)',
    company: 'Vonage',
    duration: 'May 2017 – August 2019',
    location: 'Chennai, India',
    impactMetric: '-30% Onboarding Ramp Time',
    description: [
      'Partnered closely with Product and QA engineering teams to identify call stability bottlenecks and validate new VoIP communication features.',
      'Authored comprehensive technical product documentation and standardized workflows, reducing onboarding ramp time for incoming support engineers by 30%.',
      'Acted as primary escalation lead for tier-1 enterprise escalations, directly shaping defect prioritization and emergency patch release schedules.',
    ],
    skills: ['VoIP Architecture', 'Product QA Alignment', 'Knowledge Base Creation', 'Defect Triage'],
  },
  {
    role: 'Senior Support Specialist',
    company: 'Vonage',
    duration: 'October 2014 – April 2017',
    location: 'Chennai, India',
    impactMetric: '90%+ First-Call Resolution (FCR)',
    description: [
      'Delivered comprehensive multi-channel technical support (telephony, live chat, ticketing) for business telecommunication clients.',
      'Maintained consistent 90%+ First-Call Resolution (FCR) rate and repeatedly surpassed quarterly client satisfaction benchmarks.',
    ],
    skills: ['Customer Experience', 'FCR Optimization', 'Technical Troubleshooting'],
  },
  {
    role: 'Accounts Receivable Specialist',
    company: 'NTT DATA, Inc.',
    duration: 'May 2012 – November 2013',
    location: 'Chennai, India',
    impactMetric: 'Financial Reporting Integrity',
    description: [
      'Supervised financial reconciliation, audit trails, and payment workflows for large-scale enterprise customer contracts.',
      'Partnered cross-functionally with operations and finance leads to improve ledger accuracy and workflow governance.',
    ],
    skills: ['Financial Operations', 'Process Compliance', 'Data Accuracy'],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentExp = experiences[activeTab];

  return (
    <Section 
      id="experience" 
      badge="Career Milestones"
      title="Where I've Driven Impact"
      subtitle="12+ years of leadership at the intersection of customer empathy, operational excellence, and product execution."
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Navigation Tabs */}
        <div className="w-full lg:w-72 flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-2 scrollbar-thin">
          {experiences.map((exp, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-5 py-3.5 rounded-xl font-mono text-xs sm:text-sm transition-all duration-200 whitespace-nowrap lg:whitespace-normal flex flex-col items-start border ${
                  isActive
                    ? 'bg-emerald-accent/10 border-emerald-accent text-emerald-accent font-semibold shadow-sm'
                    : 'bg-dark-surface/50 border-white/[0.05] text-slate hover:bg-white/[0.03] hover:text-lightest-slate'
                }`}
              >
                <span className="font-bold font-heading text-sm text-lightest-slate">{exp.company}</span>
                <span className="text-[11px] font-mono text-slate/80 mt-0.5">{exp.duration.split('–')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Role Content Card */}
        <div className="flex-1 w-full glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-lightest-slate">
                {currentExp.role}
              </h3>
              <div className="flex flex-wrap items-center gap-2 mt-1.5 text-sm">
                <span className="text-emerald-accent font-mono font-medium">{currentExp.company}</span>
                <span className="text-dark-border">•</span>
                <span className="text-slate font-mono text-xs">{currentExp.duration}</span>
                {currentExp.location && (
                  <>
                    <span className="text-dark-border">•</span>
                    <span className="text-slate font-mono text-xs">{currentExp.location}</span>
                  </>
                )}
              </div>
            </div>

            {/* Impact Metric Ribbon */}
            {currentExp.impactMetric && (
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-emerald-accent/10 border border-emerald-accent/30 text-emerald-accent font-mono text-xs font-semibold self-start sm:self-center">
                <span>🎯</span>
                <span>{currentExp.impactMetric}</span>
              </div>
            )}
          </div>

          {/* Description Points */}
          <ul className="mt-6 space-y-4">
            {currentExp.description.map((item, i) => (
              <li key={i} className="flex items-start text-sm sm:text-base text-slate leading-relaxed">
                <span className="text-emerald-accent mr-3 mt-1.5 flex-shrink-0 text-sm">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Skill Tag Pills */}
          {currentExp.skills && currentExp.skills.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-slate mr-2">Key Competencies:</span>
              {currentExp.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-accent/5 text-emerald-accent border border-emerald-accent/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Experience;