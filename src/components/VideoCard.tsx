import React from 'react';
import { useNavigate } from 'react-router-dom';
import { type Video } from '../types/Videos';
import { formatAgo } from '../utils/date';

interface Props {
  video: Video;
  type?: string;
}

const VideoCard = ({ video, type }: Props): JSX.Element => {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === 'list';

  return (
    <li
      className={isList ? 'flex gap-1 m-2' : ''}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img className={isList ? 'w-60 mr-2' : 'w-full'} src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
};

export default VideoCard;
