import { Box, Center, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageStep11 } from '@images/guide/registerPhoneNumber/step-1-1.svg';
import { ReactComponent as ImageStep12 } from '@images/guide/registerPhoneNumber/step-1-2.svg';
import { ReactComponent as ImageStep21 } from '@images/guide/registerPhoneNumber/step-2-1.svg';
import { ReactComponent as ImageStep22 } from '@images/guide/registerPhoneNumber/step-2-2.svg';
import { ReactComponent as ImageStep23 } from '@images/guide/registerPhoneNumber/step-2-3.svg';
import { ReactComponent as ImageStep24 } from '@images/guide/registerPhoneNumber/step-2-4.svg';

const RegisterPhoneNumber = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={24}>
      <Text className="body_5">
        {t('Guide.registerPhoneNumber.step_1-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.registerPhoneNumber.step_1-text-2')}
        </Text>
        {t('Guide.registerPhoneNumber.step_1-text-3')}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.registerPhoneNumber.step_1-text-4')}
        </Text>
      </Text>

      <Group position="center">
        <ImageStep11 />
        <ImageStep12 />
      </Group>

      <Text className="body_5">
        {t('Guide.registerPhoneNumber.step_2-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.registerPhoneNumber.step_2-text-2')}
        </Text>
        {t('Guide.registerPhoneNumber.step_2-text-3')}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.registerPhoneNumber.step_2-text-4')}
        </Text>
        {t('Guide.registerPhoneNumber.step_2-text-5')}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.registerPhoneNumber.step_2-text-6')}
        </Text>
        {t('Guide.registerPhoneNumber.step_2-text-7')}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.registerPhoneNumber.step_2-text-8')}
        </Text>
        {t('Guide.registerPhoneNumber.step_2-text-9')}
      </Text>

      <Group position="center">
        <ImageStep21 />
        <ImageStep22 />
        <ImageStep23 />
        <ImageStep24 />
      </Group>
    </Stack>
  );
};

export default RegisterPhoneNumber;
