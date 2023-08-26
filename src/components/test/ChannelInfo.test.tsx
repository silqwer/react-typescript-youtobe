import { render, screen, waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from '../../tests/useUtils';
import ChannelInfo from '../ChannelInfo';

describe('ChannelInfo', () => {
  const fakeYoutube = {
    channelImageURL: jest.fn()
  };
  const renderChannelInfo = (): any => {
    return render(
      withAllContexts(withRouter(<Route path='/' element={<ChannelInfo id='id' name='channel' />} />), fakeYoutube)
    );
  };

  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it('renders correctly', async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => 'url');
    const { asFragment } = renderChannelInfo();

    await waitFor(() => screen.getByText('img'));
    expect(asFragment().toMatchSnapshot());
  });

  it('renders without URL', () => {
    fakeYoutube.channelImageURL.mockImplementation(() => {
      throw new Error('error');
    });
    renderChannelInfo();
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('renders with URL', async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => 'url');

    renderChannelInfo();

    await waitFor(() => {
      expect(screen.getByRole('img')).toBeInTheDocument();
    });
  });
});
