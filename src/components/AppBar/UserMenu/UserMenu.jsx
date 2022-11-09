import { Button } from '@mui/material';
import Box from 'components/Box';

export default function UserMenu() {
  return (
    <>
      <Box flexDirection="row" gridGap="20px">
        <p>mango@mail.com</p>
        <Button variant="contained">Logout</Button>
      </Box>
    </>
  );
}
