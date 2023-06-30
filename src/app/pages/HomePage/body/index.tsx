import { Box, Center, Stack, createStyles } from '@mantine/core';
import React from 'react';
import { ListCard } from './ListCard';
import Utilities from './Utilities';
import EffectiveManagement from './EffectiveManagement';
import CardInfo4 from './Statistical';
import Contact from './Contact';
import { CardInfo6 } from './cardInfo6';
import { images } from '@assets/images';
import media from '@media';

interface InPropsStyle {}

export const Body = () => {
  const { classes } = createStyleProps({});
  return (
    <Stack className={classes.container}>
      <ListCard></ListCard>
      <Utilities></Utilities>
      <EffectiveManagement></EffectiveManagement>
      <CardInfo4></CardInfo4>
      <Contact></Contact>
    </Stack>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  container: {
    width: '100%',
    gap: 0,
    background: `url(${images.bgall})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: ' 100%',

    [media.small]: {
      background: 'var(--white)',
    },
  },
}));
