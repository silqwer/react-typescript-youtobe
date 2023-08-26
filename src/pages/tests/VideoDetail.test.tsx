import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import ChannelInfo from '../../components/ChannelInfo';
import RelatedVideos from '../../components/RelatedVideos';
import { withRouter } from '../../tests/useUtils';
import { fakeVideo } from '../../tests/videos';
import VideoDetail from '../VideoDetail';

jest.mock('../../components/ChannelInfo');
jest.mock('../../components/RelatedVideos');

const FakeChannelInfo = ChannelInfo as jest.MockedFunction<typeof ChannelInfo>;
const FakeRelatedVideos = RelatedVideos as jest.MockedFunction<typeof RelatedVideos>;

describe('VideoDetail', () => {
  afterEach(() => {
    FakeChannelInfo.mockReset();
    FakeRelatedVideos.mockReset();
  });

  it('renders video item details', () => {
    render(
      withRouter(<Route path='/' element={<VideoDetail />} />, {
        pathname: '/',
        state: { video: fakeVideo },
        key: 'fake-key'
      })
    );

    const { title, channelId, channelTitle } = fakeVideo.snippet;
    expect(screen.getByTitle(title)).toBeInTheDocument();
    expect(FakeRelatedVideos.mock.calls[0][0]).toStrictEqual({ id: fakeVideo.id });
    expect(FakeChannelInfo.mock.calls[0][0]).toStrictEqual({
      id: channelId,
      name: channelTitle
    });
  });
});
