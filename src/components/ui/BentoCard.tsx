import React from 'react';
import { cn } from '@/utils/cn';

type CardVariant = 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'info';

interface BentoCardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  className?: string;
  title?: string;
}

const VARIANT_STYLES: Record<CardVariant, string> = {
  default: 'bg-theme-surface',
  primary: 'bg-theme-primary',
  secondary: 'bg-theme-secondary',
  accent: 'bg-theme-accent',
  success: 'bg-green-200',
  info: 'bg-purple-400',
};

export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  variant = 'default',
  className = '',
  title,
}) => {
  return (
    <div
      className={cn(
        `
      border-[3px] border-theme-border 
      shadow-[8px_8px_0px_0px_var(--color-border)] 
      p-6 
      text-theme-text
      ${VARIANT_STYLES[variant]}
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
