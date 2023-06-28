import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsLogin } from 'store/slice/user/selectors';
// import { selectAuth } from 'store/slice/auth/selectors';

function PublicRouter() {
  return <Outlet />;
}
export default PublicRouter;
