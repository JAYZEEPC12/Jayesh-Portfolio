
import React, { useState } from 'react';
import type { Experience } from '../types';
import Section from './Section';

const experiences: Experience[] = [
  {
    role: 'Customer Support Team Lead (Partnering with Product Teams)',
    company: 'Experience.com',
    duration: 'November 2022 – Present',
    description: [
      'Lead a global team delivering high-quality customer support across multiple channels — achieving a 25% increase in CSAT and 20% reduction in ticket resolution time through process optimization.',
      'Act as the voice of the customer, collaborating with Product Managers and Engineers to identify feature gaps and prioritize roadmap improvements.',
      'Partnered with the Product team to launch new feedback and analytics features, resulting in a 15% rise in platform engagement and improved customer adoption.',
      'Designed data-driven reports and dashboards to analyze customer trends, providing insights that informed quarterly product planning.',
      'Conduct user feedback sessions and translate pain points into actionable product requirements, ensuring alignment between customer needs and product vision.',
      'Mentor and train support staff on new product features, ensuring smooth rollouts and consistent customer communication.',
    ],
    technologies: [],
  },
  {
    role: 'Senior Engineer – Hitachi Vantara',
    company: 'Movate (formerly CSS Corp)',
    duration: 'September 2019 - February 2022',
    description: [
      'Supported enterprise clients on advanced storage and backup solutions, achieving 95% SLA adherence.',
      'Collaborated with engineering and product teams to troubleshoot complex issues and provide feedback for future product releases.',
    ],
    technologies: [],
  },
  {
    role: 'Subject Matter Expert',
    company: 'Vonage',
    duration: 'May 2017 – August 2019',
    description: [
      'Partnered with Product and QA teams to enhance VoIP platform stability and call quality.',
      'Developed product training documentation that reduced onboarding time for new support engineers by 30%.',
      'Acted as escalation point for high-priority customer issues, influencing product bug prioritization and resolution timelines.',
    ],
    technologies: [],
  },
  {
    role: 'Senior Support Specialist',
    company: 'Vonage',
    duration: 'October 2014 – April 2017',
    description: [
      'Delivered end-to-end technical and customer support for business clients via phone, chat, and email.',
      'Maintained 90%+ first-call resolution rate and consistently exceeded customer satisfaction targets.',
    ],
    technologies: [],
  },
  {
    role: 'Accounts Receivable Specialist',
    company: 'NTT DATA, Inc.',
    duration: 'May 2012 – November 2013',
    description: [
      'Ensured accurate financial transactions and timely payment processing for enterprise clients.',
      'Collaborated cross-functionally with finance and operations teams to improve reporting accuracy.',
    ],
    technologies: [],
  },
];

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section id="experience" title="Where I've Worked">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
          {experiences.map((exp, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`text-left whitespace-nowrap px-4 py-2 font-mono text-sm border-b-2 md:border-b-0 md:border-l-2 transition-all duration-300 ${
                activeTab === index
                  ? 'border-green text-green bg-lightest-navy/50'
                  : 'border-lightest-navy text-slate hover:bg-lightest-navy/50 hover:text-green'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
        <div className="flex-1 min-h-[300px]">
          {experiences.map((exp, index) => (
            <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
              <h3 className="text-xl font-bold text-lightest-slate">
                {exp.role} <span className="text-green">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm mb-4">{exp.duration}</p>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green mr-3 mt-1">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {exp.technologies.length > 0 && <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="bg-lightest-navy text-green text-xs font-mono px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
