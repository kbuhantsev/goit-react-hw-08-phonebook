import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { FormStyled } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const emailRegExp = '';

const schema = Yup.object({
  email: Yup.string()
    .matches(emailRegExp, 'Email is not valid!')
    .required('This field is required!'),
  password: Yup.string()
    .min(5, 'Minimum 5 symbols!')
    .max(30, 'Maximum 30 symbols!')
    .required('This field is required!'),
}).required();

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onFormSubmit = data => {
    const regPromice = dispatch(logIn(data));
    regPromice
      .then(response => {
        const { error, payload } = response;
        if (error) {
          toast.error(`${error.message}, ${payload}`);
          return;
        }
        navigate('/', { replace: true, state: payload });
      })
      .catch(error => {
        toast.error(error.message);
        return;
      });
  };

  const onFormError = error => {
    toast.error(error);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit(onFormSubmit, onFormError)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              size="small"
              type="email"
              error={errors.email && true}
              helperText={errors.email?.message}
              required
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="outlined"
              size="small"
              error={errors.password && true}
              helperText={errors.password?.message}
              type={values.showPassword ? 'text' : 'password'}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />

        <Button type="submit" variant="outlined">
          Login
        </Button>
      </FormStyled>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
