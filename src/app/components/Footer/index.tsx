import { Box, Center, Divider, Flex, Group, Stack, Text, createStyles } from '@mantine/core';
import React from 'react';
import { dataList } from '../../pages/HomePage/data';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';
import media from '@media';

import { ReactComponent as Logo } from '@assets/logo/logoBukbe.svg';
import { ReactComponent as IconC } from '@icons/homePage/c.svg';
import { useTranslation } from 'react-i18next';
import DropDraw from './DropDraw';

export const Footer = () => {
  const { classes } = useStyle();
  const { t } = useTranslation();
  const navigation = useNavigate();

  return (
    <Center className={classes.container}>
      <Box className={classes.box}>
        <Logo />

        <Group mt={29} className={classes.group}>
          <DropDraw width={149} title="Menu" heightSubMenu={76}>
            <Text className="body_5">{t('Header.introduce')}</Text>
            <Text className="body_5">{t('Header.guide')}</Text>
            <Text className="body_5">{t('Header.contact')}</Text>
          </DropDraw>
          <DropDraw width={71} title="Social" heightSubMenu={20}>
            <Text className="body_5">Telegram</Text>
          </DropDraw>
          <DropDraw width={260} title={t('Header.contact')} heightSubMenu={48}>
            <Text className="body_5">Email: borostudio2018@gmail.com</Text>
            <Text className="body_5">Hotline: 1800 0607</Text>
          </DropDraw>
        </Group>

        <Divider color={'var(--primary-1)'} className={classes.divider} />

        <Text className="body_5">{t('Introduce.footer.company')}</Text>
        <Text className="body_5">{t('Introduce.footer.address')}</Text>
        <Text mt={42} className="body_5">
          <IconC />
          2021 VIETDEFI
        </Text>
      </Box>
    </Center>
  );
};

const useStyle = createStyles(() => ({
  container: {
    width: '100%',
    padding: '30px 16px',
    background: 'var(--white)',

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
    flexWrap: 'nowrap',

    [media[768]]: {
      flexDirection: 'column',
      height: 'auto',
    },
  },

  group: {
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    [media.small]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },

  divider: {
    marginTop: 65,
    marginBottom: 65,
    [media.small]: {
      marginTop: 16,
      marginBottom: 16,
    },
  },
}));
