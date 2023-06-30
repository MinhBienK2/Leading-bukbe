import { Center, createStyles } from '@mantine/core';
import { images } from 'assets/images';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

import { HeaderIntro } from '@pages/HomePage/header/HeaderIntro';
import { Body } from '@app/pages/HomePage/body';
import { FooterIntro } from '@pages/HomePage/footer/FooterIntro';

interface InPropsStyle {}
export function HomePage() {
  const { classes: c } = createStyleProps({});
  return (
    <>
      <Helmet>
        <title>Bukbe</title>
        <link rel="icon" href={`${images.logoBukbe}`} />
      </Helmet>

      <HeaderIntro></HeaderIntro>
      <Body></Body>
      {/* <FooterIntro></FooterIntro> */}
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
