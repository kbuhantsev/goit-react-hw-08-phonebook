import Box from 'components/Box';
import AuthNav from './AuthNav';
import ColorMode from './ColorMode';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

export default function AppBar() {
  return (
    <Box as="header" flexDirection="row" justifyContent="space-between">
      <Navigation />
      <ColorMode />
      <AuthNav />
      <UserMenu />
    </Box>
  );
}
