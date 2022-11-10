import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import Box from 'components/Box';
import { useUser } from 'hooks';

export default function UserMenu() {
  const {
    user: { name, email },
  } = useUser();

  return (
    <Box flexDirection="row" gridGap="20px" justifyContent="center">
      <Box as="ul" flexDirection="row" gridGap="10px">
        <Box as="ul" flexDirection="row" gridGap="5px">
          <AccountCircleIcon color="primary" />
          {name}
        </Box>
        <Box as="ul" flexDirection="row" gridGap="5px">
          <EmailIcon color="primary" />
          {email}
        </Box>
      </Box>

      <Button variant="contained">Logout</Button>
    </Box>
  );
}
