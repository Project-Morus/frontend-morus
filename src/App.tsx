import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

import Router from './routes/Router';

const queryClient = new QueryClient()

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
