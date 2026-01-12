import React from 'react';
import { cn } from '@/utils/cn';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string; // Optional override, defaults to primary
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  children,
  onClick,
  color,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `
        px-6 py-3 font-black uppercase 
        border-[3px] border-theme-border
        shadow-[4px_4px_0px_0px_var(--color-border)]
        active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
        transition-all duration-75 flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
        text-theme-text
        ${color ? color : 'bg-theme-primary'}
      `,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
