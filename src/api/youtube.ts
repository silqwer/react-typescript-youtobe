import axios from 'axios';
import { type Video } from '../types/Videos';

export const search = async (keyword: string | undefined): Promise<Video[]> => {
  const fileName = keyword === undefined ? 'popular' : ' search';
  const result = await axios(`/videos/${fileName}.json`).then((res) => res.data.items);
  return result;
};
