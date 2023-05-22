import axios, { type AxiosRequestConfig } from 'axios';
import { type ChannelParam, type Channel } from '../types/Channels';
import { type VideosParam, type SearchParam, type Video, type SearchVideo } from '../types/Videos';

export default class YoutubeClient {
  private readonly httpClient;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    });
  }

  async search(params: AxiosRequestConfig<SearchParam>): Promise<Video[]> {
    return await this.httpClient
      .get('search', params)
      .then((res) => res.data.items)
      .then((items) => items.map((item: SearchVideo) => ({ ...item, id: item.id.videoId })));
  }

  async videos(params: AxiosRequestConfig<VideosParam>): Promise<Video[]> {
    return await this.httpClient.get('videos', params).then((res) => res.data.items);
  }

  async channels(params: AxiosRequestConfig<ChannelParam>): Promise<Channel[]> {
    return await this.httpClient.get('channels', params).then((res) => res.data.items);
  }

  async channelImageURL(params: AxiosRequestConfig<SearchParam>): Promise<string> {
    return await this.httpClient.get('videos').then((res) => res.data.item[0].snippet.thumbnails.default.url);
  }
}
