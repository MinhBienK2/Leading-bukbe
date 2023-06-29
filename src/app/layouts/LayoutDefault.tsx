import React from 'react';
import { createStyles } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import Header from '@app/components/Header';

type Props = {};

const LayoutDashboard = (props: Props) => {
  const { classes } = useStyle();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutDashboard;

const useStyle = createStyles(() => ({}));
