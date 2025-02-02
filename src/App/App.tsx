import { Suspense, useEffect } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { AppPreloader } from '../components';
import { useLocales, useTheme } from '../hooks';
import AppProvider from './AppProvider';
import AppRouter from './AppRouter';

import 'dayjs/locale/en';
import 'dayjs/locale/cs';
import '../i18n';

const queryClient = new QueryClient();

const App = () => {
  const { init: initLocales, locale } = useLocales();
  const { init: initTheme } = useTheme();

  useEffect(() => {
    initLocales();
    initTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<AppPreloader />}>
      <QueryClientProvider client={queryClient}>
        <AppProvider locale={locale}>
          <AppRouter />
        </AppProvider>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
