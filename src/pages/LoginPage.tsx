import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Button, Paper, TextField, Typography } from "@mui/material";

interface IFormInput {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { control, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
  };

  return (
    <Paper elevation={5} sx={{p: 5}}>
      <Typography sx={{marginBottom: 1}} variant="h5">
        Вход в аккаунт
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => <TextField {...field} label="Email" fullWidth sx={{marginBottom: 1}} />}
          name="email"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <TextField {...field} label="Пароль" fullWidth sx={{marginBottom: 3}} />}
          name="password"
          control={control}
          defaultValue=""
        />
        <Button disabled={false} type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
    </Paper>
  );
};
