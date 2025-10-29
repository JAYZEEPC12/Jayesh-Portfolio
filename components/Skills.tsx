import React from 'react';
import Section from './Section';

const skillsData = {
  productManagement: [
    'Product Strategy & Vision',
    'Product Roadmapping',
    'User Research & Personas',
    'Customer Experience (CX)',
    'A/B Testing & Experimentation',
    'Agile & Scrum Methodologies',
    'Go-to-Market (GTM) Strategy',
    'Competitive Analysis',
    'Data-Driven Decision Making',
    'OKR & KPI Setting',
    'Monetization Models',
    'Retention Strategies',
  ],
  leadershipAndCollaboration: [
    'Stakeholder Management',
    'Cross-Functional Collaboration',
    'Team Leadership & Mentoring',
    'Voice of Customer (VoC)',
    'Process Optimization',
    'SaaS Operations',
    'Effective Communication',
    'Conflict Resolution',
  ],
  toolsAndTechnologies: [
    'JIRA & Confluence',
    'CRM Systems (e.g., Salesforce)',
    'Analytics (Google Analytics, Mixpanel)',
    'Feedback Tools (e.g., UserVoice)',
    'VoIP Technologies',
    'Figma',
    'Vibe Coding',
    'Agentic Workflows',
    'Lovable',
    'Bolt',
  ],
};

const SkillCategory: React.FC<{ title: string; skills: string[] }> = ({ title, skills }) => (
  <div className="bg-light-navy p-6 rounded-lg shadow-lg h-full">
    <h3 className="text-xl font-bold text-lightest-slate mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, i) => (
        <li key={i} className="flex items-start">
          <span className="text-green mr-3 mt-1">▹</span>
          <span className="text-light-slate">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Skills & Competencies">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <SkillCategory title="Product Management" skills={skillsData.productManagement} />
        <SkillCategory title="Leadership & Collaboration" skills={skillsData.leadershipAndCollaboration} />
        <SkillCategory title="Tools & Technologies" skills={skillsData.toolsAndTechnologies} />
      </div>
    </Section>
  );
};

export default Skills;