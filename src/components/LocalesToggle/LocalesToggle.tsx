import { useTranslation } from 'react-i18next';
import config from '../../config';
import { useLocales } from '../../hooks';

const LocalesToggle = () => {
  const { locale, setLocales } = useLocales();
  const { i18n } = useTranslation();

  const setLocaleHandler = (locale: string) => {
    i18n.changeLanguage(locale);
    setLocales(locale);
  };

  return (
    <>
      {config.app.locales.available.map((loc) => (
        <button key={loc} onClick={() => setLocaleHandler(loc)}>
          {loc} {locale === loc && '*'}
        </button>
      ))}
    </>
  );
};

export default LocalesToggle;
