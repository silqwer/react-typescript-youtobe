import axios, { type AxiosRequestConfig } from 'axios';
import { type Channel } from '../types/Channels';
import { type SearchParam, type SearchVideo, type Video } from '../types/Videos';

export default class FakeYoutubeClient {
  async search(params: SearchParam | AxiosRequestConfig<SearchParam>): Promise<Video[]> {
    const { relatedToVideoId } = params as SearchParam;
    const fileName = relatedToVideoId !== undefined ? 'related' : 'search';
    return await axios
      .get(`/videos/${fileName}.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item: SearchVideo) => ({ ...item, id: item.id.videoId })));
  }

  async videos(): Promise<Video[]> {
    return await axios.get('/videos/popular.json').then((res) => res.data.items);
  }

  async channels(): Promise<Channel[]> {
    return await axios.get('/videos/channel.json').then((res) => res.data.items);
  }
}
