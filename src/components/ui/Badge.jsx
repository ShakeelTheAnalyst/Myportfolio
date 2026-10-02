import React from 'react';

export default function Badge({
  children,
  variant = 'purple',
  size = 'sm',
  className = '',
  icon: Icon
}) {
  const sizeStyles = {
    xs: "px-2 py-0.5 text-[11px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
  };

  const variantStyles = {
    purple: "bg-purple-950/60 text-purple-300 border-purple-500/40 hover:border-purple-400/60 shadow-purple-glow-sm",
    fuchsia: "bg-fuchsia-950/60 text-fuchsia-300 border-fuchsia-500/40 hover:border-fuchsia-400/60 shadow-fuchsia-glow-sm",
    indigo: "bg-indigo-950/60 text-indigo-300 border-indigo-500/40 hover:border-indigo-400/60",
    emerald: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40 hover:border-emerald-400/60 shadow-emerald-glow-sm",
    neutral: "bg-white/[0.04] text-gray-300 border-white/[0.08] hover:border-white/20",
    amber: "bg-amber-950/60 text-amber-300 border-amber-500/40 hover:border-amber-400/60"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md border backdrop-blur-xs transition-colors duration-200 ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.purple} ${className}`}
    >
      {Icon && <Icon className="w-3 h-3 flex-shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
