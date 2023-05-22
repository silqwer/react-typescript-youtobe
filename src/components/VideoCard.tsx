import React from 'react';
import { useNavigate } from 'react-router-dom';
import { type Video } from '../types/Videos';
import { formatAgo } from '../utils/date';

interface Props {
  video: Video;
}

const VideoCard = ({ video }: Props): JSX.Element => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();

  return (
    <li
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
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
