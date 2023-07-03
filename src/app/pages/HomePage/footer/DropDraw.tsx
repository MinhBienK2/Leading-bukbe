import React, { useState, useRef, useLayoutEffect } from 'react';
import { Stack, Text, createStyles, Group } from '@mantine/core';

import { ReactComponent as IconArrowDrop } from '@icons/arrow/arrow-drop.svg';
import media from '@media';

type Props = {
  title: string;
  children?: React.ReactNode;
  heightSubMenu: number;
  width: number;
};

const DropDraw = (props: Props) => {
  const refSubMenu = useRef<HTMLDivElement>(null);
  const [drop, setDrop] = useState<boolean>(false);

  const { classes } = useStyle({ drop: drop, heightSubMenu: props.heightSubMenu, width: props.width });

  const handleDropList = () => {
    setDrop(!drop);
  };

  return (
    <Stack className={classes.stack}>
      <Group noWrap>
        <Text className="subtitle_1" onClick={handleDropList}>
          {props.title}
        </Text>
        <IconArrowDrop className={`${classes.arrowDrop} transition-all`} />
      </Group>
      <Stack ref={refSubMenu} className={`${classes.stackChild} transition-all`}>
        {props.children}
      </Stack>
    </Stack>
  );
};

export default DropDraw;

const useStyle = createStyles((theme, params: { drop: boolean; heightSubMenu: number; width: number }) => ({
  stack: {
    width: '100%',
    maxWidth: params.width,
    gap: 24,
    [media.small]: {
      gap: 16,
      maxWidth: '100%',
    },
  },

  stackChild: {
    gap: 8,
    transition: `height 0.3s ease-in-out`,
    transitionDelay: '0.1s',

    [media.small]: {
      overflow: 'hidden',
      boxSizing: 'border-box',
      height: params.drop ? params.heightSubMenu : 0,
    },
  },

  arrowDrop: {
    display: 'none',
    [media.small]: {
      display: 'block',
    },
    transform: params.drop ? 'rotate(180deg)' : 'rotate(0deg)',
  },
}));
