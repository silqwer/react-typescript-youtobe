import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import FakeYoutube from '../api/fakeYoutube';
import type { Video } from '../types/Videos';

const Videos = (): JSX.Element => {
  const { keyword } = useParams();
  const {
    isLoading,
    isError,
    data: videos
  } = useQuery<Video[]>(['videos', keyword], async () => {
    const youtube = new FakeYoutube();
    return await youtube.search(keyword);
  });
  console.log('videos:', videos);
  return (
    <>
      <div>Videos:{keyword !== undefined ? `🔎${keyword}` : '🔥'}</div>
      {isLoading && <p>Loading</p>}
      {isError && <p>Something is wrong</p>}
      {videos !== undefined && (
        <ul>
          {videos.map((video: Video) => (
            <div key={video.id}>{video.snippet.title}</div>
          ))}
        </ul>
      )}
    </>
  );
};

export default Videos;
