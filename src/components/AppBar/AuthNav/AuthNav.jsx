import Box from 'components/Box';
import { Link } from 'react-router-dom';

export default function AuthNav() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <Link to="register">Register</Link>
      <Link to="login">Login</Link>
    </Box>
  );
}
