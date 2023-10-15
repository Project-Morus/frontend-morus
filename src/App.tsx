<<<<<<< HEAD
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

import Router from "./routes/Router";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
=======
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/themes/global';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';

>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
<<<<<<< HEAD
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router />
          <Toaster position="top-right" />
        </QueryClientProvider>
      </AuthProvider>
=======
      <BrowserRouter>
        <Router />
      </BrowserRouter>
>>>>>>> b83e02e (Revert "Merge branch 'main' of https://github.com/Project-Morus/frontend-morus")
    </ThemeProvider>
  );
}

export default App;
