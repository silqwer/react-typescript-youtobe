import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import type { Video } from '../types/Videos';

const Videos = (): JSX.Element => {
  const { keyword } = useParams();
  const {
    isLoading,
    isError,
    data: videos
  } = useQuery<Video[]>(['videos', keyword], async () => {
    const fileName = keyword === undefined ? 'popular' : ' search';
    return await fetch(`/videos/${fileName}.json`)
      .then(async (res) => await res.json())
      .then((data) => data.items);
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
