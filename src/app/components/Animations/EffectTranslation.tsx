import { buildThresholdArray, useIntersect } from '@hook/useIntersect';
import { Box, BoxProps, createStyles } from '@mantine/core';
import React, { useMemo } from 'react';
import { PolymorphicComponentProps } from '@mantine/utils';
import media from '@media';

interface Props extends PolymorphicComponentProps<'div', BoxProps> {
  children: React.ReactNode;
  percent?: number;
  axis?: 'Y' | 'X';
  reverse?: boolean;
}

const EffectTranslation = ({ children, percent = 100, axis = 'Y', reverse = false, ...props }: Props) => {
  const thresholMemo = useMemo(() => buildThresholdArray(), []);

  const [ref, entry] = useIntersect({
    threshold: thresholMemo,
  });

  const styleBox = {
    transition: `all 0.4s linear 0s`,

    transform: entry?.intersectionRatio
      ? `translate${axis}(${
          Number(entry.intersectionRatio) * Number(!reverse ? percent : -percent) - Number(!reverse ? percent : -percent)
        }px)`
      : `translate${axis}(${!reverse ? percent : -percent}px)`,
    opacity: entry?.intersectionRatio ? Number(entry.intersectionRatio) : 0,
    [media[768]]: {
      opacity: 1,
      transform: 'none',
    },
  };

  return (
    <Box ref={ref} {...props} sx={{ ...styleBox, ...props.sx }}>
      {children}
    </Box>
  );
};

export default EffectTranslation;
