import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, Terminal, BarChart2, CheckCircle2, Database, Brain } from 'lucide-react';
import Button from '../ui/Button';
import { personalData } from '../../data/personal';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting effects in purple & fuchsia */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-600/[0.08] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-fuchsia-600/[0.06] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text Content (7 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Availability status badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F0C1B]/90 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-emerald-glow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-semibold">{personalData.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I'm <span className="text-gradient-purple">{personalData.name}</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-200 block mt-2">
                {personalData.role}
              </span>
            </h1>

            {/* Tagline / Bio summary */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {personalData.headline}. Specializing in exploratory data analysis (EDA), predictive models, advanced SQL querying, and enterprise data solutions.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                View Analytics & ML Projects
              </Button>
              <Button
                href={personalData.resumeUrl}
                download="Shakeel_Navaskhan_Resume.pdf"
                variant="secondary"
                size="lg"
                icon={Download}
                className="w-full sm:w-auto"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono text-purple-400/80 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0C1B] border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1430] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#0F0C1B] border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1430] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.email}
                  className="p-2.5 rounded-xl bg-[#0F0C1B] border border-purple-500/20 text-purple-300 hover:text-white hover:border-purple-400 hover:bg-[#1A1430] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Element (5 cols on desktop): Python & Data Science Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px] sm:max-w-[420px]">
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 to-fuchsia-600/30 opacity-70 blur-xl pointer-events-none" />
              
              {/* Main Code & Visual Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#0F0C1B] to-[#0A0814] border border-purple-500/20 shadow-2xl p-4 sm:p-5 space-y-3 backdrop-blur-xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-purple-500/15">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-xs font-medium text-purple-200 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-purple-400" />
                    data_analyst.py
                  </span>
                  <div className="w-4" />
                </div>

                {/* Code Window Body */}
                <div className="font-mono text-xs sm:text-sm space-y-1.5 leading-relaxed text-gray-200">
                  <p className="text-purple-400/60"># Data Scientist & ML Workspace</p>
                  <p>
                    <span className="text-fuchsia-400">import</span> pandas <span className="text-fuchsia-400">as</span> pd
                  </p>
                  <p>
                    <span className="text-fuchsia-400">from</span> sklearn.ensemble <span className="text-fuchsia-400">import</span> RandomForest
                  </p>
                  <p className="pt-1">
                    <span className="text-indigo-400">profile</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">"candidate":</span>{' '}
                    <span className="text-emerald-400">"{personalData.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">"role":</span>{' '}
                    <span className="text-emerald-400">"Data Analyst & Python Dev"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">"stack":</span> [
                    <span className="text-purple-300">"Python"</span>,{' '}
                    <span className="text-purple-300">"SQL"</span>,{' '}
                    <span className="text-purple-300">"Power BI"</span>,{' '}
                    <span className="text-purple-300">"R"</span>
                    ],
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">"internship":</span>{' '}
                    <span className="text-fuchsia-300">"NetworkGeek (Data Science)"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-gray-400">"publication":</span>{' '}
                    <span className="text-purple-300">"MSW Journal (ERP System)"</span>
                  </p>
                  <p>&#125;</p>
                  
                  <div className="pt-2 flex items-center gap-2 text-purple-400">
                    <span className="inline-block w-1.5 h-3.5 bg-purple-400 animate-pulse" />
                    <span className="text-xs text-purple-300/80 font-mono">Pipeline Status: Trained & Validated</span>
                  </div>
                </div>

                {/* Floating Micro-Badge */}
                <div className="pt-2.5 border-t border-purple-500/15 flex items-center justify-between text-xs">
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Academic CGPA: 8.73 / 10
                  </span>
                  <span className="font-mono text-purple-300/70 text-[11px]">AMET University</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Quick Metrics Bar below Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {personalData.stats.map((stat, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-b from-[#0F0C1B]/90 to-[#0A0814]/80 border border-purple-500/20 backdrop-blur-xl text-center hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-black/30"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-purple-200/90 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
