import { Center, createStyles } from '@mantine/core';
import Logo from '@assets/logo/logoBukbe.svg';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { HeaderIntro } from '@pages/HomePage/header/HeaderIntro';
import { Body } from '@app/pages/HomePage/body';

interface InPropsStyle {}
export function HomePage() {
  const { classes: c } = createStyleProps({});
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <HeaderIntro></HeaderIntro>
      <Body></Body>
    </>
  );
}
const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  BoxIntroduce: {
    maxWidth: '100vw',
    width: '100%',
    flexDirection: 'column',
  },
}));
