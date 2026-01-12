import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-theme-background p-4 md:p-8 font-sans selection:bg-theme-secondary relative overflow-hidden transition-colors duration-300">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(var(--color-text) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </div>
  );
};
