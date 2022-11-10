import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import Box from 'components/Box';
import { FormStyled } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/user/operations';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const emailRegExp = '';

const schema = Yup.object({
  email: Yup.string()
    .matches(emailRegExp, 'Name is not valid!')
    .required('This field is required!'),
  password: Yup.string()
    .max(30, 'Maximum 30 symbols!')
    .required('This field is required!'),
}).required();

export default function RegisterForm() {
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

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
    dispatch(logIn(data));
  };

  const onFormError = error => {
    toast.error(error);
  };

  return (
    <Box>
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
              error={errors.email && true}
              helperText={errors.email?.message}
              required
            />
          )}
        />
        <FormControl>
          <InputLabel htmlFor="password" size="small">
            Password *
          </InputLabel>
          <OutlinedInput
            id="password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            label="Password"
            size="small"
            onChange={handleChange('password')}
            error={errors.email && true}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
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
    </Box>
  );
}
