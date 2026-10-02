import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-10 md:mb-14 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-500/35 text-purple-300 font-mono text-[11px] tracking-wider uppercase mb-3.5 shadow-purple-glow-sm ${centered ? 'mx-auto' : ''}`}>
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-purple-400"></span>
          </span>
          <span className="font-semibold">{eyebrow}</span>
        </div>
      )}
      {title && (
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          <span className="text-gradient-heading">{title}</span>
        </h2>
      )}
      {subtitle && (
        <p className={`mt-3 text-sm md:text-base text-gray-300 max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
