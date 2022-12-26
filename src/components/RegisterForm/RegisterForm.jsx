import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { FormStyled } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/user/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const emailRegExp = '';

const schema = Yup.object({
  name: Yup.string()
    .min(2, 'Minimum 7 symbols!')
    .max(30, 'Maximum 30 symbols!')
    .required('This field is required!'),
  email: Yup.string()
    .matches(emailRegExp, 'Name is not valid!')
    .required('This field is required!'),
  password: Yup.string()
    .min(5, 'Minimum 5 symbols!')
    .max(30, 'Maximum 30 symbols!')
    .required('This field is required!'),
}).required();

export default function RegisterForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
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
    const regPromice = dispatch(register(data));

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
    toast.error(error.message);
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit(onFormSubmit, onFormError)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Username"
              variant="outlined"
              size="small"
              error={errors.name && true}
              helperText={errors.name?.message}
              required
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              size="small"
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
          Register
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
