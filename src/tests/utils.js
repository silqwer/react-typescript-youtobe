import { MemoryRouter, Routes } from 'react-router-dom';

export const withRouter = (routers, initialEntry = '/') => {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routers}</Routes>
    </MemoryRouter>
  );
};
