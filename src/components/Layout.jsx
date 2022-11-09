import React, { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { ColorModeContext } from 'components/ToggleColorMode';
import { Container } from '@mui/system';
import PhoneBook from './PhoneBook';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout() {
  // const theme = useTheme();
  // const colorMode = useContext(ColorModeContext);

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <IconButton
            sx={{ ml: 1, color: 'text.primary' }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === 'dark' ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
          <PhoneBook />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
