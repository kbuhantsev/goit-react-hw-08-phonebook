import { Button } from '@mui/material';
import Box from 'components/Box';
import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <Button component={Link} to="register">
        Register
      </Button>
      <Button component={Link} to="login">
        Login
      </Button>
    </Box>
  );
}
