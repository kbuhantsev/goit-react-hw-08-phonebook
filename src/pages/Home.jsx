import { Button } from '@mui/material';
import Box from 'components/Box';
import { useDispatch } from 'react-redux';
import { setLoggedIn } from 'redux/user/userSlice';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <Box as="h1" marginTop="50px">
        Phone book home page
      </Box>
      {/* Отладка */}
      <Button
        type="button"
        onClick={() => {
          dispatch(setLoggedIn(true));
        }}
      >
        logIn
      </Button>
      <Button
        type="button"
        onClick={() => {
          dispatch(setLoggedIn(false));
        }}
      >
        logOut
      </Button>
    </>
  );
}
