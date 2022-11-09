import Box from 'components/Box';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/phones">Phone book</NavLink>
    </Box>
  );
}
