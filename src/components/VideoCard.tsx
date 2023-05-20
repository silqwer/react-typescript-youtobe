import React from 'react';
import { type Video } from '../types/Videos';
import { formatAgo } from '../utils/date';

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props): JSX.Element => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;

  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
