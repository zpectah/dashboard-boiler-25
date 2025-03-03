import { useColorScheme } from '@mui/material/styles';
import { useThemeStore } from '../store';
import { ThemeMode } from '../types';
import { themeModeKeys } from '../enums';
import { THEME_STORAGE_KEY } from '../constants';

export const useTheme = () => {
  const { mode, setMode } = useColorScheme();
  const store = useThemeStore();

  const setModeHandler = (m: ThemeMode) => {
    setMode(m);
    store.setMode(m);
  };

  const toggleModeHandler = () => {
    let val;

    switch (mode) {
      case themeModeKeys.dark:
        val = themeModeKeys.system;
        break;
      case themeModeKeys.light:
        val = themeModeKeys.dark;
        break;
      case themeModeKeys.system:
      default:
        val = themeModeKeys.light;
        break;
    }

    setModeHandler(val as ThemeMode);
  };

  const initHandler = () => {
    const current = window.localStorage.getItem(THEME_STORAGE_KEY) ?? 'light';

    setModeHandler(current as ThemeMode);
  };

  return {
    mode,
    setMode: setModeHandler,
    toggleMode: toggleModeHandler,
    init: initHandler,
  };
};
