export interface IVideoThumbnail {
  height: number;
  width: number;
  url: string;
}

export interface IVideo {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    title: string;
    description: string;
    liveBroadcastContent: boolean;
    localized: {
      description: string;
      title: string;
    };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: IVideoThumbnail,
      standart: IVideoThumbnail,
      medium: IVideoThumbnail,
      high: IVideoThumbnail,
      maxres?: IVideoThumbnail
    }
  };
  contentDetails: {
    caption: boolean;
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  };
  statistics: {
    viewCount: number,
    likeCount: number,
    favoriteCount: number,
    commentCount: number;
  }
}