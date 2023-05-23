import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { type Video } from '../types/Videos';
import VideoCard from './VideoCard';

interface Props {
  id: string;
}

const RelatedVideos = ({ id }: Props): JSX.Element => {
  const { youtube } = useYoutubeApi();
  const { isError, isLoading, data: videos } = useQuery(['related', id], async () => await youtube.relatedVideos(id));

  if (isError) {
    return <div>Something is Wrong!</div>;
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {videos !== undefined && (
        <ul>
          {videos.map((video: Video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  );
};

export default RelatedVideos;
