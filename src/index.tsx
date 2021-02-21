import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import Home from './pages/home';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './utils/globalStyles';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { server } from './services/server';
import defaultQueryFn from './services/queries/defaultQuery';
import i18n from './i18n';
import { ReactQueryDevtools } from 'react-query/devtools';

if (process.env.NODE_ENV === 'development') {
  server();
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter basename="/characters">
            <Route path="/" component={Home} />
          </BrowserRouter>
          <GlobalStyle />
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
