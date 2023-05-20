import axios from 'axios';
import { type SearchVideo, type Video } from '../types/Videos';

export default class FakeYoutubeClient {
  async search(): Promise<Video[]> {
    return await axios
      .get('/videos/search.json')
      .then((res) => res.data.items)
      .then((items) => items.map((item: SearchVideo) => ({ ...item, id: item.id.videoId })));
  }

  async videos(): Promise<Video[]> {
    return await axios.get('/videos/popular.json').then((res) => res.data.items);
  }
}
