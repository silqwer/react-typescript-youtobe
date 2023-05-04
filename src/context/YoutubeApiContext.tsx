import React, { createContext, useContext } from 'react';
import Youtube from '../api/youtube';

const youtube = new Youtube();

export const YoutubeApiContext = createContext<{ youtube: Youtube }>({ youtube });

export const YoutubeApiProvider = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};

export const useYoutubeApi = (): {
  youtube: Youtube;
} => useContext(YoutubeApiContext);
