import React from 'react';

import { ConfigProvider } from 'antd';
import enUS from 'antd/lib/locale/en_US';
import zhTW from 'antd/lib/locale/zh_TW';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppRouter } from './components/router/AppRouter';
import { useAppSelector } from './hooks/reduxHooks';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { useLanguage } from './hooks/useLanguage';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import GlobalStyle from './styles/GlobalStyle';
import { themeObject } from './styles/themes/themeVariables';

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
  import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
    (d) => ({
      default: d.ReactQueryDevtools,
    })
  )
);

const App: React.FC = () => {
  const [showDevtools, setShowDevtools] = React.useState(
    process.env.NODE_ENV === 'development'
  );

  const { language } = useLanguage();
  const theme = useAppSelector((state) => state.theme.theme);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)['toggleDevtools'] = () => setShowDevtools((old) => !old);
  }, []);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <QueryClientProvider client={queryClient}>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <ConfigProvider locale={language === 'en' ? enUS : zhTW}>
        <AppRouter />
      </ConfigProvider>

      <ReactQueryDevtools initialIsOpen />
      {showDevtools && (
        <React.Suspense fallback={null}>
          <ReactQueryDevtoolsProduction />
        </React.Suspense>
      )}
    </QueryClientProvider>
  );
};

export default App;
