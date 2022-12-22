import { IThumbnail } from "./Video";

export interface IChannel {
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: IThumbnail,
      medium: IThumbnail,
      high: IThumbnail
    }
  }
}