import React from 'react';
import { dataMenu } from './data/dataMenu';
import { NavLink, useLocation } from 'react-router-dom';
import { Text, createStyles } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@mantine/hooks';

const ListNavLink = () => {
  const { t } = useTranslation();

  const { classes } = useStyle();
  const linkActive = classes.linkActive;
  const linkNonActive = classes.linkNonActive;

  const smallThan768 = useMediaQuery('(max-width:768px');
  const location = useLocation();

  const handleSelectPath = (path: string): string => {
    let newPath: string;
    if (path === '/guide') newPath = path + String(!smallThan768 ? '/register-telegram' : ' ');
    else newPath = path;

    return newPath;
  };

  const handleCheckActivePathGuide = (path: string): boolean => {
    const splitPath: string[] = location.pathname.split('/');
    if (splitPath[1]) return path.includes(splitPath[1]);
    else return false;
  };

  return (
    <>
      {dataMenu.map(item => {
        const newPath = handleSelectPath(item.path);
        const activeGuidePage = handleCheckActivePathGuide(item.path);

        return (
          <NavLink to={newPath} key={item.id} style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <Text className={`${isActive || activeGuidePage ? `body_1 ${linkActive}` : `body_3 ${linkNonActive}`}`}>
                {t(item.label)}
              </Text>
            )}
          </NavLink>
        );
      })}
    </>
  );
};

export default ListNavLink;

const useStyle = createStyles(() => ({
  linkActive: {
    color: 'var(--primary-1)',
    borderBottom: '1px solid var(--primary-1)',
  },

  linkNonActive: {
    color: 'var(--grey-black)',
    borderBottom: 'none',
  },
}));
