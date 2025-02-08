import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { WithChildren } from '../types';
import { AppDefinitionContextProvider } from '../context';
import { useAppDefinition } from '../hooks';
import theme from '../styles/theme';

interface AppProviderProps extends WithChildren {
  locale?: string;
}

const AppProvider = ({ children, locale }: AppProviderProps) => {
  const appDefinition = useAppDefinition();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
        <AppDefinitionContextProvider value={appDefinition}>{children}</AppDefinitionContextProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
