import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader';

const App = (): JSX.Element => {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
};

export default App;
