import { Center, Group, createStyles, Box, Stack, Text, List } from '@mantine/core';
import React from 'react';
import { dataListNav } from '../data';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet } from 'react-router-dom';

type Props = {};

const Guide = (props: Props) => {
  const { classes } = useStyle();
  const { t } = useTranslation();

  return (
    <Center className={classes.container}>
      <Box className={classes.box}>
        <List spacing={32} className={classes.nav}>
          {!!dataListNav.length &&
            dataListNav.map(nav => (
              <NavLink to={nav.path}>
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
  },

  nav: {
    width: '100%',
    maxWidth: 450,
    position: 'fixed',
    overflowY: 'scroll',
    // -webkit-backface-visibility: hidden;
    backfaceVisibility: 'hidden',
  },

  content: {
    marginLeft: 450,
    overflowY: 'scroll',
  },
}));
