import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    onClick(); // For closing mobile menu
  };

  return (
    <a href={href} onClick={handleLinkClick} className="text-slate hover:text-green transition-colors duration-300 py-2 md:py-0">
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills & Competencies' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-navy'}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-xl font-bold font-heading tracking-[0.5px] text-lightest-slate hover:text-green transition-colors">
            Jayesh PC's Portfolio
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
               <NavLink key={index} href={link.href} onClick={() => {}}>{link.label}</NavLink>
            ))}
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-light-navy">
          <nav className="flex flex-col items-center space-y-4 px-6 py-8">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.label}</NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;