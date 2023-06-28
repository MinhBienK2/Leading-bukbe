import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { selectIsLogin } from 'store/slice/user/selectors';
// import { selectAuth } from 'store/slice/auth/selectors';

function PublicRouter() {
  const location = useLocation();
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);

  if (isLogin) return location.pathname === '/' ? <Navigate to="/dashboard/game" /> : <Outlet />;
  else return <Navigate to="/login" />;
  // return location.pathname === '/' ? <Navigate to="/dashboard/game" /> : <Outlet />;
}
export default PublicRouter;
