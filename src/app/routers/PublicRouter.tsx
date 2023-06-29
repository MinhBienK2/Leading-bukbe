import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Header from '@app/components/Header';

function PublicRouter() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
export default PublicRouter;
