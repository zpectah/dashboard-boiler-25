import { create } from 'zustand';
import { ThemeMode } from '../types';

interface ThemeStore {
  mode: ThemeMode;
  setMode: (locale: ThemeMode) => void;
}

const useThemeStore = create<ThemeStore>((set) => {
  const current = window.localStorage.getItem('APP_THEME_MODE') ?? 'light';

  const setModeHandler = (mode: ThemeMode) => {
    set({ mode });
    window.localStorage.setItem('APP_THEME_MODE', mode);
  };

  return {
    mode: current as ThemeMode,
    setMode: setModeHandler,
  };
});

export default useThemeStore;
