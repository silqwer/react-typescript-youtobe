import React, { createContext, useContext } from 'react';
import FakeYoutubeClient from '../api/fakeYoutubeClient';
import Youtube from '../api/youtube';
// import YoutubeClient from '../api/youtubeClient';

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export const YoutubeApiContext = createContext<{ youtube: Youtube }>({ youtube });

export const YoutubeApiProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};

export const useYoutubeApi = (): {
  youtube: Youtube;
} => useContext(YoutubeApiContext);
