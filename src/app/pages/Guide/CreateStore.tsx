import { Box, Center, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageStep1 } from '@images/guide/createStore/step-1.svg';
import { ReactComponent as ImageStep21 } from '@images/guide/createStore/step-2-1.svg';
import { ReactComponent as ImageStep22 } from '@images/guide/createStore/step-2-2.svg';
import { ReactComponent as ImageStep31 } from '@images/guide/createStore/step-3-1.svg';
import { ReactComponent as ImageStep32 } from '@images/guide/createStore/step-3-2.svg';
import { ReactComponent as ImageStep33 } from '@images/guide/createStore/step-3-3.svg';
import { ReactComponent as ImageStep34 } from '@images/guide/createStore/step-3-4.svg';
import { ReactComponent as ImageStep35 } from '@images/guide/createStore/step-3-5.svg';
import { ReactComponent as ImageStep36 } from '@images/guide/createStore/step-3-6.svg';

const CreateStore = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={24}>
      <Text className="body_5">
        {t('Guide.createStore.step_1-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_2-text-2')}
        </Text>
        {t('Guide.createStore.step_1-text-3')}{' '}
      </Text>

      <Center>
        <ImageStep1 />
      </Center>

      <Text className="body_5">
        {t('Guide.createStore.step_2-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_2-text-2')}
        </Text>
      </Text>

      <Group position="center">
        <ImageStep21 />
        <ImageStep22 />
      </Group>

      <Text className="body_5">
        {t('Guide.createStore.step_3-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_3-text-2')}
        </Text>
        {t('Guide.createStore.step_3-text-3')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_3-text-4')}
        </Text>
        {t('Guide.createStore.step_3-text-5')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_3-text-6')}
        </Text>
        {t('Guide.createStore.step_3-text-7')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_3-text-8')}
        </Text>
        {t('Guide.createStore.step_3-text-9')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.createStore.step_3-text-10')}
        </Text>
        {t('Guide.createStore.step_3-text-11')}{' '}
      </Text>

      <Group position="center">
        <ImageStep31 />
        <ImageStep32 />
        <ImageStep33 />
        <ImageStep34 />
        <ImageStep35 />
        <ImageStep36 />
      </Group>
    </Stack>
  );
};

export default CreateStore;
