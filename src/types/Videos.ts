interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

interface SearchVideoId {
  kind: string;
  videoId: string;
}

export interface Video {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface SearchVideo {
  kind: string;
  etag: string;
  id: SearchVideoId;
  snippet: Snippet;
}

export interface SearchParam {
  part: string;
  maxResults: number;
  type: string;
  q: string;
  relatedToVideoId?: string;
}

export interface VideosParam {
  part: string;
  maxResults: number;
  chart: string;
}
