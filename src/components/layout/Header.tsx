import React from 'react';
import { ThemeSelector } from '@/components/theme/ThemeSelector';
import { BentoCard } from '@/components/ui/BentoCard';
import { UI_TEXT } from '@/constants/printText';

interface HeaderProps {
  currentIdx: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({ currentIdx, totalQuestions }) => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
      <div>
        <div className="inline-block bg-theme-text text-theme-background px-3 py-1 text-sm font-bold mb-2">
          {UI_TEXT.header.tagline}
        </div>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase text-theme-text">
          {UI_TEXT.header.title.line1}
          <br />
          {UI_TEXT.header.title.line2}
        </h1>
      </div>

      <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">
        <div className="self-end">
          <ThemeSelector />
        </div>
        <BentoCard color="bg-theme-accent" className="w-full md:w-64 py-4 px-6">
          <div className="flex items-center justify-between">
            <span className="font-black">{UI_TEXT.header.progress}</span>
            <span className="font-black text-2xl">
              {currentIdx + 1} / {totalQuestions}
            </span>
          </div>
          <div className="w-full h-4 border-[2px] border-theme-border mt-2 bg-theme-surface">
            <div
              className="h-full bg-theme-text transition-all duration-500"
              style={{
                width: `${((currentIdx + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </BentoCard>
      </div>
    </header>
  );
};
