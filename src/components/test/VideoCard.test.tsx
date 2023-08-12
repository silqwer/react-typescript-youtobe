import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import koLocale from 'timeago.js/lib/lang/ko';
import { type Video } from '../../types/Videos';
import { formatAgo } from '../../utils/date';
import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  const video: Video = {
    id: '1',
    kind: 'kind',
    etag: 'etag',
    snippet: {
      title: 'title',
      channelId: '1',
      channelTitle: 'cannelTitle',
      publishedAt: new Date().toDateString(),
      thumbnails: {
        default: {
          url: 'http://image/',
          width: 100,
          height: 100
        },
        medium: {
          url: 'http://image/',
          width: 100,
          height: 100
        },
        high: {
          url: 'http://image/',
          width: 100,
          height: 100
        }
      },
      liveBroadcastContent: 'liveBroadcastContent',
      description: 'description',
      publishTime: 'publishTime'
    }
  };

  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  it('renders video item', () => {
    render(
      <MemoryRouter>
        <VideoCard video={video} />
      </MemoryRouter>
    );

    const image = screen.getByRole('img');
    const imgEl = image as HTMLImageElement;
    expect(imgEl.src).toBe(thumbnails.medium.url);
    expect(imgEl.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, 'ko'))).toBeInTheDocument();
  });
});
