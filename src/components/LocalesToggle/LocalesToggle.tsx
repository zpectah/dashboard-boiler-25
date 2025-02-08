import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import config from '../../config';
import { useLocales } from '../../hooks';
import { LOCALES_NAME } from '../../constants';

const LocalesToggle = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { i18n } = useTranslation();
  const { locale, setLocales } = useLocales();

  const open = Boolean(anchorEl);
  const currentLocaleName = LOCALES_NAME[locale];
  const idPrefix = 'locale-toggle';

  const openHandler = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const closeHandler = () => setAnchorEl(null);
  const setLocaleHandler = (locale: string) =>
    i18n.changeLanguage(locale).then(() => {
      setLocales(locale);
      closeHandler();
    });

  return (
    <>
      <Tooltip title={currentLocaleName}>
        <IconButton
          id={`${idPrefix}-trigger`}
          onClick={openHandler}
          aria-controls={open ? `${idPrefix}-menu` : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id={`${idPrefix}-menu`}
        open={open}
        onClose={closeHandler}
        MenuListProps={{
          'aria-labelledby': `${idPrefix}-trigger`,
        }}
      >
        {config.app.locales.available.map((loc) => (
          <MenuItem key={loc} onClick={() => setLocaleHandler(loc)} selected={locale === loc}>
            {LOCALES_NAME[loc]}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocalesToggle;
