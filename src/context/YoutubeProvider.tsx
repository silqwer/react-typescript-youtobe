import React from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';
import { YoutubeApiContext } from './YoutubeApiContext';

const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export const YoutubeApiProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};
