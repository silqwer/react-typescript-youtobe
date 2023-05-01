import axios, { type AxiosInstance } from 'axios';
import { type SearchVideo, type Video } from '../types/Videos';

export default class Youtube {
  httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY
      }
    });
  }

  private async mostPopular(): Promise<Video[]> {
    return await this.httpClient
      .get('videos', {
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular'
        }
      })
      .then((res) => res.data.items);
  }

  private async searchByKeyword(keyword: string): Promise<Video[]> {
    return await this.httpClient
      .get('search', {
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword
        }
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item: SearchVideo) => ({ ...item, id: item.id.videoId })));
  }

  async search(keyword: string | undefined): Promise<Video[]> {
    return keyword === undefined ? await this.mostPopular() : await this.searchByKeyword(keyword);
  }
}
