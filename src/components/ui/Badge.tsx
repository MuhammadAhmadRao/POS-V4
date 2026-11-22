import React from 'react';

export interface KickerBadgeProps {
  label: string;
  accentColor?: string;
  className?: string;
  dark?: boolean;
}

export const KickerBadge: React.FC<KickerBadgeProps> = ({
  label,
  accentColor = 'currentColor',
  className = '',
  dark = false,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] select-none ${
        dark ? 'text-neutral-400' : 'text-neutral-500'
      } ${className}`}
    >
      <span
        className="w-1.5 h-1.5 rounded-[1px] shrink-0"
        style={{ backgroundColor: accentColor }}
      />
      <span>{label}</span>
    </div>
  );
};

