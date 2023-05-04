import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import type { Video } from '../types/Videos';

const Videos = (): JSX.Element => {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    isError,
    data: videos
  } = useQuery<Video[]>(['videos', keyword], async () => {
    return await youtube.search(keyword);
  });
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
