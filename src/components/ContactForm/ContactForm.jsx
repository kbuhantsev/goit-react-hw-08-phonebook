import React from 'react';
import * as Yup from 'yup';
import { ButtonStyled, FormStyled } from './ContactForm.styled';
import AddIcon from '@mui/icons-material/Add';
import { TextField } from '@mui/material';
//
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/services/contactsApi';

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

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
      phone: '',
    },
    resolver: yupResolver(schema),
  });

  const { data: contacts = [] } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const onFormSubmit = async data => {
    const { name, phone } = data;
    const contact = {
      name,
      phone,
    };
    if (contacts.find(contact => contact.name === name)) {
      toast.warning(`${name} is already in contacts`, {});
      return;
    }
    await addContact(contact);
  };

  const onFormError = error => {
    toast.error(error);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      toast.success('Contact created');
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
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

        <ButtonStyled
          type="submit"
          variant="outlined"
          startIcon={<AddIcon />}
          disabled={isLoading}
        >
          Add contact
        </ButtonStyled>
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
