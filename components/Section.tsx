import React from 'react';

interface SectionProps {
  id: string;
  badge?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, badge, title, subtitle, children, className }) => {
  return (
    <section id={id} className={`py-16 md:py-24 relative ${className || ''}`}>
      <div className="mb-12">
        {badge && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-emerald-accent bg-emerald-accent/10 border border-emerald-accent/20 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-accent animate-pulse"></span>
            <span>{badge}</span>
          </div>
        )}
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-lightest-slate tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-slate text-base md:text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
          <div className="hidden sm:block flex-grow h-px bg-gradient-to-r from-dark-border via-emerald-accent/20 to-transparent ml-6"></div>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;