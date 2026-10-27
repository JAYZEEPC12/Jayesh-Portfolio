import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const FloatingDock: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="w-11 h-11 rounded-full bg-dark-card/90 backdrop-blur-md border border-white/[0.1] text-slate hover:text-emerald-accent hover:border-emerald-accent/50 shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Floating Quick Get In Touch Button */}
      <a 
        href="#contact" 
        onClick={handleScrollToContact}
        className="hidden sm:inline-flex items-center space-x-2 bg-dark-card/90 backdrop-blur-md border border-emerald-accent/40 text-emerald-accent hover:bg-emerald-accent hover:text-dark-base font-mono text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300 shadow-glow-card group"
        aria-label="Get in touch with Jayesh"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse group-hover:bg-dark-base"></span>
        <span>Let's Talk</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 transition-transform" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </aside>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-dark-base text-slate font-sans selection:bg-emerald-accent/20 selection:text-emerald-accent">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24 flex-grow relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FloatingDock />
      <Footer />
    </div>
  );
};

export default App;