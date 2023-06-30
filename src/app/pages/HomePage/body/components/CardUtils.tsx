import { Box, Stack, Text, createStyles } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import media from '@media';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  id: number;
  label: string;
  icon: any;
  subLabel: string;
};

const CardUtils = (props: Props) => {
  const containerRef = useRef();
  const { t } = useTranslation();
  const { classes } = useStyle();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });

  return (
    <Box
      ref={ref}
      sx={{
        transition: `all .2s`,
        transform: entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
        opacity: entry?.isIntersecting ? 1 : 0,
      }}
      className={classes.container}
    >
      <Stack spacing={16}>
        {props.icon}

        <Text className="body_1">{t(props.label)}</Text>
        <Text className="body_6" c={'#363049'}>
          {t(props.subLabel)}
        </Text>
      </Stack>
    </Box>
  );
};

export default CardUtils;

const useStyle = createStyles(() => ({
  container: {
    maxWidth: '358px',
    width: '100%',
    height: '400px',
    background: 'var(--white)',
    padding: '66px 16px 53px',
    borderRadius: '8px',
    willChange: 'auto',
    overflow: 'hidden',

    '&:hover': {
      border: '3px solid var(--primary-1)',
      boxShadow: '0px 14px 20px 0px #EC593880',
    },

    [media[768]]: {
      opacity: 1,
      transform: 'none',
    },

    [media.small]: {
      margin: '24px 16px',
      border: '3px solid var(--primary-1)',
    },
  },

  BodyIntro1: {
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
  },
}));
