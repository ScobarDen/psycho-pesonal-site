import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

export const LoginPage = () => {



  const onSubmit = async (data: FormData) => {
    console.log(data);

  };


  return (
      <Paper elevation={5} sx={{p: 5}}>
        <Typography variant="h5" sx={{marginBottom: 3}}>
          Вход в аккаунт
        </Typography>
        <form>

        </form>
      </Paper>
  );
};
