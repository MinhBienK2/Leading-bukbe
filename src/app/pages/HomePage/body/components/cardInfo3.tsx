import { Box, Flex, createStyles } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { images } from 'assets/images';
import React, { useRef } from 'react';
import { IsContent } from './IsContent';
import { dataCard3 } from './data';

interface InPropsStyle {}

const ContentBox3 = () => {
  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });
  return (
    <Flex
      sx={{
        maxWidth: '100%',
        width: '100%',
        height: '100%',
        // background: `url(${images.bg3})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Flex
        sx={{
          maxWidth: '1440px',
          width: '100%',
          height: '100%',
        }}
      >
        <Box
          sx={{
            maxWidth: '50%',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Flex
            sx={{
              maxWidth: '540px',
              width: '100%',
              height: '426px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {dataCard3?.map((v, i) => {
              return (
                <Flex
                  key={i}
                  ref={ref}
                  sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: `all .4s 0.${i}s linear`,
                    transform: entry?.isIntersecting ? 'translateY(0px)' : 'translateY(50px)',
                    opacity: entry?.isIntersecting ? 1 : 0,
                  }}
                >
                  <IsContent
                    id={v.id}
                    label={v.label}
                    labelButton={v.labelButton}
                    icon={v.icon}
                    subLabel={v.subLabel}
                  ></IsContent>
                </Flex>
              );
            })}
          </Flex>
        </Box>
        <Box
          sx={{
            maxWidth: '50%',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Flex
            sx={{
              maxWidth: '580px',
              width: '100%',
              height: '426px',
              display: 'flex',
              justifyContent: 'space-between',
              transform: 'translateY(40px)',
            }}
          >
            <Flex
              sx={{
                maxWidth: '180px',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                ref={ref}
                sx={{
                  maxWidth: '176px',
                  width: '100%',
                  height: '334px',
                  background: `url(${images.phone3})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',

                  transition: `all .4s 0.2s linear`,
                  transform: entry?.isIntersecting ? 'translateY(0px) scale(1.1)' : 'translateY(50px)',
                  willChange: 'auto',
                  opacity: entry?.isIntersecting ? 1 : 0,
                }}
              ></Box>
            </Flex>

            <Flex
              sx={{
                maxWidth: '180px',
                width: '100%',
                position: 'relative',
                height: '100%',
              }}
            >
              <Box
                ref={ref}
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  maxWidth: '176px',
                  width: '100%',
                  height: '334px',
                  background: `url(${images.phone4})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',

                  transition: `all .4s 0.3s linear`,
                  transform: entry?.isIntersecting ? 'translateY(0px) scale(1.1)' : 'translateY(50px)',
                  willChange: 'auto',
                  opacity: entry?.isIntersecting ? 1 : 0,
                }}
              ></Box>
            </Flex>
            <Flex
              sx={{
                maxWidth: '180px',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                ref={ref}
                sx={{
                  maxWidth: '176px',
                  width: '100%',
                  height: '334px',
                  background: `url(${images.phone5})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',

                  transition: `all .4s 0.4s linear`,
                  transform: entry?.isIntersecting ? 'translateY(0px) scale(1.1)' : 'translateY(50px)',
                  opacity: entry?.isIntersecting ? 1 : 0,
                }}
              ></Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export const CardInfo3 = () => {
  const { classes: c } = createStyleProps({});
  return (
    <Flex className={c.Box3}>
      <Box
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ContentBox3></ContentBox3>
      </Box>
    </Flex>
  );
};

const createStyleProps = createStyles((theme, params: InPropsStyle) => ({
  Box3: {
    maxWidth: '100%',
    width: '100%',
    height: '100vh',
  },
}));
