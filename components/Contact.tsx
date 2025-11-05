
import React from 'react';
import Section from './Section';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch" className="pt-0 md:pt-0">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg text-slate mb-6">
          I'm currently open to new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        <a 
          href="https://wa.me/918939354500" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-transparent border border-green text-green font-mono text-lg px-8 py-4 rounded hover:bg-green/10 transition-colors duration-300"
        >
          Say Hello
        </a>
        <div className="flex flex-col items-center space-y-6 mt-12 font-mono text-light-slate">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <a href="https://linkedin.com/in/jayeshpc" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate hover:text-green transition-colors duration-300" aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6 mr-3"/>
              <span>linkedin.com/in/jayeshpc</span>
            </a>
            <a href="mailto:jayeshpc12@gmail.com" className="flex items-center text-slate hover:text-green transition-colors duration-300" aria-label="Email">
              <MailIcon className="w-6 h-6 mr-3"/>
              <span>jayeshpc12@gmail.com</span>
            </a>
          </div>
           <a href="tel:+918939354500" className="flex items-center text-slate hover:text-green transition-colors duration-300" aria-label="Phone">
            <PhoneIcon className="w-6 h-6 mr-3"/>
            <span>+91 89393 54500</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;