import Box from 'components/Box';
import { useTheme } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useUser } from 'hooks';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const theme = useTheme();
  const { isVerifying } = useUser();

  let location = useLocation();
  let user = null;
  if (location.state !== null && typeof location.state === 'object') {
    user = location.state.user;
  }

  return (
    <Box>
      <MenuBookIcon
        sx={{ margin: '0 auto', marginTop: '20px', fontSize: '52px' }}
      />
      <Box
        as="h1"
        pt="20px"
        pb="10px"
        margin="0 auto"
        color={theme.palette.text.primary}
      >
        Phonebook home page
      </Box>
      {isVerifying && user ? (
        <div>
          Dear {user.name}, we sent you email to confirm your account.
          <br />
          Check your email.
        </div>
      ) : (
        <></>
      )}
    </Box>
  );
}
