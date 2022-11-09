import React from 'react';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from './AppBar';
import { Outlet } from 'react-router-dom';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function Layout() {
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
          <AppBar />
          <Outlet />
        </Container>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
