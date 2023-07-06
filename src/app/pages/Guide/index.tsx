import { Center, createStyles, Box, List } from '@mantine/core';
import React, { useState } from 'react';
import { dataListNav } from './data';
import { useTranslation } from 'react-i18next';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import media from '@media';
import BackPage from '@app/components/BackPage/BackPage';
import { useMediaQuery } from '@mantine/hooks';
import { Helmet } from 'react-helmet-async';

type Props = {};

const Guide = (props: Props) => {
  const { t } = useTranslation();
  const navigation = useNavigate();
  const smallThan768 = useMediaQuery('(max-width:768px)');

  const [active, setActive] = useState<boolean>(false);
  const { classes } = useStyle({ active: active });

  const moveToDefault = () => {
    navigation('/guide');
    setActive(false);
  };

  return (
    <>
      <Helmet>
        <title>Guide</title>
      </Helmet>
      <Center className={classes.container}>
        <Box className={classes.box}>
          <ul className={classes.nav}>
            {!!dataListNav.length &&
              dataListNav.map(nav => (
                <NavLink key={nav.id} to={nav.path}>
                  {({ isActive }) => {
                    if (isActive) setActive(isActive);

                    return (
                      <li
                        style={{ color: isActive ? 'var(--primary-1)' : 'var(--black)' }}
                        className={`subtitle_3 ${classes.itemWrapper}`}
                        key={nav.id}
                      >
                        {t(nav.title)}
                      </li>
                    );
                  }}
                </NavLink>
              ))}
          </ul>
          <Box className={classes.content}>
            {smallThan768 && <BackPage title={t('Header.guide')} onBackPage={moveToDefault} mb={26} />}

            <Outlet />
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default Guide;

const useStyle = createStyles((theme, params: { active: boolean }) => ({
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
    transition: 'all 0.3s',

    msOverflowStyle: 'none' /* IE and Edge */,
    scrollbarWidth: 'none' /* Firefox */,
    '&::-webkit-scrollbar': {
      display: 'none',
    },

    '& > a:first-of-type > li': {
      marginTop: 0,
    },

    '& a': {
      textDecoration: 'none',
    },

    [media[1184]]: {
      maxWidth: 400,
    },

    [media.medium]: {
      maxWidth: 350,
    },

    [media[992]]: {
      maxWidth: 300,
    },

    [media[768]]: {
      position: 'initial',
      maxWidth: '100%',
      height: 'auto',
      display: params.active ? 'none' : 'block',
      padding: '0px 16px 30px',
      overflow: 'hidden',
      borderRight: 'none',
    },
  },

  itemWrapper: {
    marginLeft: 25,
    marginTop: '20px',
  },

  content: {
    marginLeft: 450,
    overflowY: 'scroll',
    paddingLeft: 30,
    paddingRight: 30,

    [media[1184]]: {
      paddingLeft: 16,
      paddingRight: 16,
      marginLeft: 400,
    },
    [media.medium]: {
      marginLeft: 350,
    },

    [media[992]]: {
      marginLeft: 300,
    },

    [media[768]]: {
      width: '100%',
      marginLeft: 0,
      display: params.active ? 'block' : 'none',
      paddingBottom: 30,
    },

    '& > div:first-of-type(1)': {
      display: 'none',
      [media[768]]: {
        display: 'block',
      },
    },
  },
}));
