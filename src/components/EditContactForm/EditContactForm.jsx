import React from 'react';
import * as Yup from 'yup';
import { ButtonStyled, FormStyled } from './EditContactForm.styled';
import SaveIcon from '@mui/icons-material/Save';
import { TextField, Typography } from '@mui/material';
//
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import Box from 'components/Box';
import { useEditContactMutation } from 'redux/services/contactsApi';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = Yup.object({
  name: Yup.string()
    .min(3, 'Minimum 3 letters!')
    .required('This field is required!'),
  phone: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid!')
    .max(13, 'Maximum 13 numbers!')
    .required('This field is required!'),
}).required();

export default function EditContactForm({ contact, setOpen }) {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: contact?.name,
      phone: contact?.phone,
    },
    resolver: yupResolver(schema),
  });

  const [editContact] = useEditContactMutation();

  const onFormSubmit = async data => {
    const { name, phone } = data;
    const editedContact = {
      id: contact.id,
      name,
      phone,
    };
    await editContact(editedContact);
    setOpen(false);
  };

  const onFormError = error => {
    toast.error(error);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Edit contact
      </Typography>
      <FormStyled onSubmit={handleSubmit(onFormSubmit, onFormError)}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              size="small"
              error={errors.name && true}
              helperText={errors.name?.message}
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              size="small"
              error={errors.phone && true}
              helperText={errors.phone?.message}
            />
          )}
        />
        <Box flexDirection="row" gridGap="10px" justifyContent="end">
          <ButtonStyled variant="contained" onClick={() => setOpen(false)}>
            Cancel
          </ButtonStyled>
          <ButtonStyled
            type="submit"
            variant="outlined"
            startIcon={<SaveIcon />}
          >
            Save
          </ButtonStyled>
        </Box>
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
