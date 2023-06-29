import React from 'react';
import { dataMenu } from './data/dataMenu';
import { NavLink } from 'react-router-dom';
import { Text, createStyles } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const ListNavLink = () => {
  const { t } = useTranslation();
  const { classes } = useStyle();

  return (
    <>
      {dataMenu.map(item => {
        console.log(t(item.label));
        return (
          <NavLink to={item.path} key={item.id} style={{ textDecoration: 'none' }}>
            {({ isActive }) => (
              <Text className={`${isActive ? `body_1 ${classes.linkActive}` : `body_3 ${classes.linkNonActive}`}`}>
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
