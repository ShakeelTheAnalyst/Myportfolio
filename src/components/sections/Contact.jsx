import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, Copy, Check, Linkedin, Github } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { personalData } from '../../data/personal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    const web3formsKey = import.meta.env.VITE_WEB3FORMS_KEY;

    // If Web3Forms key is not provided in env, gracefully open default mail client
    if (!web3formsKey || web3formsKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: `Portfolio Contact: ${formData.subject || 'New Inquiry'}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: '',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      // Graceful fallback to mailto
      const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus({
        submitting: false,
        submitted: false,
        error: `Could not send via web service. Opening your email app directly to reach ${personalData.email}`,
      });
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Collaborate on Data & AI"
          subtitle="Whether you have an analytics project, a data analyst or Python developer role, or want to discuss machine learning applications, my inbox is always open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <Card className="p-6 bg-gradient-to-b from-[#0F0C1B]/95 to-[#0A0814]/90 border-purple-500/20 h-full flex flex-col justify-between shadow-lg shadow-black/30">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1.5 leading-relaxed">
                    Prefer direct communication? Reach out via email, phone, or professional networks.
                  </p>
                </div>

                {/* Email Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#07070D]/80 border border-purple-500/20 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-purple-300 flex items-center gap-1.5 font-medium">
                      <Mail className="w-3.5 h-3.5 text-purple-400" />
                      Email Address
                    </span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs text-purple-300 hover:text-white font-mono flex items-center gap-1 focus-visible:outline-none cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={personalData.socials.email}
                    className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors block break-all font-mono"
                  >
                    {personalData.email}
                  </a>
                </div>

                {/* Phone Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#07070D]/80 border border-purple-500/20 space-y-1.5">
                  <span className="font-mono text-xs text-purple-300 flex items-center gap-1.5 font-medium">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    Mobile / WhatsApp
                  </span>
                  <a
                    href={`tel:${personalData.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors block font-mono"
                  >
                    {personalData.phone}
                  </a>
                </div>

                {/* Location Box */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-[#07070D]/80 border border-purple-500/20 space-y-1.5">
                  <span className="font-mono text-xs text-purple-300 flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    Base Location
                  </span>
                  <p className="text-sm font-semibold text-white font-mono">
                    {personalData.location}
                  </p>
                </div>
              </div>

              {/* Social buttons */}
              <div className="pt-6 border-t border-purple-500/15 flex items-center gap-3">
                <Button
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={Linkedin}
                  className="flex-1"
                >
                  LinkedIn
                </Button>
                <Button
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={Github}
                  className="flex-1"
                >
                  GitHub
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Right Column: Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <Card className="p-6 md:p-8 bg-gradient-to-b from-[#0F0C1B]/95 to-[#0A0814]/90 border-purple-500/20 shadow-lg shadow-black/30">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#07070D]/80 border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#07070D]/80 border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Data Analyst Opportunity / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07070D]/80 border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-purple-300 uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your team, analytical project, or open role..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#07070D]/80 border border-purple-500/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors resize-none"
                  />
                </div>

                {status.submitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                    <span>Thank you! Your message has been prepared/dispatched. Shakeel will respond shortly.</span>
                  </div>
                )}

                {status.error && (
                  <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs">
                    {status.error}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  icon={Send}
                  iconPosition="right"
                  disabled={status.submitting}
                  className="w-full justify-center text-sm font-semibold py-3"
                >
                  {status.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
