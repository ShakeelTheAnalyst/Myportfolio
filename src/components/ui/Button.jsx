import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  download,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070D] disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 font-medium tracking-wide",
    md: "px-5 py-2.5 text-sm gap-2 font-semibold",
    lg: "px-6 py-3 text-base gap-2.5 font-semibold",
  };

  const variantStyles = {
    primary: "bg-purple-600 hover:bg-purple-500 text-white font-bold shadow-md shadow-purple-600/30 hover:shadow-purple-500/40 hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]",
    secondary: "border border-purple-500/25 hover:border-purple-400/50 bg-[#161226]/80 hover:bg-[#1E1833] text-purple-200 hover:text-white backdrop-blur-md hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.98]",
    outline: "border border-white/10 hover:border-purple-500/40 text-gray-300 hover:text-white bg-transparent active:scale-[0.98]",
    ghost: "text-gray-400 hover:text-purple-300 hover:bg-purple-950/30 active:scale-[0.98]",
    glow: "bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-purple-600/30 active:scale-[0.98]"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel}
        download={download}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={size === 'sm' ? "w-3.5 h-3.5" : "w-4 h-4"} />}
    </button>
  );
}
