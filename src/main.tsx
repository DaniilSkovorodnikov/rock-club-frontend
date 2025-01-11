import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AppShell, Checkbox, createTheme, MantineProvider, Modal, Popover } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { colors } from './helpers/const.ts';
import { DateInput, DatesProvider, TimeInput } from '@mantine/dates';
import './index.scss';
import 'dayjs/locale/ru';

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
    }),
    Checkbox: Checkbox.extend({
      styles: {
        input: {
          backgroundColor: '#1F1F1F',
          borderRadius: 0,
          border: 'none'
        }
      }
    }),
    DateInput: DateInput.extend({
      styles: {
        input: {
          backgroundColor: '#1F1F1F',
          borderRadius: 0,
          border: 'none',
          color: '#797979'
        },
        calendarHeader: {
          color: '#797979'
        },
        day: {
          color: '#797979'
        }
      }
    }),
    Popover: Popover.extend({
      styles: {
        dropdown: {
          backgroundColor: '#1F1F1F',
          borderRadius: 0,
          border: 'none'
        }
      }
    }),
    TimeInput: TimeInput.extend({
      styles: {
        input: {
          backgroundColor: '#1F1F1F',
          borderRadius: 0,
          border: 'none',
          color: '#797979'
        }
      }
    })
  },
});

createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <DatesProvider settings={{ locale: 'ru' }}>
      <Provider store={store}>
        <App />
      </Provider>
    </DatesProvider>
  </MantineProvider>,
)
