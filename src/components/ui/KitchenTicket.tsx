import React from 'react';
import { asset } from '../../utils/assets';

export interface KitchenTicketProps {
  className?: string;
}

export const KitchenTicket: React.FC<KitchenTicketProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative select-none transition-all duration-300 hover:translate-y-[-4px] ${className}`}
    >
      <img
        src={asset('illustrations/restaurant-kitchen-ticket.svg')}
        alt="Restaurant Kitchen Display Ticket"
        className="w-full max-w-[280px] h-auto drop-shadow-xl pointer-events-none"
        loading="lazy"
      />
    </div>
  );
};

