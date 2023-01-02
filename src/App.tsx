import React from 'react';

import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';

import { AppRouter } from './components/router/AppRouter';
import { useAppSelector } from './hooks/reduxHooks';
import { useAutoNightMode } from './hooks/useAutoNightMode';
import { useLanguage } from './hooks/useLanguage';
import { usePWA } from './hooks/usePWA';
import { useThemeWatcher } from './hooks/useThemeWatcher';
import GlobalStyle from './styles/GlobalStyle';
import { themeObject } from './styles/themes/themeVariables';

const App: React.FC = () => {
  const { language } = useLanguage();
  const theme = useAppSelector((state) => state.theme.theme);

  usePWA();

  useAutoNightMode();

  useThemeWatcher();

  return (
    <>
      <meta name="theme-color" content={themeObject[theme].primary} />
      <GlobalStyle />
      <ConfigProvider locale={language === 'en' ? enUS : deDe}>
        <AppRouter />
      </ConfigProvider>
    </>
  );
};

export default App;
