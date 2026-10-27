import React, { useState } from 'react';
import Section from './Section';

interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  badge: string;
  skills: string[];
}

const skillCategories: SkillGroup[] = [
  {
    id: 'product-management',
    title: 'Product Strategy & Discovery',
    icon: '🎯',
    badge: 'Core PM',
    skills: [
      'Product Strategy & Vision',
      'Roadmapping & Feature Prioritization (RICE / MoSCoW)',
      'User Research & Customer Personas',
      'Customer Experience (CX) Architecture',
      'A/B Testing & Growth Experimentation',
      'Agile & Scrum Methodologies',
      'Go-to-Market (GTM) Strategy',
      'Competitive Intelligence & TAM/SAM/SOM',
      'Data-Driven Decision Making',
      'OKR & KPI Formulation',
      'Monetization & Pricing Models',
      'Retention Loops & Cohort Analysis',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership & Cross-Functional Operations',
    icon: '🤝',
    badge: '12+ Yrs Proven',
    skills: [
      'Voice of the Customer (VoC) Programs',
      'Cross-Functional Alignment (Eng, Design, QA)',
      'Global Team Leadership & Mentoring',
      'Enterprise Stakeholder Management',
      'SaaS Support Operations & Tiered Escalations',
      'Process & Workflow Optimization',
      'High-Severity Incident Triage',
      'Customer Journey Mapping',
      'Executive Storytelling & PRD Authoring',
      'Change Management & Enablement',
    ],
  },
  {
    id: 'tools-and-technologies',
    title: 'AI, Rapid Prototyping & Tools',
    icon: '⚡',
    badge: 'Modern Stack',
    skills: [
      'Agentic AI Workflows & Autonomous Agents',
      'Vibe Coding & Rapid Prototyping',
      'Lovable.app & Bolt.new Prototyping',
      'Figma & Interactive Wireframes',
      'JIRA, Confluence & Linear',
      'Product Analytics (Mixpanel, GA4)',
      'CRM Systems (Salesforce, Zendesk)',
      'REST APIs & Postman Testing',
      'Enterprise Storage & VoIP Systems',
      'SQL & Analytical Querying Basics',
    ],
  },
];

const Skills: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | string>('all');

  const filteredCategories = skillCategories.map(cat => {
    let filteredSkills = cat.skills;
    if (searchQuery.trim()) {
      filteredSkills = filteredSkills.filter(s => 
        s.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
    }
    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(cat => selectedCategory === 'all' || cat.id === selectedCategory);

  return (
    <Section 
      id="skills" 
      badge="Skill Matrix"
      title="Skills & Competencies" 
      subtitle="A comprehensive blend of product discovery frameworks, 12+ years of customer empathy leadership, and modern AI toolsets."
    >
      {/* Search and Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === 'all'
                ? 'bg-emerald-accent text-dark-base font-semibold shadow-sm'
                : 'bg-dark-surface/60 text-slate border border-white/[0.08] hover:text-lightest-slate'
            }`}
          >
            All Competencies ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center space-x-1.5 ${
                selectedCategory === cat.id
                  ? 'bg-emerald-accent text-dark-base font-semibold shadow-sm'
                  : 'bg-dark-surface/60 text-slate border border-white/[0.08] hover:text-lightest-slate'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.badge}</span>
            </button>
          ))}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills (e.g. OKRs, VoC, AI)..."
            className="w-full bg-dark-surface/80 border border-white/[0.1] rounded-xl px-4 py-2 text-xs font-mono text-lightest-slate placeholder-slate/50 focus:outline-none focus:border-emerald-accent/60 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {filteredCategories.map((group) => (
          <div 
            key={group.id} 
            className="glass-card p-6 sm:p-7 rounded-2xl relative transition-all duration-300 hover:border-emerald-accent/40 h-full flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2.5">
                  <span className="text-2xl">{group.icon}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-accent/10 text-emerald-accent border border-emerald-accent/20">
                    {group.badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate/60">
                  {group.skills.length} skills
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold font-heading text-lightest-slate mb-5">
                {group.title}
              </h3>

              {group.skills.length > 0 ? (
                <ul className="space-y-2.5">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm text-slate group/item hover:text-lightest-slate transition-colors">
                      <span className="text-emerald-accent mr-2.5 mt-0.5 flex-shrink-0">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs font-mono text-slate/60 py-4">No matching skills found.</p>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate">
              <span>Applied in real SaaS ecosystems</span>
              <span className="text-emerald-accent">✓ Active</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
