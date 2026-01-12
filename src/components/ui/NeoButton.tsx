import React from 'react';
import { cn } from '@/utils/cn';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'danger';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-theme-primary',
  secondary: 'bg-theme-secondary',
  accent: 'bg-theme-accent',
  danger: 'bg-red-400 text-black',
};

export const NeoButton: React.FC<NeoButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
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
        ${VARIANT_STYLES[variant]}
      `,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
