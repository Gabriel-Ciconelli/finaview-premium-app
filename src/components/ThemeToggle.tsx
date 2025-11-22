'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-[#1A1A1A] border border-gray-300 dark:border-[#252525] hover:border-blue-500 dark:hover:border-blue-500 transition-all"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-blue-500" />
      ) : (
        <Moon className="w-5 h-5 text-blue-500" />
      )}
    </button>
  );
}
