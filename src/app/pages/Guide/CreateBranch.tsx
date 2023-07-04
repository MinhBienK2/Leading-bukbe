import { Box, Center, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageBranch } from '@images/guide/createBranch/create-branch.svg';

const CreateBranch = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={24}>
      <Text className="body_5">{t('Guide.createBranch.text')} </Text>

      <Center>
        <ImageBranch />
      </Center>
    </Stack>
  );
};

export default CreateBranch;
