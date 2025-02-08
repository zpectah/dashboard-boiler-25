import { useTranslation } from 'react-i18next';
import { useLocalesStore } from '../store';
import { LOCALES_STORAGE_KEY } from '../constants';

export const useLocales = () => {
  const { i18n } = useTranslation();
  const { locale, setLocale } = useLocalesStore();

  const initHandler = () => {
    const current = window.localStorage.getItem(LOCALES_STORAGE_KEY) ?? 'en';

    setLocale(current);
    i18n.changeLanguage(current);
  };

  return {
    locale,
    setLocales: setLocale,
    init: initHandler,
  };
};
