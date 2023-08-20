import React from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';
import { YoutubeApiContext } from './YoutubeApiContext';

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

interface YoutubeApiProviderProps {
  children: React.ReactNode;
}

export const YoutubeApiProvider = ({ children }: YoutubeApiProviderProps): JSX.Element => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};
