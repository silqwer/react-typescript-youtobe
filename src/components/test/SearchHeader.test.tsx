import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SearchHeader from '../SearchHeader';

describe('SearchHeader', () => {
  it('renders SearchHeader', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Routes>
          <Route path='/' element={<SearchHeader />} />
        </Routes>
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders with keyword correctly', async () => {
    render(
      <MemoryRouter initialEntries={['/bts']}>
        <Routes>
          <Route path='/:keyword' element={<SearchHeader />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByDisplayValue('bts')).toBeInTheDocument();
  });

  it('navigates to results page on search button click', () => {
    const searchKeyword = 'fake-keyword';
    render(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path='/home' element={<SearchHeader />} />
          <Route path={`/videos/${searchKeyword}`} element={<p>{`Search result for ${searchKeyword}`}</p>} />
        </Routes>
      </MemoryRouter>
    );

    const searchButton = screen.getByRole('button');
    const searchInput = screen.getByRole('textbox');

    userEvent.type(searchInput, searchKeyword);
    userEvent.click(searchButton);

    expect(screen.getByText(`Search result for ${searchKeyword}`)).toBeInTheDocument();
  });
});
