import React from 'react';

const Hero: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const metrics = [
    { value: '12+', label: 'Years in Tech & SaaS Operations', icon: '⚡' },
    { value: '6+', label: 'In-Depth PM Case Studies', icon: '🚀' },
    { value: '+25%', label: 'CSAT Optimization Achieved', icon: '📈' },
    { value: '6', label: 'PM & GenAI Certifications', icon: '🎓' },
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-cyan-accent/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="md:col-span-7 text-center md:text-left order-2 md:order-1">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-emerald-accent bg-emerald-accent/10 border border-emerald-accent/25 mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-accent"></span>
              </span>
              <span>Open to Product Management Opportunities</span>
            </div>

            {/* Main Headings */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-lightest-slate tracking-tight leading-tight">
              Hi, I'm <span className="text-white">Jayesh PC.</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading mt-3 text-gradient-accent tracking-tight leading-snug">
              I build customer-centric, data-driven products.
            </h2>

            {/* Value Proposition */}
            <p className="mt-6 text-base sm:text-lg text-slate leading-relaxed max-w-2xl mx-auto md:mx-0">
              Customer Support & Operations Leader transitioning into <strong className="text-lightest-slate font-semibold">Product Management</strong>, backed by over 12 years of experience driving customer-centric innovation and cross-functional execution in global SaaS ecosystems. 
              Specializing in translating voice-of-customer insights into measurable product improvements, growth loops, and scalable user retention.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start items-center">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-emerald-accent text-dark-base hover:bg-emerald-accent/90 shadow-glow-emerald transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span>Explore Case Studies</span>
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#skills"
                onClick={(e) => handleScrollTo(e, 'skills')}
                className="inline-flex items-center px-6 py-3.5 rounded-xl font-mono text-sm font-semibold bg-dark-surface/80 text-lightest-slate border border-white/[0.1] hover:border-emerald-accent/40 hover:text-emerald-accent transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Skills & Tech Stack</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center px-5 py-3.5 rounded-xl font-mono text-sm font-medium text-slate hover:text-emerald-accent transition-colors"
              >
                <span>Get In Touch →</span>
              </a>
            </div>

            {/* Focus Framework Badges */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 items-center justify-center md:justify-start">
              <span className="text-xs font-mono text-slate mr-2">Core Focus:</span>
              {['AARRR Framework', 'Retention Loops', 'OKRs & KPIs', 'VoC & User Research', 'Agentic Workflows'].map((pill, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] text-light-slate border border-white/[0.08]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Avatar Column */}
          <div className="md:col-span-5 flex flex-col justify-center items-center order-1 md:order-2">
            <div className="relative">
              {/* Outer glowing halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-accent via-cyan-accent to-indigo-accent rounded-full blur-xl opacity-60 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full p-1.5 bg-gradient-to-tr from-emerald-accent/40 via-cyan-accent/30 to-indigo-500/40">
                <img 
                  src="https://assets.experience.com/campaigns/15933/Screenshot2025-10-23at3_1762365467323.22_1762365467323.05AM_1762365467323.png" 
                  alt="Jayesh PC - Product Management Leader" 
                  className="rounded-full w-full h-full object-cover shadow-2xl"
                />
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-3 -left-4 bg-dark-surface/90 backdrop-blur-md border border-emerald-accent/30 rounded-xl px-4 py-2 shadow-xl flex items-center space-x-2 animate-float">
                <span className="text-lg">🎯</span>
                <div>
                  <p className="text-[10px] font-mono text-slate uppercase">Specialization</p>
                  <p className="text-xs font-bold font-heading text-lightest-slate">Product Management</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-3 -right-2 bg-dark-surface/90 backdrop-blur-md border border-cyan-accent/30 rounded-xl px-3.5 py-1.5 shadow-xl flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-accent"></span>
                <p className="text-xs font-mono font-medium text-lightest-slate">12+ Yrs Experience</p>
              </div>
            </div>
          </div>

        </div>

        {/* Metrics Grid */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-emerald-accent/40 hover:-translate-y-1 group"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-lightest-slate tracking-tight group-hover:text-emerald-accent transition-colors">
                {item.value}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;