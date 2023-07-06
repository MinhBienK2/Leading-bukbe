import React from 'react';
import { Center, Group, Stack, Text, TextInput, createStyles } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { notifications } from '@mantine/notifications';

import media from '@media';
import { FilledButton } from '@app/components/Button/FilledButton';
import EffectTranslation from '@app/components/Animations/EffectTranslation';

import { ReactComponent as IconExclamationCircle } from '@icons/common/circle-check-filled.svg';
import { ReactComponent as IconIconCheckFilled } from '@icons/common/circle-check-filled.svg';

const Contact = () => {
  const { t } = useTranslation();
  const { classes } = useStyle();
  const [loading, setLoading] = React.useState<boolean>(false);

  const form = useForm({
    initialValues: {
      username: '',
      email: '',
      message: '',
      phoneNumber: '',
    },
    validate: {
      username: value => (value.length <= 0 ? 'Hãy nhập họ tên của bạn.' : ''),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Nhập email của bạn.'),
      message: value =>
        value.length <= 0 ? 'Hãy gửi lời nhắn tới chúng tôi, hoặc hãy để lại số điện thoại nếu bạn cần tư vấn trực tiếp.' : '',
    },
  });

  const handleSubmit = event => {
    setLoading(true);
    event.preventDefault();

    try {
      emailjs
        .send(
          process.env.EMAILJS_YOUR_SERVICE_ID ?? '',
          process.env.EMAILJS_YOUR_TEMPLATE_ID ?? '',
          form.values,
          process.env.EMAILJS_YOUR_PUBLIC_KEY ?? '',
        )
        .then(
          result => {
            console.log(result.text);
            notifications.show({
              title: t('Introduce.contact.successSended'),
              message: t('Introduce.contact.textSended'),
              color: 'green',
              icon: <IconIconCheckFilled />,
            });
          },
          error => {
            console.log(error.text);
            notifications.show({
              title: t('Introduce.contact.failSended'),
              message: t('Introduce.contact.failTextSended'),
              color: 'red',
              icon: <IconExclamationCircle />,
            });
          },
        );

      form.reset();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Center w={'100%'} px={16}>
      <EffectTranslation w={'100%'} maw={1170}>
        <Stack
          sx={{
            gap: 65,
            [media.small]: { gap: 16 },
          }}
        >
          <Text className="heading_3 subtitle_1">{t('Introduce.contact.title')}</Text>

          <Group className={classes.group}>
            <Stack className={classes.stack}>
              <TextInput
                placeholder={t('Introduce.contact.name-placeholder')}
                type="text"
                {...form.getInputProps('username')}
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
                {...form.getInputProps('phoneNumber')}
                type="number"
                classNames={{ input: classes.input }}
              ></TextInput>
            </Stack>
            <textarea
              name="message"
              placeholder={t('Introduce.contact.message-placeholder')}
              className={classes.textarea}
              onChange={event => {
                form.setFieldValue('message', event.target.value);
              }}
            />
          </Group>

          <Center>
            <FilledButton loading={loading} onClick={event => handleSubmit(event)} w={242} h={70} mb_h="40px" mb_w="122px">
              {t('Introduce.contact.btnSubmit')}
            </FilledButton>
          </Center>
        </Stack>
      </EffectTranslation>
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
    height: '225px',
    background: 'none',
    '&::placeholder': {
      color: '#929292',
      fontSize: '18px',
      fontWeight: 600,
    },

    fontSize: '18px',
    borderRadius: '50px',
    fontWeight: 400,

    padding: '20px 30px',

    '&:focus-visible': {
      border: '1px solid var(--primary-1)',
      outline: 'none',
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
