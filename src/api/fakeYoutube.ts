import axios from 'axios';
import { type SearchVideo, type Video } from '../types/Videos';

export default class FakeYoutube {
  private async mostPopular(): Promise<Video[]> {
    return await axios('/videos/popular.json').then((res) => res.data.items);
  }

  private async searchByKeyword(keyword: string): Promise<Video[]> {
    console.log('Keyword:', keyword);
    return await axios('/videos/search.json')
      .then((res) => res.data.items)
      .then((items) => items.map((item: SearchVideo) => ({ ...item, id: item.id.videoId })));
  }

  async search(keyword: string | undefined): Promise<Video[]> {
    return keyword === undefined ? await this.mostPopular() : await this.searchByKeyword(keyword);
  }
}
