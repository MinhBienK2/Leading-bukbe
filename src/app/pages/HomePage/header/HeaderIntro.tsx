import { Center, Group, Stack, Text, createStyles } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import React, { useRef } from 'react';

import { images } from 'assets/images';
import { useTranslation } from 'react-i18next';
import media from '@media';
import { FilledButton } from '@app/components/Button/FilledButton';
import EffectTranslation from '@app/components/Animations/EffectTranslation';

export const HeaderIntro = () => {
  const { t } = useTranslation();

  const { classes } = createStyleProps();

  return (
    <Center className={classes.container}>
      <EffectTranslation className={classes.group}>
        <Stack className={classes.stack}>
          <Text className="heading_3 mb-body_4" c={'var(--primary-1)'}>
            Bu
            <Text className="heading_3 mb-body_4" span color="var(--black)">
              kbe
            </Text>{' '}
            {t('Introduce.header.title')}
          </Text>
          <Text span className="body_2 mb-small_5">
            {t('Introduce.header.text')}
          </Text>

          <FilledButton w={242} h={70} mb_h={'32px'} mb_w={'96px'} mt={20}>
            {t('Introduce.header.btnStart')}
          </FilledButton>
        </Stack>
      </EffectTranslation>
    </Center>
  );
};
const createStyleProps = createStyles(() => ({
  container: {
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
    background: `url(${images.bgfullHeader})`,
    backgroundSize: '100%',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
    transition: `all .5s 0.4s linear`,
    willChange: 'auto',

    [media.large]: {
      height: 'calc(100vh - 100px)',
    },
    [media[1184]]: {
      height: 'calc(100vh - 400px)',
    },
    [media[992]]: {
      height: 'calc(100vh - 600px)',
    },
    [media.small]: {
      height: '220px',
    },
  },

  group: {
    maxWidth: 1170,
    width: '100%',
    display: 'flex',
    flexWrap: 'nowrap',
    paddingRight: 16,
    paddingLeft: 16,
  },

  stack: {
    width: 473,
    gap: 0,

    [media.small]: {
      width: 156,
      height: 164,
    },
  },
}));
