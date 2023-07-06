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
import { Guide } from './pages/Guide/Loadable';
import RegisterTelegram from './pages/Guide/RegisterTelegram';
import RegisterPhoneNumber from './pages/Guide/RegisterPhoneNumber';
import LoginPhoneNumber from './pages/Guide/LoginPhoneNumber';
import LoginTelegram from './pages/Guide/LoginTelegram';
import Booking from './pages/Guide/Booking';
import CreateBranch from './pages/Guide/CreateBranch';
import CreateStore from './pages/Guide/CreateStore';
import Serve from './pages/Guide/Serve';
import RefuseOrder from './pages/Guide/RefuseOrder';
import MoreStaff from './pages/Guide/MoreStaff';
import CreateService from './pages/Guide/CreateService';
import MoreOffers from './pages/Guide/MoreOffers';
import EditProfile from './pages/Guide/EditProfile';
import LayoutGuide from './layouts/LayoutGuide';
import { useSystemSlice } from '@store/slice/system';

export function App() {
  const { i18n } = useTranslation();
  useSystemSlice();

  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - React Boilerplate" defaultTitle="React Boilerplate" htmlAttributes={{ lang: i18n.language }}>
        <meta name="description" content="A React Boilerplate application" />
      </Helmet>

      <Routes>
        <Route path="/" element={<PublicRouter />}>
          <Route element={<LayoutDefault />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<div>contact</div>} />
          </Route>

          <Route element={<LayoutGuide />}>
            <Route path="/guide" element={<Guide />}>
              <Route path="register-telegram" element={<RegisterTelegram />}></Route>
              <Route path="register-phone" element={<RegisterPhoneNumber />}></Route>
              <Route path="login-phone" element={<LoginPhoneNumber />}></Route>
              <Route path="login-telegram" element={<LoginTelegram />}></Route>
              <Route path="booking" element={<Booking />}></Route>
              <Route path="branch" element={<CreateBranch />}></Route>
              <Route path="store" element={<CreateStore />}></Route>
              <Route path="serve" element={<Serve />}></Route>
              <Route path="order" element={<RefuseOrder />}></Route>
              <Route path="staff" element={<MoreStaff />}></Route>
              <Route path="services" element={<CreateService />}></Route>
              <Route path="offers" element={<MoreOffers />}></Route>
              <Route path="edit-profile" element={<EditProfile />}></Route>
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
