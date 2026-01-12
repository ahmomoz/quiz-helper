import React from 'react';
import { NeoButton } from '@/components/ui/NeoButton';
import { UI_TEXT } from '@/constants/text';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 border-t-[3px] border-theme-border flex flex-col md:flex-row justify-between items-center gap-4 text-theme-text">
      <p className="font-black uppercase">{UI_TEXT.footer.copyright}</p>
      <div className="flex gap-4">
        <NeoButton
          color="bg-theme-surface"
          className="px-3 py-1 text-xs shadow-[2px_2px_0px_0px_var(--color-border)]"
        >
          {UI_TEXT.footer.github}
        </NeoButton>
        <NeoButton
          color="bg-theme-surface"
          className="px-3 py-1 text-xs shadow-[2px_2px_0px_0px_var(--color-border)]"
        >
          {UI_TEXT.footer.portfolio}
        </NeoButton>
      </div>
    </footer>
  );
};
