import { Group, Text } from '@mantine/core';
import React from 'react';

import { ReactComponent as IconArrowLeft } from '@icons/arrow/arrow-left.svg';

type Props = {
  onBackPage: (e: any) => void;
  title: string;
  mb?: string | number;
};

const BackPage = (props: Props) => {
  return (
    <Group position="apart" w={'100%'} mb={props.mb}>
      <IconArrowLeft onClick={props.onBackPage} />
      <Text className="body_1">{props.title}</Text>
      <div style={{ width: '20px', height: '20px', visibility: 'visible' }}></div>
    </Group>
  );
};

export default BackPage;
