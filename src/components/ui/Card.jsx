import React from 'react';

export default function Card({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  ...props
}) {
  return (
    <div
      className={`relative rounded-2xl p-5 md:p-6 transition-all duration-300 ${
        hoverEffect ? 'glass-card-hover' : ''
      } ${
        glow ? 'shadow-purple-glow-sm' : ''
      } bg-gradient-to-b from-[#0F0C1B]/90 to-[#0A0814]/85 backdrop-blur-xl border border-purple-500/15 text-gray-100 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
