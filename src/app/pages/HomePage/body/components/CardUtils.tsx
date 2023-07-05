import React, { useRef } from 'react';
import { Box, Stack, Text, createStyles } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import media from '@media';
import EffectTranslation from '@app/components/Animations/EffectTranslation';

type Props = {
  id: number;
  label: string;
  icon: any;
  subLabel: string;
};

const CardUtils = (props: Props) => {
  const { t } = useTranslation();
  const { classes } = useStyle();

  return (
    <EffectTranslation className={classes.container}>
      <Stack spacing={16}>
        {props.icon}

        <Text className="body_1">{t(props.label)}</Text>
        <Text className="body_6" c={'#363049'}>
          {t(props.subLabel)}
        </Text>
      </Stack>
    </EffectTranslation>
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
