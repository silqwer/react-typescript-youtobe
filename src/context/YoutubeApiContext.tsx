import { createContext, useContext } from 'react';
import type Youtube from '../api/youtube';

export interface YoutubeApiContextType {
  youtube: Youtube;
}

export const YoutubeApiContext = createContext<YoutubeApiContextType | undefined>(undefined);

export function useYoutubeApi(): YoutubeApiContextType {
  const context = useContext(YoutubeApiContext);
  if (context == null) {
    throw new Error('useYoutubeApi must be within YoutubeApiProvider');
  }
  return context;
}
