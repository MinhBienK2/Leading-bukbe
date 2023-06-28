import { Box, Group, createStyles } from '@mantine/core';
import { relative } from 'path';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { media } from 'styles/media';

type Props = {};

const LayoutDashboard = (props: Props) => {
  const { classes } = useStyle();

  return (
    <>
      <Outlet />
    </>
  );
};

export default LayoutDashboard;

const useStyle = createStyles(() => ({}));
