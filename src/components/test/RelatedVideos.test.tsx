import { render, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from '../../tests/useUtils';
import { fakeVideos } from '../../tests/videos';
import RelatedVideos from '../RelatedVideos';

describe('RelatedVideos', () => {
  const fakeYoutube = {
    relatedVideos: jest.fn()
  };

  const renderRelatedVideos = (): any => {
    return render(withAllContexts(withRouter(<Route path='/' element={<RelatedVideos id='id' />} />), fakeYoutube));
  };

  afterEach(() => fakeYoutube.relatedVideos.mockReset());

  it('renders correctly', async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => fakeYoutube);
    const { asFragment } = renderRelatedVideos();

    await waitForElementToBeRemoved(screen.queryByText('Loading ...'));
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders related videos correctly', async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
    renderRelatedVideos();

    expect(fakeYoutube.relatedVideos).toHaveBeenCalledWith('id');
    await waitFor(() => {
      expect(screen.getAllByRole('listitem')).toHaveLength(fakeVideos.length);
    });
  });

  it('renders loading', () => {
    fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
    renderRelatedVideos();

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error', async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => {
      throw new Error('error');
    });

    renderRelatedVideos();
    await waitFor(() => {
      expect(screen.getByText('Something is wrong 😖')).toBeInTheDocument();
    });
  });
});
