import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalData } from '../../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-purple-500/15 bg-[#07070D] py-12 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-500/10">
          
          {/* Left Branding */}
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-indigo-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#07070D] rounded-[10px] flex items-center justify-center font-mono font-bold text-purple-300 text-xs">
                  SNK
                </div>
              </div>
              <span className="font-extrabold text-white text-lg tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-sm">
              {personalData.role} • Transforming data pipelines, statistical insights, and machine learning models into impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl bg-[#0F0C1B] border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1430] transition-all shadow-sm"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl bg-[#0F0C1B] border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1430] transition-all shadow-sm"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalData.socials.email}
              aria-label="Send Email"
              className="p-3 rounded-xl bg-[#0F0C1B] border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1430] transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-mono text-purple-300 hover:text-white transition-all py-2.5 px-4 rounded-xl border border-purple-500/20 hover:border-purple-400 bg-[#0F0C1B] hover:bg-[#1A1430] cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 text-purple-400" />
          </button>
        </div>

        {/* Bottom copyright & tech details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-4 font-normal">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 font-mono text-xs sm:text-sm text-purple-300/70">
            <span>Python</span>
            <span>•</span>
            <span>SQL</span>
            <span>•</span>
            <span>R</span>
            <span>•</span>
            <span>React.js</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
