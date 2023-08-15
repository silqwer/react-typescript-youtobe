import { createContext, useContext } from 'react';
import type Youtube from '../api/youtube';

export const YoutubeApiContext = createContext<{ youtube: Youtube } | undefined>(undefined);

export const useYoutubeApi = (): { youtube: Youtube } => {
  const context = useContext(YoutubeApiContext);
  if (context === undefined) {
    throw new Error('useYoutubeContext must be within Youtube Provider');
  }
  return context;
};
