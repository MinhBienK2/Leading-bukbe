/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import { HelmetProvider } from 'react-helmet-async';
import reportWebVitals from 'reportWebVitals';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

// Use consistent styling
import 'sanitize.css/sanitize.css';

import { App } from 'app';
import { configureAppStore } from 'store/configureStore';
import { ErrorBoundary } from 'app/shared/ErrorBoudary';
import * as serviceWorker from './serviceWorker';

// Initialize languages
import './locales/i18n';
// font
import 'styles/font.css';

// Observe loading of Inter (to remove 'Inter', remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Inter', {});

// When Inter is loaded, add a font-family using Inter to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

export const store = configureAppStore();
const persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <PersistGate loading={null} persistor={persistor}>
        <MantineProvider>
          <ErrorBoundary>
            <React.StrictMode>
              <Notifications />
              <App />
            </React.StrictMode>
          </ErrorBoundary>
        </MantineProvider>
      </PersistGate>
    </HelmetProvider>
  </Provider>,
);

// serviceWorker.register({ scope: '/' });

// Hot reloadable translation json files
if (module.hot) {
  module.hot.accept(['./locales/i18n'], () => {
    // No need to render the App again because i18next works with the hooks
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
