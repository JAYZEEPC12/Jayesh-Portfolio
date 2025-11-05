import React from 'react';

const Hero: React.FC = () => {
  const handleScrollToSkills = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('skills');
    
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
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-3 text-center md:text-left order-2 md:order-1">
            <p className="text-green font-mono mb-4 text-lg">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-[0.5px] text-lightest-slate">
              Jayesh PC.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-[0.5px] text-white mt-2">
              I build customer-centric products.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-white mx-auto md:mx-0">
              Customer Support and Operations Leader transitioning into Product Management, with over 12 years of experience driving customer-centric innovation and cross-functional collaboration in SaaS and service environments. Proven record of leading global teams, translating customer insights into actionable product improvements, and partnering with Product, Engineering, and Design teams to build impactful solutions. Passionate about leveraging data, empathy, and process excellence to shape products that enhance customer experience and business growth.
            </p>
          </div>

          <div className="md:col-span-2 flex flex-col justify-center items-center order-1 md:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-green/20 rounded-full blur-2xl"></div>
              <img 
                src="https://assets.experience.com/campaigns/15933/Screenshot2025-10-23at3_1762365467323.22_1762365467323.05AM_1762365467323.png" 
                alt="Jayesh PC" 
                className="relative rounded-full w-full h-full object-cover border-4 border-green/50 shadow-xl"
              />
            </div>
            <div className="mt-4 text-center">
                <a 
                    href="#skills" 
                    onClick={handleScrollToSkills}
                    className="group inline-flex items-center bg-transparent border border-green text-green font-mono text-base px-6 py-3 rounded hover:bg-green/10 transition-colors duration-300 whitespace-nowrap"
                    aria-label="View my skills and competencies"
                >
                    View My Skills & Competencies
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;