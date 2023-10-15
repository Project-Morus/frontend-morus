import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';

import Router from './routes/Router';
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  },
})

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toaster position="top-right" />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
