import React from 'react';
import { createStyles, Group, Center, Box } from '@mantine/core';

import CardUtils from './components/CardUtils';
import media from '@media';
import { dataCard } from '../data';

interface InPropsStyle {}

export const ListCard = () => {
  const { classes } = createStyleProps({});
  return (
    <Center className={classes.center}>
      <Box className={classes.grid}>
        {!!dataCard.length &&
          dataCard.map(card => (
            <Center key={card.id}>
              <CardUtils id={card.id} icon={card.icon} label={card.label} subLabel={card.subLabel} />
            </Center>
          ))}
      </Box>
    </Center>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  center: {
    width: '100%',
    height: 'calc(100vh - 100px)',
    padding: '30px 0',
    [media[768]]: {
      height: 'auto',
    },
    [media.small]: {
      height: 'auto',
    },
  },
  grid: {
    width: '100%',
    display: 'grid',
    maxWidth: 1170,
    gridTemplateColumns: 'auto auto auto',

    [media[1184]]: {
      paddingRight: 100,
      paddingLeft: 100,
      gridTemplateColumns: 'auto auto',
      rowGap: 30,
    },

    [media[992]]: {
      paddingRight: 0,
      paddingLeft: 0,
      gridTemplateColumns: 'auto auto',
      rowGap: 20,
    },

    [media[768]]: {
      gridTemplateColumns: 'auto',
    },
  },
}));
