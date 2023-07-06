import { Group, createStyles, Text, Drawer, Stack } from '@mantine/core';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';

import Language from '../language';
import { dataMenu } from './data/dataMenu';
import media from '@media';
import ListNavLink from './ListNavLink';

import { ReactComponent as IconNavbar } from '@icons/common/navbar.svg';
import { ReactComponent as IconCLose } from '@icons/common/x-close.svg';
import { ReactComponent as Logo } from '@assets/logo/logoBukbe.svg';

type Props = {};

const Header = (props: Props) => {
  const { classes } = useStyle();
  const [opened, { open, close }] = useDisclosure(false);
  const navigation = useNavigate();

  return (
    <>
      <Group className={classes.container} position="apart" noWrap>
        <IconNavbar onClick={open} className={classes.iconNavbar} />
        <Logo onClick={() => navigation('/')} className={`transition-all cursor-pointer ${classes.logo}`} />

        <Group noWrap spacing={40} className={classes.taskRight}>
          <Group className={`${classes.listNavLink} ${classes.taskRight}`} position="apart" maw={446} w={'100%'} noWrap>
            <ListNavLink />
          </Group>

          <Language />
        </Group>
      </Group>

      <Drawer opened={opened} onClose={close} size="80%" withCloseButton={false}>
        <Group w={'100%'} position="apart" mb={30}>
          <Logo className={`transition-all `} style={{ width: 67, height: 16 }} />
          <IconCLose onClick={close} />
        </Group>

        <Stack spacing={20}>
          <ListNavLink />
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;

const useStyle = createStyles(() => ({
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 100,
    background: 'var(--white)',
    zIndex: 200,
    paddingRight: 135,
    paddingLeft: 135,

    [media.medium]: {
      paddingRight: 16,
      paddingLeft: 16,
    },

    [media.small]: {
      height: 42,
    },
  },

  listNavLink: {
    gap: 40,

    [media.medium]: {
      gap: 16,
    },
    [media.small]: {
      display: 'none',
    },
  },

  logo: {
    [media.small]: {
      width: 67,
      height: 16,
    },
  },

  iconNavbar: {
    display: 'none',
    [media.small]: {
      display: 'block',
    },
  },

  taskRight: {
    '@media (max-width:635px)': {
      gap: 10,
    },
  },
}));
