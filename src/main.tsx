import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { AppShell, createTheme, MantineProvider, Modal } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { colors } from './helpers/const.ts';

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
    }),
    Modal: Modal.extend({
      styles: {
        content: {
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 8,
          border: `1px solid ${colors.grayInputDark}`
        },
        header: {
          backgroundColor: 'black',
          color: 'white',
        }
      },
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
