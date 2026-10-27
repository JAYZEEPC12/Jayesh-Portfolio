import React from 'react';

const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-dark-base py-12 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-heading font-bold text-lg text-lightest-slate">
              Jayesh PC
            </span>
            <p className="text-xs font-mono text-slate mt-1">
              Customer Support & Operations Leader → Product Management
            </p>
          </div>

          {/* Quick Sitemap Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-mono text-slate">
            <a href="#experience" className="hover:text-emerald-accent transition-colors">Experience</a>
            <a href="#education" className="hover:text-emerald-accent transition-colors">Education</a>
            <a href="#skills" className="hover:text-emerald-accent transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-accent transition-colors">Case Studies</a>
            <a href="#contact" className="hover:text-emerald-accent transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-xl bg-dark-surface hover:bg-emerald-accent/20 border border-white/[0.08] hover:border-emerald-accent/40 text-slate hover:text-emerald-accent flex items-center justify-center transition-all"
            aria-label="Scroll back to top"
          >
            ↑
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/[0.04] text-center text-[11px] font-mono text-slate/60">
          <p>© 2026 Jayesh PC. All rights reserved. Designed & built for customer-centric product impact.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
