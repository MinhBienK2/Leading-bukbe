import { Box, Center, Flex, Group, Stack, Text, createStyles } from '@mantine/core';
import { useIntersection, useMediaQuery, useWindowScroll } from '@mantine/hooks';
import React, { memo, useCallback, useMemo, useRef } from 'react';

import { dataCard2 } from '../data';
import { IsContent } from './IsContent';
import media from '@media';

import { ReactComponent as ImagePhoneOne } from '@images/homePage/statistical-1.svg';
import { ReactComponent as ImagePhoneTwo } from '@images/homePage/statistical-2.svg';
import { useTranslation } from 'react-i18next';
import { FilledButton } from '@app/components/Button/FilledButton';

const Statistical = () => {
  const { t } = useTranslation();
  const { classes } = createStyleProps();
  const smallThan768 = useMediaQuery('(min-width:768px)');

  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });

  const stylePhoneOne = {
    transition: `all .3s linear`,
    transform: smallThan768
      ? entry?.isIntersecting
        ? 'translateX(0px) scale(1.1)'
        : 'translateX(-50px)'
      : 'translateX(0px) scale(1.1)',
    opacity: smallThan768 ? (entry?.isIntersecting ? 1 : 0) : 1,
    zIndex: 20,
  };

  const stylePhoneTwo = {
    transition: `all .4s 0.4s linear`,
    transform: smallThan768
      ? entry?.isIntersecting
        ? 'translate(-80px,24px) scale(1.1) rotate(27deg)'
        : 'translateX(-170px)'
      : 'translate(-80px,24px) scale(1.1) rotate(27deg)',
    opacity: smallThan768 ? (entry?.isIntersecting ? 1 : 0) : 1,
    zIndex: 10,
  };

  return (
    <Center className={classes.container}>
      <Group className={classes.box}>
        <Group w={'50%'} h={'100%'} className={`${classes.boxLeft} ${classes.resetAnimation}`}>
          <ImagePhoneOne ref={ref} style={stylePhoneOne} className={`${classes.imagePhone}`} />

          <ImagePhoneTwo ref={ref} style={stylePhoneTwo} className={`${classes.imagePhone}`} />
        </Group>

        <Group
          w={'50%'}
          ref={ref}
          sx={{
            transition: `all .4s 0.10s linear`,
            transform: entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
            opacity: entry?.isIntersecting ? 1 : 0,
          }}
          className={`${classes.boxRight} ${classes.resetAnimation}`}
        >
          <Text className="heading_3 mb-subtitle_1">{t('Introduce.body4.title')}</Text>
          <Text className="subtitle_3 mb-body_5">{t('Introduce.body4.text')}</Text>
          <Center w={'100%'} mt={30} sx={{ [media[768]]: { marginTop: 16 } }}>
            <FilledButton w={242} h={70} mb_w="192px" mb_h="40px" fz={'20px'}>
              {t('Introduce.btnGOBurkbe')}
            </FilledButton>
          </Center>
        </Group>
      </Group>
    </Center>
  );
};

const createStyleProps = createStyles(() => ({
  container: {
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

  box: {
    width: '100%',
    maxWidth: 1170,
    height: 475,
    flexWrap: 'nowrap',

    [media[768]]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },

  boxLeft: {
    flexWrap: 'nowrap',
    [media[992]]: {
      width: '45%',
    },
    [media[768]]: {
      width: '100%',
      height: 415,
      justifyContent: 'center',
    },
  },
  boxRight: {
    [media[992]]: {
      width: '55%',
    },
    [media[768]]: {
      width: '100%',
      paddingRight: 16,
      paddingLeft: 16,
    },
  },

  imagePhone: {
    [media[992]]: {
      height: 319,
      width: 149,
    },
    [media[768]]: {
      width: 161,
      height: 314,
    },
  },

  resetAnimation: {
    [media[768]]: {
      transform: `none`,
      opacity: 1,
    },
  },
}));
export default Statistical;
