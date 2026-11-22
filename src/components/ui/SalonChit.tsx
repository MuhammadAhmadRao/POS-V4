import React from 'react';

export interface SalonChitProps {
  className?: string;
}

export const SalonChit: React.FC<SalonChitProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative select-none transition-all duration-300 hover:translate-y-[-4px] ${className}`}
    >
      <img
        src="/illustrations/salon-appointment-chit.svg"
        alt="Salon Appointment Chit"
        className="w-full max-w-[280px] h-auto drop-shadow-xl pointer-events-none"
        loading="lazy"
      />
    </div>
  );
};

