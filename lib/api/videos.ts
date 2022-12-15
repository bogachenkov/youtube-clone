import { IVideo, IVideoPreview } from "../../types/Video";
import redis from "../redis";
import YoutubeAPI from "./youtube";

export type YoutubeApiResponse = {
  items: IVideo[]
}

const api = new YoutubeAPI();
class VideosAPI {
  static async fetchDefaultVideos() {
    try {
      const cache = await redis.get<IVideoPreview[]>('homepage_cache');

      if (cache?.length) {
        console.log('Fetching data from cache');
        return cache;
      }
      
      console.log('Fetching data from API');
      const items = await api.search({
        q: 'christmas lofi'
      });

      console.log(items)
      await redis.set('homepage_cache', JSON.stringify(items), {
        ex: 60 * 60 * 24
      });
      return items;
    } catch (e) {
      const error = e as Error;
      console.error('Redis error:', error);
      return [];
    }
  }
}

export default VideosAPI;