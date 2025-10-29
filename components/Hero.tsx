import React from 'react';

const skills = [
  'Product Strategy', 'Customer Experience', 'Cross-Functional Collaboration', 
  'User Research', 'Product Roadmapping', 'Stakeholder Management', 
  'Data-Driven Decision Making', 'CRM', 'Leadership', 
  'Process Optimization', 'SaaS Operations', 'Voice of Customer'
];

const Hero: React.FC = () => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
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
  };

  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center justify-center py-20">
      <div className="max-w-4xl text-left">
        <p className="text-green font-mono mb-4 text-lg">Hi, my name is</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lightest-slate">
          Jayesh PC.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate mt-2">
          I build customer-centric products.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-slate">
          Customer Support and Operations Leader transitioning into Product Management, with over 12 years of experience driving customer-centric innovation and cross-functional collaboration in SaaS and service environments. Proven record of leading global teams, translating customer insights into actionable product improvements, and partnering with Product, Engineering, and Design teams to build impactful solutions. Passionate about leveraging data, empathy, and process excellence to shape products that enhance customer experience and business growth.
        </p>
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span key={i} className="bg-lightest-navy text-green text-xs font-mono px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <a 
            href="#contact" 
            onClick={(e) => handleScrollToSection(e, 'contact')}
            className="inline-block bg-transparent border border-green text-green font-mono text-lg px-8 py-4 rounded hover:bg-green/10 transition-colors duration-300"
          >
            Get In Touch
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleScrollToSection(e, 'skills')}
            className="inline-block text-green font-mono text-lg px-8 py-4 rounded hover:bg-green/10 underline-offset-4 hover:underline"
          >
            View My Skills & Competencies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;