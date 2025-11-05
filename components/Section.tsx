
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 md:py-24">
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold font-heading tracking-[0.5px] text-lightest-slate mr-4 whitespace-nowrap">
          <span className="text-green font-mono text-xl md:text-2xl mr-2">{/* Number placeholder can go here */}</span>
          {title}
        </h2>
        <div className="w-full h-px bg-lightest-navy/50"></div>
      </div>
      {children}
    </section>
  );
};

export default Section;