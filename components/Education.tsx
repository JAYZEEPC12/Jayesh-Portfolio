import React from 'react';
import type { Education, Certification } from '../types';
import Section from './Section';

const educations: Education[] = [
  {
    degree: "Master of Arts in Economics",
    institution: 'University of Madras',
    duration: 'Chennai, India',
    field: 'Quantitative Economics, Market Dynamics & Statistical Foundations',
    highlights: [
      'Grounded in micro & macroeconomic theory, price elasticity, and consumer behavioral economics.',
      'Strong quantitative analysis and econometric modeling skillset applied directly to SaaS metrics and cohort retention.',
    ]
  },
];

const certifications: Certification[] = [
  {
    name: 'Product Management Certification',
    issuer: 'Airtribe',
    category: 'Product Strategy & Discovery',
    badge: 'Airtribe Fellow',
  },
  {
    name: 'Practical Application of Gen AI for Project Managers',
    issuer: 'Project Management Institute (PMI)',
    category: 'Generative AI & Agentic Workflows',
    badge: 'PMI Credential',
  },
  {
    name: 'Generative AI Overview for Project Managers',
    issuer: 'Project Management Institute (PMI)',
    category: 'AI Adoption & Prompt Architecture',
    badge: 'PMI Credential',
  },
  {
    name: 'Product-Led Growth (PLG)',
    issuer: 'Product School',
    category: 'PLG & Self-Serve Funnels',
    badge: 'Product School',
  },
  {
    name: 'Product Management Specialization',
    issuer: 'IBM & Coursera',
    category: 'Agile Discovery & User Stories',
    badge: 'IBM Verified',
  },
  {
    name: 'Certified Product Manager',
    issuer: 'Global Skill Development Council (GSDC)',
    category: 'Roadmapping & Prioritization',
    badge: 'GSDC Certified',
  },
];

const Education: React.FC = () => {
  return (
    <Section 
      id="education" 
      badge="Credentials & Academics"
      title="Education & Certifications" 
      subtitle="Combining analytical economic foundations with cutting-edge Product Management and Generative AI certifications."
    >
      <div className="space-y-12">
        {/* Degree Section */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono font-medium text-emerald-accent uppercase tracking-wider mb-4">
            <span>🎓</span>
            <span>Academic Degree</span>
          </div>
          {educations.map((edu, index) => (
            <div 
              key={index} 
              className="glass-card p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300 hover:border-emerald-accent/40"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-lightest-slate">
                    {edu.degree}
                  </h3>
                  <p className="text-emerald-accent font-medium text-base mt-1">{edu.institution}</p>
                </div>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/[0.04] text-slate border border-white/[0.08] self-start sm:self-center">
                  <span>📍 {edu.duration}</span>
                </div>
              </div>

              {edu.field && (
                <p className="mt-3 text-sm font-mono text-cyan-accent">
                  Focus: {edu.field}
                </p>
              )}

              {edu.highlights && (
                <ul className="mt-4 space-y-2 border-t border-white/[0.06] pt-4">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start text-sm text-slate">
                      <span className="text-emerald-accent mr-2.5 mt-1">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono font-medium text-emerald-accent uppercase tracking-wider mb-4">
            <span>📜</span>
            <span>Professional Certifications</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-emerald-accent/40 hover:shadow-glow-card group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-emerald-accent/10 text-emerald-accent border border-emerald-accent/20">
                      {cert.badge}
                    </span>
                    <span className="text-slate/40 group-hover:text-emerald-accent transition-colors text-sm">
                      ✓ Verified
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-heading text-lightest-slate group-hover:text-emerald-accent transition-colors leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-sm font-medium text-light-slate/90 mt-1">
                    {cert.issuer}
                  </p>
                </div>

                {cert.category && (
                  <div className="mt-5 pt-3 border-t border-white/[0.06]">
                    <span className="text-[11px] font-mono text-slate">
                      Domain: <strong className="text-slate-300 font-normal">{cert.category}</strong>
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;