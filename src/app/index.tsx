/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { useUserSlice } from 'store/slice/user';
import LayoutDefault from './layouts/LayoutDashboard';
import PublicRouter from './routers/PublicRouter';
import { HomePage } from './pages/HomePage/Loadable';

export function App() {
  const { i18n } = useTranslation();
  useUserSlice();

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - React Boilerplate" defaultTitle="React Boilerplate" htmlAttributes={{ lang: i18n.language }}>
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
