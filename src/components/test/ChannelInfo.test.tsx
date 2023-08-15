import { render, screen, waitFor } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { withAllContexts, withRouter } from '../../tests/utils';
import ChannelInfo from '../ChannelInfo';

describe('ChannelInfo', () => {
  const fakeYoutube = {
    chanelImageURL: jest.fn()
  };

  afterEach(() => fakeYoutube.chanelImageURL.mockReset());

  it('renders correctly', async () => {
    fakeYoutube.chanelImageURL.mockImplementation(() => 'url');

    render(
      withAllContexts(withRouter(<Route path='/' element={<ChannelInfo id='id' name='channel' />} />), fakeYoutube)
    );

    await waitFor(() => screen.getByText('channel'));
  });
});
