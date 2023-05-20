import axios, { type AxiosRequestConfig } from 'axios';
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
}
