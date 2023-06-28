import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLogin } from 'store/slice/user/selectors';

function PrivateRouter() {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);

  // return isLogin ? <Outlet /> : <Navigate to="/login" />;
  return <Outlet />;
}
export default PrivateRouter;
