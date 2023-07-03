import { Center, Flex, Stack, Text, Transition, createStyles } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { useRef } from 'react';
import media from '@media';
import { useTranslation } from 'react-i18next';
import { FilledButton } from '@app/components/Button/FilledButton';

const Care = () => {
  const { t } = useTranslation();
  const { classes } = useStyle();

  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });

  return (
    <Center className={classes.container}>
      <Stack
        align="center"
        maw={612}
        w={'100%'}
        sx={{
          transition: `all .4s 0.2s linear`,
          transform: entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
          opacity: entry?.isIntersecting ? 1 : 0,
        }}
        px={16}
        ref={ref}
      >
        <Text align="center" className="heading_3 mb-body_4" c={'var(--primary-1)'}>
          {t('Introduce.support.title')}
        </Text>
        <FilledButton w={242} h={70} mb_h="40px" mb_w="122px">
          {t('Introduce.contact.btnSubmit')}
        </FilledButton>
      </Stack>
    </Center>
  );
};

export default Care;

const useStyle = createStyles(() => ({
  container: {
    width: '100%',
    height: '640px',
    padding: '30px 0',
    background: `url(${images.bg6})`,
    backgroundPosition: 'top',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: 30,

    [media[768]]: {
      height: 'auto',
    },
    [media.small]: {
      height: 'auto',
    },
  },

  Box3: {
    maxWidth: '100%',
    width: '100%',
    height: '60vh',
  },
}));
