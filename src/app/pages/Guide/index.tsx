import { Center, createStyles, Box, List } from '@mantine/core';
import React from 'react';
import { dataListNav } from './data';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';
import media from '@media';

type Props = {};

const Guide = (props: Props) => {
  const { classes } = useStyle();
  const { t } = useTranslation();

  return (
    <Center className={classes.container}>
      <Box className={classes.box}>
        <List spacing={32} className={classes.nav} classNames={{ itemWrapper: classes.itemWrapper }}>
          {!!dataListNav.length &&
            dataListNav.map(nav => (
              <NavLink key={nav.id} to={nav.path}>
                {({ isActive }) => {
                  return (
                    <List.Item mt={20} c={isActive ? 'var(--primary-1)' : 'var(--black)'} className="subtitle_3" key={nav.id}>
                      {t(nav.title)}
                    </List.Item>
                  );
                }}
              </NavLink>
            ))}
        </List>

        <Box className={classes.content}>
          <Outlet />
        </Box>
      </Box>
    </Center>
  );
};

export default Guide;

const useStyle = createStyles(() => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    maxWidth: 1170,
    paddingTop: 40,
    minHeight: 'calc(100vh - 130px)',
  },

  nav: {
    width: '100%',
    maxWidth: 450,
    position: 'fixed',
    overflowY: 'scroll',
    backfaceVisibility: 'hidden',
    height: 'calc(100vh - 150px)',
    borderRight: '8px solid var(--grey-light)',
    zIndex: 9,
  },

  itemWrapper: {
    width: 400,
    '& span': {
      width: 400,
    },
  },

  content: {
    marginLeft: 450,
    overflowY: 'scroll',
    paddingLeft: 30,
    paddingRight: 30,

    [media[1184]]: {
      paddingLeft: 16,
      paddingRight: 16,
    },
  },
}));
