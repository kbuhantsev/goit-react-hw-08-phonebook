import Box from 'components/Box';
import { NavLink } from 'react-router-dom';
// import { NavLinkStyled } from './Navigation.styled';
import { Button } from '@mui/material';

export default function Navigation() {
  return (
    <Box as="nav" flexDirection="row" gridGap="20px">
      {/* Работает: */}
      {/* <Button to="/" component={NavLink} variant="contained" end> */}
      {/* Хочется: */}
      <Button
        to="/"
        component={NavLink}
        variant={({ isActive }) => (isActive ? 'contained' : 'text')}
        end
      >
        {/* Даже так не работает: */}
        {/* <Button to="/" component={NavLink} variant={() => 'contained'} end> */}
        Home
      </Button>
      <Button to="/phones" component={NavLink}>
        Phone book
      </Button>
    </Box>
  );
}
