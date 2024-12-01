import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { AppShell, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const theme = createTheme({
  fontFamily: 'Inter, sans-serif',
  components: {
    AppShell: AppShell.extend({
      styles: {
        header: {
          backgroundColor: 'black',
          borderBottom: 'none'
        },
        main: {
          backgroundColor: 'black'
        },
        navbar: {
          backgroundColor: 'black',
          borderRight: 'none'
        }
      }
    })
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
        <App />
    </MantineProvider>
  </StrictMode>,
)
