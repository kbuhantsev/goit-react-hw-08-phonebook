import Box from 'components/Box';
import { useTheme } from '@mui/material/styles';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useUser } from 'hooks';

export default function Home() {
  const theme = useTheme();
  const { isVerified } = useUser();

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
      {isVerified === false ? <>Нужна верификация</> : <></>}
    </Box>
  );
}
