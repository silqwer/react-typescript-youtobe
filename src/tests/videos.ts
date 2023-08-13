import { type Video } from '../types/Videos';

export const fakeVideo: Video = {
  id: '1',
  kind: 'kind',
  etag: 'etag',
  snippet: {
    title: 'title',
    channelId: '1',
    channelTitle: 'cannelTitle',
    publishedAt: new Date().toDateString(),
    thumbnails: {
      default: {
        url: 'http://image/',
        width: 100,
        height: 100
      },
      medium: {
        url: 'http://image/',
        width: 100,
        height: 100
      },
      high: {
        url: 'http://image/',
        width: 100,
        height: 100
      }
    },
    liveBroadcastContent: 'liveBroadcastContent',
    description: 'description',
    publishTime: 'publishTime'
  }
};

export const fakeVideos: Video[] = [
  {
    id: '1',
    kind: 'kind',
    etag: 'etag',
    snippet: {
      title: 'title',
      channelId: '1',
      channelTitle: 'cannelTitle',
      publishedAt: new Date().toDateString(),
      thumbnails: {
        default: {
          url: 'http://image/',
          width: 100,
          height: 100
        },
        medium: {
          url: 'http://image/',
          width: 100,
          height: 100
        },
        high: {
          url: 'http://image/',
          width: 100,
          height: 100
        }
      },
      liveBroadcastContent: 'liveBroadcastContent',
      description: 'description',
      publishTime: 'publishTime'
    }
  },
  {
    id: '2',
    kind: 'kind',
    etag: 'etag',
    snippet: {
      title: 'title',
      channelId: '2',
      channelTitle: 'cannelTitle',
      publishedAt: new Date().toDateString(),
      thumbnails: {
        default: {
          url: 'http://image/',
          width: 100,
          height: 100
        },
        medium: {
          url: 'http://image/',
          width: 100,
          height: 100
        },
        high: {
          url: 'http://image/',
          width: 100,
          height: 100
        }
      },
      liveBroadcastContent: 'liveBroadcastContent',
      description: 'description',
      publishTime: 'publishTime'
    }
  }
];
