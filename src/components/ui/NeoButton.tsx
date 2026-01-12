import React from 'react';
import { cn } from '../../utils/cn'; // I'll create this utility next

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  activeColor?: string;
}

export const NeoButton: React.FC<NeoButtonProps> = ({
  children,
  onClick,
  color = 'bg-yellow-400',
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
        px-6 py-3 font-black uppercase border-[3px] border-black 
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] 
        active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
        transition-all duration-75 flex items-center justify-center gap-2
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
        ${color}
      `,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
