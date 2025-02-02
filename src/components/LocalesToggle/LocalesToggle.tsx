import { useTranslation } from 'react-i18next';
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
      <button onClick={() => setLocaleHandler('en')}>en {locale === 'en' && '*'}</button>
      <button onClick={() => setLocaleHandler('cs')}>cs {locale === 'cs' && '*'}</button>
    </>
  );
};

export default LocalesToggle;
