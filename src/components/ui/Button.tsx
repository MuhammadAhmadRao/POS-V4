import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost' | 'pill' | 'emerald' | 'rose' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-full gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-full gap-2',
    lg: 'text-base px-7 py-3.5 rounded-full gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-xl hover:shadow-blue-600/20 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-blue-600',
    dark: 'bg-neutral-900 hover:bg-black text-white shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-neutral-900',
    outline: 'bg-transparent hover:bg-neutral-100 text-neutral-900 border border-neutral-300 active:scale-[0.98] focus-visible:ring-neutral-400',
    ghost: 'bg-transparent hover:bg-neutral-100/80 text-neutral-700 hover:text-neutral-950 active:scale-[0.98]',
    pill: 'bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200/80 shadow-sm hover:shadow active:scale-[0.98]',
    emerald: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md hover:shadow-emerald-600/20 active:scale-[0.98]',
    rose: 'bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-rose-600/20 active:scale-[0.98]',
    amber: 'bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-amber-600/20 active:scale-[0.98]',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

