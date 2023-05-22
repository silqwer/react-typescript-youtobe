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

interface Localized {
  title: string;
  description: string;
}

interface Snippet {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  localized: Localized;
  country: string;
}

export interface Channel {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface ChannelParam {
  part: string;
  id: string;
}
