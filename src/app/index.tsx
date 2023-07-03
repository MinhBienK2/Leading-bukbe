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
import LayoutDefault from './layouts/LayoutDefault';
import PublicRouter from '@app/routers/PublicRouter';
import { HomePage } from '@pages/HomePage/Loadable';
import Guide from './pages/Guide';

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

            <Route path="/guide" element={<Guide />}>
              <Route path="1" element={<div>Hello1</div>}></Route>
              <Route path="2" element={<div>Hello2</div>}></Route>
              <Route path="3" element={<div>Hello2</div>}></Route>
              <Route path="4" element={<div>Hello3</div>}></Route>
              <Route path="5" element={<div>Hello4</div>}></Route>
              <Route path="6" element={<div>Hello5</div>}></Route>
              <Route path="7" element={<div>Hell7o</div>}></Route>
              <Route path="8" element={<div>Hel6lo</div>}></Route>
              <Route path="9" element={<div>Hel9lo</div>}></Route>
              <Route path="10" element={<div>He0llo</div>}></Route>
              <Route path="11" element={<div>He-llo</div>}></Route>
              <Route path="12" element={<div>Hel67lo</div>}></Route>
              <Route path="13" element={<div>Hel56lo</div>}></Route>
            </Route>
            <Route path="/contact" element={<div>contact</div>} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}
