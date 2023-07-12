import React from 'react';
import { Box, Center, Flex, Text, createStyles } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import i18n from 'i18next';

import { dataLanguage, TDataLanguage, TLanguage } from './data';
import media from '@media';

type Props = {};

const Language = (props: Props) => {
  const { classes } = useStyle();

  const [getLabelLanguage, setLabelLanguage] = React.useState<string>(() => {
    for (let lang of dataLanguage) {
      if (i18n.language === lang.key) return lang.label;
    }
    return dataLanguage[0].label;
  });
  const [makeRoute, setMakeRoute] = React.useState(false);

  const makeRotate = () => {
    setMakeRoute(!makeRoute);
  };

  const setCheckLanguage = (value: TLanguage) => {
    setLabelLanguage(value.label);
    i18n.changeLanguage(value.key);
    setMakeRoute(false);
  };

  return (
    <Flex className={`cursor-pointer ${classes.container}`}>
      <Flex onClick={() => makeRotate()} className={classes.box}>
        <Text fw={600} fz={16} c={'var(--primary-1)'} mr={1}>
          {getLabelLanguage}
        </Text>
        <Center
          sx={{
            transform: makeRoute ? 'rotateX(180deg)' : 'rotateX(0deg)',
          }}
        >
          <IconChevronDown size="1.3rem" color="#929292" />
        </Center>
      </Flex>
      <Box
        sx={{
          display: !makeRoute ? 'none' : 'block',
        }}
        className={classes.boxSelect}
      >
        {!!dataLanguage.length &&
          (dataLanguage as TDataLanguage).map(language => {
            return (
              <Flex key={language.id} onClick={() => setCheckLanguage(language)} m={3} className={classes.cardLanguage}>
                <Box>
                  <Text sx={{ fontWeight: 400, fontSize: '13px' }}>{language.label}</Text>
                </Box>
              </Flex>
            );
          })}
      </Box>
    </Flex>
  );
};

export default Language;

const useStyle = createStyles(() => ({
  container: {
    width: '68px',
    height: '28px',
    flexDirection: 'column',
    transition: 'all .1 linear',
    [media.small]: {
      width: '57px',
    },
  },

  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    background: 'var(--whileL)',
    maxWidth: '66px',
    width: '100%',
    height: '28px',
    boxShadow: '0px 2px 4px #d6d1d1',
  },

  boxSelect: {
    width: '100%',
    background: 'var(--whileL)',
    borderRadius: '8px',
    marginTop: '3px',
    transition: 'all .3s linear',
    boxShadow: '0px 2px 4px #d6d1d1',
  },

  cardLanguage: {
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      background: 'var(--primary-1)',
    },
  },
}));
