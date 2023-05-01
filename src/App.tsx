import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
};

export default App;
