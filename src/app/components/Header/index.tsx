import { Group, createStyles } from '@mantine/core';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  const { classes } = useStyle();

  return <Group position="apart"></Group>;
};

export default Header;

const useStyle = createStyles(() => ({
  headerBox: {
    maxWidth: '100%',
    width: '100%',
    height: '100px',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1111,
  },
}));
