'use client';

import { FaMoon, FaSun, FaDesktop } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import dynamic from 'next/dynamic';

function ThemeToggleComponent() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <FaSun className="h-4 w-4" />;
      case 'dark':
        return <FaMoon className="h-4 w-4" />;
      default:
        return <FaDesktop className="h-4 w-4" />;
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="h-9 w-9 p-0"
    >
      {getIcon()}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

export const ThemeToggle = dynamic(() => Promise.resolve(ThemeToggleComponent), {
  ssr: false,
  loading: () => (
    <Button
      variant="ghost"
      size="sm"
      className="h-9 w-9 p-0"
      disabled
    >
      <FaDesktop className="h-4 w-4" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  ),
});