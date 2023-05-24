import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

interface Props {
  id: string;
  name: string;
}

const ChannelInfo = ({ id, name }: Props): JSX.Element => {
  const { youtube } = useYoutubeApi();
  const {
    isError,
    isLoading,
    data: url
  } = useQuery(['channel', id], async () => await youtube.channelImageURL(id), { staleTime: 1000 * 60 * 5 });

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  return (
    <div>
      {url !== undefined && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
};

export default ChannelInfo;
