import React, { useRef } from 'react';
import { Box, Center, Flex, Group, Stack, Text, TextInput, Textarea, Transition, createStyles } from '@mantine/core';
import { useIntersection } from '@mantine/hooks';
import { useForm } from '@mantine/form';

import { ButtonIntro } from 'app/components/Button/ButtonIntro';
import { useTranslation } from 'react-i18next';
import media from '@media';
import { FilledButton } from '@app/components/Button/FilledButton';

const Contact = () => {
  const { t } = useTranslation();
  const { classes } = useStyle();

  const containerRef = useRef();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 0.6,
  });

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      yourmessage: '',
      phone: '',
    },
    validate: {
      name: value => (value.length <= 0 ? 'Hãy nhập họ tên của bạn.' : ''),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Nhập email của bạn.'),
      yourmessage: value =>
        value.length <= 0 ? 'Hãy gửi lời nhắn tới chúng tôi, hoặc hãy để lại số điện thoại nếu bạn cần tư vấn trực tiếp.' : '',
    },
  });

  return (
    <Center w={'100%'} px={16}>
      <Stack w={'100%'} maw={1170} sx={{ gap: 65, [media.small]: { gap: 16 } }}>
        <Text className="heading_3 subtitle_1">{t('Introduce.contact.title')}</Text>

        <Group className={classes.group}>
          <Stack className={classes.stack}>
            <TextInput
              placeholder={t('Introduce.contact.name-placeholder')}
              type="text"
              {...form.getInputProps('name')}
              classNames={{ input: classes.input }}
            ></TextInput>
            <TextInput
              placeholder={t('Introduce.contact.email-placeholder')}
              type="email"
              classNames={{ input: classes.input }}
              {...form.getInputProps('email')}
            ></TextInput>
            <TextInput
              placeholder={t('Introduce.contact.phone-number-placeholder')}
              {...form.getInputProps('phone')}
              type="number"
              classNames={{ input: classes.input }}
            ></TextInput>
          </Stack>
          <textarea name="message" placeholder={t('Introduce.contact.message-placeholder')} className={classes.textarea} />
        </Group>

        <Center>
          <FilledButton w={242} h={70} mb_h="40px" mb_w="122px">
            {t('Introduce.contact.btnSubmit')}
          </FilledButton>
        </Center>
      </Stack>
    </Center>
  );
};

export default Contact;

const useStyle = createStyles(() => ({
  container: {
    width: '100%',
    height: 'calc(100vh - 100px)',
    padding: '30px 0',

    [media[768]]: {
      height: 'auto',
    },
    [media.small]: {
      height: 'auto',
    },
  },

  group: {
    flexWrap: 'nowrap',
    gap: 30,

    [media.small]: {
      flexWrap: 'wrap',
      gap: 16,
    },
  },

  stack: {
    gap: 30,
    width: '100%',
    maxWidth: '50%',
    [media.small]: {
      maxWidth: '100%',
      gap: 16,
    },
  },

  input: {
    width: '100%',
    height: '55px',
    borderRadius: '50px',
    background: 'none',
    '&::placeholder': {
      color: '#929292',
      fontSize: '18px',
      fontWeight: 600,
    },
    '&:focus': {
      border: '1px solid var(--primary-1)',
      color: 'var(--primary-1)',
    },
    '&:focus::placeholder': {
      color: 'var(--primary-1)',
    },
    '&:hover': {
      border: '1px solid var(--primary-1)',
    },
    '&:hover::placeholder': {
      color: 'var(--primary-1)',
    },
  },

  textarea: {
    width: '100%',
    maxWidth: '50%',
    height: '200px',
    background: 'none',
    '&::placeholder': {
      color: '#929292',
      fontSize: '18px',
      fontWeight: 600,
    },
    color: '#3d3737',
    fontSize: '18px',
    borderRadius: '50px',
    fontWeight: 600,
    paddingTop: '20px',
    paddingLeft: '30px',

    '&:focus': {
      border: '1px solid var(--primary-1)',
      color: 'var(--primary-1)',
    },
    '&:focus::placeholder': {
      color: 'var(--primary-1)',
    },
    '&:hover': {
      border: '1px solid var(--primary-1)',
    },
    '&:hover::placeholder': {
      color: 'var(--primary-1)',
    },

    [media.small]: {
      maxWidth: '100%',
    },
  },
}));
