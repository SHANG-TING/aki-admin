import './i18n';
import './styles/themes/main.less';

import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from '@app/store/store';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
