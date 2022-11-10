import Box from 'components/Box';
import { NavLink } from 'react-router-dom';
import NavButtonCustom from 'components/AppBar/NavButtonCustom';

export default function Navigation() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <NavButtonCustom to="/" component={NavLink} end>
        Home
      </NavButtonCustom>
      <NavButtonCustom to="/phones" component={NavLink}>
        Phone book
      </NavButtonCustom>
    </Box>
  );
}
