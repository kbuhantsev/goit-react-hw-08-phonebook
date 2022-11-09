import Box from 'components/Box';
import { NavLink } from 'react-router-dom';
// import { NavLinkStyled } from './Navigation.styled';
import { Button } from '@mui/material';

export default function Navigation() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      <Button to="/" component={NavLink} variant="contained" end>
        Home
      </Button>
      <Button to="/phones" component={NavLink}>
        Phone book
      </Button>
    </Box>
  );
}
