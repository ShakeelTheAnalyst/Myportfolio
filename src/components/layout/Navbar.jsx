import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { personalData } from '../../data/personal';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience & Research', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(65);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [isScrolled]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['contact', 'experience', 'projects', 'skills', 'about', 'hero'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isOpen
            ? 'bg-[#07070D] border-b border-purple-500/20 py-3'
            : isScrolled
            ? 'bg-[#07070D]/85 backdrop-blur-xl border-b border-purple-500/15 shadow-lg shadow-black/40 py-3'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-lg"
              aria-label="Shakeel Navaskhan - Back to top"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-indigo-600 p-[1px] shadow-sm group-hover:shadow-purple-glow-sm transition-all duration-300">
                <div className="w-full h-full bg-[#07070D] rounded-[10px] flex items-center justify-center font-mono font-bold text-purple-300 text-xs">
                  SNK
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  {personalData.name}
                </span>
                <span className="font-mono text-[10px] text-purple-400/90 tracking-wider uppercase font-medium">
                  Data Analyst & Python Dev
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 bg-[#0F0C1B]/75 p-1 rounded-full border border-purple-500/20 backdrop-blur-2xl shadow-inner">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-purple-600/25 text-purple-200 border border-purple-500/40 shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                href={personalData.resumeUrl}
                download="Shakeel_Navaskhan_Resume.pdf"
                variant="secondary"
                size="sm"
                icon={FileText}
                className="text-xs lg:text-sm font-semibold"
              >
                Resume
              </Button>
              <Button
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                variant="primary"
                size="sm"
                icon={ArrowRight}
                iconPosition="right"
                className="text-xs lg:text-sm font-semibold"
              >
                Get In Touch
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <Button
                href={personalData.resumeUrl}
                download="Shakeel_Navaskhan_Resume.pdf"
                variant="secondary"
                size="sm"
                icon={FileText}
                className="py-1 px-2.5 text-xs font-semibold"
              >
                Resume
              </Button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl bg-[#0F0C1B] border border-purple-500/30 text-gray-300 hover:text-white hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-purple-400" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Purple Scroll Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 origin-left"
        />
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 md:hidden flex flex-col"
            style={{ zIndex: 9999, top: `${headerHeight}px`, backgroundColor: '#07070D' }}
          >
            <div className="flex-1 flex flex-col justify-between p-5 overflow-y-auto border-t border-purple-500/20">
              <div className="space-y-1.5 pt-1">
                <p className="font-mono text-[10px] text-purple-400/80 uppercase tracking-widest px-3 mb-2">
                  Navigation
                </p>
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.replace('#', '');
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive
                          ? 'bg-purple-950/60 text-purple-200 border border-purple-500/40'
                          : 'text-gray-200 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${
                          isActive ? 'text-purple-400 translate-x-1' : 'text-gray-500'
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              <div className="space-y-3 pb-6 border-t border-purple-500/20 pt-5 mt-5">
                <Button
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  variant="primary"
                  size="md"
                  className="w-full justify-center text-sm font-semibold"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  Contact Shakeel
                </Button>
                <div className="text-center">
                  <span className="font-mono text-[11px] text-purple-300/70">
                    Available for full-time Data Analyst & Python roles
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
