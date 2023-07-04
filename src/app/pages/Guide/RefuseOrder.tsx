import { Box, Center, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageStep11 } from '@images/guide/refuseOrder/step-1-1.svg';
import { ReactComponent as ImageStep12 } from '@images/guide/refuseOrder/step-1-2.svg';
import { ReactComponent as ImageStep2 } from '@images/guide/refuseOrder/step-2.svg';

const RefuseOrder = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={24}>
      <Text className="body_5">
        {t('Guide.refuseOrder.step_1-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.refuseOrder.step_1-text-2')}
        </Text>
      </Text>

      <Group position="center">
        <ImageStep11 />
        <ImageStep12 />
      </Group>

      <Text className="body_5">{t('Guide.refuseOrder.step_2-text-1')} </Text>
      <Group position="center">
        <ImageStep2 />
      </Group>
    </Stack>
  );
};

export default RefuseOrder;
