import React, { useState } from 'react';
import Section from './Section';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = 'jayeshpc12@gmail.com';
  const phoneNumber = '+91 89393 54500';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link as direct fallback
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Section 
      id="contact" 
      badge="Let's Connect"
      title="Get In Touch" 
      subtitle="Currently open to Product Management roles, advisory discussions, and customer retention collaborations."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Action Buttons & Information */}
        <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold font-heading text-lightest-slate">
              Let's build something remarkable.
            </h3>
            <p className="mt-2 text-sm text-slate leading-relaxed">
              Whether you are hiring for a Product Manager, exploring retention strategies, or simply want to chat about customer-led growth, my inbox is always open.
            </p>
          </div>

          {/* Quick Connect Actions */}
          <div className="space-y-3 pt-2">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918939354500"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-accent/10 hover:bg-emerald-accent/20 border border-emerald-accent/30 text-emerald-accent font-mono text-xs font-semibold transition-all group"
            >
              <div className="flex items-center space-x-3">
                <WhatsAppIcon className="w-5 h-5 text-emerald-accent" />
                <span>Chat Directly on WhatsApp</span>
              </div>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/jayeshpc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl bg-dark-surface hover:bg-white/[0.04] border border-white/[0.08] text-lightest-slate font-mono text-xs transition-all group"
            >
              <div className="flex items-center space-x-3">
                <LinkedInIcon className="w-5 h-5 text-cyan-accent" />
                <span>linkedin.com/in/jayeshpc</span>
              </div>
              <span className="text-slate group-hover:text-emerald-accent transition-colors">↗</span>
            </a>

            {/* Email with Copy Action */}
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-dark-surface border border-white/[0.08] text-lightest-slate font-mono text-xs">
              <a 
                href={`mailto:${emailAddress}`}
                className="flex items-center space-x-3 hover:text-emerald-accent transition-colors flex-grow truncate"
              >
                <MailIcon className="w-5 h-5 text-emerald-accent flex-shrink-0" />
                <span className="truncate">{emailAddress}</span>
              </a>
              <button
                onClick={handleCopyEmail}
                className="ml-2 px-2.5 py-1 rounded-md text-[11px] bg-white/[0.06] hover:bg-emerald-accent hover:text-dark-base text-slate transition-all flex-shrink-0"
                title="Copy email to clipboard"
              >
                {copied ? '✓ Copied!' : 'Copy'}
              </button>
            </div>

            {/* Phone */}
            <a
              href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
              className="flex items-center justify-between p-3.5 rounded-xl bg-dark-surface hover:bg-white/[0.04] border border-white/[0.08] text-lightest-slate font-mono text-xs transition-all"
            >
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-indigo-400" />
                <span>{phoneNumber}</span>
              </div>
              <span className="text-slate hover:text-emerald-accent">Call</span>
            </a>
          </div>

          {/* Toast Notification for Clipboard */}
          {copied && (
            <div className="p-3 rounded-xl bg-emerald-accent/20 border border-emerald-accent/40 text-emerald-accent text-xs font-mono text-center animate-fadeIn">
              ✓ Email copied to clipboard ({emailAddress})
            </div>
          )}

          <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-slate">
            <span>Based in Chennai, India • Open to Global & Remote Roles</span>
          </div>
        </div>

        {/* Right Column: Quick Contact Form */}
        <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl font-bold font-heading text-lightest-slate mb-1">
            Send a Direct Message
          </h3>
          <p className="text-xs font-mono text-slate mb-6">
            Fill in your details to launch a direct mail conversation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full bg-dark-surface border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-lightest-slate placeholder-slate/40 focus:outline-none focus:border-emerald-accent/60 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-dark-surface border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-lightest-slate placeholder-slate/40 focus:outline-none focus:border-emerald-accent/60 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Product Role / Project Discussion"
                className="w-full bg-dark-surface border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-lightest-slate placeholder-slate/40 focus:outline-none focus:border-emerald-accent/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate mb-1.5">
                Message *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Hi Jayesh, I came across your portfolio and would love to discuss..."
                className="w-full bg-dark-surface border border-white/[0.1] rounded-xl px-4 py-2.5 text-sm text-lightest-slate placeholder-slate/40 focus:outline-none focus:border-emerald-accent/60 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-emerald-accent text-dark-base hover:bg-emerald-accent/90 shadow-glow-emerald transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <span>→</span>
            </button>

            {submitted && (
              <div className="p-3 rounded-xl bg-emerald-accent/10 border border-emerald-accent/30 text-emerald-accent text-xs font-mono text-center animate-fadeIn">
                ✓ Message window launched! I will respond promptly.
              </div>
            )}
          </form>
        </div>

      </div>
    </Section>
  );
};

export default Contact;