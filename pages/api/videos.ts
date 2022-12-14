// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios, {isCancel, AxiosError} from 'axios';
import qs from 'qs';
import redis from '../../lib/redis';
import { IVideo } from '../../types/Video';

type Data = {
  videos: any[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cache = await redis.get<IVideo[]>('all_videos_cache');

  if (cache) {
    console.log('Loading data from cache');
    //const cache = JSON.parse(stringCache);
    res.status(200).json({ videos: cache });
  } else {
    console.log('Loading data from api');
    try {
      const searchedVideos = await axios.get('https://www.googleapis.com/youtube/v3/search', {
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

      const ids = searchedVideos.data.items.map((i: any) => i.id.videoId);

      const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
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
      await redis.set('all_videos_cache', JSON.stringify(response.data.items), {
        ex: 60 * 60 * 24
      });
      res.status(200).json({ videos: response.data.items });
    } catch (error) {
      // @ts-ignore
      console.error(error);
    }
  }

}
