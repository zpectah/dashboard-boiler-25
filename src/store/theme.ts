import { create } from 'zustand';
import { ThemeMode } from '../types';
import { THEME_STORAGE_KEY } from '../constants';

interface ThemeStore {
  mode: ThemeMode;
  setMode: (locale: ThemeMode) => void;
}

const useThemeStore = create<ThemeStore>((set) => {
  const current = window.localStorage.getItem(THEME_STORAGE_KEY) ?? 'light';

  const setModeHandler = (mode: ThemeMode) => {
    set({ mode });
    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  };

  return {
    mode: current as ThemeMode,
    setMode: setModeHandler,
  };
});

export default useThemeStore;
