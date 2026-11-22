import React from 'react';

export interface ReceiptCardProps {
  className?: string;
  showShadow?: boolean;
  scale?: number;
}

export const ReceiptCard: React.FC<ReceiptCardProps> = ({
  className = '',
  showShadow = true,
}) => {
  return (
    <div
      className={`relative select-none transition-all duration-300 hover:rotate-[-1deg] hover:scale-[1.01] ${
        showShadow ? 'drop-shadow-2xl' : ''
      } ${className}`}
    >
      <img
        src="/illustrations/receipt-template.svg"
        alt="Tactile Perforated Thermal Receipt"
        className="w-full max-w-[280px] h-auto pointer-events-none"
        loading="lazy"
      />
    </div>
  );
};

