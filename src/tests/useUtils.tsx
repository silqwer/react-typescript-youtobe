import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { type ReactElement } from 'react';
import { MemoryRouter, Routes } from 'react-router-dom';
import { YoutubeApiContext } from '../context/YoutubeApiContext';

interface InitialEntry {
  pathname: string;
  state: Record<string, any>;
  key: string;
}

export const withRouter = (routers: ReactElement, initialEntry: InitialEntry | string = '/'): React.ReactElement => {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routers}</Routes>
    </MemoryRouter>
  );
};

const createTestQueryClient = (): QueryClient => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    },
    logger: {
      log: console.log,
      warn: console.warn,
      error: () => {
        return null;
      }
    }
  });
};

export const withAllContexts = (children: ReactElement, youtube: any): JSX.Element => {
  const testClient = createTestQueryClient();
  return (
    <YoutubeApiContext.Provider value={youtube}>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </YoutubeApiContext.Provider>
  );
};
