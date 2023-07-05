import { Box, Center, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageStep1 } from '@images/guide/booking/step-1.svg';
import { ReactComponent as ImageStep21 } from '@images/guide/booking/step-2-1.svg';
import { ReactComponent as ImageStep22 } from '@images/guide/booking/step-2-2.svg';
import { ReactComponent as ImageStep31 } from '@images/guide/booking/step-3-1.svg';
import { ReactComponent as ImageStep32 } from '@images/guide/booking/step-3-2.svg';
import { ReactComponent as ImageStep33 } from '@images/guide/booking/step-3-3.svg';
import { ReactComponent as ImageStep41 } from '@images/guide/booking/step-4-1.svg';
import { ReactComponent as ImageStep42 } from '@images/guide/booking/step-4-2.svg';

const Booking = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={24}>
      <Text className="body_5">{t('Guide.booking.step_1-text-1')} </Text>

      <Center>
        <ImageStep1 />
      </Center>

      <Text className="body_5">
        {t('Guide.booking.step_2-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_2-text-2')}
        </Text>
      </Text>

      <Group position="center">
        <ImageStep21 />
        <ImageStep22 />
      </Group>

      <Text className="body_5">
        {t('Guide.booking.step_3-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_3-text-2')}
        </Text>
        {t('Guide.booking.step_3-text-3')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_3-text-4')}
        </Text>
        {t('Guide.booking.step_3-text-5')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_3-text-6')}
        </Text>
        {t('Guide.booking.step_3-text-7')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_3-text-8')}
        </Text>
      </Text>

      <Group position="center">
        <ImageStep31 />
        <ImageStep32 />
        <ImageStep33 />
      </Group>

      <Text className="body_5">
        {t('Guide.booking.step_4-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_4-text-2')}
        </Text>
        {t('Guide.booking.step_4-text-3')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.booking.step_4-text-4')}
        </Text>
        {t('Guide.booking.step_4-text-5')}{' '}
      </Text>

      <Group position="center">
        <ImageStep41 />
        <ImageStep42 />
      </Group>
    </Stack>
  );
};

export default Booking;
