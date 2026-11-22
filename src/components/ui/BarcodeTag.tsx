import React from 'react';
import { asset } from '../../utils/assets';

export interface BarcodeTagProps {
  className?: string;
  animatedLaser?: boolean;
}

export const BarcodeTag: React.FC<BarcodeTagProps> = ({
  className = '',
  animatedLaser = true,
}) => {
  return (
    <div
      className={`relative select-none transition-all duration-300 hover:rotate-[2deg] hover:scale-[1.02] ${className}`}
    >
      <img
        src={asset('illustrations/barcode-hangtag.svg')}
        alt="Retail Barcode Garment Tag"
        className="w-full max-w-[200px] h-auto drop-shadow-2xl pointer-events-none"
        loading="lazy"
      />
      {animatedLaser && (
        <div className="absolute inset-x-8 bottom-12 h-0.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-laser pointer-events-none" />
      )}
    </div>
  );
};

