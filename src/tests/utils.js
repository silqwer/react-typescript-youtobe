import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter, Routes } from 'react-router-dom';
import { YoutubeApiContext } from '../context/YoutubeApiContext';

export const withRouter = (routers, initialEntry = '/') => {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routers}</Routes>
    </MemoryRouter>
  );
};

const createTestQueryClient = () => {
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

export const withAllContexts = (children, youtube) => {
  const testClient = createTestQueryClient();
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </YoutubeApiContext.Provider>
  );
};
