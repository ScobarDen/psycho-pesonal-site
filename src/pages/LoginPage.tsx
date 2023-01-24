import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Paper, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface IFormInput {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Введите корректный email').required('Это обязательное поле'),
  password: Yup.string().min(6, 'Пароль должен быть больше 6 символов').required('Это обязательное поле'),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({ resolver: yupResolver(validationSchema), mode: "onTouched" });

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    // todo: доделать
  };

  return (
    <Paper elevation={5} sx={{ p: 5 }}>
      <Typography sx={{ marginBottom: 1 }} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
