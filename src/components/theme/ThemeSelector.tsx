import { useState } from 'react';
import { Settings, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { THEMES } from '@/styles/themes';
import { NeoButton } from '@/components/ui/NeoButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { cn } from '@/utils/cn';

export const ThemeSelector: React.FC = () => {
  const { theme, setThemeId } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <NeoButton
        onClick={toggleOpen}
        color="bg-theme-surface"
        className="px-3 py-2 shadow-[2px_2px_0px_0px_var(--color-border)]"
      >
        <Settings size={20} />
      </NeoButton>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 z-50 w-64 animate-in fade-in zoom-in-95 duration-200">
          <BentoCard className="shadow-[4px_4px_0px_0px_var(--color-border)] p-4" title="選擇主題">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 p-1 hover:bg-black/10 rounded"
            >
              <X size={16} />
            </button>

            <div className="space-y-2 mt-4">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setThemeId(t.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    'w-full text-left px-3 py-2 border-2 border-theme-border font-bold flex items-center gap-3 transition-transform hover:translate-x-1 hover:-translate-y-1',
                    theme.id === t.id ? 'bg-theme-secondary ring-2 ring-black' : 'bg-theme-surface',
                  )}
                  style={{
                    // Preview dots using the theme's actual colors
                    borderColor: t.colors.border,
                  }}
                >
                  <div className="flex gap-1">
                    <div
                      className="w-3 h-3 rounded-full border border-black"
                      style={{
                        backgroundColor: t.colors.primary,
                      }}
                    />
                    <div
                      className="w-3 h-3 rounded-full border border-black"
                      style={{
                        backgroundColor: t.colors.secondary,
                      }}
                    />
                    <div
                      className="w-3 h-3 rounded-full border border-black"
                      style={{
                        backgroundColor: t.colors.accent,
                      }}
                    />
                  </div>
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
          </BentoCard>
        </div>
      )}

      {/* Backdrop to close on click outside */}
      {isOpen && <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />}
    </div>
  );
};
