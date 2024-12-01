import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AppShell, createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

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
  },
});

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>,
)
