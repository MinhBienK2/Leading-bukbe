import React from 'react';
import { Box, createStyles } from '@mantine/core';
import { Outlet } from 'react-router-dom';

import Header from '@app/components/Header';
import media from '@media';
import { Footer } from '@app/components/Footer';

type Props = {};

const LayoutGuide = (props: Props) => {
  const { classes } = useStyle();

  return (
    <>
      <Header />

      <Box className={classes.box}>
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutGuide;

const useStyle = createStyles(() => ({
  box: {
    marginTop: 100,
    [media.small]: {
      marginTop: 42,
    },
  },
}));
