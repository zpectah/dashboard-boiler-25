import { create } from 'zustand';
import { Locale } from '../types';
import { LOCALES_STORAGE_KEY } from '../constants';

interface LocalesStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const useLocalesStore = create<LocalesStore>((set) => {
  const current = window.localStorage.getItem(LOCALES_STORAGE_KEY) ?? 'en';

  const setLocalesHandler = (locale: string) => {
    set({ locale });
    window.localStorage.setItem(LOCALES_STORAGE_KEY, locale);
  };

  return {
    locale: current,
    setLocale: setLocalesHandler,
  };
});

export default useLocalesStore;
