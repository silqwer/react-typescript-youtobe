import { type Video } from '../types/Videos';
import type FakeYoutubeClient from './fakeYoutubeClient';
import type YoutubeClient from './youtubeClient';

export default class Youtube {
  httpClient: FakeYoutubeClient | YoutubeClient;

  constructor(apiClient: FakeYoutubeClient | YoutubeClient) {
    this.httpClient = apiClient;
  }

  private async mostPopular(): Promise<Video[]> {
    return await this.httpClient.videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular'
      }
    });
  }

  private async searchByKeyword(keyword: string): Promise<Video[]> {
    return await this.httpClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword
      }
    });
  }

  async search(keyword: string | undefined): Promise<Video[]> {
    return keyword === undefined ? await this.mostPopular() : await this.searchByKeyword(keyword);
  }
}
