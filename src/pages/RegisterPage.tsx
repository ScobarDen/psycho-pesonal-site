import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Paper, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { IFormInput } from './types';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Введите корректный email').required('Это обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен быть больше 6 символов')
    .required('Это обязательное поле'),
  fio: Yup.string().min(6, 'Введите имя полностью').required('Это обязательное поле'),
});

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    navigate('/');
    // todo: доделать
  };

  return (
    <Paper elevation={5} sx={{ p: 5 }}>
      <Typography sx={{ marginBottom: 1 }} variant="h5">
        Регистрация
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="ФИО"
              fullWidth
              sx={{ marginBottom: 1 }}
              error={Boolean(errors.fio?.message)}
              helperText={errors.fio?.message}
            />
          )}
          name="fio"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              fullWidth
              sx={{ marginBottom: 1 }}
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
            />
          )}
          name="email"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => (
            <TextField
              {...field}
              label="Пароль"
              fullWidth
              sx={{ marginBottom: 3 }}
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
            />
          )}
          name="password"
          control={control}
          defaultValue=""
        />
        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
