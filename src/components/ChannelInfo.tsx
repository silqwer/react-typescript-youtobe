import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';

interface Props {
  id: string;
  name: string;
}

const ChannelInfo = ({ id, name }: Props): JSX.Element => {
  const { youtube } = useYoutubeApi();
  const { isError, isLoading, data: url } = useQuery(['channel', id], async () => await youtube.channelImageURL(id));

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading ... </div>;
  }

  return (
    <div className='flex items-center my-4 mb-8'>
      {url !== undefined && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='ml-2 text-lg font-medium'>{name}</p>
    </div>
  );
};

export default ChannelInfo;
