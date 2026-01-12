import React from 'react';
import { cn } from '../../utils/cn';

interface BentoCardProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  title?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  color = 'bg-white',
  className = '',
  title,
}) => {
  return (
    <div
      className={cn(
        `border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 ${color}`,
        className,
      )}
    >
      {title && (
        <h3 className="text-xl font-black mb-4 uppercase tracking-tighter flex items-center gap-2">
          <span className="w-3 h-3 bg-black rounded-full"></span>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
