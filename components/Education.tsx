
import React from 'react';
import type { Education } from '../types';
import Section from './Section';

const educations: Education[] = [
  {
    degree: "Master's in Economics",
    institution: 'University of Madras',
    duration: 'Chennai, India',
  },
];

interface Certification {
  name: string;
  issuer: string;
}

const certifications: Certification[] = [
  {
    name: 'Product Management Certification',
    issuer: 'Airtribe',
  },
  {
    name: 'Generative AI Overview for Project Managers',
    issuer: 'PMI',
  },
  {
    name: 'Practical Application of Gen AI for Project Managers',
    issuer: 'PMI',
  },
];

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education & Certifications">
       <div className="space-y-12">
        <div>
          <h3 className="text-xl font-semibold text-lightest-slate mb-4">Degree</h3>
            {educations.map((edu, index) => (
              <div key={index} className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-lightest-slate">{edu.degree}</h3>
                <p className="text-green mt-1">{edu.institution}</p>
                <p className="font-mono text-sm text-slate mt-2">{edu.duration}</p>
              </div>
            ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-lightest-slate mb-4">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-lightest-slate">{cert.name}</h3>
                <p className="text-green mt-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Education;
