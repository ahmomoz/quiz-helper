import React from 'react';
import { cn } from '../../utils/cn';

interface BentoCardProps {
  children: React.ReactNode;
  color?: string; // Optional override
  className?: string;
  title?: string;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, color, className = '', title }) => {
  return (
    <div
      className={cn(
        `
      border-[3px] border-theme-border 
      shadow-[8px_8px_0px_0px_var(--color-border)] 
      p-6 
      text-theme-text
      ${color ? color : 'bg-theme-surface'}
    `,
        className,
      )}
    >
      {title && (
        <h3 className="text-xl font-black mb-4 uppercase tracking-tighter flex items-center gap-2">
          <span className="w-3 h-3 bg-theme-border rounded-full"></span>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};
