import { IVideo, IVideoPreview } from "@ts-types/Video";
import redis from "@lib/redis";
import YoutubeAPI from "@api/youtube";

export type YoutubeApiResponse = {
  items: IVideo[]
}

export interface FetchVideosArgs {
  cacheConfig?: {
    name: string;
    expire?: number;
  };
  query: string;
  maxResults?: number;
}

const api = new YoutubeAPI();
class VideosAPI {

  static async fetch(args: FetchVideosArgs) {
    const {
      cacheConfig,
      query,
      maxResults
    } = args;
    try {
      console.log('WHAT');
      if (cacheConfig && (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')) {
        const cache = await redis.get<IVideoPreview[]>(JSON.stringify(args));

        if (cache?.length) {
          console.log('Fetching data from cache...');
          return cache;
        }
      }

      console.log('Fetching data from API...');
      const items = await api.search({
        q: query,
        maxResults
      });

      if (cacheConfig) {
        await redis.set(JSON.stringify(args), JSON.stringify(items), {
          ex: cacheConfig.expire ?? 60 * 60 * 24
        });
      }
      return items;
    } catch (e) {
      const error = e as Error;
      console.error('Redis error:', error);
      return [];
    }
  }
}

export default VideosAPI;