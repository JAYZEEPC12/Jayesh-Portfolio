import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['hero', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', id: 'experience', label: 'Experience' },
    { href: '#education', id: 'education', label: 'Education' },
    { href: '#skills', id: 'skills', label: 'Skills' },
    { href: '#projects', id: 'projects', label: 'Case Studies' },
    { href: '#contact', id: 'contact', label: 'Contact' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
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
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#070a11]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a 
            href="#hero" 
            onClick={(e) => handleScrollTo(e, '#hero')}
            className="group flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-accent/20 to-cyan-accent/20 border border-emerald-accent/30 flex items-center justify-center text-emerald-accent font-heading font-bold text-lg group-hover:scale-105 group-hover:border-emerald-accent/60 transition-all duration-300 shadow-sm">
              JP
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-heading text-lightest-slate tracking-tight group-hover:text-emerald-accent transition-colors">
                Jayesh PC
              </span>
              <span className="text-[11px] font-mono text-slate tracking-wide uppercase">
                Product & CX Leader
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-dark-surface/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-emerald-accent font-semibold bg-emerald-accent/10 shadow-sm'
                      : 'text-slate hover:text-lightest-slate hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-accent"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
              className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono font-medium text-emerald-accent bg-emerald-accent/10 border border-emerald-accent/30 hover:bg-emerald-accent hover:text-dark-base transition-all duration-300 shadow-sm group"
            >
              <span>Let's Connect</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-dark-surface border border-white/[0.08] text-lightest-slate hover:text-emerald-accent focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#070a11]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                  activeSection === link.id
                    ? 'text-emerald-accent bg-emerald-accent/10 border border-emerald-accent/20'
                    : 'text-slate hover:text-lightest-slate hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, '#contact')}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg text-xs font-mono font-medium text-emerald-accent bg-emerald-accent/10 border border-emerald-accent/30 hover:bg-emerald-accent hover:text-dark-base transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;