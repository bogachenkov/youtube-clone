import axios from "axios";
import { NextApiResponse } from "next";
import qs from 'qs';
import { IVideo } from "../../types/Video";
import redis from "../redis";
import { handleAxiosError } from "../utils/handleAxiosError";

export type YoutubeApiResponse = {
  items: IVideo[]
}


class VideosAPI {

  static async searchVideos() {
    try {
      return await axios.get<YoutubeApiResponse>('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: ['snippet'],
          maxResults: '30',
          key: process.env.YOUTUBE_KEY,
          q: 'lofi'
        },
        paramsSerializer: {
          serialize(params) {
            return qs.stringify(params, { indices: false, arrayFormat: 'repeat' })
          } 
        }
      });
    } catch (error) {
      handleAxiosError(error);
      return {
        data: {
          items: []
        }
      }
    }
  }

  static async fetchVideosByIds(ids: string[]) {
    try {
      return await axios.get<YoutubeApiResponse>('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: ['snippet', 'statistics', 'contentDetails'],
          id: ids,
          key: process.env.YOUTUBE_KEY,
        },
        paramsSerializer: {
          serialize(params) {
            return qs.stringify(params, { indices: false, arrayFormat: 'repeat' })
          } 
        }
      });
    } catch (error) {
      handleAxiosError(error);
      return {
        data: {
          items: []
        }
      }
    }
  }
  
  static async fetchDefaultVideos(res: NextApiResponse<YoutubeApiResponse>) {
    try {
      const cache = await redis.get<IVideo[]>('all_videos_cache');

      if (cache) {
        console.log('Fetching data from CACHE');
        res.status(200).json({ items: cache });
        return;
      }
      
      console.log('Fetching data from API');
      const searchedVideos = await this.searchVideos();
      const ids = searchedVideos.data.items.map((i: any) => i.id.videoId);
      const result = await this.fetchVideosByIds(ids);

      await redis.set('all_videos_cache', JSON.stringify(result.data.items), {
        ex: 60 * 60 * 24
      });
      res.status(200).json({ items: result.data.items });
    } catch (e) {
      const error = e as Error;
      console.error(error.message);
    }
  }
}

export default VideosAPI;