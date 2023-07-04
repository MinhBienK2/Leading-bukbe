import { Box, Center, Group, Stack, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ReactComponent as ImageStep1 } from '@images/guide/loginTelegram/step-1.svg';
import { ReactComponent as ImageStep21 } from '@images/guide/loginTelegram/step-2-1.svg';
import { ReactComponent as ImageStep22 } from '@images/guide/loginTelegram/step-2-2.svg';
import { ReactComponent as ImageStep23 } from '@images/guide/loginTelegram/step-2-3.svg';

const LoginTelegram = () => {
  const { t } = useTranslation();

  return (
    <Stack spacing={24}>
      <Text className="body_5">
        {t('Guide.loginTelegram.step_1-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.loginTelegram.step_1-text-2')}
        </Text>
        {t('Guide.loginTelegram.step_1-text-3')}
      </Text>

      <Center>
        <ImageStep1 />
      </Center>

      <Text className="body_5">
        {t('Guide.loginTelegram.step_2-text-1')}{' '}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.loginTelegram.step_2-text-2')}
        </Text>
        {t('Guide.loginTelegram.step_2-text-3')}
        <Text span className="body_4" c={'var(--primary-1)'}>
          {t('Guide.loginTelegram.step_2-text-4')}
        </Text>
        {t('Guide.loginTelegram.step_2-text-5')}
      </Text>

      <Group position="center">
        <ImageStep21 />
        <ImageStep22 />
        <ImageStep23 />
      </Group>
    </Stack>
  );
};

export default LoginTelegram;
